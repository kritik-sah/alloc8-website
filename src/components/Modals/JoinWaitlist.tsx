"use client";
import { shortenWalletAddress } from "@/lib/utils";
import { useJoinWaitlistModal } from "@/provider/context/JoinWaitlist";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import React, { useState } from "react";
import { useAccount } from "wagmi";
import Icon from "../assests";
import { Button } from "../ui/button";

const JoinWaitlist = ({ children }: { children: React.ReactNode }) => {
  const { isModalOpen, openModal, closeModal } = useJoinWaitlistModal();
  return (
    <>
      <div
        onClick={isModalOpen ? closeModal : openModal}
        className="inline-flex"
      >
        {children}
      </div>
    </>
  );
};

export default JoinWaitlist;
