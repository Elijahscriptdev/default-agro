import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import config from "../../../config";
import useStore from "../../auth/store/authStore";
import { useToasts } from "react-toast-notifications";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Can from "../../../utils/rbac/Can";
import { useQuery } from "react-query";
import { TenantResponse } from "../../tenants/tenant.type";
import Tenants from "../../tenants/pages/Tenants";
import { getTenants } from "../../tenants/tenantsApi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const UploadVerification: React.FC = () => {
  const token = useStore((state) => state.token);
  const user = useStore((state) => state.user);

  const { addToast } = useToasts();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null as any);
  const [loading, setLoading] = useState(false);
  const [limit] = useState(1000);
  const [page] = useState(1);
  const [query] = useState("");
  const [selectedTenant, setSelectedTenant] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  //get tenants
  const { data: tenants } = useQuery<TenantResponse>(
    [Tenants, limit, page, query],
    () => getTenants(limit, page, query)
  );

  const tenant = tenants?.data ?? [];

  //onchange function to handle the file upload
  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  //function to upload the file
  const uploadFile = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    const requestHeader = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(
        `${config.baseUrl}/bulkverification`,
        data,
        requestHeader
      );
      addToast("Bulk verification upload successful", {
        appearance: "success",
      });
      setLoading(false);
      closeModal();
    } catch (e: any) {
      addToast(e.response.data.message, { appearance: "error" });
      addToast("Bulk verification upload failed", { appearance: "error" });
      setLoading(false);
    }
  };

  //function to uploadFileAdmin
  const uploadFileAdmin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("id_of_tenant", selectedTenant);
    const requestHeader = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(
        `${config.baseUrl}/bulkverificationforsuperadmin`,
        data,
        requestHeader
      );
      addToast("Bulk verification upload successful", {
        appearance: "success",
      });
      setLoading(false);
      closeModal();
    } catch (e: any) {
      addToast(e.response.data.message, { appearance: "error" });
      addToast("Bulk verification upload failed", { appearance: "error" });
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={openModal}>Upload</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='flex justify-end'>
          <button onClick={closeModal} className=''>
            <AiOutlineCloseCircle />
          </button>
        </div>

        <Can
          role={user.role}
          perform='upload:visit'
          yes={() => (
            <form onSubmit={uploadFile}>
              <input
                type='file'
                accept='.xls,.xlsx,.csv'
                onChange={(e) => handleChange(e)}
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-4'
              />

              <button
                className='bg-green-400 text-white hover:bg-green-500 appearance-none border-2 bordergreen-400 rounded w-full py-2 px-4 leading-tight mt-4'
                type='submit'
              >
                {loading ? <LoadingSpinner size={"6"} /> : "Upload"}
              </button>
            </form>
          )}
          no={() => null}
        />

        <Can
          role={user.role}
          perform='adminupload:visit'
          yes={() => (
            <form onSubmit={uploadFileAdmin}>
              <div className='flex'>
                <input
                  type='file'
                  accept='.xls,.xlsx,.csv'
                  onChange={(e) => handleChange(e)}
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-4'
                />
                <select
                  placeholder='Tenants'
                  className='form-select w-1/2 border-none bg-green-500 text-sm text-white rounded-md outline-none ml-2 mt-4 px-2'
                  onChange={(e) => {
                    setSelectedTenant(e.target.value);
                  }}
                >
                  <option value=''>Tenants</option>
                  {tenant.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className='bg-green-400 text-white hover:bg-green-500 appearance-none border-2 bordergreen-400 rounded w-full py-2 px-4 leading-tight mt-4'
                type='submit'
              >
                {loading ? <LoadingSpinner size={"6"} /> : "Upload"}
              </button>
            </form>
          )}
          no={() => null}
        />
      </Modal>
    </div>
  );
};

export default UploadVerification;
