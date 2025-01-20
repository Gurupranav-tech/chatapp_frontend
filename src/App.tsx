import Chat from "./components/Chat";
import ContactsList from "./components/ContactsList";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex md:gap-5 flex-col-reverse md:flex-row md:flex md:flex-1 h-screen md:px-6 md:py-8">
      <Sidebar />
      <ContactsList />
      <Chat />
    </div>
  );
}
