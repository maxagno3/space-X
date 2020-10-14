import Axios from "axios";
import React, { useState } from "react";
import { ROOT_URL } from "../utils/constants";
import { useEffect } from "react";
import FilterData from "./FilterData";
import TableData from "./TableData";
import BgImage from "../assets/images/spacex-bg-image.webp";
import Loader from "react-loader-spinner";

function DashBoard() {
  const [launchDetails, setLaunchDetails] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(ROOT_URL)
      .then(({ data }) => {
        setLaunchDetails(data);
        setLoading(false);
      })
      .catch((_err) => {
        setLaunchDetails("");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center fixed top- 0 h-full w-full bg-gray-200 bg-opacity-25">
        <Loader color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.95,
        color: "white",
      }}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Users</h2>
          </div>
          <div className="justify-between flex sm:flex-row flex-col">
            <FilterData />
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <TableData data={launchDetails} />
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
