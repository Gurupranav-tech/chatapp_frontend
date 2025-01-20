type Props = {
  children?: React.ReactNode;
  title: string;
};

export default function ConversationsList({ children, title }: Props) {
  return (
    <div
      className="overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 border_child
  [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-lg
  [&::-webkit-scrollbar-thumb]:bg-gray-300 bg-white flex-1 px-4 py-2 rounded-lg shadow-shadow-color shadow-lg"
    >
      <h3 className="font-semibold text-lg text-gray-600 mb-2">{title}</h3>
      <div className="flex flex-col gap-y-1">{children}</div>
    </div>
  );
}
