"use client";
import Icon from "@/components/assests";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { shortenWalletAddress } from "@/lib/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAccount } from "wagmi";

// Define the modal context type
interface JoinWaitlistContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// Create the context
const JoinWaitlistContext = createContext<JoinWaitlistContextType | undefined>(
  undefined
);

// Create a provider component
interface JoinWaitlistProviderProps {
  children: React.ReactNode;
}

export const JoinWaitlistProvider: FC<JoinWaitlistProviderProps> = ({
  children,
}) => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openConnectModal } = useConnectModal();
  const { data: session } = useSession();
  const { address } = useAccount();
  const [twitter, setTwitter] = useState<any>(null);
  const [discord, setDiscord] = useState<any>(null);
  const [isFollowed, setIsFollowed] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Get the URL query parameters
    const params = new URLSearchParams(window.location.search);
    // Check if the 'twitter' or Discord parameter is set to true
    const isTwitter = params.get("twitter") === "true";
    const isDiscord = params.get("discord") === "true";
    if (isTwitter) {
      sessionStorage.setItem(
        "twitter",
        JSON.stringify({
          email: session?.user?.email,
          name: session?.user?.name,
        })
      );
    }
    if (isDiscord) {
      sessionStorage.setItem(
        "discord",
        JSON.stringify({
          email: session?.user?.email,
          name: session?.user?.name,
        })
      );
    }

    // Retrieve the values from session storage
    const twitterValue = sessionStorage.getItem("twitter");
    const discordValue = sessionStorage.getItem("discord");

    console.log("twitterValue", twitterValue);

    // Parse the JSON data if it exists
    setTwitter(twitterValue ? JSON.parse(twitterValue) : null);
    setDiscord(discordValue ? JSON.parse(discordValue) : null);

    // Store the condition in session storage
    if (twitterValue || discordValue) {
      openModal();
    }
  }, [session?.user?.name]);

  const joinWaitlistHandler = async () => {
    if (!address || !twitter?.name || !discord?.name || !isFollowed) {
      return;
    }
    const data = new FormData();
    data.append("entry.1838375823", address);
    data.append("entry.1967660097", twitter?.name);
    data.append("entry.1243333342", discord?.name);
    data.append("entry.2089783402", `${isFollowed}`);

    await axios.post(
      "https://docs.google.com/forms/d/106Dz0t-qy81ZLN_jfPRIvXTqtg40P47C-kykDmdbAhQ/formResponse",
      data
    );
    toast({
      title: "Joined Successfully!",
    });
    console.log("joined", address, twitter?.name, discord?.name, isFollowed);
  };

  return (
    <JoinWaitlistContext.Provider
      value={{ isModalOpen, openModal, closeModal }}
    >
      {children}
      <div
        className={`${
          isModalOpen ? "block" : "hidden"
        } fixed top-0 h-screen w-screen bg-midnight/10`}
      >
        <div
          className={`${
            isModalOpen ? "block" : "hidden"
          } w-full max-w-screen-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3`}
        >
          <div className="z-50 flex flex-col items-center space-y-6 bg-midnight rounded-2xl px-4 border border-light/10">
            <div className="px-3 lg:px-6 py-1 bg-primary text-dark font-semibold font-dmSans border border-light/10 rounded-b-2xl">
              400 pts for joining
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="">
                <h3 className="text-2xl font-dmSans font-semibold">
                  Join Alloc8
                </h3>
              </div>
              <Button
                className="bg-light/5"
                variant={"ghost"}
                onClick={closeModal}
              >
                Close
              </Button>
            </div>
            <div className="w-full flex flex-col items-center space-y-6 py-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  {address && <Badge>+100 pt</Badge>}
                  <p>Connect Wallet</p>
                </div>
                <Button onClick={openConnectModal} disabled={!openConnectModal}>
                  {address ? shortenWalletAddress(address) : "Connect wallet"}
                </Button>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  {twitter?.name && <Badge>+100 pt</Badge>}
                  <p>Connect Twitter</p>
                </div>

                <Button
                  onClick={() =>
                    signIn("twitter", {
                      callbackUrl: "/?twitter=true",
                      redirect: false,
                    })
                  }
                  disabled={twitter?.name}
                >
                  {twitter?.name ? (
                    twitter?.name
                  ) : (
                    <span className="flex items-center justify-center gap-1 px-3">
                      Connect <Icon name="FaXTwitter" />
                    </span>
                  )}
                </Button>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  {discord?.name && <Badge>+100 pt</Badge>}

                  <p>Connect Discord</p>
                </div>
                <Button
                  onClick={() =>
                    signIn("discord", {
                      callbackUrl: "/?discord=true",
                      redirect: false,
                    })
                  }
                  disabled={discord?.name}
                >
                  {discord?.name ? (
                    discord?.name
                  ) : (
                    <span className="flex items-center justify-center gap-1 px-3">
                      Connect <Icon name="FaDiscord" />
                    </span>
                  )}
                </Button>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  {isFollowed && <Badge>+100 pt</Badge>}
                  <p>Follow us @alloc8_xyz</p>
                </div>
                <a
                  href="https://twitter.com/alloc8_xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    onClick={() => setIsFollowed(true)}
                    disabled={isFollowed}
                  >
                    <span className="flex items-center justify-center gap-1 px-4">
                      {isFollowed ? "Followed" : "Follow"}{" "}
                      <Icon name="FaTwitter" />
                    </span>
                  </Button>
                </a>
              </div>
              <Button
                size={"lg"}
                className="w-full"
                onClick={joinWaitlistHandler}
                disabled={
                  !address || !twitter?.name || !discord?.name || !isFollowed
                }
              >
                JOIN WAITLIST
              </Button>
            </div>
          </div>
        </div>
      </div>
    </JoinWaitlistContext.Provider>
  );
};

// Custom hook to use the modal context
export const useJoinWaitlistModal = () => {
  const context = useContext(JoinWaitlistContext);
  if (!context) {
    throw new Error(
      "useJoinWaitlistModal must be used within a JoinWaitlistProvider"
    );
  }
  return context;
};
//
