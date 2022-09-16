// re-use canvase object for better performance
const CANVAS = document.createElement("canvas");

export default function getTextWidth(text: string, font: string): number {
  const context = CANVAS.getContext("2d");
  if (!context) {
    throw new Error("canvas context is not available");
  }
  context.font = font;
  return context.measureText(text).width;
}
