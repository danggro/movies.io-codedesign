import Link from "next/link";
import Container from "../Container";
import LinkNav from "./LinkNav";
import LogoNav from "./LogoNav";
import Search from "./Search";

export default function NavBar() {
  return (
    <nav className="pt-[18px] pb-[26px] border-b-2 border-[#535F77]">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-14">
            <LogoNav />
            <ul className="flex gap-[34px]">
              <LinkNav href="/">Home</LinkNav>
              <LinkNav href="/" active>
                Movies
              </LinkNav>
              <LinkNav href="/">Anime</LinkNav>
            </ul>
          </div>
          <div className="flex items-center gap-11">
            <div className="relative">
              <input
                type="text"
                placeholder="Search.."
                className="rounded-full bg-[#192642] text-secondary px-[43px] py-[14px] w-[270px] outline-none focus:outline-primary"
                id="search"
              />
              <label
                htmlFor="search"
                className="absolute top-[50%] -translate-y-[50%] left-4"
              >
                <Search />
              </label>
            </div>
            <Link href={"/"} className="text-xl text-primary hover:underline">
              Sign in
            </Link>
            <button className="px-[30px] py-[13px] bg-primary rounded-xl border border-primary hover:bg-transparent hover:text-primary">
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
