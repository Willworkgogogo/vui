export function getActiveKeys(activeKey: string | string[] | number | number[]): string[] {
  if (!activeKey) return [];
  if (Array.isArray(activeKey)) {
    return (activeKey as (string | number)[]).map(key => String(key));
  }
  return [String(activeKey)];
}
