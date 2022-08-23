import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import { BiEditAlt as EditIcon } from "react-icons/bi";
import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";
import { Search as SearchIcon } from "../../components/icons/search";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import CustomSelect from "../../components/common/CustomSelect";
import CustomSearchField from "../../components/common/CustomSearchField";
import Button from "../../components/common/Button";
import Dialog from "../../components/Modals/Dialog";
import Spinner from "../../components/Spinner";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";

import {
  AddCategory as AddCategoryModalContent,
  AddTask as AddTaskModalContent,
  DeleteActivity as DeleteActivityModalContent,
} from "./ModalContents";

import {
  getCropCalendar,
  getCropProfiles,
  getActivityCategories,
} from "../../redux/actions/ConfigurationsActions";

function CropCalendarSection() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");

  const [tasks, setTasks] = useState("");
  const [categories, setCategory] = useState("");
  const [status] = useState("");

  const queryRef = useRef(null);

  const activityCategories = useSelector(
    (state) => state.ConfigReducer.activityCategories?.data || []
  );

  // console.log(activityCategories);

  const cropCalendar = useSelector((state) => state.ConfigReducer.cropCalendar);

  const crops = useSelector(
    (state) => state.ConfigReducer.cropProfiles?.data || []
  );

  // onChange function for select
  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const setNext = () => {
    setPage(page + 1);
  };

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "add-category":
            // console.log(data);
            setDialogContent(
              <AddCategoryModalContent
                closeHandler={handleModalClose}
                cropProfiles={crops}
                activityCategories={activityCategories}
              />
            );
            break;

          case "add-task":
            setDialogContent(
              <AddTaskModalContent
                closeHandler={handleModalClose}
                cropProfiles={crops}
                activityCategories={activityCategories}
              />
            );
            break;

          case "delete-activity":
            setDialogContent(
              <DeleteActivityModalContent
                closeHandler={handleModalClose}
                data={data}
              />
            );
            break;

          default:
            setDialogContent(null);
            break;
        }
        setShowModal(true);
      },
    [activityCategories, crops]
  );

  useEffect(() => {
    const taskFilters = {
      page,
      search: query
    };

    if (tasks !== '') {
      taskFilters.task_name = tasks;
    } else {
      delete taskFilters.task;
    }

    if (categories !== '') {
      taskFilters.category = categories;
    } else {
      delete taskFilters.category;
    }

    if (status === "") {
      delete taskFilters.status;
    } else {
      taskFilters.status = status;
    }

    dispatch(getCropProfiles());
    dispatch(getActivityCategories());
    dispatch(getCropCalendar(taskFilters));
  }, [categories, dispatch, page, query, status, tasks]);

  const columns = useMemo(
    () => [
      {
        Header: "Category",
        accessor: "category.category",
      },
      {
        Header: "Task",
        accessor: "task",
      },
      {
        Header: "Crop Profile",
        accessor: "crop_profile.crop_name",
      },
      {
        Header: "Expected Done Date",
        accessor: "due_date",
      },
      {
        Header: "Weight On Yield",
        accessor: "crop_profile.yield",
      },
      {
        Header: "Edit",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <IconButton>
              <EditIcon />
            </IconButton>
          );
        },
      },
      {
        Header: "Delete",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton onClick={handleModalOpen("delete-activity", original)}>
              <DeleteIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleModalOpen]
  );

  const tableData = useMemo(() => cropCalendar?.data || [], [cropCalendar]);

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Configurations
              </Typography>,
              <Typography key="2" color="primary.main">
                Crop calendar
              </Typography>,
            ]}
          />
        </nav>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexWrap: {
              xs: "wrap",
              md: "no-wrap",
            },
          }}
        >
          <CustomSearchField
            InputProps={{
              ref: queryRef,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Crop"
            sx={{
              width: "100%",
              maxWidth: { sm: "250px" },
            }}
          />

          <Stack direction="row" spacing={2} sx={{ my: 2 }}>
            <Button
              href="/configurations/crop-calendar/manage-categories"
              value="Manage Categories"
              disableElevation
            />
            <Button
              onClick={handleModalOpen("add-category")}
              value="Add Category"
              disableElevation
            />

            <Button
              onClick={handleModalOpen("add-task")}
              value="Add Task"
              disableElevation
            />
          </Stack>
        </Stack>

        <div className="farmmanagementheader flex flex-row items-center overflow-x-auto" style={{
          marginTop: "1rem !important",
        }}>
          <span className="filtertext mr-2 ml-2">Filter by:</span>

          <Stack direction="row" alignItems="center" flexWrap="wrap">
            <div className="mr-2 ml-2 component-wrapper">
              <CustomSelect
                width="100%"
                height="32px"
                noneLabel={<em>All Categories</em>}
                options={activityCategories?.map((category) => ({
                  name: category.category,
                  value: category.id,
                }))}
                sx={{ borderRadius: "5px" }}
                backgroundColor="#FFFFFF"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="mr-2 ml-2 component-wrapper">
              <CustomSelect
                width="100%"
                height="32px"
                borderRadius="5px"
                backgroundColor="#FFFFFF"
                noneLabel={<em>All Tasks</em>}
                options={cropCalendar?.data?.map((task) => ({
                  name: task?.task,
                  value: task?.task?.toLowerCase(),
                }))}
                onChange={(e) => setTasks(e.target.value)}
              />
            </div>

            {/* <div className="mr-2 ml-2 component-wrapper">
              <CustomSelect
                width="100%"
                height="32px"
                noneLabel={<em>All</em>}
                options={[
                  { name: "Active", value: true },
                  { name: "Not Active", value: false },
                ]}
                borderRadius="5px"
                backgroundColor="#FFFFFF"
                onChange={(e) => setStatus(e.target.value)}
              />
            </div> */}
          </Stack>
        </div>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h2 className="with-spinner" style={{ fontSize: "20px" }}>
            <span>All Activities</span>
            {cropCalendar.loading ? <Spinner size={20} color="primary" /> : ""}
          </h2>

          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalRecords={cropCalendar?.data?.length || 0}
            page={page}
            limit={limit}
            showLimit={false}
            hideOnMobile={true}
          />
        </Stack>

        <Box>
          <Table
            columns={columns}
            data={tableData}
            isLoading={cropCalendar.loading}
          />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalRecords={cropCalendar?.data?.length || 0}
            page={page}
            limit={limit}
          />
        </Box>
      </section>

      <Dialog open={showModal} closeHandler={handleModalClose}>
        {dialogContent}
      </Dialog>
    </React.Fragment>
  );
}

export default CropCalendarSection;
