import { createAvatar } from "@dicebear/core";
import { micah  } from "@dicebear/collection";


export default function generate_avatar() {

  const avatar = createAvatar(micah, {});

  return avatar.toDataUri();
}
