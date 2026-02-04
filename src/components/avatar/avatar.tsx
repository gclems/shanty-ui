import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import "./avatar.css";

function Root(props: BaseAvatar.Root.Props) {
  return <BaseAvatar.Root data-slot="avatar" {...props} />;
}

function Image(props: BaseAvatar.Image.Props) {
  return (
    <BaseAvatar.Image
      {...props}
      width="48"
      height="48"
      data-slot="avatar-image"
    />
  );
}

function Fallback(props: BaseAvatar.Fallback.Props) {
  return <BaseAvatar.Fallback data-slot="avatar-fallback" {...props} />;
}

const Avatar = Object.assign(Root, { Root, Image, Fallback });

export { Avatar };
