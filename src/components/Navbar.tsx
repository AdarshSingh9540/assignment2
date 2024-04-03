
export function Navbar() {
  return (
   <div className="flex justify-between bg-black text-white">
    <div className="">
     <img
      src="https://framerusercontent.com/images/dgUQBiTaa87xN8ZoSgZqbeIekQo.svg" 
      alt="logo" 
      className="w-40 h-auto px-6 py-7 ml-10 " />
    </div>
    
    <div className="">
        <ul className="flex ">
            <li>Products</li>
            <li>Soultions</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Company</li>
        </ul>
    </div>

    <div>SignUp</div>
   </div>
  );
}
