import React, { ComponentPropsWithoutRef } from "react";

export type ReactChildrenProp = {
  children: React.ReactNode;
};

export type NavlinkType = {
  href: string;
  name?: string;
  // image?: string;
};

export type SocialImageType = {
  src: string;
  alt: string;
  link: string;
};

export type ButtonProps = ReactChildrenProp &
  ComponentPropsWithoutRef<"button">;
