import { Button } from "@mui/material";
import { ArrowDropUpOutlined, ArrowDropDownOutlined } from "../../icons";
import { Stack } from "..";
import { BORDER_COLOR } from "./constants";

type NumberInputButtonsProps = {
  onIncreaseClick: () => void;
  onDecreaseClick: () => void;
};

export default function NumberInputButtons({ onIncreaseClick, onDecreaseClick }: NumberInputButtonsProps) {
  const buttonStyle = (theme: any) => ({
    color: theme.palette.grey["100"],
    borderRadius: 0,
    minWidth: "20px",
    width: "20px",
    height: "17px", // +1px border
  });

  return (
    <Stack
      sx={{
        "border": `1px solid ${BORDER_COLOR}`,
        "borderLeft": 0,
        "borderRadius": "0 6px 6px 0",
        "& > button:first-of-type": {
          borderBottom: `1px solid ${BORDER_COLOR}`,
        },
      }}>
      <Button sx={buttonStyle} onClick={onIncreaseClick}>
        <ArrowDropUpOutlined />
      </Button>
      <Button sx={buttonStyle} onClick={onDecreaseClick}>
        <ArrowDropDownOutlined />
      </Button>
    </Stack>
  );
}
