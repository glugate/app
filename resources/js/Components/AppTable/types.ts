import {VNodeChild} from "vue";
import { ResourceInfo } from "../../types";

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
    | 'foreignId' // Link to related object ex: Contact.account_id to the related Account
    | 'id'
    | 'integer'
    | 'string'
    | 'text'
    | 'time'

export type TableCellProps = {

};

export type TableRenderProps = {
    icon?: string
}

export type TableBaseColumn<T = InternalRowData> = {
    title?: TableColumnTitle,
    key: ColumnKey,
    type: TableColumnType,
    linkable?: boolean,
    render?: string | ((rowData: T, rowIndex: number) => VNodeChild)
    renderProps?: TableRenderProps
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