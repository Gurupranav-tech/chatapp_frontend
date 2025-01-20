type Props = {
  children?: React.ReactNode;
  title: string;
};

export default function ConversationsList({ children, title }: Props) {
  return (
    <div className="bg-white flex-1 px-4 py-2 rounded-lg shadow-shadow-color shadow-lg">
      <h3 className="font-semibold text-lg text-gray-600">{title}</h3>
      {children}
    </div>
  );
}
