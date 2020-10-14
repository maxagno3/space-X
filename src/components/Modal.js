import VisuallyHidden from "@reach/visually-hidden";
import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { ROOT_URL } from "../utils/constants";

function Modal({ modalDetails, close }) {
  const [modalInfo, setModalInfo] = useState("");

  useEffect(() => {
    Axios.get(ROOT_URL + `/${modalDetails}`)
      .then(({ data }) => setModalInfo(data))
      .catch((_err) => setModalInfo(""));
  }, []);

  return (
    <>
      <button className="close-button" onClick={close}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>

      <div className="flex flex-wrap">
        <img src={modalInfo.links?.mission_patch_small} alt="Image" />

        <div className="ml-4">
          <h1 className="font-semibold">Mission Name:</h1>
          <p>{modalInfo.mission_name}</p>

          <h1 className="font-semibold">Launch Year:</h1>
          <p>{modalInfo.launch_year}</p>

          <h1 className="font-semibold">Details:</h1>
          <p className="break-normal">{modalInfo.details}</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
