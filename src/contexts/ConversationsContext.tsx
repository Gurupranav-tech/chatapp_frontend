import { useState, useContext, createContext } from "react";
import { generate_groups, generate_people } from "../utils/generate_dummy_data";

export type Select = "group" | "person" | "none";

export type Chat = {
  data: string;
  time: string;
};

export type Person = {
  name: string;
  image: string;
  chats: Chat[];
};

export type Group = {
  name: string;
  image: string;
  chats: {
    name: string;
    data: string;
    time: string;
  }[];
};

export type ConversationsContextType = {
  groups: Group[];
  people: Person[];
  selected: Select;
  selectedGroup: Group | null;
  selectedPerson: Person | null;

  changeSelected: (s: Select) => void;
  changeSelectedGroup: (g: Group | null) => void;
  changeSelectedPerson: (p: Person | null) => void;
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
  const [selected, setSelected] = useState<Select>("none");
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const values: ConversationsContextType = {
    groups,
    people,
    selected,
    selectedGroup,
    selectedPerson,

    changeSelected: setSelected,
    changeSelectedGroup: setSelectedGroup,
    changeSelectedPerson: setSelectedPerson,
  };

  return <context.Provider value={values}>{children}</context.Provider>;
}
