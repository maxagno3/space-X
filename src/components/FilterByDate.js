import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ROOT_URL } from "../utils/constants";
import FilterData from "./FilterData";
import TableData from "./TableData";

function FilterByDate(props) {
  const [dateFilter, setDateFilter] = useState("");
  const { startDate, endDate } = props.match.params;
   console.log(ROOT_URL, startDate, endDate);

  useEffect(() => {
   return console.log(ROOT_URL, startDate , endDate);

    // Axios.get(ROOT_URL + `?${startDate}&${endDate}`)
    //   .then(({ data }) => {
    //     setDateFilter(data);
    //   })
    //   .catch((_err) => setDateFilter(""));
  }, [startDate, endDate]);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Users</h2>
          </div>
          <div className="my-2 flex sm:flex-row flex-col pb-4">
            <FilterData />
          </div>
          <TableData data={dateFilter} />
        </div>
      </div>
    </>
  );
}

export default FilterByDate;
