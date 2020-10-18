import * as React from "react";
import { IColDef } from "@mvp-react/react-table-plain";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { TableFooter } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const tableMuiTheme = {
  rootElement: Table,
  rowElement: TableRow,
  cellElement: TableCell,
  headerCellElement: TableCell,
  headerElement: TableHead,
  bodyElement: TableBody,
  footerElement: TableFooter,
  renderSortLabel: (colDef: IColDef, desc: boolean) => (
    <TableSortLabel active direction={desc ? "desc" : "asc"} />
  ),

  // test
  renderExpansionIndicator: (expanded: boolean) => (
    <IconButton
      style={{
        transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        transform: `rotate(${expanded ? 0 : -90}deg)`
      }}
    >
      <ExpandMoreIcon />
    </IconButton>
  )
};
