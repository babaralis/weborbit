export const TestimonialBand = () => {
  return (
    <section id="testimonial-section" className="dark-section text-white py-16 md:py-20">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Story */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              From "pretty website" to predictable pipeline.
            </h3>
            <p className="text-white/70 leading-relaxed">
              A SaaS company came to us with a beautiful website that generated almost no leads. 
              After our strategic redesign—focused on conversion paths, clear messaging, and 
              optimized forms—they saw a complete transformation in their marketing funnel.
            </p>
          </div>

          {/* Testimonial */}
          <div className="bg-white/5 rounded-xl p-6 md:p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">H</span>
              </div>
              <div>
                <p className="font-semibold">HORTON</p>
                <p className="text-white/60 text-sm">Industrial Manufacturing</p>
              </div>
            </div>
            <blockquote className="text-white/90 italic mb-4">
              "30% more qualified demo requests in 90 days. Our sales team finally has the 
              pipeline they need to hit targets."
            </blockquote>
            <p className="text-sm text-white/60">— VP of Marketing, Horton Industries</p>
          </div>
        </div>
      </div>
    </section>
  );
};
