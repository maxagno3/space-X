import React from "react";
import LaunchDetails from "./LaunchDetails";
import Loader from "react-loader-spinner";

function TableData({ data }) {
  return (
    <div>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Mission Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Rocket Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Launch Year
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {!data ? (
            <div className="flex items-center absolute top-0 right-0 bottom-0 left-0  transform translate-x-1/2  bg-gray-200 bg-opacity-25">
              <Loader color="#00BFFF" height={80} width={80} />
            </div>
          ) : (
            data.map((launchDetail) => {
              return <LaunchDetails launchDetail={launchDetail} />;
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
