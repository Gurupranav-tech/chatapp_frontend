import { useConversations } from "../contexts/ConversationsContext";
import { IoCallOutline } from "react-icons/io5";
import { BsCameraReels } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import useScreenType from "../hooks/useScreentype";
import { toast } from "react-toastify";

export default function ChatTitle() {
  const screen = useScreenType();
  const {
    selectedPerson,
    selectedGroup,
    selected,
    changeSelected,
    changeSelectedGroup,
    changeSelectedPerson,
  } = useConversations();

  const image =
    selected === "group" ? selectedGroup?.image : selectedPerson?.image;
  const title =
    selected === "group" ? selectedGroup?.name : selectedPerson?.name;
  const status = selected === "person" ? selectedPerson?.status : "";

  return (
    <div className="border-b border-gray-400 pb-3 flex items-center">
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-2xl cursor-pointer"
          onClick={() => {
            changeSelected("none");
            changeSelectedPerson(null);
            changeSelectedGroup(null);
          }}
        >
          <IoIosArrowBack />
        </motion.div>
        <img src={image} className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-xl font-semibold text-gray-700">
            {screen === "mobile" && title && title.length >= 6
              ? `${title.slice(0, 6)}...`
              : title}
          </h3>
          <p className="capitalize text-gray-500 text-sm">{status}</p>
        </div>
      </div>
      <div className="flex ml-auto text-primary-color font-size items-center">
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            toast.warn("Need a server to implement!", {
              theme: "colored",
              draggable: true,
            })
          }
        >
          <IoCallOutline />
        </motion.div>
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            toast.warn("Need a server to implement!", {
              theme: "colored",
              draggable: true,
            })
          }
        >
          <BsCameraReels />
        </motion.div>
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            toast.warn("Need a server to implement!", {
              theme: "colored",
              draggable: true,
            })
          }
        >
          <HiDotsVertical />
        </motion.div>
      </div>
    </div>
  );
}
