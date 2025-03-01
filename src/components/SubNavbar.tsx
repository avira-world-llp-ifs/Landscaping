"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/SubNavbar.module.css";

const subNavData: Record<string, string[]> = {
  Services: ["Frontend", "Backend", "Cloud"],
  About: ["Mission", "Vision", "Team"],
};

export default function SubNavbar({ selectedPage }: { selectedPage: string }) {
  const [subItems, setSubItems] = useState<string[]>([]);

  useEffect(() => {
    setSubItems(subNavData[selectedPage] || []);
  }, [selectedPage]);

  if (subItems.length === 0) return null;

  return (
    <div className={styles.subNavbar}>
      <ul className={styles.subNavList}>
        {subItems.map((item) => (
          <li key={item}>
            <Link href={`/${selectedPage.toLowerCase()}/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
