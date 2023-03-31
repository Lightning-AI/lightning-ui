import { PaletteColorOptions, PaletteOptions } from "@mui/material";
import { ColorPartial, TypeBackground, TypeText } from "@mui/material/styles/createPalette";

const primary: PaletteColorOptions & Record<string, any> = {
  "main": "#D0B6F6",
  "10": "#1F0840",
  "20": "#350E6D",
  "30": "#4B139A",
  "40": "#6019C8",
  "50": "#792EE5",
  "60": "#965CEB",
  "70": "#B389F0",
  "80": "#D0B6F6",
  "90": "#EEE4FC",
  "100": "#F7F1FD",
  "contrastText": "#FFFFFF",
  "gradient": "linear-gradient(205deg, #BB8BFF 8.49%, #75F6FF 91.51%)",
};
const secondary: PaletteColorOptions & Record<string, string> = {
  "main": "#008087",
  "10": "#000708",
  "20": "#001F21",
  "30": "#00383B",
  "40": "#005054",
  "50": "#00686E",
  "60": "#008087",
  "70": "#0098A1",
  "80": "#00B0BA",
  "90": "#00C9D4",
  "100": "#00E1ED",
  "contrastText": "#1C1C1C",
};
const info: PaletteColorOptions & Record<string, string> = {
  "main": "#1877F2",
  "10": "#031B3A",
  "20": "#06326A",
  "30": "#09489B",
  "40": "#0B5FCB",
  "50": "#1877F2",
  "60": "#4893F5",
  "70": "#78AFF7",
  "80": "#A8CCFA",
  "90": "#D8E8FD",
  "contrastText": "#FFFFFF",
};
const success: PaletteColorOptions & Record<string, string> = {
  "main": "#3F9956",
  "10": "#0D2B14",
  "20": "#195227",
  "30": "#257939",
  "40": "#3F9956",
  "50": "#3FC55F",
  "60": "#66D180",
  "70": "#8DDDA0",
  "80": "#B5E8C1",
  "90": "#DCF4E2",
  "contrastText": "FFFFFF",
};
const warning: PaletteColorOptions & Record<string, string> = {
  "main": "#FCBE2E",
  "10": "#281C01",
  "20": "#5B4001",
  "30": "#823E1A",
  "40": "#BF8603",
  "50": "#F1AA03",
  "60": "#FCBE2E",
  "70": "#FDCD5E",
  "80": "#FDDD90",
  "90": "#FEECC3",
  "contrastText": "#131416",
};
const error: PaletteColorOptions & Record<string, string> = {
  "main": "#E02C2D",
  "10": "#3A0809",
  "20": "#660F10",
  "30": "#931616",
  "40": "#BF1C1D",
  "50": "#E02C2D",
  "60": "#E75A5B",
  "70": "#ED8788",
  "80": "#F4B3B4",
  "90": "#FAE0E0",
  "contrastText": "#FFFFFF",
};
const grey: ColorPartial & Record<string, string> = {
  "main": "#DEDFE3",
  "10": "#030303",
  "20": "#373942",
  "30": "#363636",
  "40": "#4F4F4F",
  "50": "#696969",
  "60": "#828282",
  "70": "#9C9C9C",
  "80": "#B5B5B5",
  "90": "#CFCFCF",
  "100": "#E8E8E8",
  "contrastText": "#1C1C1C",
};
const background: Partial<TypeBackground> = {
  default: "#1C1C1C",
  paper: "#1C1C1C",
};

const text: Partial<TypeText> = {
  primary: "#FAFAFA",
  secondary: "#CFCFCF",
  disabled: "#828282",
};

const divider = grey["80"];
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
  mode: "dark",
};

export default palette;