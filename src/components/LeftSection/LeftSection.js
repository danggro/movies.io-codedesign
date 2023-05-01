import Image from "next/image";
import Link from "next/link";
import OnePiece from "@/../public/OnePiece.png";
import Movie from "./Movie";
import ItemLeft from "./ItemLeft";
import Star from "./Icon/Star";
import Bookmark from "./Icon/Bookmark";
import Watch from "./Icon/Watch";

export default function LeftSection() {
  return (
    <section className="max-w-[397px] flex-shrink-0">
      <Image src={OnePiece} alt="OnePiece" />
      <Link
        href={"/"}
        className="flex items-center justify-center gap-2 py-5 mt-8 mb-12 text-xl font-bold rounded-full text-primary bg-white/5 hover:text-white"
      >
        <Movie />
        Trailer
      </Link>
      <div className="flex w-[325px] mx-auto justify-between items-center">
        <ItemLeft icon={<Star />} desc="Favourite" />
        <ItemLeft icon={<Bookmark />} desc="Watch Later" />
        <ItemLeft nobtn icon={<Watch />} desc="Watched" />
      </div>
    </section>
  );
}
