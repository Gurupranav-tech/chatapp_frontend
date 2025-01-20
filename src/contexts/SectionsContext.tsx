import { createContext, useContext, useState } from "react";

type SectionsContext = {
  type: "chat" | "reels" | "call" | "settings";
  changeType: (type: SectionsContext["type"]) => void;
};

const context = createContext<SectionsContext>({
  type: "chat",
} as SectionsContext);

export function useSections() {
  return useContext(context);
}

export default function SectionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [type, setType] = useState<SectionsContext["type"]>("chat");

  const changeType = (type: SectionsContext["type"]) => setType(type);

  const values: SectionsContext = {
    type,
    changeType,
  };
  return <context.Provider value={values}>{children}</context.Provider>;
}
