import Axios from "axios";
import React, { useEffect, useState } from "react";
import { ROOT_URL } from "../utils/constants";
import DashBoard from "./DashBoard";
import FilterData from "./FilterData";
import TableData from "./TableData";

function Past() {
  const [launchDetails, setLaunchDetails] = useState("");

  useEffect(() => {
    Axios.get(ROOT_URL + "past")
      .then(({ data }) => setLaunchDetails(data))
      .catch((_err) => setLaunchDetails(""));
  }, []);

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
