export default function ItemDetails(props) {
  return (
    <li className="flex">
      <p className="w-[163px] text-[#606060]">{props.detail}</p>
      <p className="font-medium">{props.text}</p>
    </li>
  );
}
