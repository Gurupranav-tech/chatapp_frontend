import { FaSignalMessenger } from "react-icons/fa6";

export default function EmptyChat() {
  return <div className="absolute w-full h-full flex items-center justify-center flex-col gap-2">
    <div className="text-6xl text-primary-color">
      <FaSignalMessenger />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-3xl text-gray-700 text-center">Chat App</h3>
      <p>Couldn't think of a better name or design a Logo.🥲</p>
    </div>
  </div>;
}
