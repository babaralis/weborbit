import Image from "next/image";

export const LogoStrip = () => {
  return (
    <section className="bg-background py-12 md:py-16 border-b border-border">
      <div className="container-wide">
        <p className="text-center text-muted-foreground mb-8 text-lg font-bold">
          Trusted by teams at growth-focused brands
        </p>
        <div className="flex flex-wrap w-full min-w-[10rem] lg:min-w-[78rem] mx-auto items-center justify-center gap-[2rem] -items-center">
            <Image
              src="/assets/images/client/1.webp"
              alt="Client Logo 1"
              width={120}
              height={120}
              className="w-auto object-contain"
            />
            <Image
              src="/assets/images/client/2.webp"
              alt="Client Logo 2"
              width={120}
              height={48}
              className="w-auto object-contain"
            />
            <Image
              src="/assets/images/client/3.webp"
              alt="Client Logo 3"
              width={120}
              height={48}
              className="w-auto object-contain"
            />
            <Image
              src="/assets/images/client/4.webp"
              alt="Client Logo 4"
              width={120}
              height={48}
              className="w-auto object-contain"
            />
            <Image
              src="/assets/images/client/5.webp"
              alt="Client Logo 5"
              width={120}
              height={48}
              className="w-auto object-contain"
            />
            <Image
              src="/assets/images/client/6.webp"
              alt="Client Logo 6"
              width={120}
              height={48}
              className="w-auto object-contain"
            />
            <Image
              src="/assets/images/client/7.webp"
              alt="Client Logo 7"
              width={120}
              height={48}
              className="w-auto object-contain"
            />
            <Image
              src="/assets/images/client/8.webp"
              alt="Client Logo 8"
              width={120}
              height={48}
              className="w-auto object-contain"
            />
            <Image
              src="/assets/images/client/9.webp"
              alt="Client Logo 9"
              width={120}
              height={48}
              className="w-auto object-contain"
            />
            <Image
              src="/assets/images/client/10.webp"
              alt="Client Logo 10"
              width={120}
              height={48}
              className="w-auto object-contain lg:block hidden"
            />
            <Image
              src="/assets/images/client/11.webp"
              alt="Client Logo 11"
              width={120}
              height={48}
              className="w-auto object-contain lg:block hidden"
            />
            <Image
              src="/assets/images/client/12.webp"
              alt="Client Logo 12"
              width={120}
              height={48}
              className="w-auto object-contain lg:block hidden"
            />
            <Image
              src="/assets/images/client/13.webp"
              alt="Client Logo 13"
              width={120}
              height={48}
              className="w-auto object-contain lg:block hidden"
            />
            <Image
              src="/assets/images/client/14.webp"
              alt="Client Logo 14"
              width={120}
              height={48}
              className="w-auto object-contain lg:block hidden"
            />
            <Image
              src="/assets/images/client/15.webp"
              alt="Client Logo 15"
              width={120}
              height={48}
                className="w-auto object-contain lg:block hidden"
            />
            <Image
              src="/assets/images/client/16.webp"
              alt="Client Logo 16"
              width={120}
              height={48}
              className="w-auto object-contain lg:block hidden"
            />
        </div>
        <p className="text-center text-muted-foreground/60 text-sm mt-8">
          1,000+ pages designed, written and developed across dozens of industries
        </p>
      </div>
    </section>
  );
};
