"use client"
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const UIModal = ({
  modalBtnText,
  btnClassName,
  btnTriggerOnClick,
  modalHeaderTitle,
  open,
  onOpenChange,
  children,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger onClick={btnTriggerOnClick} className={btnClassName}>
        {modalBtnText}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{modalHeaderTitle}</DialogTitle>
          {children}
          {/* <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UIModal;
