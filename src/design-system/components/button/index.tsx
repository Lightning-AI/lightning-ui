import { MouseEventHandler, ReactNode, useRef } from "react";

import { ArrowDropDownRounded } from "@mui/icons-material";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
  bordered?: boolean;
  pill?: boolean;
} & Pick<MuiButtonProps, "disabled" | "fullWidth" | "variant" | "href" | "onClick" | "size">;

const Button = ({ arrow, loading, href, ...props }: ButtonProps) => {
  const theme: any = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isTextVariant = props.variant === "text";
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isCursorVariant = props.cursor;
  const isBorderedVariant = props.bordered;
  const isPrimaryColor = !isTextVariant && (typeof props.color === "undefined" || props.color?.startsWith("primary"));
  const isGreyColor = isTextVariant || props.color?.startsWith("grey") || isBorderedVariant;
  const variant = isTextVariant ? props.variant : "contained";
  const isSmallSize = props.size === "small";
  const height = (isSmallSize && "28px") || "36px";
  const isPill = props.pill;
  const color = (theme: any) => {
    return (isGreyColor && theme.palette.common.black) || theme.palette.common.white;
  };
  const background = (theme: any) => {
    return isPrimaryColor && theme.palette.primary.gradient;
  };
  const backgroundColor = (theme: any) => {
    if (variant === "text") return "transparent";
    if (isBorderedVariant) return theme.palette.grey["10"];
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

  const mouseOverHandler = (event: any) => {
    let path = buttonRef?.current?.querySelector("svg path") as SVGPathElement;
    let total = path?.getTotalLength();
    if (total) {
      path?.style.setProperty("--path-length", total.toString() + "px");
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
          "borderRadius": isPill ? "20px" : "8px",
          ...(isGreyColor &&
            isDark && {
              "background": theme.palette.grey[70],
              "& .MuiButton-startIcon": {
                transition: "0.2s ease-in-out",
              },
              "&:hover": {
                "background": theme.palette.secondary[40],
                "color": theme.palette.common.white,
                "& .MuiButton-startIcon": {
                  color: theme.palette.common.white,
                },
              },
              "svg": {
                fill: "currentColor",
              },
            }),
          ...(isBorderedVariant && {
            "position": "relative",
            "overflow": "hidden",
            "transition": "0.3s ease-in-out",
            "borderRadius": "5px",
            "background": "transparent",
            "color": theme.palette.grey[70],
            "boxShadow": "inset 0 0 0 1px, 0 0 0 0, 0 0 0 0",
            "fontWeight": "500",
            "div.MuiBox-root": {
              transition: "inherit",
              fontWeight: "inherit",
            },
            "&:before, &:after": {
              content: "''",
              position: "absolute",
              borderRadius: "4px",
            },
            "&:before": {
              width: "150%",
              height: "auto",
              transition: "opacity 0.4s ease-in-out",
              opacity: "0",
              aspectRatio: "1/1",
              top: "50%",
              left: "-25%",
              transform: "translateY(-50%) rotate(0deg)",
              zIndex: "-2",
              animation: "btnRotate 2s cubic-bezier(0.65, 0.25, 0.75, 1) infinite",
              animationPlayState: "paused",
              background:
                "conic-gradient(from 0.25turn at 50% 50%,#7b2fe4,10deg,transparent,200deg,transparent,320deg,#ad1fdd),conic-gradient(from 0.75turn at 50% 50%,#7b2fe4,10deg,transparent,320deg,#6005ff)",
            },
            "@keyframes btnRotate": {
              "100%": {
                transform: "translateY(-50%) rotate(360deg)",
              },
            },
            "&:after": {
              width: "calc(100% - 3px)",
              height: "calc(100% - 3px)",
              top: "1.5px",
              left: "1.5px",
              zIndex: "-1",
              background: isDark ? theme.palette.primary[10] : "#fff",
              transition: "0.3s ease-in-out",
              boxShadow: isDark
                ? "inset 0 0 2px -5px #000, inset 0 0 8px -10px #222"
                : "inset 0 0 2px -5px #fff, inset 0 0 8px -10px #fff",
            },
            "&:hover": {
              "backgroundColor": "transparent",
              "boxShadow": isDark
                ? "inset 0 0 0 2px transparent, 0 0 0 1px #000, 0 1px 5px 0 rgba(0, 0, 0, 0.15)"
                : "inset 0 0 0 2px transparent, 0 0 0 1px #fff, 0 1px 5px 0 rgba(0, 0, 0, 0.15)",
              "color": isDark ? theme.palette.common.white : theme.palette.primary[70],
              "div.MuiBox-root": {
                color: isDark ? theme.palette.common.white : theme.palette.primary[70],
              },
              "&:before": {
                opacity: "1",
                animationPlayState: "running",
              },
              "&:after": {
                background: isDark ? theme.palette.primary[20] : "#fff",
                boxShadow: isDark
                  ? "inset 0 0 2px 1px #000, inset 0 0 8px 2px #222"
                  : "inset 0 0 2px 1px #fff, inset 0 0 8px 2px #fff",
              },
              "span:not(.MuiButton-endIcon) svg path": {
                "strokeDashoffset": "var(--path-length)",
                "strokeDasharray": "var(--path-length)",
                "strokeWidth": "0.5px",
                "animation": "drawSvg 1.5s ease-in-out forwards",
                "stroke": "currentcolor",
                "fill": "transparent",
                "@keyframes drawSvg": {
                  "50%": {
                    strokeDashoffset: "0px",
                    fill: "transparent",
                    strokeWidth: "1px",
                    stroke: theme.palette.primary[70],
                  },
                  "100%": {
                    strokeDashoffset: "0px",
                    fill: isDark ? theme.palette.common.white : theme.palette.primary[70],
                    stroke: isDark ? theme.palette.common.white : theme.palette.primary[70],
                    strokeWidth: "0px",
                  },
                },
              },
            },
          }),
          ...(!isTextVariant &&
            isPrimaryColor &&
            !isBorderedVariant && {
              "transition": "0.3s ease-in-out",
              "backgroundSize": "100% 100%",
              "backgroundPosition": "50% 50%",
              "&:hover": {
                backgroundSize: "400% 100%",
                filter: "brightness(1.1)",
              },
            }),
          ...(isCursorVariant &&
            !isBorderedVariant && {
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

          ...(isTextVariant &&
            isDark && {
              "color": theme.palette.grey[100],
              "background": "transparent",
              "&:hover": {
                "background": theme.palette.grey[70],
                "color": theme.palette.grey[10],
                "svg path": {
                  fill: theme.palette.grey[10],
                },
              },
            }),
          "&.Mui-disabled": {
            opacity: isGreyColor ? 0.3 : 0.5,
            color,
            backgroundColor,
          },
          "& .MuiButton-startIcon": {
            color: "inherit",
          },
          "& .MuiButton-endIcon": {
            color: "inherit",
          },
          ...(isGreyColor &&
            !isBorderedVariant && {
              "&:hover": {
                backgroundColor: theme.palette.grey[40],
              },
            }),
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
        onMouseMove={isCursorVariant && !isBorderedVariant ? mouseMoveHandler : undefined}
        onMouseOver={isBorderedVariant ? mouseOverHandler : undefined}
        ref={buttonRef}
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
