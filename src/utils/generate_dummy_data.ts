import { faker } from "@faker-js/faker";
import type { Person, Chat } from "../contexts/ConversationsContext";

export function generate_people() {
  const gen_chat: () => Chat = () => ({
    data: faker.lorem.text(),
    time: faker.date.anytime().toString(),
  });

  const gen_person: () => Person = () => ({
    name: faker.internet.username(),
    chats: faker.helpers.multiple(gen_chat, { count: 6 }),
  });

  return faker.helpers.multiple(gen_person, { count: 13 });
}

export function generate_groups() {
  const gen_chat = () => ({
    name: faker.internet.username(),
    data: faker.lorem.text(),
    time: faker.date.anytime().toString(),   
  });

  return faker.helpers.multiple((() => {
      return ({
        name: faker.word.noun(),
        chats: faker.helpers.multiple(gen_chat, { count: 6 })
      });
    }), { count: 10 });
}

export function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}
