import { PaletteColorOptions, PaletteOptions } from "@mui/material";
import { ColorPartial, TypeBackground, TypeText } from "@mui/material/styles/createPalette";

const primary: PaletteColorOptions & Record<string, any> = {
  "main": "#792EE5",
  "70": "#AD00FF",
  "50": "#B45AFF",
  "40": "#730BFF",
  "20": "#35146F",
  "10": "#1E0C3D",
  "5": "#212226",
  "contrastText": "#FFFFFF",
  "gradient": "linear-gradient(206.91deg, #792EE5 16.83%, #3EABB3 144.59%);",
};
const secondary: PaletteColorOptions & Record<string, string> = {
  "main": "#792EE5",
  "70": "#0BF0FF",
  "50": "#69F6FF",
  "40": "#01A9B4",
  "20": "#004246",
  "10": "#002426",
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
  "10": "#16593D",
  "contrastText": "#16593D",
};
const warning: PaletteColorOptions & Record<string, string> = {
  "main": "#FCBE2E",
  "70": "#823E1A",
  "50": "#FCBE2E",
  "20": "#FCEEBF",
  "10": "#CC8106",
  "contrastText": "#823E1A",
};
const error: PaletteColorOptions & Record<string, string> = {
  "main": "#E02C2D",
  "70": "#821D1E",
  "50": "#E02C2D",
  "20": "#F4C5C9",
  "10": "#C00002",
  "contrastText": "#821D1E",
};
const grey: ColorPartial & Record<string, string> = {
  "main": "#A0A2AE",
  "100": "#E4E6EB",
  "70": "#B0B3BE",
  "50": "#727686",
  "40": "#50535E",
  "20": "#373940",
  "10": "#2C2D3C",
  "contrastText": "#5B5E69",
};
const background: Partial<TypeBackground> = {
  // default: "#191923",
  // paper: "#191923",
  default: "#0E061C",
  paper: "#0E061C",
};

const text: Partial<TypeText> = {
  primary: "#FFFFFF",
  secondary: "#B7B4BB",
};

const divider = grey["20"];
const palette: PaletteOptions = {
  mode: "dark",
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
