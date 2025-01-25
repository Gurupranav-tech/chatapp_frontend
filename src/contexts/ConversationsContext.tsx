import { useState, useContext, createContext, useEffect } from "react";
import {
  generate_groups,
  generate_people,
  getLastElement,
  USERNAME,
} from "../utils/generate_dummy_data";

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
  addPersonalChat: (data: string, time: string) => void;
  addGroupChat: (data: string, name: string, time: string) => void;
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
  const [username, setUsername] = useState<string>(USERNAME);
  const [groups, setGroups] = useState<Group[]>(generate_groups());
  const [people, setPeople] = useState<Person[]>(generate_people());
  const [selected, setSelected] = useState<Select>("none");
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const addPersonalChat = (data: string, time: string) => {
    setPeople((p) =>
      p
        .map((a) => {
          if (!selectedPerson) return a;
          if (a.name !== selectedPerson.name) return a;
          a.chats.push({
            data,
            time,
            from: USERNAME,
          });
          return a;
        })
        .sort((a, b) => {
          return new Date(getLastElement(a.chats).time) >=
            new Date(getLastElement(b.chats).time)
            ? -1
            : 1;
        }),
    );
    setSelectedPerson((p) => {
      const a = people.find((a) => a.name === p?.name);
      return a ? a : null;
    });
  };

  const addGroupChat = (data: string, name: string, time: string) => {
    setGroups((g) =>
      g
        .map((a) => {
          if (!selectedGroup) return a;
          if (a.name !== selectedGroup.name) return a;
          a.chats.push({
            data,
            name,
            time,
          });
          return a;
        })
        .sort((a, b) => {
          return new Date(getLastElement(a.chats).time) >=
            new Date(getLastElement(b.chats).time)
            ? -1
            : 1;
        }),
    );
  };

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
    addPersonalChat,
    addGroupChat,
  };

  return <context.Provider value={values}>{children}</context.Provider>;
}
