import React, { ChangeEventHandler, ReactNode, useEffect } from "react";

import { CircularProgress, InputProps } from "@mui/material";
import MuiOutlinedInput, { OutlinedInputProps as MuiOutlinedInputProps } from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";

import { Box, Stack } from "..";
import getTextWidth from "../../../shared/utils/getTextWidth";
import { CheckCircle, Dangerous, Info, Warning } from "../../icons";
import FormControl, { FormControlProps } from "../form-control";
import NumberInputButtons from "./NumberInputButtons";
import { BORDER_COLOR } from "./constants";

export const TURN_OFF_AUTOCOMPLETE_INPUT_PROPS = {
  // "nope" is better at disabling autocomplete, than "off"
  // because most modern browsers ignore "off" https://stackoverflow.com/a/38961567
  "autoComplete": "nope",
  "aria-autocomplete": "none" as InputProps["aria-autocomplete"],
  "data-form-type": "other",
  "data-1p-ignore": "true",
  "data-lpignore": "true",
};

const statusColor: Record<string, any> = {
  info: "#1877F2",
  success: "#31A24C",
  warning: "#F1A817",
  error: "#E02C2D",
};

const statusIcon: Record<string, ReactNode> = {
  info: <Info sx={{ color: statusColor.info }} />,
  success: <CheckCircle sx={{ color: statusColor.success }} />,
  warning: <Warning sx={{ color: statusColor.warning }} />,
  error: <Dangerous sx={{ color: statusColor.error }} />,
};

export type TextFieldProps = {
  icon?: ReactNode;
  type?: "text" | "number" | "password";
  onChange: (value: string | null) => void;
  value?: unknown;
  suffix?: string;
  arrows?: boolean;
  max?: number;
  min?: number;
  multiline?: boolean;
  rows?: number;
  loading?: boolean;
  maxLength?: number;
} & FormControlProps &
  Pick<
    MuiOutlinedInputProps,
    | "disabled"
    | "placeholder"
    | "fullWidth"
    | "size"
    | "autoComplete"
    | "aria-autocomplete"
    | "autoCapitalize"
    | "autoCorrect"
    | "autoFocus"
  >;

const INPUT_TEXT_FONT = `normal 14px/20px "Inter"`;
// Setting max number to avoid displaying numbers with exponent in the input
// min is -MAX_NUMBER
const MAX_NUMBER = 999999999999999;

const TextField = React.forwardRef(
  (
    {
      label,
      helperText,
      statusText,
      status,
      icon,
      fullWidth,
      optional,
      tooltip,
      arrows,
      onChange,
      type = "text",
      suffix,
      max,
      min,
      loading,
      maxLength,
      // "nope" is better at disabling autocomplete, than "off"
      // because most modern browsers ignore "off" https://stackoverflow.com/a/38961567
      autoComplete = "nope",
      "aria-autocomplete": ariaAutocomplete = "none",
      ...props
    }: TextFieldProps,
    ref: any,
  ) => {
    const [suffixOffsetPx, setSuffixOffsetPx] = React.useState(0);
    const [marginRightPx, setMarginRightPx] = React.useState(0);
    // tracking current value to be able to correctly offset the suffix
    const [valueInternal, setValueInternal] = React.useState(props.value);
    const internalRef = React.useRef<HTMLInputElement>();
    const theme: any = useTheme();
    const isDark = theme.palette.mode === "dark";

    useEffect(() => setValueInternal(props.value), [props.value]);

    // adding leading space to suffix for offset
    // using whitespace for this instead of padding/margin to be able to compute the offset correctly
    // and ensure that it's exactly a single whitespace wide
    const preparedSuffix = suffix && " " + suffix;

    useEffect(() => {
      if (!preparedSuffix || (!valueInternal && valueInternal !== 0) || !internalRef.current) {
        return;
      }
      const widthPx = getTextWidth((valueInternal as string)?.toString(), INPUT_TEXT_FONT);
      const inputStyles = getComputedStyle(internalRef.current);
      const textWidthPx = Math.min(widthPx, parseInt(inputStyles.width));
      setSuffixOffsetPx(textWidthPx + parseInt(inputStyles.paddingLeft));
    }, [valueInternal, preparedSuffix]);

    useEffect(() => {
      if (!preparedSuffix || !internalRef.current) {
        return;
      }
      const width = getTextWidth(preparedSuffix, INPUT_TEXT_FONT);
      setMarginRightPx(width);
    }, [preparedSuffix]);

    const hasStatus = typeof status !== "undefined";
    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
      const newValue = event.target.value;
      setValueInternal(newValue);
      if (onChange) {
        onChange(newValue);
      }
    };

    const isAutocompleteDisabled = autoComplete === "nope" || autoComplete === "off";

    return (
      <FormControl
        label={label}
        helperText={helperText}
        status={status}
        statusText={statusText}
        fullWidth={fullWidth}
        optional={optional}
        tooltip={tooltip}>
        <Stack direction={"row"}>
          <MuiOutlinedInput
            inputRef={input => {
              internalRef.current = input;
              if (ref) {
                ref.current = input;
              }
            }}
            fullWidth={fullWidth}
            onChange={onChangeHandler}
            type={type}
            autoComplete={autoComplete}
            {...props}
            inputProps={{
              "maxLength": maxLength,
              "max": max !== undefined ? Math.min(max, MAX_NUMBER) : MAX_NUMBER,
              "min": min !== undefined ? Math.max(min, -MAX_NUMBER) : -MAX_NUMBER,
              "aria-autocomplete": ariaAutocomplete,
              ...(isAutocompleteDisabled ? TURN_OFF_AUTOCOMPLETE_INPUT_PROPS : undefined),
            }}
            error={hasStatus}
            startAdornment={icon}
            endAdornment={
              loading ? <CircularProgress thickness={2} color="inherit" size={20} /> : status && statusIcon[status]
            }
            sx={{
              "font": INPUT_TEXT_FONT,
              "height": props.multiline ? undefined : "36px",
              "backgroundColor": isDark ? theme.palette.grey["10"] : theme.palette.background.default,
              "borderRadius": type === "number" && arrows ? "8px 0 0 8px" : "8px",
              "input": {
                marginRight: `${marginRightPx}px`,
              },
              ...(isAutocompleteDisabled && {
                // LastPass doesn't always respect `data-lpignore="true"` on the input
                "[data-lastpass-icon-root]": {
                  display: "none !important",
                },
              }),
              ...(isDark && {
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.grey["50"],
                },
              }),
              "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
                WebkitAppearance: "none",
                margin: 0 /* <-- Apparently some margin are still there even though it's hidden */,
              },
              "input[type=number]": {
                MozAppearance: "textfield" /* Firefox */,
              },
              "&.MuiInputBase-colorPrimary:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: (theme: any) => theme.palette[status ?? "primary"].main,
              },
              "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                padding: 0,
                borderColor: (theme: any) => (status ? theme.palette[status].main : undefined),
              },
              "&.Mui-disabled": {
                backgroundColor: "transparent",
                opacity: 0.5,
              },
              "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline, &.Mui-error.Mui-disabled .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: BORDER_COLOR,
                },
              "&.Mui-disabled .MuiOutlinedInput-input": {
                color: (theme: any) => theme.palette.grey["20"],
              },
              "&.MuiInputBase-sizeSmall": {
                height: "28px",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "16px",
              },
              "&.MuiInputBase-adornedStart .MuiSvgIcon-root:first-of-type": {
                color: "#050505",
                paddingRight: "8px",
              },
              "&.Mui-disabled.MuiInputBase-adornedStart .MuiSvgIcon-root:first-of-type": {
                color: (theme: any) => theme.palette.grey["50"],
              },
              "&.Mui-disabled.MuiInputBase-adornedEnd svg": {
                color: (theme: any) => theme.palette.grey["50"],
              },
            }}
          />
          {type === "number" && arrows && (
            <NumberInputButtons
              onIncreaseClick={() => {
                internalRef.current?.stepUp();
                internalRef.current?.dispatchEvent(new Event("change", { bubbles: true }));
              }}
              onDecreaseClick={() => {
                internalRef.current?.stepDown();
                internalRef.current?.dispatchEvent(new Event("change", { bubbles: true }));
              }}
            />
          )}
          {suffix && (valueInternal || valueInternal === 0) && (
            // using `whiteSpace: "pre"` to preserve the leading space
            <Box
              sx={{
                marginLeft: `${suffixOffsetPx}px`,
                font: INPUT_TEXT_FONT,
                position: "absolute",
                marginTop: "8px",
                whiteSpace: "pre",
              }}>
              {preparedSuffix}
            </Box>
          )}
        </Stack>
      </FormControl>
    );
  },
);

export default TextField;
