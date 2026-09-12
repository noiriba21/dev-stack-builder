export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-10">
      {/* মোবাইল স্ক্রিনের জন্য হ্যামবার্গার মেনু */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#home">Home</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        {/* লোগো এবং নাম */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 flex items-center text-white font-bold justify-center">
            DS
          </div>
          <span className="text-xl font-bold">Dev <span className="text-pink-600">Stack</span></span>
        </div>
      </div>

      {/* বড় স্ক্রিনের মেনু লিংক */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* ডান পাশের বাটন */}
      <div className="navbar-end gap-3">
        <button className="btn btn-ghost text-sm font-semibold">Sign In</button>
        <button className="btn bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 text-white border-none rounded-full px-5">
          Sign Up
        </button>
      </div>
    </div>
  );
}