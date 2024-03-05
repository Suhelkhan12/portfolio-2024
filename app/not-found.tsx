/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Wrapper from "@/components/wrapper/Wrapper";

export default function NotFound() {
  return (
    <section className="relative z-50 flex h-[70vh] items-center justify-center">
      <Wrapper>
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <h1 className="text-8xl font-bold text-ligthFaintWhite">404</h1>
          <p className="text-center text-[1.5rem] text-basicLightGray sm:text-xl md:text-2xl">
            This page is currently under development. My appologies for the
            confusion.
          </p>
          <Link href="/">
            <PrimaryButton>Return to Home</PrimaryButton>
          </Link>
        </div>
      </Wrapper>
    </section>
  );
}
