
import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <div className="fixe bg-gray-50 flex h-full flex-row px-3 py-4 md:px-2">
      <div className="flex grow  justify-around space-x-2  md:space-x-0 md:space-y-2">
        <NavLinks />
        </div>
      </div>
    // </div>
  );
}
