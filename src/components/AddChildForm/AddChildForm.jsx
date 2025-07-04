"use client";

import React, { useState } from "react";
import AddChildFormContainer from "@/containers/Child/AddChildFormContainer";
import UIModal from "../UIModal/UIModal";

const AddChildForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <UIModal
        modalHeaderTitle="Add Child"
        open={modalOpen}
        modalBtnText="Add Child"
        onOpenChange={handleModalOpen}
        btnClassName="bg-main text-white px-7 py-2 rounded-2xl hover:cursor-pointer"
      >
        <AddChildFormContainer />
      </UIModal>
    </>
  );
};

export default AddChildForm;
