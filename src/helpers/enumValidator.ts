export default function enumValidator(
  obj: Record<string | number, unknown>,
  value: unknown,
): boolean {
  return Object.values(obj).includes(value);
}
