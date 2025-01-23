import {
  Group,
  Person,
  useConversations,
} from "../contexts/ConversationsContext";

export default function Chats() {
  const { selectedGroup, selectedPerson, selected } = useConversations();

  if (selected === "person" && selectedPerson)
    return <PersonalChat chat={selectedPerson} />;
  else if (selected === "group" && selectedGroup)
    return <GroupChat chat={selectedGroup} />;

  return <div className="flex-1"></div>;
}

function PersonalChat({ chat }: { chat: Person }) {
  return <div className="flex-1"></div>;
}

function GroupChat({ chat }: { chat: Group }) {
  return <div className="flex-1"></div>;
}
