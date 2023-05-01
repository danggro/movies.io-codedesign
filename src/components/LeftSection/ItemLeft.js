import { useState } from "react";

export default function ItemLeft(props) {
  const [click, setClick] = useState(false);
  return (
    <div className="space-y-8 text-center">
      {props.nobtn ? (
        <div className="flex justify-center text-[#757575]">{props.icon}</div>
      ) : (
        <button
          className={` ${click ? "text-primary" : "text-[#757575]"}`}
          onClick={() => {
            setClick(!click);
          }}
        >
          {props.icon}
        </button>
      )}

      <p className="text-sm text-center">{props.desc}</p>
    </div>
  );
}
