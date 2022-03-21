import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "../../icons";
import MuiPagination, { PaginationProps as MuiPaginationProps } from "@mui/material/Pagination";
import MuiPaginationItem from "@mui/material/PaginationItem";

export type PaginationProps = Pick<MuiPaginationProps, "page" | "count" | "onChange">;

const Pagination = (props: PaginationProps) => (
  <MuiPagination
    {...props}
    showFirstButton
    showLastButton
    shape="rounded"
    renderItem={item => (
      <MuiPaginationItem components={{ first: KeyboardDoubleArrowLeft, last: KeyboardDoubleArrowRight }} {...item} />
    )}
  />
);

export default Pagination;
