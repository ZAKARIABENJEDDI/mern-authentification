import { Link, Outlet } from "react-router"

export default function Navbar() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex justify-around py-3 bg-sky-950 text-white font-sans ">
        <div className="">Navbar</div>
        <div className="flex items-center">
          <Link className="mx-5" to="/signin">Sing Up</Link>
          <Link className="mx-5" to="/login">Login</Link>
          <Link className="mx-5" to="/welcome">Welcome</Link>
        </div>
      </div>
      <section className="flex justify-center items-center flex-grow">
        <Outlet/>
      </section>
    </div>
  )
}