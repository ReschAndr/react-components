/// <reference types="react" />
import { ITablePlainProps } from "@mvp-react/react-table-plain";
declare function renderError(load: any, errorText?: string, reloadText?: string): JSX.Element;
export declare const datagridMuiTheme: {
    renderTable: (ps: ITablePlainProps) => JSX.Element;
    renderLoading: () => JSX.Element;
    renderError: typeof renderError;
    renderPaging: ({ total, rowsPerPage, page, labelRowsPerPage, backIconButtonText, nextIconButtonText, labelDisplayedRows, handleChangePage, handleChangeRowsPerPage }: any) => JSX.Element;
};
export {};
