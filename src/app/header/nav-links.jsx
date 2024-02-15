"use client";

import Link from "next/link";
import Image from 'next/image'
import logo from '../../../public/logo.ico'
const links = [
  { name: "Home", href: "#home", icon:"bx bx-home-alt-2 nav__icon" },
  {name: "About",href: "#about",icon:"bx bx-message-square"},
  { name: "Skills", href: "#skills",icon:"bx bx-code-alt" },
  { name: "Proyect", href: "#services",icon:"bx bx-run" },
  { name: "Contact", href: "#contact",icon:"bx bxs-contact" },
];

export default function NavLinks() {
  return (
    <>
      <div >
      <a href="#home" >
        <Image src={logo} width={50} height={50} alt="logo" />
      </a>
      </div>
      {
      links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className=" flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            //   {
            //     'bg-sky-100 text-blue-600': pathname === link.href,
            //   },
            // }
          >
            <div className="w-6"><i className={LinkIcon} ></i></div>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
