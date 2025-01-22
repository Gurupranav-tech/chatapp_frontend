type Props = {
  title: string;
  time: string;
  lastMessage: string;
  imageType?: "shape" | "avatar";
  order: number;
  image: string;
};

const timeFormatter = new Intl.DateTimeFormat("en-US");

export default function DisplayTile({ image, title, time, lastMessage, imageType="avatar", order }: Props) {

  return (
    <div style={{ animationDelay: `${order/100}s`  }}  className="flex items-center gap-3 py-2 cursor-pointer animate">
      <div className="w-8 h-8 rounded-full">
        <img src={image} className="w-8 h-8 rounded-full" />
      </div>
      <div className="flex-1 w-full">
        <div className="flex items-center">
          <h3>{title.length >= 10 ? `${title.slice(0, 10)}...` : title}</h3>
          <span className="inline text-[0.75rem] text-gray-500 ml-auto">{timeFormatter.format(new Date(time))}</span>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            {lastMessage.length >= 20
              ? `${lastMessage.slice(0, 20)}...`
              : lastMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
