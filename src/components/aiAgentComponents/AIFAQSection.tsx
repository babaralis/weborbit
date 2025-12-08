"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AIFAQSection = () => {
  return (
    <section id="faqs" className="py-16 md:py-20 lg:py-24 bg-[#f7f9fc]">
      <div className="container-wide mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-8 md:mb-12">
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 max-w-3xl mx-auto">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore a curated selection of logo designs, brand identities and
              website layouts crafted by Logo Outlets for startups, agencies,
              ecommerce brands and service businesses.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-10/12">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem
                value="item-1"
                className="border-none rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="font-semibold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 hover:no-underline data-[state=open]:bg-primary data-[state=open]:text-white">
                  What are AI Agents?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#5b647d] px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                  AI Agents are intelligent automated systems that can perform
                  tasks, make decisions, and interact with users or other
                  systems autonomously. They use artificial intelligence to
                  understand context, learn from interactions, and execute
                  complex workflows without constant human intervention.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-none rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="font-semibold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 hover:no-underline data-[state=open]:bg-primary data-[state=open]:text-white">
                  What kind of tasks can AI Agents handle?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#5b647d] px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                  AI Agents can handle a wide range of tasks including customer
                  support inquiries, appointment scheduling, data analysis, lead
                  qualification, order processing, content generation, and
                  workflow automation. They adapt to your specific business
                  needs and industry requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-none rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="font-semibold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 hover:no-underline data-[state=open]:bg-primary data-[state=open]:text-white">
                  Can I customize my AI Agent?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#5b647d] px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                  Yes, absolutely! Our AI Agents are fully customizable. You can
                  configure their knowledge base, response style, workflows,
                  integrations, and behavior to match your brand voice and
                  business processes. They learn and adapt to your specific
                  requirements over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-none rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="font-semibold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 hover:no-underline data-[state=open]:bg-primary data-[state=open]:text-white">
                  Can AI Agents be used in multiple languages?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#5b647d] px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                  Yes, our AI Agents support multiple languages and can
                  communicate with users in their preferred language. They can
                  automatically detect the language being used and respond
                  accordingly, making them ideal for global businesses serving
                  diverse customer bases.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-none rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="font-semibold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 hover:no-underline data-[state=open]:bg-primary data-[state=open]:text-white">
                  How does the AI Agent ensure data accuracy?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#5b647d] px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                  Our AI Agents use advanced validation techniques,
                  cross-reference data from multiple sources, and continuously
                  learn from corrections. They're trained on your specific
                  knowledge base and can escalate to human agents when
                  uncertain, ensuring high accuracy and reliability in all
                  interactions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border-none rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="font-semibold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 hover:no-underline data-[state=open]:bg-primary data-[state=open]:text-white">
                  How do AI Agents work?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#5b647d] px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                  AI Agents work by processing natural language inputs,
                  understanding context and intent, accessing relevant knowledge
                  bases, and generating appropriate responses or actions. They
                  use machine learning to improve over time and can integrate
                  with your existing systems and workflows seamlessly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="border-none rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="font-semibold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 hover:no-underline data-[state=open]:bg-primary data-[state=open]:text-white">
                  How do AI Agents interact with users?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#5b647d] px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                  AI Agents interact with users through various channels
                  including chat interfaces, voice systems, email, and messaging
                  platforms. They provide instant, 24/7 responses, understand
                  natural language, and can handle complex conversations while
                  maintaining context throughout the interaction.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="border-none rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="font-semibold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 hover:no-underline data-[state=open]:bg-primary data-[state=open]:text-white">
                  How does an AI Agent integrate with forms?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#5b647d] px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                  AI Agents can integrate with forms by automatically filling
                  fields based on user conversations, validating input data,
                  providing real-time assistance during form completion, and
                  submitting information to your CRM or database systems. They
                  can also extract data from completed forms for further
                  processing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="border-none rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="font-semibold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 hover:no-underline data-[state=open]:bg-primary data-[state=open]:text-white">
                  How secure do AI Agents handle the data?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#5b647d] px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                  AI Agents handle data with enterprise-grade security. All data
                  is encrypted in transit and at rest, access is controlled
                  through authentication and authorization, and we comply with
                  industry standards like GDPR and SOC 2. Your data remains
                  confidential and is never shared with third parties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="border-none rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <AccordionTrigger className="font-semibold text-sm md:text-base px-4 md:px-5 py-3 md:py-4 hover:no-underline data-[state=open]:bg-primary data-[state=open]:text-white">
                  How do AI Agents improve customer service?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#5b647d] px-4 md:px-5 pb-4 md:pb-5 leading-relaxed">
                  AI Agents improve customer service by providing instant
                  responses 24/7, reducing wait times, handling multiple
                  inquiries simultaneously, ensuring consistent service quality,
                  and freeing up human agents to focus on complex issues. They
                  can resolve up to 80% of common queries automatically.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
