import { plural, singular } from 'pluralize'
import { startCase } from "lodash";
import { ResourceInfo } from '../types';
import {TableColumns} from "../Components/AppTable/types";

const buildResourceInfo = (slugPlural: string, columns: TableColumns): ResourceInfo => {
    const slugSingular = singular(slugPlural)
    const info: ResourceInfo = {
        slug_plural: slugPlural,
        slug_singular: slugSingular,
        title_plural: startCase(slugPlural),
        title_singular: startCase(slugSingular),
        columns: initColumns(columns)
    }
    return info
}

const initColumns = (columns: TableColumns): TableColumns => {
    return columns.map(col => {
        col.title = col.title ?? startCase(col.key as string)
        return col
    })
}

export { buildResourceInfo }