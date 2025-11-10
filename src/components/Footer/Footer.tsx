import Link from "next/link";

export default function Footer({ fixed = true }: { fixed?: boolean }) {
  return (
    <div
      className={`z-10 text-gray-500 text-center flex items-center justify-center py-4 w-full font-light relative ${
        fixed ? "md:fixed md:bottom-2" : ""
      }`}
    >
      Desenvolvido gratuitamente por{" "}
      <Link href="https://hoffmann.io" target="_blank" className="ml-1">
        Taylor Hoffmann
      </Link>
    </div>
  );
}
