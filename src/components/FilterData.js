import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
// import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { getSearchTerm } from "../utils";
// import Axios from "axios";
// import { ROOT_URL } from "../utils/constants";

function FilterData(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // const getFormatDate = (date) => {
  //   moment(date).utc().format("DD MMMM YYYY HH:mm");
  // };

  const history = useHistory();

  const handleClick = () => {
    let searchDate = getSearchTerm(startDate, endDate);
    // console.log(searchDate[0]);
    history.push(`/${searchDate[0]}&${searchDate[1]}`);
    // Axios.get(ROOT_URL + `?${searchDate[0]}&${searchDate[1]}`).then(res => console.log(res.data, 'pppppp'))
  };

  // let searchDate = getSearchTerm(startDate, endDate);

  return (
    <div className="flex flex-row mb-1 sm:mb-0">
      <div className="relative">
        <p>Start Date</p>
        <DatePicker
          selected={startDate}
          selectsStart
          isClearable
          dateFormat="yyyy/MM/dd"
          showYearDropDown
          showMonthDropDown
          closeOnScroll={true}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="relative">
        <p>End Date</p>
        <DatePicker
          selected={endDate}
          selectsEnd
          isClearable
          minDate={new Date()}
          dateFormat="yyyy/MM/dd"
          showYearDropDown
          showMonthDropDown
          closeOnScroll={true}
          onChange={(date) => setEndDate(date)}
        />
      </div>
      <button className="m-3" onClick={handleClick}>Filter Dates</button>
      <div className="relative">
        <select
          className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
          value={selectedOption || props.default}
          onChange={(e) => history.push("/" + e.target.value)}
        >
          <option value="">All Launches</option>

          <option value="upcoming">Upcoming Launches</option>

          <option value="past">Past Launches</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FilterData;
