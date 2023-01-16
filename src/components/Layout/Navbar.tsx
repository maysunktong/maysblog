import Link from "next/link"

const Menu = [
  {
    name: "Books 📚",
    href: "/books",
  },{
    name: "Study",
    href: "/",
  },{
    name: "Food",
    href: "/",
  },
  {
    name: "Café",
    href: "/",
  },
]

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap py-6 max-h-fit">
        <Link href="/"><img src="/logo.png" alt="" width={100} /></Link>
        <div className="flex gap-x-8 text-xl text-slate-800">
          {Menu.map((menu) => {
            return (
              <div key={menu.name} >
                <Link href={menu.href}>{menu.name}</Link>
              </div>
            )
          })}
        </div>
      </nav>
    </>
  )
}
