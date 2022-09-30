import { PaletteColorOptions, PaletteOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

const primary: PaletteColorOptions & Record<string, any> = {
  "main": "#792EE5",
  "70": "#4F00BA",
  "50": "#792EE5",
  "40": "#AD8EEA",
  "20": "#D6CEF5",
  "10": "#EFEEFF",
  "contrastText": "#4F00BA",
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
};

const divider = grey["40"];
const palette: PaletteOptions = {
  primary,
  secondary,
  success,
  warning,
  error,
  grey,
  divider,
};

export default palette;
