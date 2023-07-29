import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-10 py-7">
      <div className="container max-w-7xl flex justify-between items-center">
        <Link href="/">
          <h1 className="font-medium text-3xl">Business Card Maker</h1>
        </Link>
      </div>
    </div>
  );
}
