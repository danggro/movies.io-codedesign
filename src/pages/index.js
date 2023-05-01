import Container from "@/components/Container";
import LeftSection from "@/components/LeftSection/LeftSection";
import NavBar from "@/components/Navigation/NavBar";
import RightSection from "@/components/RightSection/RightSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies.io</title>
      </Head>
      <NavBar />
      <Container>
        <main className="flex gap-[115px] mt-[58px]">
          <LeftSection />
          <RightSection />
        </main>
      </Container>
    </>
  );
}
