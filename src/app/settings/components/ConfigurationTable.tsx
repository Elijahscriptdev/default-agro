import { useTable } from "react-table";
import LoadingSpinner from "../../../components/LoadingSpinner";



const ConfigurationTable = ({ columns, data, loading }: any) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });
    return (
        <div className='mt-2 flex flex-col'>
            <div className='-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8'>
                <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                    <div className='shadow-sm overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                        <table
                            {...getTableProps()}
                            className='min-w-full divide-y divide-gray-100'
                        >
                            <thead className=''>
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th
                                                {...column.getHeaderProps()}
                                                scope='col'
                                                className='px-6 py-4 text-left text-sm text-gray-500 tracking-wider'
                                            >
                                                {column.render("Header")}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>

                            <tbody
                                {...getTableBodyProps()}
                                className='bg-white divide-y divide-gray-100'
                            >
                                {rows?.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()} className="odd:bg-green-50">
                                            {row.cells.map((cell) => {
                                                return (
                                                    <td
                                                        {...cell.getCellProps()}
                                                        className='px-6 py-6 text-sm whitespace-nowrap font-light'
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
                        {loading && <div className="flex justify-center items-center md:h-60 h-48 w-full"><LoadingSpinner color="border-green-700" /></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigurationTable