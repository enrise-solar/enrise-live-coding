import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-16">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-orange-600">
          Enrise Dashboard
        </h1>
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>
    </div>
  );
}
