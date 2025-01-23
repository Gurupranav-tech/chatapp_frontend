import { FaSearch } from "react-icons/fa";
import ConversationsList from "./ConversationsList";
import DisplayTile from "./DisplayTile";
import { useConversations } from "../contexts/ConversationsContext";
import { getLastElement } from "../utils/generate_dummy_data";
import { motion } from "framer-motion";

export default function ContactsList() {
  const {
    people,
    groups,
    changeSelected,
    changeSelectedPerson,
    changeSelectedGroup,
  } = useConversations();

  return (
    <section
      aria-label="Shows the list of contacts"
      className="flex flex-col gap-8 flex-[0.5]"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.995 }}  className="bg-white flex items-center text-gray-500 px-4 py-2 rounded-lg gap-3 shadow-shadow-color shadow-lg">
        <FaSearch />
        <input
          type="text"
          className="outline-none text-lg"
          placeholder="Search"
        />
      </motion.div>
      <ConversationsList title="Groups">
        {groups.map((person, idx) => (
          <DisplayTile
            key={idx}
            title={person.name}
            lastMessage={getLastElement(person.chats).data}
            time={getLastElement(person.chats).time}
            order={idx + 1}
            image={person.image}
            onClick={() => {
              changeSelected("group");
              changeSelectedGroup(person);
              changeSelectedPerson(null);
            }}
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
            order={idx + 1}
            image={person.image}
            onClick={() => {
              changeSelected("person");
              changeSelectedPerson(person);
              changeSelectedGroup(null);
            }}
          />
        ))}
      </ConversationsList>
    </section>
  );
}
