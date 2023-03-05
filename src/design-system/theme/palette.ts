import { PaletteColorOptions, PaletteOptions } from "@mui/material";
import { ColorPartial, TypeBackground, TypeText } from "@mui/material/styles/createPalette";

const primary: PaletteColorOptions & Record<string, any> = {
  "main": "#792EE5",
  "70": "#4F00BA",
  "50": "#792EE5",
  "40": "#AD8EEA",
  "20": "#D6CEF5",
  "10": "#EFEEFF",
  "5": "#F7F6FF",
  "contrastText": "#4F00BA",
  "oppositeMainText": "#FFFFFF",
  "gradient": "linear-gradient(206.91deg, #792EE5 16.83%, #3EABB3 144.59%);",
};
const secondary: PaletteColorOptions & Record<string, string> = {
  "main": "#792EE5",
  "70": "#008087",
  "50": "#3EABB3",
  "40": "#80D2D7",
  "20": "#B1EBED",
  "10": "#D5F9FA",
  "contrastText": "#008087",
};
const info: PaletteColorOptions & Record<string, string> = {
  "main": "rgba(24, 119, 242, 1)",
  "70": "rgba(0, 59, 135, 1)",
  "50": "rgba(24, 119, 242, 1)",
  "20": "rgba(210,226,255,1)",
  "10": "rgba(210, 226, 255, 1)",
  "contrastText": "rgba(0, 59, 135, 1)",
};
const success: PaletteColorOptions & Record<string, string> = {
  "main": "#31A24C",
  "70": "#16593D",
  "50": "#31A24C",
  "20": "#C0EBBE",
  "10": "#D7F5D5",
  "contrastText": "#16593D",
};
const warning: PaletteColorOptions & Record<string, string> = {
  "main": "#FCBE2E",
  "70": "#823E1A",
  "50": "#FCBE2E",
  "20": "#FCEEBF",
  "10": "#FFF6D4",
  "contrastText": "#823E1A",
};
const error: PaletteColorOptions & Record<string, string> = {
  "main": "#E02C2D",
  "70": "#821D1E",
  "50": "#E02C2D",
  "20": "#F4C5C9",
  "10": "#FFD4D5",
  "contrastText": "#821D1E",
};
const grey: ColorPartial & Record<string, string> = {
  "main": "#A0A2AE",
  "100": "#1C1C1C",
  "70": "#5B5E69",
  "50": "#A0A2AE",
  "40": "#C5CBD7",
  "20": "#E4E6EB",
  "10": "#F7F8FB",
  "contrastText": "#5B5E69",
  "oppositeBackground": "#0E061C",
  "shadow":
    "0px 3px 5px -1px rgba(45, 64, 86, 0.2), 0px 6px 10px rgba(45, 64, 86, 0.14), 0px 1px 18px rgba(45, 64, 86, 0.12)",
};
const background: Partial<TypeBackground> = {
  default: "#FFF",
  paper: "#FFF",
};

const text: Partial<TypeText> = {
  primary: "#1C1C1C",
};

const divider = grey["20"];
const palette: PaletteOptions = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  divider,
  background,
  text,
};

export default palette;
