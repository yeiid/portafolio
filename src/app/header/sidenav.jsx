
import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <div className=" bg-gray-50 flex w-full flex-row px-3 py-4 md:px-2">
      <div className="flex grow  justify-around space-x-2 ">
        <NavLinks />
        </div>
      </div>
    // </div>
  );
} 
