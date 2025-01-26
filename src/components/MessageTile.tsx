import { useConversations } from "../contexts/ConversationsContext";

type Props = {
  data: string;
  time: string;
  name: string;
  type: "personal" | "group";
  read: boolean | "na";
};

const timeFormatter = new Intl.DateTimeFormat("en-US");

export default function MessageTile({ data, time, name, type, read }: Props) {
  const { username } = useConversations();

  return (
    <div
      className={`${read !== "na" ? (read ? "msg-read" : "msg-ignored") : ""} ${username === name ? "bg-primary-color text-white ml-auto" : "bg-gray-100"} px-5 py-1 rounded-lg w-4/5 text-sm`}
    >
      {type === "group" && (
        <div className="pb-2">
          <p>{name}</p>
        </div>
      )}
      <div className={`${type === "group" ? "pt-1" : ""}`}>
        <p className="mb-2">{data}</p>
        <p
          className={`text-xs text-end border-none ${username === name ? "text-gray-100" : "text-gray-500"}`}
        >
          {timeFormatter.format(new Date(time))}
        </p>
      </div>
    </div>
  );
}
