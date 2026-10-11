import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StyleStudio } from "@/components/styles";
import { materials as scandinavianMaterials } from "@/content/materials";
import { projectIdeas as scandinavianIdeas } from "@/content/project-ideas";
import { styleExtraMaterials, styleExtraProjectIdeas } from "@/content/style-extras";
import { getStyleDefinition, styleDefinitions } from "@/content/styles";

interface StylePageProps { params: Promise<{ style: string }>; }

export function generateStaticParams() {
  return styleDefinitions.map((style) => ({ style: style.id }));
}

export async function generateMetadata({ params }: StylePageProps): Promise<Metadata> {
  const { style: styleId } = await params;
  const style = getStyleDefinition(styleId);
  if (!style) return {};
  return { title: `${style.name} Style | Site Atelier`, description: style.shortFeel };
}

export default async function StylePage({ params }: StylePageProps) {
  const { style: styleId } = await params;
  const style = getStyleDefinition(styleId);
  if (!style) notFound();
  return <StyleStudio style={style} materials={[...scandinavianMaterials, ...styleExtraMaterials]} ideas={[...scandinavianIdeas, ...styleExtraProjectIdeas]} />;
}
