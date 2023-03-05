import {TableColumns} from "./Components/AppTable/types";

export type ResourceInfo = {
    slug_plural: string,
    slug_singular: string,
    title_plural: string,
    title_singular: string,
    columns: TableColumns
};

export interface IResourceFilters {
    search: string,
    trashed: boolean
}