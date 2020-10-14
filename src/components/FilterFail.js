import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FilterData from "./FilterData";
import TableData from "./TableData";
import { ROOT_URL } from "../utils/constants";

function FilterFail() {
  const [fail, setFail] = useState("");

  useEffect(() => {
    Axios.get(ROOT_URL + `?launch_success=false`)
      .then(({ data }) => setFail(data))
      .catch((_err) => setFail(""));
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        <div className="my-2 flex sm:flex-row flex-col pb-4">
          <FilterData status="false" />
        </div>
        <TableData data={fail} />
      </div>
    </div>
  );
}

export default FilterFail;
