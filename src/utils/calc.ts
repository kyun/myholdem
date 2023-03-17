export const hello = () => {
  return "Hello World";
};

export function isValid(value: string): boolean {
  const SHAPE = ["S", "H", "C", "D"];
  if (value.length < 2 || value.length > 3) {
    return false;
  }

  const shape = value[0];
  const number = Number(value.slice(1));
  if (!SHAPE.includes(shape) || isNaN(number) || number < 1 || number > 13) {
    return false;
  }

  return true;
}
