import Image from "next/image";
import { clsx } from "clsx";
import Head from "next/head";
import { Hero } from "@/components";
import * as classes from "@/constants/classes";
import Contact from "@/components/Contact";

function HomePage() {
  return (
    <div id="main">
      <Head>
        <title>Vaka Consulting</title>
        <meta
          key="desc"
          name="description"
          content="Vaka Consulting specialise in the design and development of software
          solutions, primarily using decentralised trust technology, to support
          businesses delivering socially positive products."
        />
        <meta property="og:title" content="Vaka Consulting" />
        <meta
          property="og:description"
          content="Vaka Consulting specialise in the design and development of software
          solutions, primarily using decentralised trust technology, to support
          businesses delivering socially positive products."
        />
        <meta property="og:image" content="/boat.webp" key="image" />
      </Head>
      <section
        id="hero"
        className="section min-h-[100vh] flex bg-pattern bg-cover bg-no-repeat"
      >
        <Hero className="container m-auto" />
      </section>
      <section
        id="about"
        className="container section px-12 sm:px-14 md:px-20 sm:text-lg md:text-xl font-medium"
      >
        <p className="mb-10">
          In an ocean of information, navigating technology options can be
          daunting for modern businesses. For millennia, Polynesian Wayfinders
          have explored the Pacific aboard the Vaka, a trusted vessel that
          carried them to the discovery of idyllic lands on which to settle.
        </p>

        <p>
          Vaka Consulting specialise in the design and development of software
          solutions, primarily using decentralised trust technology, to support
          businesses delivering socially positive products.
        </p>
      </section>
      <section id="work" className="container section">
        <ul className="flex flex-col space-y-12">
          <li>
            <article className="card text-secondary flex flex-wrap gap-8">
              <header className={classes.twoColClassNames}>
                <h3
                  className={clsx(
                    classes.firstColClassNames,
                    classes.sectionHeadingClassNames,
                  )}
                >
                  Blockchain{" "}
                  <span className="font-extralight md:block">Web3</span>
                </h3>
                <p className={classes.secondColClassNames}>
                  Blockchain technology offers businesses a way to establish
                  trust with their clients and stakeholders, through data
                  transparency, immutable transactions and cryptographic proofs.
                  Our team has experience supporting projects from concept
                  through to launch, looking to incorporate web3 technology into
                  their business systems.
                </p>
              </header>
              <figure className="relative w-full">
                <Image
                  src="https://empowa.io/wp-content/uploads/empowa-brand-image-scaled.jpg"
                  alt="Project Empowa Image"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full h-auto"
                />
              </figure>
              <div className={classes.twoColClassNames}>
                <div className={classes.firstColClassNames}>
                  <h2 className="font-bold">Empowa</h2>
                  <a
                    href="#"
                    target="_blank"
                    className="btn mt-2 hidden md:inline-block"
                  >
                    Visit project
                  </a>
                </div>
                <div className={classes.secondColClassNames}>
                  As a technology partner to Empowa from their inception, Vaka
                  Consulting led the development of their tokenised finance
                  platform to fund affordable housing. The platform’s pilot
                  recently financed climate smart homes for 30 families in
                  Beira, Mozambique. More than 50% were women led households and
                  the average client age was 20 years younger than for
                  traditional finance.
                </div>
                <a
                  href="https://empowa.io"
                  target="_blank"
                  className="btn mt-4 md:hidden"
                >
                  Visit project
                </a>
              </div>
            </article>
          </li>
          <li>
            <article className="card flex flex-wrap gap-8 text-secondary">
              <header className={classes.twoColClassNames}>
                <h3
                  className={clsx(
                    classes.firstColClassNames,
                    classes.sectionHeadingClassNames,
                  )}
                >
                  Impact <span className="font-extralight md:block">Data</span>
                </h3>
                <p className={classes.secondColClassNames}>
                  As businesses and investors become more conscious of the
                  global effects of their activities, they look to data as a
                  source for measuring and if necessary remediating their impact
                  footprint.
                </p>
              </header>
              <figure className="relative w-full">
                <Image
                  src={`/project-climafi.jpg`}
                  alt="Project ClimaFi Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </figure>
              <div className={classes.twoColClassNames}>
                <div className={classes.firstColClassNames}>
                  <h2 className="font-bold">ClimaFi Partner Profile</h2>
                  <a
                    href="#"
                    target="_blank"
                    className="btn mt-2 hidden md:inline-block"
                  >
                    Visit project
                  </a>
                </div>
                <div className={classes.secondColClassNames}>
                  We have partnered with ClimaFI to innovate in the collection
                  and presentation of impact data to simplify SDG reporting,
                  helping SMEs attract impact investment. In addition to working
                  with various source types (e.g. IoT, GIS, crowdsourced), we
                  are developing new data verification tools and processes using
                  decentralised and self sovereign identity technology.
                </div>
                <a
                  href="https://climafi.earth"
                  target="_blank"
                  className="btn mt-4 md:hidden"
                >
                  Visit project
                </a>
              </div>
            </article>
          </li>
        </ul>
      </section>
      <section id="contact" className="container section mb-40">
        <Contact />
      </section>
    </div>
  );
}

export default HomePage;
