import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
     <Image
      src="/RevRec_logo.png"
      width={350}
      height={80}
      alt="RevRec360"
    />
    </div>
  );
}
