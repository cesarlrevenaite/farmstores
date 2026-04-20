import React from 'react';

export function FAQ() {
  const faqs = [
    {
      question: "What is Farm Stores?",
      answer: "Farm Stores is a double drive-thru grocery store and bakery"
    },
    {
      question: "What products does Farm Stores carry?",
      answer: "We carry absolutely all of the household and grocery essentials you might need. From fresh milk and eggs to fresh produce and a variety of frozen items, chances are you’ll find it at Farm Stores. We also offer unique Farm Stores® brand products and ready-to-eat hot snacks you won’t find anywhere else!"
    },
    {
      question: "What forms of payment are accepted?",
      answer: "Most of our stores accept AmEx, Visa, MasterCard, and contactless payments such as ApplePay and Google Pay."
    },
    {
      question: "Does Farm Stores deliver?",
      answer: "Our stores are licensee owned. Some stores use a variety of delivery services. (UberEats, Postmates, DoorDash, GrubHub, or Waitr)"
    },
    {
      question: "When do you start selling your famous eggnog?",
      answer: "Our stores are stocked with our famous and delicious eggnog late October / early November."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-80px)] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-['Oswald',sans-serif] text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about America's largest drive-thru convenience store.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-['Oswald',sans-serif] text-2xl font-bold uppercase tracking-wide text-black mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}