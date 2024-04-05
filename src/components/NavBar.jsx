function NavBar() {
  return (
    <nav className="flex items-center justify-between text-gray-200 px-4 py-3 bg-slate-800">
      <h2 className="flex flex-col uppercase items-center">
        <span className="text-[10px] font-medium">We got</span>
        <span className="text-md font-bold">No time</span>
      </h2>

      <p className="text-sm font-bold">Menu</p>
    </nav>
  );
}

export default NavBar;
