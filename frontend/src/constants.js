export const CONDITIONS = [
  { value: "new", label: "New" },
  { value: "refurbished", label: "Refurbished" },
  { value: "service", label: "Service/Parts" },
];

export const CONDITION_LABELS = Object.fromEntries(
  CONDITIONS.map((c) => [c.value, c.label])
);

export const CATEGORIES = [
  { value: "Accessories", label: "Accessories" },
  { value: "Phone Parts", label: "Phone Parts" },
];

export const NAME_MAX = 100;
export const DESCRIPTION_MAX = 300;

export function stockLevel(quantity) {
  if (quantity <= 0) return 0;
  if (quantity <= 5) return 1;
  if (quantity <= 10) return 2;
  if (quantity <= 20) return 3;
  return 4;
}
