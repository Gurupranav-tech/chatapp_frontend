import { useEffect, useRef } from "react";
import {
  Group,
  Person,
  useConversations,
} from "../contexts/ConversationsContext";
import MessageTile from "./MessageTile";

// TODO: Add user read comment

export default function Chats() {
  const { selectedGroup, selectedPerson, selected } = useConversations();

  if (selected === "person" && selectedPerson)
    return <PersonalChat chat={selectedPerson} />;
  else if (selected === "group" && selectedGroup)
    return <GroupChat chat={selectedGroup} />;

  return <div className="flex-1"></div>;
}

function PersonalChat({ chat }: { chat: Person }) {
  const chat_section = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chat_section.current) return;
    chat_section.current.scrollTop = chat_section.current.scrollHeight;
  }, [chat]);

  return (
    <div
      ref={chat_section}
      className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 border_child
  [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-lg
  [&::-webkit-scrollbar-thumb]:bg-gray-300 flex flex-col gap-5 px-2"
    >
      {chat.chats.map((c, idx) => (
        <MessageTile
          name={c.from}
          data={c.data}
          time={c.time}
          type="personal"
          key={idx}
        />
      ))}
    </div>
  );
}

function GroupChat({ chat }: { chat: Group }) {
  const chat_section = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chat_section.current) return;
    chat_section.current.scrollTop = chat_section.current.scrollHeight;
  }, [chat]);

  return (
    <div
      ref={chat_section}
      className="flex-1 relative  overflow-y-auto [&::-webkit-scrollbar]:w-2 border_child
  [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-lg
  [&::-webkit-scrollbar-thumb]:bg-gray-300 flex flex-col gap-5 px-2"
    >
      {chat.chats.map((c, idx) => (
        <MessageTile
          name={c.name}
          data={c.data}
          time={c.time}
          type="group"
          key={idx}
        />
      ))}
    </div>
  );
}
