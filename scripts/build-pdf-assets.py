"""Builds pdf-assets/: static TTF fonts and small JPEG copies of every picture the brief PDF can show.

Run from the project root:  python3 scripts/build-pdf-assets.py
Needs: pip install pillow fonttools brotli
"""
import io, re, pathlib
from PIL import Image
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.merge import Merger

root = pathlib.Path(__file__).resolve().parent.parent
out = root / "pdf-assets"
(out / "fonts").mkdir(parents=True, exist_ok=True)

# Fonts: latin + latin-ext subsets merged, Manrope instanced at fixed weights
def save_static(paths, dest, weight=None):
    tmp = []
    for p in paths:
        f = TTFont(root / "public/fonts" / p)
        f.flavor = None
        if weight is not None and "fvar" in f:
            f = instancer.instantiateVariableFont(f, {"wght": weight})
        buf = out / "fonts" / f"_tmp_{len(tmp)}.ttf"
        f.save(buf); tmp.append(str(buf))
    merged = Merger().merge(tmp) if len(tmp) > 1 else TTFont(tmp[0])
    merged.save(out / "fonts" / dest)
    for t in tmp: pathlib.Path(t).unlink()

save_static(["instrument-serif-latin-400-normal.woff2", "instrument-serif-latin-ext-400-normal.woff2"], "InstrumentSerif-Regular.ttf")
save_static(["manrope-latin-wght-normal.woff2", "manrope-latin-ext-wght-normal.woff2"], "Manrope-Regular.ttf", 400)
save_static(["manrope-latin-wght-normal.woff2", "manrope-latin-ext-wght-normal.woff2"], "Manrope-SemiBold.ttf", 600)

# Pictures referenced by the content files
srcs = set()
for f in ["src/content/inspiration.ts", "src/content/style-studios.ts", "src/content/material-boards.ts", "src/content/style-catalog.ts"]:
    srcs |= set(re.findall(r'"(/images/[^"]+\.(?:jpe?g|png|webp))"', (root / f).read_text(encoding="utf-8")))
count = 0
for s in sorted(srcs):
    src = root / "public" / s.lstrip("/")
    if not src.exists(): continue
    dest = out / re.sub(r"\.(png|jpe?g|webp)$", ".jpg", s.lstrip("/"))
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(src).convert("RGB")
    im.thumbnail((1400, 1400) if "/studios/" in s or "inspiration" in s else (600, 600), Image.LANCZOS)
    im.save(dest, "JPEG", quality=80, optimize=True, progressive=False)
    count += 1
print("images", count)
