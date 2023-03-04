import { plural, singular } from 'pluralize'
import { startCase } from "lodash";
import { ResourceInfo } from '../types';



const buildResourceInfo = (slugPlural: string, slugSingular: string = ''): ResourceInfo => {

    slugSingular = (slugSingular.length == 0) ? singular(slugPlural) : slugSingular

    const info: ResourceInfo = {
        slug_plural: slugPlural,
        slug_singular: slugSingular,
        title_plural: startCase(slugPlural),
        title_singular: startCase(slugSingular),
    }
    return info
}

export { buildResourceInfo }