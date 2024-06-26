"use client";
import Icon from "@/components/assests";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { shortenWalletAddress } from "@/lib/utils";
import { supabase } from "@/utils/supabaseClient";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAccount } from "wagmi";

interface JoinWaitlistContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const JoinWaitlistContext = createContext<JoinWaitlistContextType | undefined>(
  undefined
);

interface JoinWaitlistProviderProps {
  children: React.ReactNode;
}

export const JoinWaitlistProvider: FC<JoinWaitlistProviderProps> = ({
  children,
}) => {
  const { toast } = useToast();
  const { openConnectModal } = useConnectModal();
  const { address } = useAccount();
  const [session, setSession] = useState<any>(null);
  const [twitter, setTwitter] = useState<any>(null);
  const [discord, setDiscord] = useState<any>(null);
  const [isFollowed, setIsFollowed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    sessionStorage.setItem("waitlist", JSON.stringify(true));
    setIsModalOpen(true);
  };
  const closeModal = () => {
    sessionStorage.setItem("waitlist", JSON.stringify(false));
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      setSession(data);

      if (data?.session?.user.app_metadata.provider === "twitter") {
        sessionStorage.setItem("twitter", JSON.stringify(data.session));
      }
      if (data?.session?.user.app_metadata.provider === "discord") {
        sessionStorage.setItem("discord", JSON.stringify(data.session));
      }
    };
    fetchSession();
  }, []);

  useEffect(() => {
    const twitterValue = sessionStorage.getItem("twitter");
    const discordValue = sessionStorage.getItem("discord");
    const isWaitlist = sessionStorage.getItem("waitlist") === "true";

    setTwitter(twitterValue ? JSON.parse(twitterValue) : null);
    setDiscord(discordValue ? JSON.parse(discordValue) : null);

    if ((twitterValue || discordValue) && isWaitlist) {
      openModal();
    }
  }, [session]);

  const joinWaitlistHandler = async () => {
    if (!address || !twitter || !discord || !isFollowed) {
      return;
    }
    closeModal();
    const data = new FormData();
    data.append("entry.1838375823", address);
    data.append("entry.1967660097", twitter?.user?.user_metadata?.user_name);
    data.append("entry.1243333342", discord?.user?.user_metadata?.full_name);
    data.append("entry.2089783402", `${isFollowed}`);

    const { data: waitlistData, error } = await supabase
      .from("waitlist")
      .insert([
        {
          address,
          twitter: twitter?.user?.user_metadata?.user_name,
          discord: discord?.user?.user_metadata?.full_name,
          is_followed: isFollowed,
          user: twitter?.user?.id,
        },
      ])
      .select();

    if (error) {
      console.log(error);

      toast({
        title: error.code === "23505" ? "Already joined" : error.message,
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Joined Successfully!",
    });
    try {
      await axios.post(
        "https://docs.google.com/forms/d/106Dz0t-qy81ZLN_jfPRIvXTqtg40P47C-kykDmdbAhQ/formResponse",
        data
      );
    } catch (error) {
      console.log("Error: ", error);
    }

    await supabase.auth.signOut();
    sessionStorage.setItem("twitter", "");
    sessionStorage.setItem("discord", "");
  };

  const signInWithTwitter = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "twitter",
    });
  };
  const signInWithDiscord = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
    });
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
          <div className="relative z-50 flex flex-col items-center space-y-6 bg-midnight rounded-2xl px-4 border border-light/10">
            <div className="px-3 lg:px-6 py-1 bg-primary text-dark font-semibold font-dmSans border border-light/10 rounded-b-2xl">
              Let&apos;s HyperFarm
            </div>
            <button
              className="bg-light/5 text-light/80 hover:text-light/60 absolute -top-2 right-3"
              onClick={closeModal}
            >
              <Icon name="FaXmark" className="h-5 w-5" />
            </button>
            {/* <div className="flex w-full items-center justify-between">
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
            </div> */}
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
                  {twitter?.user?.user_metadata?.user_name && (
                    <Badge>+100 pt</Badge>
                  )}
                  <p>Connect Twitter</p>
                </div>
                <Button
                  onClick={signInWithTwitter}
                  disabled={twitter?.user?.user_metadata?.user_name}
                >
                  {twitter?.user?.user_metadata?.user_name ? (
                    twitter?.user?.user_metadata?.user_name
                  ) : (
                    <span className="flex items-center justify-center gap-1 px-3">
                      Connect <Icon name="FaXTwitter" />
                    </span>
                  )}
                </Button>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  {discord?.user?.user_metadata?.full_name && (
                    <Badge>+100 pt</Badge>
                  )}
                  <p>Connect Discord</p>
                </div>
                <Button
                  onClick={signInWithDiscord}
                  disabled={discord?.user?.user_metadata?.full_name}
                >
                  {discord?.user?.user_metadata?.full_name ? (
                    discord?.user?.user_metadata?.full_name
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
                    className="flex items-center justify-center gap-1 px-4"
                  >
                    <span>{isFollowed ? "Followed" : "Follow"}</span>
                    <Icon name="FaXTwitter" />
                  </Button>
                </a>
              </div>
              <Button
                className="w-full !py-6"
                onClick={joinWaitlistHandler}
                disabled={!address || !twitter || !discord || !isFollowed}
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

export const useJoinWaitlistModal = () => {
  const context = useContext(JoinWaitlistContext);
  if (!context) {
    throw new Error(
      "useJoinWaitlistModal must be used within a JoinWaitlistProvider"
    );
  }
  return context;
};
