import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import config from "../../../config";
import useStore from "../../auth/store/authStore";
import Drawer from "../../layout/Drawer";
import { VerificationResponse } from "../types/verification.types";

type RouteParams = {
  id: string;
};

const VerificationDetails: React.FC = () => {
  const token = useStore((state) => state.token);
  let { id } = useParams<RouteParams>();

  const requestHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data, isFetching } = useQuery<VerificationResponse>(
    "verificationData",
    () =>
      axios
        .get(`${config.baseUrl}/verification-point/${id}`, requestHeader)
        .then((res) => res.data)
  );

  const coordinates = data?.coord.split(":");

  console.log("data", data);

  return (
    <div className='flex flex-row '>
      <Drawer />
      <div className='flex flex-row w-4/5 flex-grow bg-green'>
        {isFetching ? (
          <p className='text-green-700'>
            <LoadingSpinner size={"6"} color='border-green-700' />
          </p>
        ) : (
          <div className=' w-full mx-auto flex flex-col p-10'>
            <h2 className='text-xl text-gray-500 font-bold mb-5'>
              Unique ID: {id}
            </h2>

            <div className='flex flex-col'>
              <div className='flex flex-row border-b-2 border-gray-100 pb-8'>
                <div className='w-1/2'>
                  <img src={data?.image_url} alt='img' />
                </div>

                <div className='w-1/2'>
                  <h2 className='text-lg text-gray-500 font-bold mb-5'>
                    User Provided Info
                  </h2>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500 mb-3'>
                      Partner:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.partner}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500  mb-3'>
                      Crop:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.crop}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500  mb-3'>
                      Co-ordinates:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      <ul>
                        {coordinates?.map((coord, id) => (
                          <>
                            <li key={id}>{coord}</li>
                          </>
                        ))}
                      </ul>
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500 mb-3'>
                      Country:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.country}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500 mb-3'>
                      City:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.lga}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500 mb-3'>
                      State:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-row pt-8'>
                <div className='w-1/2'>
                  <h2 className='text-lg text-gray-500 font-bold mb-5'>
                    Actions
                  </h2>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500  mb-3'>
                      Overlay Check:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.overlay}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500 mb-3'>
                      Vegetation Check:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.overall_status}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500 mb-3'>
                      Within Country:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.within_country}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500 mb-3'>
                      Within State:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.within_state}within_lga
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500 mb-3'>
                      Within LGA:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.within_lga}
                    </p>
                  </div>
                </div>

                <div className='w-1/2'>
                  <h2 className='text-lg text-black-500 font-bold mb-5'>
                    Returned Information
                  </h2>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500  mb-3'>
                      Country:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.returned_country}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500 mb-3'>
                      State:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.returned_state}
                    </p>
                  </div>
                  <div className='grid grid-cols-2 gap-1'>
                    <h3 className='text-sm text-gray-500 mb-3'>
                      LGA:
                    </h3>
                    <p className='ml-10 text-sm text-gray-500 font-bold'>
                      {data?.returned_lga}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationDetails;
