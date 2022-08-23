import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import UserTable from "../components/UserTable";
import { AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from "react-query";
import dayjs from "dayjs";
import { getUsers } from "../usersApi";
import { UsersResponse } from "../types/user.types";
import Drawer from "../../layout/Drawer";
import LoadingSpinner from "../../../components/LoadingSpinner";
import UploadUsers from "../components/UploadUsers";

const Users: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");

  // onChange function for select
  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const setNext = () => {
    setPage(page + 1);
  };

  const { data, isLoading } = useQuery<UsersResponse>(
    [Users, limit, page, query],
    () => getUsers(limit, page, query)
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Group",
        accessor: "role",
      },
      {
        Header: "Tenant",
        accessor: "tenant",
        Cell: ({ row }: any) => {
          const { original } = row;
          return <span>{original?.tenant?.name}</span>;
        },
      },
      {
        Header: "Last Login",
        accessor: "last_login",
        Cell: ({ value }: { value: string }) => {
          return (
            <span>{value ? dayjs(value).format("YYYY/MM/DD hh:mm") : ""}</span>
          );
        },
      },
      {
        Header: "Edit",
        accessor: "id",
        Cell: ({ value, row }: any) => {
          return (
            <button>
              <Link to={{ pathname: `/user/edit/${value}` }}>
                <AiOutlineEdit style={{ fontSize: 18 }} />
              </Link>
            </button>
          );
        },
      },
      {
        Header: "Delete",
        Cell: () => {
          return (
            <button>
              <RiDeleteBin6Line style={{ fontSize: 18 }} />
            </button>
          );
        },
      },
    ],
    []
  );

  const tableData = useMemo(() => data?.data || [], [data]);

  return (
    <>
      <div className='flex flex-row'>
        <Drawer />

        <div className='flex flex-row w-4/5 flex-grow'>
          <div className=' w-full mx-auto flex flex-col p-10'>
            <h2 className='text-xl text-black-500 font-bold mb-5'>All Users</h2>

            <div className='flex justify-between content-center mb-5 flex-wrap md:flex-column'>
              <div className='search flex relative text-gray-600 focus-within:text-gray-400 border-green-500 mt-2'>
                <div className='absolute inset-y-0 left-0 text-gray-500 flex items-center pl-2'>
                  <AiOutlineSearch />
                </div>
                <input
                  type='text'
                  placeholder='Search'
                  onChange={(e) => setQuery(e.target.value)}
                  className='py-2 border-2 border-green-500 text-sm text-gray-500 rounded-md pl-10 outline-none focus:text-gray-500'
                />
              </div>
              <div className='cta-btns-wrapper flex flex-wrap mt-2'>
                <button className='bg-green-600 text-white py-2 px-2 rounded-md hover:bg-green-500'>
                  <Link to='/user/add'> Create New User </Link>
                </button>
                <button className='ml-2 bg-green-600 text-white py-2 px-2 rounded-md hover:bg-green-500'>
                  <UploadUsers />
                </button>
              </div>
            </div>
            {isLoading ? (
              <p className='text-green-700'>
                <LoadingSpinner size={"6"} color='border-green-700' />
              </p>
            ) : (
              <>
                <UserTable columns={columns} data={tableData} />
              </>
            )}
            <div className='flex justify-end mt-5 my-20'>
              <div className='filter-input mr-20'>
                <label>Rows per page: </label>
                <select onChange={(e) => handleLimitChange(e)}>
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='50'>50</option>
                  <option value='100'>100</option>
                </select>
              </div>
              <div className='flex text-green-500'>
                <button disabled={page <= 1} onClick={() => setPrev()}>
                  <IoIosArrowBack />
                </button>
                <p className='px-4 text-black'>Page {page}</p>
                <button
                  disabled={page >= (data?.totalpages ?? 0)}
                  onClick={() => setNext()}
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
