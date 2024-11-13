import { clsx } from "clsx";
import Image from "next/image";
import { Hero } from "@/components";
import { BASE_PATH } from "../../config";

const twoColClassNames = "md:grid md:grid-cols-6 md:gap-8";
const firstColClassNames = "md:col-start-1 md:col-end-3";
const secondColClassNames = "md:col-start-3 md:col-end-7";
const sectionHeadingClassNames =
  "mb-2 sm:mb-0 text-2xl md:text-3xl lg:text-4xl";

const pathPrefix = process.env.NODE_ENV === "production" ? `/${BASE_PATH}` : "";

function HomePage() {
  return (
    <>
      <section id="hero" className="container section min-h-[50vh] flex">
        <Hero className="m-auto" />
      </section>
      <section
        id="about"
        className="container section text-justify px-12 sm:px-14 md:px-20"
      >
        <p className="sm:text-lg md:text-xl font-medium">
          In an ocean of information, navigating technology options can be
          daunting for modern businesses. For millennia, Polynesian Wayfinders
          have explored the Pacific aboard the Vaka, a trusted vessel that
          carried them to the discovery of idyllic lands on which to settle.
        </p>
      </section>
      <section id="work" className="container section">
        <ul className="flex flex-col space-y-12">
          <li className="card">
            <article className="flex flex-wrap gap-8">
              <header className={twoColClassNames}>
                <h3
                  className={clsx(firstColClassNames, sectionHeadingClassNames)}
                >
                  Blockchain{" "}
                  <span className="font-extralight md:block">Web3</span>
                </h3>
                <p className={secondColClassNames}>
                  Vaka Consulting specialise in the design and development of
                  software solutions, primarily using blockchain and
                  decentralised technology, to support businesses delivering
                  socially positive products.
                </p>
              </header>
              <figure className="relative w-full">
                <Image
                  src={`${pathPrefix}/project-empowa.jpg`}
                  alt="Project Empowa Image"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full h-auto"
                />
              </figure>
              <div className={twoColClassNames}>
                <div className={firstColClassNames}>
                  <h2 className="font-bold">Empowa</h2>
                  <a
                    href="#"
                    target="_blank"
                    className="btn mt-2 hidden md:inline-block"
                  >
                    Visit project
                  </a>
                </div>
                <div className={secondColClassNames}>
                  Vaka Consulting is the lead technology partner implementing
                  the Empowa platform that uses tokenised finance products to
                  fund affordable housing. In 2022 the Empowa platform was used
                  to finance climate smart homes for 30 families in Beira,
                  Mozambique. More than 50% were women led households and the
                  average client age was 20 years younger than for traditional
                  finance.
                </div>
                <a href="#" target="_blank" className="btn mt-4 md:hidden">
                  Visit project
                </a>
              </div>
            </article>
          </li>
          <li className="card">
            <article className="flex flex-wrap gap-8">
              <header className={twoColClassNames}>
                <h3
                  className={clsx(firstColClassNames, sectionHeadingClassNames)}
                >
                  Impact{" "}
                  <span className="font-extralight md:block">
                    Data Reporting
                  </span>
                </h3>
                <p className={secondColClassNames}>
                  But we are more than just a technology partner. Like the Vaka
                  guided its passengers to their new home, we will accompany you
                  on your journey towards achieving your mission.
                </p>
              </header>
              <figure className="relative w-full">
                <Image
                  src={`${pathPrefix}/project-climafi.jpg`}
                  alt="Project ClimaFi Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </figure>
              <div className={twoColClassNames}>
                <div className={firstColClassNames}>
                  <h2 className="font-bold">ClimaFi Partner Profile</h2>
                  <a
                    href="#"
                    target="_blank"
                    className="btn mt-2 hidden md:inline-block"
                  >
                    Visit project
                  </a>
                </div>
                <div className={secondColClassNames}>
                  Text about ClimafiText about ClimafiText about ClimafiText
                  about ClimafiText about ClimafiText about Climafi
                </div>
                <a href="#" target="_blank" className="btn mt-4 md:hidden">
                  Visit project
                </a>
              </div>
            </article>
          </li>
        </ul>
      </section>
      <section id="contact" className="container section">
        <div className="card bg-secondary text-white">
          <article className="flex flex-col flex-wrap gap-8">
            <header className={twoColClassNames}>
              <h3
                className={clsx(firstColClassNames, sectionHeadingClassNames)}
              >
                Get in <span className="font-extralight md:block">Touch</span>
              </h3>
              <p className={secondColClassNames}>
                But we are more than just a technology partner. Like the Vaka
                guided its passengers to their new home, we will accompany you
                on your journey towards achieving your mission.
              </p>
            </header>
            <figure className="relative w-full">
              <Image
                src={`${pathPrefix}/contact.jpg`}
                alt="Project Empowa Image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </figure>
            <div>
              <ul className="text-center">
                <li className="mb-6">
                  <h3 className="text-lg">Twitter</h3>
                  <a
                    href="https://twitter.com/vakaconsulting"
                    target="_blank"
                    className="mt-2"
                  >
                    @vakaconsulting
                  </a>
                </li>
                <li>
                  <h3 className="text-lg">Email</h3>
                  <a
                    href="mailto:info@vaka.consulting"
                    target="_blank"
                    className="mt-2"
                  >
                    info@vaka.consulting
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default HomePage;
