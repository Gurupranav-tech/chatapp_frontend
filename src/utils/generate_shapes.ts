import { createAvatar } from "@dicebear/core";
import { shapes  } from "@dicebear/collection";

export default function generate_shapes(seed?: string) {
  const avatar = createAvatar(shapes, { seed });

  return avatar.toDataUri();
}
