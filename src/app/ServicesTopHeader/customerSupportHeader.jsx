export default function CustomerServiceHero() {
  return (
    <div className="relative w-full overflow-hidden ">
      {/* Header Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            filter: "brightness(0.2)",
          }}
        ></div>

        {/* Header Content */}
        <div className="relative h-full flex items-center justify-center z-10 px-4 text-center max-w-2xl mx-auto text-white">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Customer Service Representative
            </h1>

            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors shadow-lg hover:shadow-xl mx-auto md:mx-0">
              Get Started
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-4xl flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Hero Section Below Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10 text-white">
        {/* Left side - Text content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Trusted Customer Service Team
          </h2>
          <p className="text-lg leading-relaxed">
            Every brand needs a calm voice to guide clients. Our customer
            service team gives real help, not just words. We solve problems
            fast and speak with care. Clients feel heard, and your brand stays
            strong. We do more than talk. We listen and act with heart. Our
            team is trained to give real help that makes each call better. From
            billing to support, we handle each task with ease. Our voice
            becomes your brand voice. Each talk builds trust. Your clients get
            help that feels real. You stay focused on your work while we speak
            for you. We make every word count.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Customer service representative"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </section> {/* <-- CLOSE this section here */}

      {/* Why Choose Us Section */}
      <section className=" py-12 px-6 md:px-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-900">
          Why Choose Us
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Fast Problem Solving
            </h3>
            <p className="text-gray-600">
              We fix issues in the first call. No delay or stress for your
              clients.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Real Time Support
            </h3>
            <p className="text-gray-600">
              We stay active and ready all day. Clients always find help when
              they need it.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h8m-8 4h6"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Kind and Clear Voice
            </h3>
            <p className="text-gray-600">
              We use kind words and short lines. Clients feel calm and heard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
