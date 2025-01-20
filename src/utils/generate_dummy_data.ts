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

  return faker.helpers.multiple(gen_person, { count: 10 });
}
