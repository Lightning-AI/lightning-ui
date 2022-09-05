import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "../../icons";
import MuiPagination, { PaginationProps as MuiPaginationProps } from "@mui/material/Pagination";
import MuiPaginationItem from "@mui/material/PaginationItem";

export type PaginationProps = Pick<MuiPaginationProps, "page" | "count" | "onChange" | "disabled">;

const Pagination = (props: PaginationProps) => (
  <MuiPagination
    {...props}
    defaultPage={props.page}
    showFirstButton
    showLastButton
    shape="circular"
    renderItem={item => (
      <MuiPaginationItem components={{ first: KeyboardDoubleArrowLeft, last: KeyboardDoubleArrowRight }} {...item} />
    )}
  />
);

export default Pagination;
