import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ROOT_URL } from "../utils/constants";
import FilterData from "./FilterData";
import TableData from "./TableData";

function FilterSuccess() {
  const [success, setSuccess] = useState("");

  useEffect(() => {
    Axios.get(ROOT_URL + `?launch_success=true`)
      .then(({ data }) => setSuccess(data))
      .catch((_err) => setSuccess(""));
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        <div className="my-2 flex sm:flex-row flex-col pb-4">
          <FilterData status="true" />
        </div>
        <TableData data={success} />
      </div>
    </div>
  );
}

export default FilterSuccess;
