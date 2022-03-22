import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { Box } from "../";
import { MouseEventHandler, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export type ButtonProps = {
  icon?: ReactNode;
  text?: string;
  color?: any;
} & Pick<MuiButtonProps, "disabled" | "fullWidth" | "variant" | "href" | "onClick" | "size">;

const Button = ({ href, ...props }: ButtonProps) => {
  const isTextVariant = props.variant === "text";
  const isPrimaryColor = !isTextVariant && (typeof props.color === "undefined" || props.color?.startsWith("primary"));
  const isGreyColor = isTextVariant || props.color?.startsWith("grey");
  const variant = isTextVariant ? props.variant : "contained";
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

  const navigateHandler = (url: string): MouseEventHandler<HTMLButtonElement> => {
    return event => {
      event.preventDefault();
      navigate(url);
    };
  };

  const onClickHandler = href ? navigateHandler(href) : props.onClick;
  const hasNoText = typeof props.text === "undefined" || props.text === "";
  const onlyIconStyle = hasNoText && {
    "minWidth": isSmallSize ? "32px" : "40px",
    "padding": isSmallSize ? "4px 8px" : "8px 12px",
    "& .MuiButton-startIcon": {
      margin: 0,
    },
  };
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
        ...onlyIconStyle,
      }}
      {...props}
      startIcon={props.icon}
      variant={variant}
      onClick={onClickHandler}
      href={href}>
      <Box marginTop={"2px"} fontStyle={"normal"} fontSize={"14px"} lineHeight={"20px"}>
        {props.text}
      </Box>
    </MuiButton>
  );
};

export default Button;
