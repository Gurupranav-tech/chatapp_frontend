import { useState, useContext, createContext } from "react";
import { generate_groups, generate_people } from "../utils/generate_dummy_data";

export type Chat = {
  data: string;
  time: string;
};

export type Person = {
  name: string;
  chats: Chat[];
};

export type Group = {
  name: string;
  chats: {
    name: string;
    data: string;
    time: string;
  }[];
};

export type ConversationsContextType = {
  groups: Group[];
  people: Person[];
};

const context = createContext({} as ConversationsContextType);

export function useConversations() {
  return useContext(context);
}

export default function ConversationsContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [groups, setGroups] = useState<Group[]>(generate_groups());
  const [people, setPeople] = useState<Person[]>(generate_people());

  const values: ConversationsContextType = {
    groups,
    people,
  };

  return <context.Provider value={values}>{children}</context.Provider>;
}
