import { FaSearch } from "react-icons/fa";
import ConversationsList from "./ConversationsList";

export default function ContactsList() {
  return (
    <div className="flex flex-col gap-8 flex-[0.5]">
      <div className="bg-white flex items-center text-gray-500 px-4 py-2 rounded-lg gap-3 shadow-shadow-color shadow-lg">
        <FaSearch />
        <input
          type="text"
          className="outline-none text-lg"
          placeholder="Search"
        />
      </div>
      <ConversationsList title="Groups"></ConversationsList>
      <ConversationsList title="People"></ConversationsList>
    </div>
  );
}
