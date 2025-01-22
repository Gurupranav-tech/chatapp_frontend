import { createAvatar } from "@dicebear/core";
import { shapes  } from "@dicebear/collection";
import { faker } from "@faker-js/faker";

export default function generate_shapes(seed?: string) {
  if (!seed) seed = faker.word.noun();
  const avatar = createAvatar(shapes, { seed });

  return avatar.toDataUri();
}
