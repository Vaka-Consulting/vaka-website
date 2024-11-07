import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Hero } from "@/components";
import { getHomePage } from "@/requests/page";
import ProjectListSc from "@/_app/(root)/projects-list-server";

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["home-page"],
    queryFn: getHomePage,
  });

  return (
    <>
      <section id="hero" className="container section">
        <Hero className="mx-auto" />
      </section>
      <section id="about" className="container section text-justify px-20">
        <p className="font-medium">
          In an ocean of information, navigating technology options can be
          daunting for modern businesses. For millennia, Polynesian Wayfinders
          have explored the Pacific aboard the Vaka, a trusted vessel that
          carried them to the discovery of idyllic lands on which to settle.
        </p>
      </section>
      <section id="work" className="container section">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProjectListSc />
        </HydrationBoundary>
      </section>
      <section id="contact" className="container section">
        <div className="card">Get in touch</div>
      </section>
    </>
  );
}
