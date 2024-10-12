import React from "react";

export default function QualityPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}

      {/* Main Content */}
      <main className="container mx-auto space-y-10 px-4 py-12 leading-loose">
        <div className="flex items-center justify-between gap-10 py-10">
          {/* Left Column - Text Content */}
          <div className="w-1/2 space-y-6 font-lato">
            <h1 className="font-lora text-4xl font-light text-gray-900">
              Quality Policy
            </h1>

            <p className="text-gray-600">
              We are committed to meeting the highest standards in the industry.
              The highest priority is given to the quality-control factor and
              adequate precautions are taken to ensure no lapses on the
              production front.
            </p>

            <p className="text-gray-600">
              We have established the infrastructure and procedures to support a
              stringent quality policy.
            </p>

            <p className="text-gray-600">
              All our systems are well documented and are implemented by an
              expertly trained staff.
            </p>

            <p className="text-gray-600">
              We ensure that every product we manufacture and distribute meets
              with and conforms over its shelf life to internationally accepted
              standards of quality, purity, efficacy, and safety.
            </p>

            <p className="text-gray-600">
              At our manufacturing site, the latest analytical instruments and
              tightly monitored quality assurance and quality control systems
              ensure the consistent quality of our products.
            </p>
          </div>

          {/* Right Column - Images */}
          <div className="w-2/5 space-y-6">
            {/* First Image */}
            <div className="h-64 overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://picsum.photos/800/400"
                alt="Quality control corridor"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="h-64 overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://picsum.photos/800/400"
                alt="Manufacturing equipment"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10 py-10">
          {/* Left Column - Text Content */}

          {/* Right Column - Images */}
          <div className="h-full w-2/5 space-y-6">
            {/* First Image */}
            <div className="h-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://picsum.photos/800/400"
                alt="Quality control corridor"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Second Image */}
          </div>
          <div className="w-1/2 space-y-6 font-lato">
            <h1 className="font-lora text-4xl font-light text-gray-900">
              Quality Assurance & Control
            </h1>

            <p className="text-gray-600">
              Strong quality assurance and quality control departments combine
              to back up the substantial installed capacity of Theta
              Pharmaceuticals Ltd.
            </p>

            <p className="text-gray-600">
              Our manufacturing facilities have a square foot footprint.
            </p>

            <p className="text-gray-600">
              We have a great deal of expertise working with Indian and
              multinational pharmaceutical firms, that require high product
              batch sizes.
            </p>

            <p className="text-gray-600">
              Currently, we produce products for some of the most well-known
              companies domestic and global.
            </p>

            <p className="text-gray-600">
              Our consumers value our sincerity, reliability, timely delivery,
              organised manufacturing processes, and economic efficiency.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
