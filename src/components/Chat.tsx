import { useConversations } from "../contexts/ConversationsContext";
import Chats from "./Chats";
import ChatTitle from "./ChatTitle";
import EmptyChat from "./EmptyChat";
import SendMessage from "./SendMessags";

export default function Chat() {
  const { selected } = useConversations();

  return (
    <section aria-label="Chatting area" className="relative flex flex-col gap-4 overflow-hidden flex-1 bg-white py-4 px-6 rounded-lg shadow-shadow-color shadow-lg">
      {selected === "none" ? (
        <EmptyChat />
      ) : (
        <>
          <ChatTitle />
          <Chats />
          <SendMessage />
        </>
      )}
    </section>
  );
}
