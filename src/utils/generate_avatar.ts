import { createAvatar } from "@dicebear/core";
import { micah } from "@dicebear/collection";

export default function generate_avatar(seed?: string) {
  const avatar = createAvatar(micah, { seed });

  return avatar.toDataUri();
}
