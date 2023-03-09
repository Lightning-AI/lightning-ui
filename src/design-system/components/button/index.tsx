import { MouseEventHandler, ReactNode } from "react";

import { ArrowDropDownRounded } from "@mui/icons-material";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Box, CircularProgress, Tooltip } from "../";
import { TooltipProps } from "../tooltip";

export type ButtonProps = {
  icon?: ReactNode;
  text?: string;
  color?: any;
  loading?: boolean;
  arrow?: boolean;
  tooltip?: TooltipProps["title"];
  children?: ReactNode;
  cursor?: boolean;
} & Pick<MuiButtonProps, "disabled" | "fullWidth" | "variant" | "href" | "onClick" | "size">;

const Button = ({ arrow, loading, href, ...props }: ButtonProps) => {
  const isTextVariant = props.variant === "text";
  const isCursorVariant = props.cursor;
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

  const mouseMoveHandler = (event: any) => {
    // Get the bounding rectangle of target
    const rect = event.target?.getBoundingClientRect();

    // Mouse position
    if (rect?.left && rect?.top) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      event.target?.style.setProperty("--x", `${x}px`);
      event.target?.style.setProperty("--y", `${y}px`);
    }
  };

  const onClickHandler = !props.onClick && href ? navigateHandler(href) : props.onClick;
  const hasNoText = typeof props.text === "undefined" || props.text === "";
  const onlyIconStyle = hasNoText && {
    "minWidth": isSmallSize ? "32px" : "40px",
    "padding": isSmallSize ? "4px 8px" : "8px 12px",
    "& .MuiButton-startIcon": {
      margin: 0,
    },
    "& .MuiButton-endIcon": {
      margin: 0,
    },
  };
  return (
    <Tooltip title={props.tooltip}>
      <MuiButton
        disableElevation
        sx={{
          height,
          color,
          backgroundColor,
          background,
          ...(!isTextVariant &&
            isPrimaryColor && {
              "transition": "0.3s ease-in-out",
              "backgroundSize": "100% 100%",
              "backgroundPosition": "50% 50%",
              "&:hover": {
                backgroundSize: "400% 100%",
                filter: "brightness(1.1)",
              },
            }),
          ...(isCursorVariant && {
            "position": "relative",
            "overflow": "hidden",
            "> div": {
              pointerEvents: "none",
              position: "relative",
              zIndex: 1,
            },
            "&:hover": {
              "&:before": {
                opacity: "1",
              },
            },
            "&:before": {
              opacity: "0",
              transition: "opacity 0.3s ease-in-out, transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              content: "''",
              position: "absolute",
              pointerEvents: "none",
              top: 0,
              left: 0,
              width: "15px",
              height: "15px",
              borderRadius: "100%",
              filter: "blur(8px)",
              transform: "translate(calc(var(--x) - 7.5px), calc(var(--y) - 5px)) translateZ(0px)",
              background: (theme: any) => theme.palette.secondary[40],
              zIndex: "0",
            },
          }),
          "&.Mui-disabled": {
            opacity: isGreyColor ? 0.3 : 0.5,
            color,
            backgroundColor,
          },
          "& .MuiButton-startIcon": {
            color: isGreyColor ? (theme: any) => theme.palette.grey[70] : "inherit",
          },
          "& .MuiButton-endIcon": {
            color: isGreyColor ? (theme: any) => theme.palette.grey[70] : "inherit",
          },
          ...onlyIconStyle,
        }}
        {...props}
        disabled={loading || props.disabled}
        startIcon={
          loading ? <CircularProgress thickness={6} color="inherit" size={isSmallSize ? 18 : 20} /> : props.icon
        }
        endIcon={arrow ? <ArrowDropDownRounded /> : undefined}
        variant={variant}
        onClick={onClickHandler}
        onMouseMove={isCursorVariant ? mouseMoveHandler : undefined}
        href={href}>
        {!!props.text && (
          <Box fontStyle={"normal"} fontSize={"14px"} lineHeight={"20px"}>
            {props.text}
          </Box>
        )}
        {props.children}
      </MuiButton>
    </Tooltip>
  );
};

export default Button;
