import { Check } from "lucide-react";
import Image from "next/image";

const copyElements = [
  "Clear positioning statements",
  "Story frameworks for key pages",
  "Case study and proof layout",
  "Persuasive CTAs based on user intent",
];

export const StorytellingSection = () => {
  return (
    <section className="section-padding bg-background pt-0">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Update your messaging with{" "}
              <span className="text-primary">powerful storytelling.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Most websites sound the same. Generic headlines, vague value props, walls of text 
              that say nothing. We help you clarify your positioning, story and proof so visitors 
              "get it" in seconds.
            </p>

            <ul className="space-y-3 mb-8">
              {copyElements.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Free Offer */}
            <div className="bg-secondary rounded-xl p-6">
              <p className="font-semibold text-foreground mb-2">We'll do your homework</p>
              <p className="text-muted-foreground text-sm">
                Show us your current site and we'll rewrite one key page outline for free as part 
                of the Website Revenue Plan—before you even sign.
              </p>
            </div>
          </div>

          <div className="relative">

            <Image src="/assets/images/home/home5.png" alt="Storytelling Image" width={600} height={600} />

            {/* <div className="bg-white rounded-xl shadow-xl border border-border overflow-hidden">
            
              <div className="bg-secondary px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-4 text-sm text-muted-foreground">Homepage_Copy_v3.doc</span>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="text-xs text-primary font-semibold mb-1">H1 HEADLINE</div>
                  <div className="h-4 bg-foreground/20 rounded w-full"></div>
                  <div className="h-4 bg-foreground/10 rounded w-3/4 mt-1"></div>
                </div>

                <div>
                  <div className="text-xs text-green-600 font-semibold mb-1">SUBHEAD</div>
                  <div className="h-3 bg-foreground/10 rounded w-full"></div>
                  <div className="h-3 bg-foreground/10 rounded w-5/6 mt-1"></div>
                </div>

                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-primary/30 rounded"></div>
                  <div className="h-8 w-20 bg-secondary rounded border"></div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-xs text-blue-600 font-semibold mb-2">VALUE PROPS</div>
                  <div className="space-y-2">
                    <div className="h-3 bg-foreground/10 rounded w-full"></div>
                    <div className="h-3 bg-foreground/10 rounded w-5/6"></div>
                    <div className="h-3 bg-foreground/10 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 bg-white rounded-lg shadow-xl border border-border p-3">
              <div className="h-2 w-16 bg-muted rounded mb-2"></div>
              <div className="h-12 bg-gradient-to-r from-primary/20 to-primary/10 rounded mb-2"></div>
              <div className="space-y-1">
                <div className="h-1.5 bg-muted rounded w-full"></div>
                <div className="h-1.5 bg-muted rounded w-3/4"></div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};
