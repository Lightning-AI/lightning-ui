import { PaletteColorOptions, PaletteOptions } from "@mui/material";
import { ColorPartial, TypeBackground, TypeText } from "@mui/material/styles/createPalette";

const primary: PaletteColorOptions & Record<string, any> = {
  "main": "#D0B6F6",
  "5": "#313131",
  "10": "#1F0840",
  "20": "#350E6D",
  "30": "#4B139A",
  "40": "#6019C8",
  "50": "#B45AFF",
  "60": "#965CEB",
  "70": "#B389F0",
  "80": "#D0B6F6",
  "90": "#EEE4FC",
  "100": "#F7F1FD",
  "oppositeMainText": "#1C1C1C",
  "contrastText": "#FFFFFF",
  "gradient": "linear-gradient(205deg, #BB8BFF 8.49%, #75F6FF 91.51%)",
};

const wheel: PaletteColorOptions & Record<string, string> = {
  c1: "#FA00F0", // purple
  c2: "#00FA9A", // green
  c3: "#FA0000", // red
  c4: "#0091FA", // blue
  c5: "#FFD700", // yellow
  c6: "#FF6666", // fuscia
  c7: "#D22CE0", // coral
  c8: "#5CDB95", // turquoise
  c9: "#FFA500", // orange
  c10: "#00CED1", // dark turquoise
  c11: "#F1AA03", // gold
  c12: "#BA55D3", // medium orchid
  c13: "#1E90FF", // dodger blue
  c14: "#FF1493", // deep pink
  c15: "#228B22", // forest green
  c16: "#800000", // maroon
  c17: "#FF00FF", // magenta
  c18: "#3FC55F", // medium spring green
  c19: "#8B008B", // dark magenta
  c20: "#808080", // gray
};

const secondary: PaletteColorOptions & Record<string, string> = {
  ...wheel,
  "main": "#008087",
  "10": "#181A20",
  "20": "#2D323E",
  "30": "#434A5B",
  "40": "#596278",
  "50": "#6F7A95",
  "60": "#8D95AA",
  "70": "#AAB0C0",
  "80": "#C7CBD6",
  "90": "#E4E6EB",
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
  "10": "#660F10",
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
  "5": "#363636",
  "10": "#030303",
  "20": "#363636",
  "30": "#363636",
  "40": "#4F4F4F",
  "50": "#696969",
  "60": "#828282",
  "70": "#9C9C9C",
  "80": "#B5B5B5",
  "90": "#CFCFCF",
  "100": "#E8E8E8",
  "oppositeBackground": "#FFF",
  "contrastText": "#1C1C1C",
};

const background: Partial<TypeBackground> = {
  default: "#1C1C1C",
  paper: "#1C1C1C",
};

const text: Partial<TypeText> = {
  primary: "#FAFAFA",
  secondary: "#B5B5B5",
  disabled: "#828282",
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
  mode: "dark",
};

export default palette;
