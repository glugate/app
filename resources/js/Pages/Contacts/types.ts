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
        view: false, // Displayed in header
        table: true,
        linkable: true,
        sortable: true,
    },
    {
        type: "string" as TableColumnType,
        key: "email",
        table: true,
        view: true,
        sortable: true,
    },
    {
        type: "string" as TableColumnType,
        key: "country",
        table: true,
        view: true,
    },
    {
        type: "string" as TableColumnType,
        key: "postal_code",
        view: true,
    },
    {
        type: "string" as TableColumnType,
        key: "city",
        view: true,
    },
    {
        type: "string" as TableColumnType,
        key: "phone",
        view: true,
        table: true,
        render: 'text_with_icon',
        renderProps: {
            icon: 'PhoneFilled'
        }
    },
    {
        type: "string" as TableColumnType,
        key: "address",
        view: true,
        render: 'text_with_icon',
        renderProps: {
            icon: 'MapMarker'
        }
    },
    {
        type: "string" as TableColumnType,
        key: "region",
        view: true,
    },
    {
        type: "relation" as TableColumnType,
        key: "organization",
        render: 'relation',
        view: true,
        table: true,
        sortable: true,
    },
];

export const resourceInfo = buildResourceInfo('contacts', columns)