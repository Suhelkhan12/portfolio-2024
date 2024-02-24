import React, { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";

export type ReactChildrenProp = {
  children: React.ReactNode;
};

export type NavlinkType = {
  href: string;
  name?: string;
  // image?: string;
};

export type SocialImageType = {
  src: IconType;
  alt: string;
  link: string;
};

export type ButtonProps = ReactChildrenProp &
  ComponentPropsWithoutRef<"button">;
