import Link from "next/link";

export default function NavLink({ link }: { link: any }) {
  return (
    <Link href={link.href}>
      <a>{link.title}</a>
    </Link>
  );
}
