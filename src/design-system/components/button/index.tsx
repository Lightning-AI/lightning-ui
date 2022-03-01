import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { Box } from "design-system/components/";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export type ButtonProps = {
  icon?: ReactNode;
  text?: string;
  color?: any;
} & Pick<MuiButtonProps, "disabled" | "fullWidth" | "variant" | "href" | "sx" | "onClick" | "size">;

const Button = (props: ButtonProps) => {
  const isPrimaryColor = typeof props.color === "undefined" || props.color?.startsWith("primary");
  const isGreyColor = props.color?.startsWith("grey");
  const variant = props.variant === "text" && isGreyColor ? props.variant : "contained";
  const isSmallSize = props.size === "small";
  const height = (isSmallSize && "28px") || "36px";
  const color = (theme: any) => {
    return (isGreyColor && theme.palette.common.black) || theme.palette.common.white;
  };
  const background = (theme: any) => {
    return isPrimaryColor && theme.palette.primary.gradient;
  };
  const backgroundColor = (theme: any) => {
    if (variant === "text") return "transparent";
    if (isGreyColor) return theme.palette.grey["20"];
    if (isPrimaryColor) return theme.palette.primary;
    return theme.palette[props.color].main;
  };
  const navigate = useNavigate();

  const navigateHandler = (url: string) => {
    return () => navigate(url);
  };

  const onClickHandler = props.href ? navigateHandler(props.href) : props.onClick;
  return (
    <MuiButton
      disableElevation
      sx={{
        height,
        color,
        background,
        backgroundColor,
        "&.Mui-disabled": {
          opacity: 0.5,
          color,
          backgroundColor,
        },
      }}
      {...props}
      startIcon={props.icon}
      variant={variant}
      onClick={onClickHandler}
      href={""}>
      <Box marginTop={"1px"} fontStyle={"normal"} fontSize={"14px"} lineHeight={"20px"}>
        {props.text}
      </Box>
    </MuiButton>
  );
};

export default Button;
