import * as React from "react";
import { IColDef, ITablePlainProps as ITableProps, SortDirection } from "@mvp-react/react-table-plain";
import { IState } from "./IState";
import { IDataState, IUseDataStateProps } from "./useDataState";
export declare type OnLoadData = (page: number, rowsPerPage: number, orderBy: string | undefined, sort: SortDirection | undefined, filter: {
    [key: string]: any;
} | undefined) => Promise<{
    total: number;
    data: any[];
}>;
export interface IRenderPagingProps extends IState {
    backIconButtonText?: string;
    nextIconButtonText?: string;
    labelRowsPerPage?: string;
    labelDisplayedRows?: ({ count, from, to, }: {
        count?: number;
        from?: number;
        to?: number;
    }) => string;
    handleChangePage: (page: number) => void;
    handleChangeRowsPerPage: (rows: number) => void;
}
export interface IDataGridTexts {
    errorText?: string;
    loadingText?: string;
    pagingText?: string;
    reloadText?: string;
    backIconButtonText?: string;
    nextIconButtonText?: string;
    labelRowsPerPage?: string;
    labelDisplayedRows?: ({ count, from, to, }: {
        count?: number;
        from?: number;
        to?: number;
    }) => string;
}
export interface IDataGridWithExternalStateProps extends IDataGridProps {
    state?: IDataState;
}
export interface IDataGridWithInternalStateProps extends IDataGridProps, IUseDataStateProps {
}
export interface IDataGridProps {
    texts?: IDataGridTexts;
    colDef: IColDef[];
    disablePaging?: boolean;
    tableTheme?: any;
    onRowClick?: (data: any) => void;
    subComponent?: (data: any) => React.ReactNode;
    renderTable?: (ps: ITableProps) => React.ReactElement;
    renderLoading?: () => React.ReactElement;
    renderError?: (load: () => void, errorText?: string, reloadText?: string) => React.ReactElement;
    renderPaging?: (props: IRenderPagingProps) => React.ReactElement;
    renderHeaderCell?: (col: IColDef, idx: number) => React.ReactNode;
    renderFooterCell?: (col: IColDef, data: any[], idx: number) => React.ReactNode;
    renderFilter?: (col: IColDef, idx: number) => React.ReactNode;
    renderExpansionIndicator?: (expanded: boolean) => React.ReactNode;
    rowProps?: (data: any) => object;
    cellProps?: (data: any) => object;
    ellipsis?: boolean;
    selectedRow?: any | any[];
    onChangeSelectedRow?: (data: any) => void;
    selectedRowProps?: (data: any) => object;
    rowSelectionColumnName?: string;
}
export declare function DataGridPlain(props: IDataGridWithInternalStateProps | IDataGridWithExternalStateProps): JSX.Element;
export declare namespace DataGridPlain {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            texts: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            colDef: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            disablePaging: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            tableTheme: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            onRowClick: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            subComponent: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            renderTable: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            renderLoading: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            renderError: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            renderPaging: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            renderHeaderCell: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            renderFooterCell: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            renderFilter: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            renderExpansionIndicator: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            rowProps: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            cellProps: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            ellipsis: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            selectedRow: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            onChangeSelectedRow: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            selectedRowProps: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            rowSelectionColumnName: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            state: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
}
