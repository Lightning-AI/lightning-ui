import DialogImageActions, { DialogImageActionsProps } from "./DialogImageActions";
import errorIcon from "./error.svg";
import successIcon from "./success.svg";
import warningIcon from "./warning.svg";

const getText: Record<DialogNotificationVariant, string> = {
  success: "Success",
  warning: "Are you sure?",
  error: "Error",
};

const getSrcIcon: Record<DialogNotificationVariant, string> = {
  success: successIcon,
  warning: warningIcon,
  error: errorIcon,
};

export type DialogNotificationVariant = "success" | "warning" | "error";

export type DialogNotificationProps = {
  variant: DialogNotificationVariant;
} & Omit<DialogImageActionsProps, "title" | "imageSrc">;

export default function DialogNotification(props: DialogNotificationProps) {
  const text = getText[props.variant];
  const src = getSrcIcon[props.variant];
  return <DialogImageActions title={text} imageSrc={src} {...props} />;
}
