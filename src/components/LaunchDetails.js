import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import Modal from "./Modal";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function LaunchDetails({ launchDetail }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState("");

  const open = () => setModalOpen(true);
  const close = () => {
    setModalDetails("");
    setModalOpen(false);
  };

  const handleClick = (flight_number) => {
    setModalDetails(flight_number);
    setModalOpen(true);
  };

  return (
    <>
      {modalDetails === launchDetail.flight_number && (
        <Dialog isOpen={modalOpen} onDismiss={close} style={{ width: "40vw" }}>
          <Modal close={close} modalDetails={modalDetails} />
        </Dialog>
      )}
      <tr
        onClick={() => handleClick(launchDetail.flight_number)}
        className="cursor-pointer"
        key={uuid()}
      >
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
              className={
                launchDetail.launch_success
                  ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  : "absolute inset-0 bg-red-200 opacity-50 rounded-full"
              }
            ></span>
            <span className="relative">
              {launchDetail.launch_success
                ? "Successful launch"
                : "Failed launch"}
            </span>
          </span>
        </td>
      </tr>
    </>
  );
}

export default LaunchDetails;
