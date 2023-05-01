export default function ItemRight(props) {
  return (
    <div className="flex gap-4 items-center px-[22px] py-[18px] bg-[#D9D9D9]/10 rounded-full">
      <div className="flex items-center gap-1">
        {props.logo}
        {props.icon}
      </div>
      <p className="text-sm">{props.total}</p>
    </div>
  );
}
