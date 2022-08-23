import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import config from "../../../config";
import useStore from "../../auth/store/authStore";
import { useToasts } from "react-toast-notifications";
import LoadingSpinner from "../../../components/LoadingSpinner";

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

const UploadUsers = () => {
  const token = useStore((state) => state.token);
  const { addToast } = useToasts();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null as any);
  const [loading, setLoading] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

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
        `${config.baseUrl}/bulkuploadusers`,
        data,
        requestHeader
      );
      addToast("Users upload successfully", { appearance: "success" });
      setLoading(false);
      closeModal();
    } catch (e: any) {
      addToast(e.response.data.message, { appearance: "error" });
      addToast("Users upload failed", { appearance: "error" });
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={openModal}>Upload Users</button>
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

        <form onSubmit={uploadFile}>
          <input
            type='file'
            accept='.xls,.xlsx,.csv'
            onChange={(e) => handleChange(e)}
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-4'
          />

          <div className='flex'>
            <a
            href={`${config.baseUrl}/downloadtieusersamplefile`}
              className=' text-green-500 hover:text-white hover:bg-green-500 appearance-none w-full py-2 px-4 leading-tight mt-4'>
              Download file
            </a>
            <button
              className='bg-green-400 text-white hover:bg-green-500 appearance-none border-2 bordergreen-400 rounded w-full py-2 px-4 leading-tight mt-4'
              type='submit'
            >
              {loading ? <LoadingSpinner size={"6"} /> : "Upload"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UploadUsers;
