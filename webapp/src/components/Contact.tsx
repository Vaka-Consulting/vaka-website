import { clsx } from "clsx";
import Image from "next/image";
import * as classes from "@/constants/classes";
import { IconBrandLinkedin, IconBrandX, IconMail } from "@tabler/icons-react";

console.log(classes);

export default function Contact() {
  return (
    <div className="card bg-tertiary text-white">
      <article className="flex flex-col flex-wrap gap-8">
        <header className={classes.twoColClassNames}>
          <h3
            className={clsx(
              classes.firstColClassNames,
              classes.sectionHeadingClassNames,
            )}
          >
            Get in <span className="font-extralight md:block">Touch</span>
          </h3>
          <p className={classes.secondColClassNames}>
            We are more than just a technology partner. Like the Vaka guided its
            passengers to their new home, we will accompany you on your journey
            towards achieving your mission.
          </p>
        </header>
        <figure className="relative w-full">
          <Image
            src={`/contact.jpg`}
            alt="Project Empowa Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </figure>
        <div>
          <ul className="text-center md:columns-3">
            <li className="flex mt-2 mb-6 md:mt-0 md:mb-0">
              <IconBrandLinkedin size={24} className="mr-2" />
              <a
                href="https://www.linkedin.com/company/vaka-consulting"
                target="_blank"
                className="link flex"
              >
                vaka-consulting
              </a>
            </li>
            <li className="flex mt-2 mb-6 md:mt-0 md:mb-0">
              <IconBrandX size={24} className="mr-2" />
              <a
                href="https://twitter.com/vaka_consulting"
                target="_blank"
                className="link"
              >
                @vaka_consulting
              </a>
            </li>
            <li className="flex mt-2">
              <IconMail size={24} className="mr-2" />
              <a
                href="mailto:info@vaka.consulting"
                target="_blank"
                className="link"
              >
                info@vaka.consulting
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
