import { PaletteColorOptions, PaletteOptions } from "@mui/material";
import { ColorPartial, TypeBackground, TypeText } from "@mui/material/styles/createPalette";

const primary: PaletteColorOptions & Record<string, any> = {
  "main": "#792EE5",
  "10": "#F7F1FD",
  "20": "#EEE4FC",
  "30": "#D0B6F6",
  "40": "#B389F0",
  "50": "#965CEB",
  "60": "#792EE5",
  "70": "#6019C8",
  "80": "#4B139A",
  "90": "#350E6D",
  "100": "#1F0840",
  "contrastText": "#FFFFFF",
  "oppositeMainText": "#FFFFFF",
  "gradient": "linear-gradient(225deg, #792EE5 0%, #428FF4 100%)",
};
const secondary: PaletteColorOptions & Record<string, string> = {
  "main": "#008087",
  "10": "#00E1ED",
  "20": "#00C9D4",
  "30": "#00B0BA",
  "40": "#0098A1",
  "50": "#008087",
  "60": "#00686E",
  "70": "#005054",
  "80": "#00383B",
  "90": "#001F21",
  "100": "#000708",
  "contrastText": "#1C1C1C",
};
const info: PaletteColorOptions & Record<string, string> = {
  "main": "#1877F2",
  "10": "#D8E8FD",
  "20": "#A8CCFA",
  "30": "#78AFF7",
  "40": "#4893F5",
  "50": "#1877F2",
  "60": "#0B5FCB",
  "70": "#09489B",
  "80": "#06326A",
  "90": "#031B3A",
  "contrastText": "#FFFFFF",
};
const success: PaletteColorOptions & Record<string, string> = {
  "main": "#3F9956",
  "10": "#DCF4E2",
  "20": "#B5E8C1",
  "30": "#8DDDA0",
  "40": "#66D180",
  "50": "#3FC55F",
  "60": "#3F9956",
  "70": "#257939",
  "80": "#195227",
  "90": "#0D2B14",
  "contrastText": "FFFFFF",
};
const warning: PaletteColorOptions & Record<string, string> = {
  "main": "#FCBE2E",
  "10": "#FEECC3",
  "20": "#FDDD90",
  "30": "#FDCD5E",
  "40": "#FCBE2E",
  "50": "#F1AA03",
  "60": "#BF8603",
  "70": "#823E1A",
  "80": "#5B4001",
  "90": "#281C01",
  "contrastText": "#1C1C1C",
};
const error: PaletteColorOptions & Record<string, string> = {
  "main": "#E02C2D",
  "10": "#FAE0E0",
  "20": "#F4B3B4",
  "30": "#ED8788",
  "40": "#E75A5B",
  "50": "#E02C2D",
  "60": "#BF1C1D",
  "70": "#931616",
  "80": "#660F10",
  "90": "#3A0809",
  "contrastText": "#FFFFFF",
};
const grey: ColorPartial & Record<string, string> = {
  "main": "#E8E8E8",
  "10": "#E8E8E8",
  "20": "#CFCFCF",
  "30": "#B5B5B5",
  "40": "#9C9C9C",
  "50": "#828282",
  "60": "#696969",
  "70": "#4F4F4F",
  "80": "#363636",
  "90": "#1C1C1C",
  "100": "#030303",
  "contrastText": "#1C1C1C",
};
const background: Partial<TypeBackground> = {
  default: "#FFF",
  paper: "#FFF",
};

const text: Partial<TypeText> = {
  primary: "#1C1C1C",
  secondary: "#CFCFCF",
  disabled: "#828282",
};

const divider = grey["10"];
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