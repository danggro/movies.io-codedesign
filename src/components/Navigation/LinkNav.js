import Link from "next/link";

export default function LinkNav(props) {
  return (
    <li>
      <Link
        href={props.href}
        className={`hover:underline hover:underline-offset-8 hover:decoration-[3px] hover:decoration-primary ${
          props.active &&
          "underline underline-offset-8 decoration-[3px]  decoration-primary"
        }`}
      >
        {props.children}
      </Link>
    </li>
  );
}
