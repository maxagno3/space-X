import Axios from "axios";
import React, { useEffect, useState } from "react";
import { ROOT_URL } from "../utils/constants";
import FilterData from "./FilterData";
import TableData from "./TableData";
import Loader from "react-loader-spinner";

function Past() {
  const [launchDetails, setLaunchDetails] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(ROOT_URL + "past")
      .then(({ data }) => {
        setLaunchDetails(data);
        setLoading(false);
      })
      .catch((_err) => setLaunchDetails(""));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center fixed top- 0 h-full w-full bg-gray-200 bg-opacity-25">
        <Loader color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Users</h2>
          </div>
          <div className="my-2 flex sm:flex-row flex-col pb-4">
            <FilterData default="past" />
          </div>
          <TableData data={launchDetails} />
        </div>
      </div>
    </>
  );
}

export default Past;
