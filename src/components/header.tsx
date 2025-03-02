import React, { useState } from 'react'
import MegaMenuNavbar from './Navbar'
import MultiLineSlideHero from './HomeCarousel'
import SubNavbar from './SubNavbar'

type SubNavItem = {
    name: string;
    href: string;
  };
function Header() {
    const [selectedPage, setSelectedPage] = useState("/consulting");
    const [subNavItems, setSubNavItems] = useState<SubNavItem[]>([]);
    return (
        <>
            <MegaMenuNavbar setSubNavItems={setSubNavItems} />
            <MultiLineSlideHero />
            <SubNavbar items={subNavItems}/>

        </>
    )
}

export default Header