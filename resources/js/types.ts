import {TableColumns} from "./Components/AppTable/types";

export type ResourceInfo = {
    slug_plural: string,
    slug_singular: string,
    title_plural: string,
    title_singular: string,
    columns: TableColumns
};

export type AppData = {
    main_menu : IMenu
}

export interface IResourceFilters {
    search: string,
    trashed: boolean
}

export type AppMenuItem = {
    name: string,
    label: string,
    slug: string,
    fullSlug: string,
    icon: string,
    children: AppMenuItem[]
    parent?: AppMenuItem,
    isSelected?: boolean,
}

export interface IMenu {
    name: string,
    items: AppMenuItem[],
    isMobile?: boolean,
}

