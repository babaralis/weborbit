"use client";

export const AINetworkSection = () => {
  return (
    <section id="ai-network" className="py-16 md:py-20 lg:py-24 bg-secondary pb-0">
      <div className="container-wide mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-12 md:mb-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 max-w-3xl mx-auto">
              Autonomous Doesn't Mean{" "}
              <span className="text-primary">Isolated</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Your AI agents share signals, escalate across channels, and
              optimize workflows together. Think of it as a mesh network of AI,
              tailored to your business.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="hidden md:block relative min-h-[600px]">
            <div className="relative w-full h-[600px]">
              <svg
                className="absolute top-0 left-0 w-full h-full z-10"
                viewBox="0 0 1000 600"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="500"
                  y1="275"
                  x2="160"
                  y2="50"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="50"
                  y2="300"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="230"
                  y2="510"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="840"
                  y2="50"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="950"
                  y2="300"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="765"
                  y2="510"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="160"
                  y1="50"
                  x2="50"
                  y2="300"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
                <line
                  x1="50"
                  y1="300"
                  x2="230"
                  y2="510"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
                <line
                  x1="840"
                  y1="50"
                  x2="950"
                  y2="300"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
                <line
                  x1="950"
                  y1="300"
                  x2="765"
                  y2="510"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
              </svg>
              <div className="absolute top-[0px] left-[214px] text-center z-20">
                <div className="w-20 h-20 rounded-full border-[3px] border-primary flex items-center justify-center mx-auto mb-2 p-1">
                  <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                  </div>
                </div>
                <div className="text-sm font-semibold text-foreground max-w-[150px]">
                  Sales Operation AI Agent
                </div>
              </div>
              <div className="absolute top-[250px] left-[100px] text-center z-20">
                <div className="w-20 h-20 rounded-full border-[3px] border-primary flex items-center justify-center mx-auto mb-2 p-1">
                  <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
                  </div>
                </div>
                <div className="text-sm font-semibold text-foreground max-w-[150px]">
                  Customer Service AI Agent
                </div>
              </div>
              <div className="absolute top-[460px] left-[275px] text-center z-20">
                <div className="w-20 h-20 rounded-full border-[3px] border-primary flex items-center justify-center mx-auto mb-2 p-1">
                  <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                </div>
                <div className="text-sm font-semibold text-foreground max-w-[150px]">
                  Human Resources AI Agent
                </div>
              </div>
              <div className="absolute top-[230px] left-1/2 -translate-x-1/2 text-center z-20">
                <div className="w-20 h-20 rounded-full border-[3px] border-primary flex items-center justify-center mx-auto mb-2 p-1">
                  <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                </div>
                <div className="text-sm font-semibold text-foreground max-w-[150px]">
                  Cameron Brooks
                </div>
              </div>
              <div className="absolute top-[0px] right-[216px] text-center z-20">
                <div className="w-20 h-20 rounded-full border-[3px] border-primary flex items-center justify-center mx-auto mb-2 p-1">
                  <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                  </div>
                </div>
                <div className="text-sm font-semibold text-foreground max-w-[150px]">
                  Healthcare AI Agent
                </div>
              </div>
              <div className="absolute top-[250px] right-[100px] text-center z-20">
                <div className="w-20 h-20 rounded-full border-[3px] border-primary flex items-center justify-center mx-auto mb-2 p-1">
                  <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                </div>
                <div className="text-sm font-semibold text-foreground max-w-[150px]">
                  Finance & Banking AI Agent
                </div>
              </div>
              <div className="absolute top-[460px] right-[275px] text-center z-20">
                <div className="w-20 h-20 rounded-full border-[3px] border-primary flex items-center justify-center mx-auto mb-2 p-1">
                  <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>   
                  </div>
                </div>
                <div className="text-sm font-semibold text-foreground max-w-[150px]">
                  Transportation AI Agent
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden relative min-h-[400px] p-8">
            <div className="relative w-full h-[400px]">
              <svg
                className="absolute top-0 left-0 w-full h-full z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="50"
                  y1="15"
                  x2="20"
                  y2="85"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="1"
                  strokeDasharray="4,3"
                  opacity="0.5"
                />
                <line
                  x1="50"
                  y1="15"
                  x2="80"
                  y2="85"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="1"
                  strokeDasharray="4,3"
                  opacity="0.5"
                />
                <line
                  x1="20"
                  y1="85"
                  x2="80"
                  y2="85"
                  stroke="hsl(24 95% 53%)"
                  strokeWidth="1"
                  strokeDasharray="4,3"
                  opacity="0.5"
                />
              </svg>
              <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center z-20">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-2 p-0.5">
                  <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    ET
                  </div>
                </div>
                <div className="text-xs font-semibold text-foreground max-w-[120px]">
                  Email Triage AI Agent
                </div>
              </div>
              <div className="absolute bottom-[15%] left-[20%] text-center z-20">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-2 p-0.5">
                  <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    OM
                  </div>
                </div>
                <div className="text-xs font-semibold text-foreground max-w-[120px]">
                  Order Management AI Agent
                </div>
              </div>
              <div className="absolute bottom-[15%] right-[20%] text-center z-20">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-2 p-0.5">
                  <div className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    SO
                  </div>
                </div>
                <div className="text-xs font-semibold text-foreground max-w-[120px]">
                  Sales Operation AI Agent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
