"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconInfoCircle } from "@tabler/icons-react";

export default function FloatingNavbar() {
  const navItems = [
    {
      name: "About",
      link: "/about",
      icon: <IconInfoCircle />,
    },
  ];
  return (
    <div>
      <FloatingNav navItems={navItems} className="" />
    </div>
  );
}
