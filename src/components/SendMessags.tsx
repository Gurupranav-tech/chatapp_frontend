import { GoPaperclip, GoSmiley } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { useConversations } from "../contexts/ConversationsContext";
import { USERNAME } from "../utils/generate_dummy_data";

export default function SendMessage() {
  const [message, setMessage] = useState("");
  const { addPersonalChat, selected, addGroupChat } = useConversations();

  const handleMainBtn = () => {
    if (!message) return;
    if (selected === "person") addPersonalChat(message, new Date().toString());
    if (selected === "group")
      addGroupChat(message, USERNAME, new Date().toString());
    setMessage("");
  };

  return (
    <div className="flex items-center gap-5">
      <div className="bg-[#EFF6FC] flex-1 text-lg py-2 px-4 rounded-xl flex gap-3 items-center">
        <GoPaperclip className="outline-none text-gray-700 text-2xl cursor-pointer" />
        <GoSmiley className="outline-none text-gray-700 text-2xl cursor-pointer" />
        <input
          placeholder="Type your message here..."
          className="outline-none w-full bg-transparent text-gray-700"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="outline-none text-white text-2xl bg-primary-color h-full px-4 rounded-lg"
        onClick={handleMainBtn}
      >
        {message === "" ? <FaMicrophone /> : <IoMdSend />}
      </motion.button>
    </div>
  );
}
