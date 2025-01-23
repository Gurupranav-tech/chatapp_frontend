import { useConversations } from "../contexts/ConversationsContext";
import { IoCallOutline } from "react-icons/io5";
import { BsCameraReels  } from 'react-icons/bs';
import { HiDotsVertical } from "react-icons/hi";
import { motion } from "framer-motion";

export default function ChatTitle() {
  const { selectedPerson, selectedGroup, selected } = useConversations();

  const image =
    selected === "group" ? selectedGroup?.image : selectedPerson?.image;
  const title =
    selected === "group" ? selectedGroup?.name : selectedPerson?.name;
  const status = selected === "person" ? selectedPerson?.status : "";

  return (
    <div className="border-b border-gray-400 pb-3 flex items-center">
      <div className="flex items-center gap-3">
        <img src={image} className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
          <p className="capitalize text-gray-500 text-sm">{status}</p>
        </div>
      </div>
      <div className="ml-auto text-primary-color text-3xl flex items-center gap-10">
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoCallOutline />
        </motion.div>
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsCameraReels />
        </motion.div>
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <HiDotsVertical />
        </motion.div>
      </div>
    </div>
  );
}
