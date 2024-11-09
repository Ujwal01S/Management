import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";

import { demo_table_data as tableData } from "../../json_data/table_data.json";
import { useReducer, useState } from "react";

type User = {
  firstName: string;
  lastName: string;
  age: string;
  address: string;
};
const defaultData: User[] = tableData;

// type ColumnSort = {
//   id: string;
//   desc: boolean;
// };
// type SortingState = ColumnSort[];

const coloumnHelper = createColumnHelper<User>();

const columns = [
  coloumnHelper.accessor("firstName", {
    header: () => <p className="text-red-700">First Name</p>, //css writen here takes priority
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  coloumnHelper.accessor("lastName", {
    header: () => <p>Last Name</p>,
    cell: (info) => info.getValue(),
  }),
  coloumnHelper.accessor("age", {
    header: () => <p>Age</p>,
    cell: (replaceOfInfo) => replaceOfInfo.getValue(),
  }),
];

export const TanstackTableDemo = () => {
  const [data, setData] = useState(() => [...defaultData]);
//   const rerender = useReducer(() => ({}), {})[1];

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    // : [
    //     {
    //       id: "name",
    //       desc: true,
    //     },
    //   ],
  });

  console.log(table.getState().sorting);

  return (
    <div className="flex justify-center border-2 p-6">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            // this block contains sorting function
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="bg-slate-400 border-2 border-blue-600 px-4"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={`border-2 px-5 flex justify-center items-center ${
                          header.column.getCanSort() ? "cursor-pointer" : ""
                        }`}
                        onClick={header.column.getToggleSortingHandler()}
                        // title={
                        //   header.column.getCanSort()
                        //     ? header.column.getNextSortingOrder() === "asc"
                        //       ? "Sort ascending"
                        //       : header.column.getNextSortingOrder() === "desc"
                        //       ? "Sort descending"
                        //       : "Clear sort"
                        //     : undefined
                        // }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {/* {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null} */}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>

            //this is regular one just to display data

            //     <tr key={headerGroup.id} className="bg-slate-500">
            //       {headerGroup.headers.map((header) => (
            //         // individual table data css is controlled by cell th, td
            //         <th
            //           key={header.id}
            //           className="px-10 border border-blue-600 text-purple-700"
            //         >
            //           {header.isPlaceholder
            //             ? null
            //             : flexRender(
            //                 header.column.columnDef.header,
            //                 header.getContext()
            //               )}
            //         </th>
            //       ))}
            //     </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};
