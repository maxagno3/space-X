import React from "react";
import uuid from "react-uuid";

function LaunchDetails({ launchDetails }) {
  return (
    launchDetails &&
    launchDetails.map((launchDetail) => {
      return (
        <tbody key={uuid()}>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10">
                  <img
                    className="w-full h-full rounded-full"
                    src={launchDetail.links.mission_patch_small}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {launchDetail.mission_name}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                {launchDetail.rocket.rocket_name}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                {launchDetail.launch_year}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                ></span>
                <span className="relative">
                  {launchDetail.launch_success
                    ? "Successful launch"
                    : "Failed launch"}
                </span>
              </span>
            </td>
          </tr>
        </tbody>
      );
    })
  );
}

export default LaunchDetails;
