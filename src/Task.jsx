import React from "react";

const Task = () => {
  return (
    <div className="font-sans text-black bg-white">
      {/* Hero Section */}
      <section className="text-center p-8 bg-gray-100 w-full h-auto">
  <img
    src="/spycam1.jpg"
    alt="Mini Spy Camera"
    className="mx-auto w-40 h-40 object-contain rounded-xl"  // Using object-contain instead of object-cover
  />
  <h1 className="text-3xl font-bold mt-4">
    Full HD 1080P Mini Spy Camera
  </h1>
  <p className="mt-2 text-gray-600">
    Discreet, powerful surveillance with night vision and motion
    detection.
  </p>
  <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
    Buy Now
  </button>
</section>



      {/* Product Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8">
  {[
    ["1080P HD Video", "🎥"],
    ["Night Vision", "🌙"],
    ["Motion Detection", "🚨"],
    ["Compact & Portable", "📏"],
  ].map(([title, icon], index) => (
    <div
      key={index}
      className="bg-gray-50 p-4 rounded-lg text-center shadow hover:border-blue-300 border" // Added hover:border-blue-300 and border class
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  ))}
</section>


      {/* Product Images */}
      <section className="flex flex-col sm:flex-row justify-center items-center gap-4 p-8">
  <img
    src="/front.webp"
    alt="Front view"
    className="w-32 sm:w-40 rounded-xl shadow"
  />
  <img
    src="/night.jpeg"
    alt="Night vision"
    className="w-32 sm:w-40 rounded-xl shadow"
  />
</section>


      {/* Benefits */}
      <section className="p-8 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Why This Spy Camera?</h2>
        <p className="max-w-xl mx-auto">
          Ideal for nanny monitoring, pet watching, or home security—this tiny
          camera delivers clear footage day and night. Easy to hide and even
          easier to use.
        </p>
      </section>

      {/* Customer Reviews */}
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["Perfect for my apartment. Amazing quality.", "Sneha A."],
            ["Night vision is crystal clear. Setup was fast!", "David P."],
            ["Caught my dog chewing my sofa. Worth it!", "Liam T."],
          ].map(([text, name], index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="italic">"{text}"</p>
              <p className="mt-2 font-semibold text-right">– {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="flex flex-wrap justify-center gap-6 p-8 bg-gray-100">
  {["Secure Checkout", "SSL Protected", "30-Day Guarantee", "Fast Shipping"].map(
    (badge, i) => (
      <div
        key={i}
        className="bg-white border px-4 py-2 rounded-xl shadow text-sm font-medium hover:border-blue-300" // Added hover:border-blue-300
      >
        {badge}
      </div>
    )
  )}
</section>


      {/* FAQ Section */}
      <section className="p-8">
  <h2 className="text-2xl font-bold text-center mb-6">
    Frequently Asked Questions
  </h2>
  <div className="max-w-2xl mx-auto space-y-4 pb-20"> {/* Added padding-bottom to ensure spacing from the sticky button */}
    {[
      [
        "Does the camera support night vision?",
        "Yes, it comes with infrared LEDs for clear recording at night.",
      ],
      [
        "What storage does it use?",
        "It supports a microSD card up to 32GB (not included).",
      ],
      [
        "Is the camera wireless?",
        "Yes, it works wirelessly after initial charging.",
      ],
      [
        "How long does the battery last?",
        "It can record up to 60 minutes continuously on a full charge.",
      ],
    ].map(([question, answer], index) => (
      <div key={index}>
        <h4 className="font-semibold">{question}</h4>
        <p className="text-gray-600">{answer}</p>
      </div>
    ))}
  </div>
</section>

{/* Sticky CTA Button */}
<div className="fixed bottom-0 w-full bg-white border-t p-4 text-center shadow-md z-10">
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-xl w-full sm:w-auto">
    Order Now
  </button>
</div>

    </div>
  );
};

export default Task;
