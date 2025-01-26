import Chat from "./components/Chat";
import ContactsList from "./components/ContactsList";
import Sidebar from "./components/Sidebar";
import { useConversations } from "./contexts/ConversationsContext";
import useScreenType from "./hooks/useScreentype";

export default function App() {
  const screen = useScreenType();
  const { selected } = useConversations();

  return (
    <div className="md:gap-5 md:flex-row md:flex md:flex-1 h-screen md:px-6 md:py-8">
      {screen === "mobile" ? (
        <>{selected === "none" ? <ContactsList /> : <Chat />}</>
      ) : (
        <>
          <Sidebar />
          <ContactsList />
          <Chat />
        </>
      )}
    </div>
  );
}
