import {VNodeChild} from "vue";
import { ResourceInfo } from "../../types";

export type ColumnKey = string | number
export type InternalRowData = Record<string, unknown>
export type RowData = Record<string, any>

export type TableMeta = {
    resourceInfo : ResourceInfo
}

export type TableBaseColumn<T = InternalRowData> = {
    title?: TableColumnTitle,
    key: ColumnKey,
    linkable?: boolean,
    render?: (rowData: T, rowIndex: number) => VNodeChild
}

export type TableColumnTitle =
    | string
    | ((column: TableBaseColumn) => VNodeChild)

export type TableColumn<T = InternalRowData> = TableBaseColumn<T>
export type TableColumns<T = InternalRowData> = Array<TableColumn<T>>

export type PaginateLink = {
    url: string;
    label: string;
    active: boolean;
};

export type Paginate<T = any> = {
    data: T[];
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginateLink[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
};