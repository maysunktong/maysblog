import Link from "next/link";
import { SearchInput } from "./SearchInput";

const Menu = [
  {
    name: "Books 📚",
    href: "/books",
  },
  {
    name: "Study",
    href: "/",
  },
  {
    name: "Food",
    href: "/",
  },
  {
    name: "Café",
    href: "/",
  },
];

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap py-6 max-h-fit">
        <div className="flex justify-center items-center gap-x-6">
          <Link href="/">
            <img src="/may.png" alt="" width={100} />
          </Link>
          <div className="flex gap-x-8 text-xl text-slate-800">
            {Menu.map((menu) => {
              return (
                <div key={menu.name}>
                  <Link href={menu.href}>{menu.name}</Link>
                </div>
              );
            })}
          </div>
        </div>

        <SearchInput />
      </nav>
    </>
  );
};
