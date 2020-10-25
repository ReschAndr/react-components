import * as React from "react";
import { SortDirection } from "@mvp-react/react-table-plain";
import { OnLoadData } from ".";
import { IState } from "./IState";
export interface IDataState extends IState {
    setTotal: (total: number) => void;
    setPage: (page: number) => void;
    setRowsPerPage: (rpp: number) => void;
    setOrderBy: (orderBy: string) => void;
    setSort: (sort: SortDirection | undefined) => void;
    setFilter: (filter: {
        [key: string]: any;
    } | undefined) => void;
    allowLoad: boolean;
    setAllowLoad: React.Dispatch<React.SetStateAction<boolean>>;
    error: boolean;
    loading: boolean;
    data: any[];
    reload: () => void;
    handleChangePage(p: number): void;
    handleChangeRowsPerPage(rows: number): void;
    handleChangeOrderBy(ob: string): void;
    handleChangeFilter(ob: string, value: any): void;
    load(): void;
}
export interface IPersistState {
    store: "localStorage" | "sessionStorage";
    uniqueID: string;
}
export interface IUseDataStateProps {
    onLoadData: OnLoadData;
    initialRowsPerPage?: number;
    initialOrderBy?: string;
    initialSort?: SortDirection;
    initialLoad?: boolean;
    initialPage?: number;
    initialFilter?: {
        [key: string]: any;
    };
    persistState?: IPersistState;
}
export declare function useDataState(props: IUseDataStateProps): IDataState;
export declare namespace useDataState {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            onLoadData: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            initialRowsPerPage: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            initialOrderBy: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            initialSort: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            initialLoad: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            initialPage: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            initialFilter: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            persistState: {
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
