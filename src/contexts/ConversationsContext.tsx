import { useState, useContext, createContext } from "react";
import { generate_groups, generate_people } from "../utils/generate_dummy_data";
import { faker } from "@faker-js/faker";

export type Select = "group" | "person" | "none";

export type Chat = {
  data: string;
  time: string;
  from: string;
};

export type Person = {
  name: string;
  image: string;
  chats: Chat[];
  status: "online" | "offline";
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
  username: string;

  changeSelected: (s: Select) => void;
  changeSelectedGroup: (g: Group | null) => void;
  changeSelectedPerson: (p: Person | null) => void;
  changeUsername: (s: string) => void;
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
  const [username, setUsername] = useState<string>(faker.internet.username());
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
    username,

    changeSelected: setSelected,
    changeSelectedGroup: setSelectedGroup,
    changeSelectedPerson: setSelectedPerson,
    changeUsername: setUsername,
  };

  return <context.Provider value={values}>{children}</context.Provider>;
}
