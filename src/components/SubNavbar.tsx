// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import styles from "@/styles/SubNavbar.module.css";
// import { usePathname } from "next/navigation";

// const subNavData: Record<string, string[]> = {
//   Services: ["Frontend", "Backend", "Cloud"],
//   About: ["Mission", "Vision", "Team"],
// };

// export default function SubNavbar() {
//   const pathname = usePathname() || "";
//   if (pathname.startsWith("/services/consulting")) {
//     return (
//       <div className="bg-blue-600 text-white p-3 flex gap-4">
//         <Link href="/services/web-development">Web Development</Link>
//         <Link href="/services/digital-marketing">Digital Marketing</Link>
//         <Link href="/services/seo">SEO</Link>
//       </div>
//     );
//   }

//   if (pathname.startsWith("/packages")) {
//     return (
//       <div className="bg-green-600 text-white p-3 flex gap-4">
//         <Link href="/packages/basic">Basic Package</Link>
//         <Link href="/packages/premium">Premium Package</Link>
//       </div>
//     );
//   }

//   return null; // No subNavbar for other pages
// };
"use client";

import Link from "next/link";

type SubNavItem = {
  name: string;
  href: string;
};

export default function SubNavbar({ items }: { items: SubNavItem[] }) {
  if (!items.length) return null;

  return (
    <div className="border-b bg-white duration-600 ease-in-out" style={{height:"58px"}}>
      <div className="container mx-auto px-4 py-2 flex gap-6 ">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-4 py-2 hover:#003087 hover:text-white rounded-md transition-all"
            style={{fontWeight:"bold", fontSize:"20px"} }
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
