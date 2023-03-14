import {VNodeChild} from "vue";
import { ResourceInfo } from "../../types";
import {VNode} from "@vue/runtime-core";

export type ColumnKey = string | number
export type InternalRowData = Record<string, unknown>
export type RowData = Record<string, any>

// See https://laravel.com/docs/master/migrations#creating-columns
export type TableColumnType =
    | 'boolean'
    | 'dateTime'
    | 'date'
    | 'decimal'
    | 'enum'
    | 'float'
    | 'relation' // Link to related object ex: Contact.account_id to the related Account
    | 'id'
    | 'integer'
    | 'string'
    | 'text'
    | 'time'

export type TableCellProps = {

};

export type TableRenderProps = {
    icon?: string,
    as?: string
}

export type TableBaseColumn<T = InternalRowData> = {
    title?: TableColumnTitle,
    key: ColumnKey,
    type: TableColumnType,
    linkable?: boolean,
    render?: string | ((rowData: T, rowIndex: number) => VNodeChild)
    renderProps?: TableRenderProps,
    table?: boolean // Should the column be displayed in tables
    view?: boolean // Should the column be displayed resource view box
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

export type tableCellRenderer = (row: RowData, col: TableColumn,  props?: TableRenderProps) => VNode