/* eslint-disable @typescript-eslint/no-explicit-any */
interface ValidationProps {
  value: any;
  validationType: "min" | "max" | "required" | string;
  args: any;
  validationMessage?: string;
}
export const validationCheck = ({
  value,
  validationType,
  args,
  validationMessage,
}: ValidationProps) => {
  try {
    switch (validationType) {
      case "required":
        if (!value) {
          return validationMessage || "Required field";
        }
        break;
      case "min":
        if (typeof value === "string") {
          if (value.length < args) {
            return (
              validationMessage ||
              `Please enter more than ${args as number} characters`
            );
          }
        }
        break;
      case "max":
        if (typeof value === "string") {
          if (value.length > args) {
            return (
              validationMessage || `Max characters ${args as number} allowed`
            );
          }
        }
        break;
      default:
        return "";
    }
  } catch (error) {
    console.log(error);
  }
  return "";
};

// make a color range
export function colorChange(x: number, maxPossibleScore: number) {
  const hueEnd = 150;
  const hueStart = 50;

  const saturationStart = 100;
  const saturationEnd = 50;

  const lightStart = 60;
  const lightEnd = 60;

  const hueValue = x * ((hueEnd - hueStart) / maxPossibleScore) + hueStart;
  const saturationValue =
    x * ((saturationEnd - saturationStart) / maxPossibleScore) +
    saturationStart;
  const lightValue =
    x * ((lightEnd - lightStart) / maxPossibleScore) + lightStart;
  return {
    h: hueValue.toFixed(2),
    s: saturationValue.toFixed(2),
    l: lightValue,
  };
}
