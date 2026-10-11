"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import type { InspirationItem } from "@/content/inspiration";

const fallbackPalette = ["#322D28", "#5E5850", "#8E8174", "#C8BBAA", "#EEE9E0"];

type RGB = [number, number, number];

export interface MoodboardTheme {
  palette: string[];
  ready: boolean;
  style: CSSProperties;
}

function loadImage(source: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

function distance(first: RGB, second: RGB) {
  return Math.sqrt(
    (first[0] - second[0]) ** 2 +
      (first[1] - second[1]) ** 2 +
      (first[2] - second[2]) ** 2,
  );
}

function toHex([red, green, blue]: RGB) {
  return `#${[red, green, blue]
    .map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0"))
    .join("")}`.toUpperCase();
}

function fromHex(hex: string): RGB {
  const value = hex.replace("#", "");
  return [
    Number.parseInt(value.slice(0, 2), 16),
    Number.parseInt(value.slice(2, 4), 16),
    Number.parseInt(value.slice(4, 6), 16),
  ];
}

function mix(first: RGB, second: RGB, amount: number): RGB {
  return [
    first[0] + (second[0] - first[0]) * amount,
    first[1] + (second[1] - first[1]) * amount,
    first[2] + (second[2] - first[2]) * amount,
  ];
}

function luminance([red, green, blue]: RGB) {
  return (red * 0.2126 + green * 0.7152 + blue * 0.0722) / 255;
}

async function extractImageColors(source: string): Promise<RGB[]> {
  const image = await loadImage(source);
  const canvas = document.createElement("canvas");
  const size = 72;
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return [];

  const square = Math.min(image.naturalWidth, image.naturalHeight);
  const sourceX = (image.naturalWidth - square) / 2;
  const sourceY = (image.naturalHeight - square) / 2;
  context.drawImage(image, sourceX, sourceY, square, square, 0, 0, size, size);

  const pixels = context.getImageData(0, 0, size, size).data;
  const buckets = new Map<string, { color: RGB; count: number }>();

  for (let index = 0; index < pixels.length; index += 16) {
    if (pixels[index + 3] < 200) continue;

    const color: RGB = [pixels[index], pixels[index + 1], pixels[index + 2]];
    const brightness = luminance(color);
    const spread = Math.max(...color) - Math.min(...color);

    if (brightness > 0.98 || brightness < 0.045) continue;
    if (brightness > 0.94 && spread < 7) continue;

    const quantized = color.map((value) =>
      Math.min(240, Math.round(value / 20) * 20),
    ) as RGB;
    const key = quantized.join("-");
    const current = buckets.get(key);

    if (current) current.count += 1;
    else buckets.set(key, { color: quantized, count: 1 });
  }

  return [...buckets.values()]
    .sort((first, second) => second.count - first.count)
    .slice(0, 24)
    .map((entry) => entry.color);
}

function chooseDarkToLight(candidates: RGB[]) {
  const sorted = [...candidates].sort(
    (first, second) => luminance(first) - luminance(second),
  );

  if (!sorted.length) return fallbackPalette.map(fromHex);

  const targetPositions = [0.08, 0.27, 0.5, 0.73, 0.92];
  const selected: RGB[] = [];

  for (const position of targetPositions) {
    const targetIndex = Math.round((sorted.length - 1) * position);
    const searchOrder = sorted
      .map((color, index) => ({ color, offset: Math.abs(index - targetIndex) }))
      .sort((first, second) => first.offset - second.offset);

    const match = searchOrder.find(({ color }) =>
      selected.every((existing) => distance(existing, color) > 42),
    );

    if (match) selected.push(match.color);
  }

  for (const candidate of sorted) {
    if (selected.length === 5) break;
    if (selected.every((existing) => distance(existing, candidate) > 34)) {
      selected.push(candidate);
    }
  }

  return selected.length >= 3
    ? selected.sort((first, second) => luminance(first) - luminance(second))
    : fallbackPalette.map(fromHex);
}

async function buildPalette(items: InspirationItem[]) {
  const groups = await Promise.all(
    items.slice(0, 9).map((item) =>
      extractImageColors(item.image).catch(() => []),
    ),
  );

  return chooseDarkToLight(groups.flat()).map(toHex);
}

function createThemeStyle(palette: string[]): CSSProperties {
  const colors = palette
    .map(fromHex)
    .sort((first, second) => luminance(first) - luminance(second));

  const darkest = colors[0];
  const dark = colors[1] ?? darkest;
  const middle = colors[Math.floor(colors.length / 2)] ?? dark;
  const soft = colors[colors.length - 2] ?? middle;
  const lightest = colors[colors.length - 1] ?? soft;
  const warmWhite: RGB = [250, 247, 242];
  const nearBlack: RGB = [25, 23, 21];
  const white: RGB = [255, 255, 255];

  const pageMix = luminance(middle) < 0.42 ? 0.78 : 0.86;
  const heroMix = luminance(middle) < 0.42 ? 0.62 : 0.72;
  const button = mix(darkest, nearBlack, 0.12);

  return {
    "--mood-page": toHex(mix(middle, warmWhite, pageMix)),
    "--mood-hero": toHex(mix(middle, warmWhite, heroMix)),
    "--mood-surface": toHex(mix(lightest, warmWhite, 0.72)),
    "--mood-surface-strong": toHex(mix(soft, warmWhite, 0.52)),
    "--mood-border": toHex(mix(middle, soft, 0.48)),
    "--mood-accent": toHex(mix(middle, dark, 0.48)),
    "--mood-ink": toHex(mix(darkest, nearBlack, 0.32)),
    "--mood-button": toHex(button),
    "--mood-button-text": luminance(button) > 0.58 ? toHex(nearBlack) : toHex(white),
    "--mood-glow": toHex(mix(middle, soft, 0.30)),
  } as CSSProperties;
}

export function useMoodboardTheme(items: InspirationItem[]): MoodboardTheme {
  const key = items.map((item) => item.id).sort().join("|");
  const [result, setResult] = useState<{ key: string; palette: string[] }>({
    key: "",
    palette: fallbackPalette,
  });

  useEffect(() => {
    let active = true;
    if (!items.length) return;

    buildPalette(items).then((palette) => {
      if (active) setResult({ key, palette });
    });

    return () => {
      active = false;
    };
  }, [items, key]);

  const palette = result.key === key ? result.palette : fallbackPalette;
  const style = useMemo(() => createThemeStyle(palette), [palette]);

  return {
    palette,
    ready: result.key === key,
    style,
  };
}
