import { FaSearch } from "react-icons/fa";
import ConversationsList from "./ConversationsList";
import DisplayTile from "./DisplayTile";
import { useConversations } from "../contexts/ConversationsContext";
import { getLastElement } from "../utils/generate_dummy_data";

export default function ContactsList() {
  const { people, groups } = useConversations();

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
      <ConversationsList title="Groups">
        {groups.map((person, idx) => (
          <DisplayTile
            key={idx}
            title={person.name}
            lastMessage={getLastElement(person.chats).data}
            time={getLastElement(person.chats).time}
            imageType="shape"
            order={idx+1}
          />
        ))}
      </ConversationsList>
      <ConversationsList title="People">
        {people.map((person, idx) => (
          <DisplayTile
            key={idx}
            title={person.name}
            lastMessage={getLastElement(person.chats).data}
            time={getLastElement(person.chats).time}
            order={idx+1}
          />
        ))}
      </ConversationsList>
    </div>
  );
}
