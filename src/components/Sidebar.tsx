import {
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipsesSharp,
} from "react-icons/io5";
import { BsCameraReels, BsCameraReelsFill } from "react-icons/bs";
import {
  IoCallOutline,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import generate_avatar from "../utils/generate_avatar";
import { useMemo } from "react";
import { useSections } from "../contexts/SectionsContext";
import { motion } from "framer-motion";

export default function Sidebar() {
  const avatarImage = useMemo(generate_avatar, []);
  const { type, changeType } = useSections();

  return (
    <section aria-label="Sidebar" className="bg-primary-color text-white px-4 py-2 md:py-4 md:rounded-lg flex gap-40 md:flex-col md:gap-20 md:items-center">
      <div className="">
        <img src={avatarImage} className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex md:h-full w-full md:flex-col text-3xl gap-10 items-center *:transition-colors *:ease-in">
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => changeType("chat")}
          className="bg-primary-color cursor-pointer hover:scale-125 transition-all ease-in"
        >
          {type === "chat" ? (
            <IoChatbubbleEllipsesSharp />
          ) : (
            <IoChatbubbleEllipsesOutline />
          )}
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => changeType("reels")}
          className="cursor-pointer hover:scale-125 transition-all ease-in"
        >
          {type === "reels" ? <BsCameraReelsFill /> : <BsCameraReels />}
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => changeType("call")}
          className="cursor-pointer hover:scale-125 transition-all ease-in"
        >
          {type === "call" ? <IoIosCall /> : <IoCallOutline />}
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => changeType("settings")}
          className="cursor-pointer hover:scale-125 transition-all ease-in md:mt-auto mx-auto"
        >
          {type === "settings" ? <IoSettingsSharp /> : <IoSettingsOutline />}
        </motion.div>
      </div>
    </section>
  );
}
