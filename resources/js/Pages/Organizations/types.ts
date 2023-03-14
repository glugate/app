import {TableColumnType} from "@/Components/AppTable/types";
import {buildResourceInfo} from "@/Helpers/resourceMetaHelper";

/**
 * Resource column definition:
 *  - columns shown in tables
 *  - form fields
 */
export const columns = [
    {
        type: "string" as TableColumnType,
        key: "name",
        table: true,
        linkable: true
    },
    {
        type: "string" as TableColumnType,
        key: "email",
        table: false,
        view: true,
    },
    {
        type: "string" as TableColumnType,
        key: "country",
        table: true,
        view: true,
        /*render(row: RowData){
          return 'OK'
        }*/
    },
    {
        type: "string" as TableColumnType,
        key: "postal_code",
        table: false,
        view: true,
    },
    {
        type: "string" as TableColumnType,
        key: "city",
        table: true,
        view: true,
    },
    {
        type: "string" as TableColumnType,
        key: "phone",
        table: true,
        view: true,
        render: 'text_with_icon',
        renderProps: {
            icon: 'PhoneFilled'
        }
    },
    {
        type: "string" as TableColumnType,
        key: "address",
        table: true,
        view: true,
        render: 'text_with_icon',
        renderProps: {
            icon: 'MapMarker'
        }
    },
    {
        type: "string" as TableColumnType,
        key: "region",
        table: false,
        view: true,
    },

];

export const resourceInfo = buildResourceInfo('organisations', columns)