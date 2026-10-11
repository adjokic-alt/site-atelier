function hash(value: string): string {
  let current = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    current ^= value.charCodeAt(index);
    current = Math.imul(current, 16777619);
  }
  return (current >>> 0).toString(16).toUpperCase().padStart(8, "0").slice(0, 6);
}

export function createReferenceCode(briefId: string, submittedAt: string): string {
  const year = new Date(submittedAt).getUTCFullYear();
  return `BR-${year}-${hash(briefId)}`;
}
