import Link from "next/link"

export const Navbar = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/books">Books</Link>
      <Link href="/Study">Study</Link>
    </>
  )
}
