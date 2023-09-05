export function capitalizeString(value: string) {
  if (value.length > 1) {
    return value[0].toUpperCase() + value.slice(1, value.length).toLowerCase();
  }
  return value;
}
