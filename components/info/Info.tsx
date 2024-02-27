import Link from "next/link";

const Info = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <h2 className=" text-2xl font-semibold text-basicLightGray">
          Hi there, I&apos;m Suhel, a frontend engineer currently at{" "}
          <Link href="https://parallelhq.com" className=" text-white">
            Parallel<span className="text-lg font-medium">↗</span>
          </Link>{" "}
          based in India.
        </h2>
        <p className="text-lg font-normal text-basicDarkGray">
          I have an insatiable curiosity for exploring the possibilities of
          technology and understanding the diverse perspectives that shape our
          world. Each line of code I write and each project I undertake is
          informed by the rich tapestry of cultures and experiences I&apos;ve
          encountered.
        </p>
        {/* <p className="text-lg font-normal text-basicDarkGray">
        With a deep commitment to emerging technologies and an unwavering belief
        in the power of inclusive design, I strive to create digital experiences
        that seamlessly blend functionality with cultural relevance. As a
        perpetual learner in the realm of software development, I am dedicated
        to refining my craft and embracing new technologies to create meaningful
        solutions that positively impact society.
      </p> */}
        <p className="text-lg font-normal text-basicDarkGray">
          I draw from the diversity of human experiences to inform my coding
          practices. My journey as a developer is not just about writing code;
          it&apos;s about connecting technology with human behavior and cultural
          insights to build bridges across communities and foster innovation in
          the digital sphere.
        </p>
        <p className="text-lg font-normal text-basicDarkGray">
          In my spare time, you can find me obsessing over many hobbies that
          satisfy my inner tinkerer and techy. These include custom mechanical
          keyboards, hi-fidelity video games, football, and street photography.
          I&apos;m always on the lookout for another money trap... but these
          hobbies allow me to appreciate the little things while iterating until
          everything is just right.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className=" text-2xl font-semibold text-basicLightGray">
          I believe that
        </h2>
        <p className="text-lg font-normal text-basicDarkGray">
          Technology should seamlessly integrate into our lives. My passion lies
          in simplifying complex systems, merging technical expertise with
          empathy and creativity. By combining elegant code with user-centric
          design, I aim to streamline digital experiences and empower people to
          navigate the challenges of our digital world with ease.
        </p>
      </div>
    </div>
  );
};

export default Info;
