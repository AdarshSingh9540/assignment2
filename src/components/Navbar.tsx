
export function Navbar() {
  return (
   <div className="flex justify-between bg-black text-white ">
    <div className="">
     <img
      src="https://framerusercontent.com/images/dgUQBiTaa87xN8ZoSgZqbeIekQo.svg" 
      alt="logo" 
      className="w-40 h-auto px-6 py-6 ml-10 cursor-pointer" />
    </div>

    <div className="">
        <ul className="flex py-6 space-x-6 ">
            <li className="cursor-pointer" >Products</li>
            <li className="cursor-pointer">Soultions</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">Company</li>
        </ul>
    </div>

    <div className="py-6 space-x-6 mr-24 font-semibold cursor-pointer">Sign in <i className="bi bi-box-arrow-in-right text-xl"></i></div>
   </div>
  );
}
