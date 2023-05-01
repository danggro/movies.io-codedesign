import Image from "next/image";
import BtnRight from "./BtnRight";
import Download from "./Icon/Download";
import Play from "./Icon/Play";
import ItemDetails from "./ItemDetails";
import Oda from "@/../public/Oda.png";
import Link from "next/link";
import ItemRight from "./ItemRight";
import Twitter from "./Icon/Twitter";
import Love from "./Icon/Love";
import Facebook from "../LeftSection/Icon/Facebook";
import Like from "./Icon/Like";

export default function RightSection() {
  return (
    <section className="w-full">
      <div>
        <h1 className="font-bold text-[40px] ">One Piece Film : Red</h1>
        <div className="flex mt-[51px] gap-5">
          <BtnRight variant="watch">
            <Play />
            Watch
          </BtnRight>
          <BtnRight variant="download">
            <Download />
            Download
          </BtnRight>
        </div>
      </div>
      <div className="mt-[51px] mb-6">
        <div className="flex justify-between">
          <div className="max-w-[486px]">
            <h6 className="font-bold">STORYLINE</h6>
            <p className="mt-[21px] mb-[42px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
              condimentum nec porttitor felis enim aliquet nibh. Commodo
              fringilla accumsan, elit, elementum ullamcorper. Tempus non,
              semper eget adipiscing aenean sit pharetra ipsum cursus.
            </p>
            <ul className="space-y-5">
              <ItemDetails detail="Rating" text="8.9" />
              <ItemDetails detail="Release Year" text="2022" />
              <ItemDetails detail="Genres" text="Adventure, Fantacy" />
              <ItemDetails detail="Countries" text="Japan" />
              <ItemDetails detail="Duration" text="2 hours +" />
            </ul>
          </div>
          <div className="flex-shrink-0 w-[266px]">
            <p className="font-bold ml-[15px]">Written by</p>
            <div className="rounded-[14px] bg-[#D9D9D9]/10 flex gap-7 p-3">
              <Image src={Oda} alt="Oda" />
              <div>
                <h6>Eiichiro Oda</h6>
                <p className="text-[#878787] text-[13px]">
                  Official Creator & Manga Artist
                </p>
              </div>
            </div>
            <div className="mt-[26px] mr-[14px] text-right">
              <Link href={"/"} className="text-primary">
                See all
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#242E43]"></div>
      <div className="ml-[22px] flex gap-6 mt-[30px]">
        <ItemRight logo={<Twitter />} icon={<Love />} total="+1" />
        <ItemRight logo={<Facebook />} icon={<Like />} total="1.5k" />
      </div>
    </section>
  );
}
