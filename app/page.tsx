import Container from "@/components/container";
import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-[#6a99ff] absolute top-[-6rem] -z-10 right-[5rem] h-[15rem] w-[31.25rem] rounded-full blur-[8rem] sm:w-[68.75rem] dark:bg-[#6a99ff]"></div>
      <div className="bg-[#6a99ff] absolute top-[-1rem] -z-10 left-[-35rem] h-[15.25rem] w-[50rem] rounded-full blur-[7rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#6a99ff]"></div>
      <Nav />
      <div className="w-3/12 mx-auto">
      <Image src="/container.png" alt="Vercel Logo" width={500} height={500} />
      </div>
      <Container />
    </div>
  );
}
