import { StandardComponentProps } from "@/types/component";

function Hero({ className }: StandardComponentProps) {
  return (
    <div className={`${className} py-4 text-center`}>
      <h1 className="text-5xl font-mono font-[250] leading-[4rem] tracking-widest">
        Building Decentralised Technology Solutions For Humanity
      </h1>
    </div>
  );
}

export default Hero;
