import { StandardComponentProps } from "@/types/component";

function Hero({ className }: StandardComponentProps) {
  return (
    <div className={`${className} py-4 text-center`}>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-[3rem] lg:leading-[4rem] font-mono font-[250] tracking-widest">
        Building Decentralised Technology Solutions For Humanity
      </h1>
    </div>
  );
}

export default Hero;
