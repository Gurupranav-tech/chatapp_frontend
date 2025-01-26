import { FaSearch } from "react-icons/fa";
import ConversationsList from "./ConversationsList";
import DisplayTile from "./DisplayTile";
import { useConversations } from "../contexts/ConversationsContext";
import { getLastElement } from "../utils/generate_dummy_data";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function ContactsList() {
  const [search, setSearch] = useState("");
  const {
    people,
    groups,
    changeSelected,
    changeSelectedPerson,
    changeSelectedGroup,
  } = useConversations();
  const searchGroups = useMemo(() => {
    if (!search) return groups;
    return groups.filter((group) => group.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, groups]);
  const searchPeople = useMemo(() => {
    if (!search) return people;
    return people.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, people]);

  return (
    <section
      aria-label="Shows the list of contacts"
      className="flex flex-col gap-8 flex-[0.5] p-4 md:p-0"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.995 }}
        className="bg-white flex items-center text-gray-500 px-4 py-2 rounded-lg gap-3 shadow-shadow-color shadow-lg"
      >
        <FaSearch />
        <input
          type="text"
          className="outline-none text-lg"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </motion.div>
      <ConversationsList title="Groups">
        {searchGroups.map((person, idx) => (
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
              setSearch("");
            }}
            status="none"
          />
        ))}
      </ConversationsList>
      <ConversationsList title="People">
        {searchPeople.map((person, idx) => (
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
              setSearch("");
            }}
            status={person.status}
          />
        ))}
      </ConversationsList>
    </section>
  );
}
