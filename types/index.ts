import React, { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";

import * as z from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Too short!'
  }).max(50, {
    message: 'Too long!'
  }),
  useremail: z.string().email({message: 'Invalid email!'}),
  message: z.string().min(5, {message:'Too short!'})
});

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

export type ButtonProps =  {
  classNames?: string
} & ReactChildrenProp &
  ComponentPropsWithoutRef<"button"> 

export type ProjectCardProps = {
  name:string,
  description:string,
  githubLink?: string,
  liveLink?:string,
  tags:string[]
  image:string
  logo:string
}

export type GetToKnowMeCardProps = {
  heading:string,
  subheading:string,
  link:string
}

export type TechCardProps = {
  name: string,
  tag:string,
  image:string
  category:string
}

export type MobileNavProps = {
  slug:string,
  id: string,
  icon: IconType
}

export type WorkCardProps =  ProjectCardProps;

export type FreetimeCardProps = {
  heading:string,
  subheading:string,
  images: {
    name:string,image:string
  }[]
}

export type ExperienceProps = {
  id:number,
  companyname:string,
  designation:string,
  dateLocation:string,
  about: {id:string,point:string}[]
}