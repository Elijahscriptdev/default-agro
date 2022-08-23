import React, { useEffect, useState, useMemo } from "react";
import Drawer from "../../layout/Drawer";
import one from "../../../images/one.png";
import two from "../../../images/two.png";
import three from "../../../images/three.png";
import four from "../../../images/four.png";
import config from "../../../config";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import {
  getEntities,
  getSummary,
  getVerificationList,
} from "../verificationApi";
import {
  EntityResponse,
  Summary,
  VerificationResponse,
} from "../types/verification.types";
import { FiEye, FiSettings } from "react-icons/fi";
import VerificationTable from "../components/VerificationTable";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import dayjs from "dayjs";
import { useHistory } from "react-router";
import UploadVerification from "../components/UploadVerification";
import Can from "../../../utils/rbac/Can";
import useStore from "../../auth/store/authStore";

const VerificationList: React.FC = () => {
  const user = useStore((state) => state.user);
  // console.log("user", user.tenant_id);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const history = useHistory();
  const [selectedTenant, setSelectedTenant] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedPartner, setSelectedPartner] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
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

  // get Summary
  const { data: cards } = useQuery<Summary[]>("summary", getSummary);

  // get entities
  const { data: entities } = useQuery<EntityResponse>("Entities", getEntities);

  // getVerificationList
  const { data, isLoading } = useQuery<VerificationResponse>(
    [
      VerificationList,
      limit,
      page,
      selectedTenant,
      selectedStatus,
      selectedPartner,
      selectedProvider,
      selectedState,
      selectedCrop,
      query,
    ],
    () =>
      getVerificationList(
        limit,
        page,
        selectedTenant,
        selectedStatus,
        selectedPartner,
        selectedProvider,
        selectedState,
        selectedCrop,
        query
      )
  );

  const crops = entities?.crops ?? [];
  const partners = entities?.partners ?? [];
  const providers = entities?.providers ?? [];
  const states = entities?.states ?? [];
  const tenants = entities?.tenants ?? [];

  const [passed, setPassed] = useState(0);
  const [failed, setFailed] = useState(0);
  const [pending, setPending] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cards) {
      const passedInfo = cards.find((card) => card.overall_status === "PASS");
      passedInfo && setPassed(passedInfo.total_no);

      const failedInfo = cards.find((card) => card.overall_status === "FAIL");
      failedInfo && setFailed(failedInfo.total_no);

      const pendingInfo = cards.find(
        (card) => card.overall_status === "IN PROGRESS"
      );
      pendingInfo && setPending(pendingInfo.total_no);

      passedInfo &&
        failedInfo &&
        pendingInfo &&
        setTotal(
          passedInfo.total_no + failedInfo.total_no + pendingInfo.total_no
        );
    }
  }, [cards]);

  const columns = useMemo(
    () => [
      {
        Header: "Unique ID",
        accessor: "id",
      },
      {
        Header: "Cluster Name",
        accessor: "cluster_name",
      },
      {
        Header: "Created",
        accessor: "created",
        Cell: ({ value }: any) => {
          return (
            <span>{value ? dayjs(value).format("YYYY/MM/DD hh:mm") : ""}</span>
          );
        },
      },
      {
        Header: "Result",
        accessor: "overall_status",
      },
      {
        Header: "Vegetation",
        accessor: "status",
      },
      {
        Header: "Within State",
        accessor: "within_state",
      },
      {
        Header: "Overlay",
        accessor: "overlay",
      },

      {
        Header: "View",
        Cell: ({ row }: any) => {
          const { original } = row;
          // console.log("original", original);
          return (
            <button
              onClick={() => history.push(`/verification/${original.id}`)}
            >
              <FiEye style={{ fontSize: 18 }} />
            </button>
          );
        },
      },
      {
        Header: "Analyze",
        Cell: ({ row }: any) => {
          // const { original } = row;
          return (
            <button>
              <FiSettings style={{ fontSize: 18 }} />
            </button>
          );
        },
      },
    ],
    [history]
  );

  const tableData = useMemo(() => data?.points || [], [data]);

  return (
    <div className='flex flex-row '>
      <Drawer />
      <div className='flex flex-row w-4/5 flex-grow bg-green'>
        <div className=' w-full mx-auto flex flex-col p-10'>
          {/* filters */}
          <div className='flex justify-between w-full mb-10'>
            <Can
              role={user.role}
              perform='tenants:visit'
              yes={() => (
                <select
                  placeholder='Tenants'
                  className='form-select block w-20 py-2 border-none bg-green-500 text-sm text-white rounded-md outline-none'
                  onChange={(e) => {
                    setSelectedTenant(e.target.value);
                  }}
                >
                  <option value=''>Tenants</option>
                  {tenants.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              )}
              no={() => null}
            />

            <select
              placeholder='Providers'
              className='form-select block w-20 py-2 border-none bg-green-500 text-sm text-white rounded-md outline-none'
              onChange={(e) => {
                setSelectedProvider(e.target.value);
              }}
            >
              <option value=''>Providers</option>
              {providers.map((item, i) => (
                <option key={i} value={item.provider}>
                  {item.provider}
                </option>
              ))}
            </select>
            <select
              placeholder='Anchor'
              className='form-select block w-20 py-2 border-none bg-green-500 text-sm text-white rounded-md outline-none'
              onChange={(e) => {
                setSelectedPartner(e.target.value);
              }}
            >
              <option value=''>Partners</option>
              {partners.map((item, i) => (
                <option key={i} value={item.partner}>
                  {item.partner}
                </option>
              ))}
            </select>
            <select
              placeholder='Result'
              className='form-select block w-20 py-2 border-none bg-green-500 text-sm text-white rounded-md outline-none'
              onChange={(e) => {
                setSelectedStatus(e.target.value);
              }}
            >
              <option value=''>Results</option>
              <option value='PASS'>PASS</option>
              <option value='FAIL'>FAIL</option>
              <option value='IN PROGRESS'>IN PROGRESS</option>
            </select>
            <select
              placeholder='States'
              className='form-select block w-20 py-2 border-none bg-green-500 text-sm text-white rounded-md outline-none'
              onChange={(e) => {
                setSelectedState(e.target.value);
              }}
            >
              <option value=''>States</option>
              {states.map((state) => (
                <option key={state.state} value={state.state}>
                  {state.state}
                </option>
              ))}
            </select>

            <select
              placeholder='Crop'
              className='form-select block w-20 py-2 border-none bg-green-500 text-sm text-white rounded-md outline-none'
              onChange={(e) => {
                setSelectedCrop(e.target.value);
              }}
            >
              <option value=''>Crops</option>
              {crops.map((item, i) => (
                <option key={i} value={item.crop}>
                  {item.crop}
                </option>
              ))}
            </select>
          </div>

          {/* card wrapper */}
          <div className='flex justify-between'>
            <div className='shadow rounded h-24 w-48 p-5'>
              <div className='flex justify-between'>
                <p>Total</p>
                <img src={one} alt='img' className='w-4 h-4' />
              </div>
              <p>{total}</p>
            </div>
            <div className='shadow rounded h-24 w-48 p-5'>
              <div className='flex justify-between'>
                <p>Passed</p>
                <img src={two} alt='img' className='w-4 h-4' />
              </div>
              <p>{passed}</p>
            </div>
            <div className='shadow rounded h-24 w-48 p-5'>
              <div className='flex justify-between'>
                <p>Failed</p>
                <img src={three} alt='img' className='w-4 h-4' />
              </div>
              <p>{failed}</p>
            </div>
            <div className='shadow rounded h-24 w-48 p-5'>
              <div className='flex justify-between'>
                <p>Pending</p>
                <img src={four} alt='img' className='w-4 h-4' />
              </div>
              <p>{pending}</p>
            </div>
          </div>

          {/* search and download button */}
          <div className='flex justify-between mt-10'>
            <div className='search flex relative text-gray-600 focus-within:text-gray-400 border-green-500'>
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

            <div className='flex justify-between'>
              <a
                href={`${config.baseUrl}/downloadsamplefile`}
                className='text-white'
              >
                <button className='w-full bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-500'>
                  Download
                </button>
              </a>

              <button className='ml-2 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-500'>
                <UploadVerification />
              </button>
            </div>
          </div>

          {isLoading ? (
            <p className='text-green-700'>
              <LoadingSpinner size={"6"} color='border-green-700' />
            </p>
          ) : (
            <>
              <VerificationTable columns={columns} data={tableData} />
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
  );
};

export default VerificationList;
