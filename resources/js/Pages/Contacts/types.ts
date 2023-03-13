import { TableColumnType } from "@/Components/AppTable/types";
import { buildResourceInfo } from "@/Helpers/resourceMetaHelper";

/**
 * Resource column definition:
 *  - columns shown in tables
 *  - form fields
 */
export const columns =  [
    {
      type: "string" as TableColumnType,
      key: "name",
      linkable: true
    },
    {
      type: "string" as TableColumnType,
      key: "country",
      /*render(row: RowData){
        return 'OK'
      }*/
    },
    {
      type: "string" as TableColumnType,
      key: "city"
    },
    {
      type: "string" as TableColumnType,
      key: "phone",
      render: 'text_with_icon',
      renderProps: {
        icon: 'PhoneFilled'
      }
    },
    {
      type: "string" as TableColumnType,
      key: "address",
      render: 'text_with_icon',
      renderProps: {
        icon: 'MapMarker'
      }
    }
  ];

  export const resourceInfo = buildResourceInfo('contacts', columns)