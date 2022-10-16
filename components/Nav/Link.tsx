import Link from "next/link";

export default function NavLink({ link }: { link: any }) {
  return (
    <Link href={link.href}>
      <a className="px-4 py-2">{link.title}</a>
    </Link>
  );
}
