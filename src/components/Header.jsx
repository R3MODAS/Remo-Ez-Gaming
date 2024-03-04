import { Link } from "react-router-dom"

// 

const Header = () => {
  return (
    <header className="shadow-md bg-[#1079aa] fixed left-0 right-0 top-0 w-full z-10 h-20 px-4">
        <div className="container mx-auto flex justify-between items-center h-full">
          <Link to="/">
            <img src="/assets/logo.png" alt="logo" className="rounded-full w-14" />
          </Link>

            <ul className="flex items-center gap-5 font-PoppinsMed text-base">
                <li>
                 <Link to="/">Home</Link> 
                </li>
                <li>
                 <Link to="/about">About</Link> 
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header