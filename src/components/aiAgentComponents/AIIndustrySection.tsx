"use client";

export const AIIndustrySection = () => {
  return (
    <section id="ai-industry" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-wide mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-12 md:mb-16">
          <div className="w-full lg:w-8/12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 max-w-3xl mx-auto">
              AI Agents Built for{" "}
              <span className="text-primary">Every Business Need</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our agents don't just reply, they adapt to your industry and
              workflow. Whether in healthcare, customer service, or education,
              our AI agents integrate seamlessly into your operations to
              deliver speed, scale, and efficiency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Healthcare AI Agent */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 min-h-[300px]">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <i className="fas fa-headset text-primary"></i>
                    <span>Customer Support Agent</span>
                  </div>
                  <div className="bg-primary text-white px-2 py-1 rounded-xl text-xs">
                    Online
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-center text-xs text-muted-foreground mb-2">
                    Connected to AI Agent
                  </div>
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-xs mb-1">Sophie</div>
                      <div className="bg-gray-100 px-3 py-2 rounded-lg text-xs">
                        Hi! I'm here to assist you. Please tell me what went
                        wrong so I can help.
                      </div>
                      <div className="text-[0.65rem] text-muted-foreground mt-1">
                        02:00 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 max-w-[85%] ml-auto flex-row-reverse">
                    <div className="flex-1">
                      <div className="bg-primary text-white px-3 py-2 rounded-lg text-xs">
                        Your delivery team arrived late and damaged the package.
                        I'm quite upset.
                      </div>
                      <div className="text-[0.65rem] text-muted-foreground mt-1 text-right">
                        02:10 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-4">Healthcare AI Agent</h4>
              <ul className="space-y-3 list-none p-0 m-0">
                <li className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <i className="fas fa-circle text-primary text-[0.5rem] mt-2"></i>
                  <span>
                    Manages patient inquiries and appointment scheduling.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <i className="fas fa-circle text-primary text-[0.5rem] mt-2"></i>
                  <span>
                    Provides instant medical info from approved knowledge bases.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <i className="fas fa-circle text-primary text-[0.5rem] mt-2"></i>
                  <span>
                    Reduces staff workload while improving patient experience.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Customer Service AI Agent */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 min-h-[300px]">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <i className="fas fa-phone text-primary"></i>
                    <span>Call Log Assistant</span>
                  </div>
                  <div className="bg-primary text-white px-2 py-1 rounded-xl text-xs">
                    Online
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-center text-xs text-muted-foreground mb-2">
                    Connected to AI Agent
                  </div>
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-xs mb-1">Amelia</div>
                      <div className="bg-gray-100 px-3 py-2 rounded-lg text-xs">
                        Hi! Just checking in — would you like a summary of your
                        last support call?
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 max-w-[85%] ml-auto flex-row-reverse">
                    <div className="flex-1">
                      <div className="bg-primary text-white px-3 py-2 rounded-lg text-xs">
                        Yes please. I need a copy of the conversation for my
                        records.
                      </div>
                      <div className="text-[0.65rem] text-muted-foreground mt-1 text-right">
                        05:16 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-4">Customer Service AI Agent</h4>
              <ul className="space-y-3 list-none p-0 m-0">
                <li className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <i className="fas fa-circle text-primary text-[0.5rem] mt-2"></i>
                  <span>Resolves FAQs instantly across multiple channels.</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <i className="fas fa-circle text-primary text-[0.5rem] mt-2"></i>
                  <span>Escalates complex issues with full context.</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <i className="fas fa-circle text-primary text-[0.5rem] mt-2"></i>
                  <span>Reduces ticket volume and boosts satisfaction.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education AI Agent */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 min-h-[300px]">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <i className="fas fa-comments text-primary"></i>
                    <span>Feedback Facilitator</span>
                  </div>
                  <div className="bg-primary text-white px-2 py-1 rounded-xl text-xs">
                    Online
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-center text-xs text-muted-foreground mb-2">
                    Connected to AI Agent
                  </div>
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-xs mb-1">Ava</div>
                      <div className="bg-gray-100 px-3 py-2 rounded-lg text-xs">
                        Thanks for reaching out earlier. Were you satisfied with
                        the support you received?
                      </div>
                      <div className="text-[0.65rem] text-muted-foreground mt-1">
                        10:39 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 max-w-[85%] ml-auto flex-row-reverse">
                    <div className="flex-1">
                      <div className="bg-primary text-white px-3 py-2 rounded-lg text-xs">
                        Yes, the issue was resolved quickly. Great support team!
                      </div>
                      <div className="text-[0.65rem] text-muted-foreground mt-1 text-right">
                        10:10 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-4">AI Agent for Education</h4>
              <ul className="space-y-3 list-none p-0 m-0">
                <li className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <i className="fas fa-circle text-primary text-[0.5rem] mt-2"></i>
                  <span>
                    Answers student questions and provides learning resources.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <i className="fas fa-circle text-primary text-[0.5rem] mt-2"></i>
                  <span>Assists with scheduling and exam reminders.</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <i className="fas fa-circle text-primary text-[0.5rem] mt-2"></i>
                  <span>
                    Supports teachers with grading and feedback automation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
