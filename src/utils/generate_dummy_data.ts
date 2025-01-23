import { faker } from "@faker-js/faker";
import type { Person, Chat } from "../contexts/ConversationsContext";
import generate_avatar from "./generate_avatar";
import generate_shapes from "./generate_shapes";

export function generate_people() {
  const gen_person: () => Person = () => {
    const name = faker.internet.username();

    return {
      name,
      chats: faker.helpers.multiple(
        () => ({
          data: faker.lorem.text(),
          time: faker.date.anytime().toString(),
          from: name,
        }),
        { count: 6 },
      ),
      image: generate_avatar(),
      status: Math.random() >= 0.5 ? "online" : "offline",
    };
  };

  return faker.helpers.multiple(gen_person, { count: 13 });
}

export function generate_groups() {
  const gen_chat = () => ({
    name: faker.internet.username(),
    data: faker.lorem.text(),
    time: faker.date.anytime().toString(),
  });

  return faker.helpers.multiple(
    () => {
      return {
        name: faker.word.noun(),
        image: generate_shapes(),
        chats: faker.helpers.multiple(gen_chat, { count: 6 }),
      };
    },
    { count: 10 },
  );
}

export function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}
