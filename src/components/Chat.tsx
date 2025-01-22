import { useConversations } from "../contexts/ConversationsContext";
import ChatTitle from "./ChatTitle";
import EmptyChat from "./EmptyChat";

export default function Chat() {
  const { selected } = useConversations();

  return (
    <div className="relative flex-1 bg-white py-2 px-4 rounded-lg shadow-shadow-color shadow-lg">
      {selected === "none" ? (
        <EmptyChat />
      ) : (
        <>
          <ChatTitle />
        </>
      )}
    </div>
  );
}
