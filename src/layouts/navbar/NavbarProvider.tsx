"use client";

import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import styles from "./NavbarProvider.css";

const NavbarProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {isAdmin ? (
        <div className={styles.admin}>
          <div className={styles.navbar}>
            <Navbar />
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default NavbarProvider;
