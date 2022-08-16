import React, { useEffect } from "react";
import { useTable, useRowSelect } from "react-table";
import Spinner from "../Spinner";

export default function TableWithCheck({ columns, data, isLoading = false, setSelectedRows = () => {} }) {
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);
      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      );
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({ columns, data }, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => [
      // Let's make a column for selection
      {
        id: "selection",
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        Cell: ({ row }) => {
          // const { original } = row;
          // console.log("kdkdkddk", row.getToggleRowSelectedProps());
          const checkProps = row.getToggleRowSelectedProps();
          return (
            <div>
              <IndeterminateCheckbox {...checkProps} />
            </div>
          );
        },
      },
      ...columns,
    ]);
  });

  // console.log('flatRows', selectedFlatRows);
  useEffect(() => {
    setSelectedRows(selectedFlatRows.map(
      d => d.original
    ));
  }, [selectedFlatRows, setSelectedRows]);

  return (
    <div className="mt-2 mb-5 flex flex-col overflow-x-auto border">
      <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-200"
            >
              <thead className="bg-gray-50">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell, index) => {
                        return (
                          <td
                            key={index}
                            {...cell.getCellProps}
                            className="px-6 py-4 whitespace-nowrap"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {data.length === 0 ? (
              <div className="bg-gray-50 no-table-data">
                {isLoading ? (
                  <Spinner size={20} color="primary" />
                ) : (
                  <div
                    className="flex flex-col"
                    style={{ alignItems: "center" }}
                  >
                    <svg
                      width="36"
                      height="30"
                      viewBox="0 0 36 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.1995 10.7998H6.19993L2 28.9995H29.9995L34.1995 10.7998Z"
                        stroke="#009688"
                        strokeOpacity="0.4"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M2 28.9995V1H11.0999L13.8998 4.49994H32.0995V10.7998"
                        stroke="#009688"
                        strokeOpacity="0.4"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                    <span className="mt-2">No Data</span>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
