import { createAvatar } from "@dicebear/core";
import { micah } from "@dicebear/collection";
import { faker } from "@faker-js/faker";

export default function generate_avatar(seed?: string) {
  if (!seed) seed = faker.word.noun();

  const avatar = createAvatar(micah, { seed });

  return avatar.toDataUri();
}
