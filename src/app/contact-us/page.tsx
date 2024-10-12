import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="font-lato">
      {/* Header */}

      {/* Main Content */}
      <main className="pt-12">
        <div className="container mx-auto flex min-h-[70vh] items-end">
          <div className="flex flex-col items-start lg:flex-row">
            {/* Left Column */}
            <div className="pr-8 font-lora lg:w-1/2">
              <h6 className="mb-2 uppercase tracking-wide text-blue-500">
                CONTACT US
              </h6>
              <h1 className="mb-4 text-6xl font-light text-gray-900">
                We are here to help.
              </h1>
              <p className="mb-8 font-lato leading-loose text-gray-600">
                At Theta Pharma, our team of experienced professionals is here
                to help you with any questions or concerns you may have about
                our manufacturing processes and the products we produce.
              </p>
            </div>

            {/* Right Column */}
            <div className="bg-white p-12 shadow-lg lg:w-1/2">
              <div className="space-y-6 divide-y">
                <div className="flex items-start gap-4 pb-5">
                  <div className="mr-4 rounded-full bg-blue-500 p-3">
                    <Phone className="text-white" />
                  </div>
                  <div>
                    <h6 className="font-lora font-semibold leading-loose tracking-wide text-blue-500">
                      24/7 EMERGENCY CALL
                    </h6>
                    <div className="text-4xl font-bold">
                      <p>0135-2935555</p>
                      <p>0135-2936666</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center py-5">
                  <div className="mr-4 rounded-full bg-blue-500 p-3">
                    <Mail className="text-white" />
                  </div>
                  <div>
                    <h6 className="font-lora font-semibold leading-loose tracking-wide text-blue-500">
                      EMAIL US
                    </h6>
                    <p>info@thetapharma.com</p>
                  </div>
                </div>
                <div className="flex items-center py-5">
                  <div className="mr-4 rounded-full bg-blue-500 p-3">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <h6 className="font-lora font-semibold leading-loose tracking-wide text-blue-500">
                      OUR ADDRESS
                    </h6>
                    <p>D-42, IIE SIIDCUL, Industrial Area, Selaqui,</p>
                    <p>Dehradun -248011</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="">
          <img
            src="https://picsum.photos/1200/400"
            alt="Map"
            className="h-96 w-full rounded-lg object-cover"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full bg-white py-24">
          <div className="container mx-auto flex flex-col items-center overflow-hidden rounded-lg bg-white lg:flex-row">
            <div className="p-8 lg:w-1/2">
              <h6 className="mb-2 font-lora uppercase tracking-wide text-blue-500">
                HAVE ANY QUESTION?
              </h6>
              <h2 className="mb-4 font-lora text-6xl font-light text-gray-900">
                Send us a message
              </h2>
              <p className="mb-8 font-lato leading-loose text-gray-600">
                We offer high-quality and cost-effective solutions for the
                manufacturing of a variety of dosage forms. Our experienced team
                is dedicated to meeting your specific needs and we have a
                state-of-the-art facility to ensure the best possible results.
              </p>
            </div>
            <div className="bg-gray-100 p-8 lg:w-1/2">
              <form className="space-y-10">
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full rounded border p-4"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full rounded border p-4"
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  className="w-full rounded border p-4"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject *"
                  className="w-full rounded border p-4"
                  required
                />
                <textarea
                  placeholder="Comment or Message *"
                  rows={4}
                  className="w-full rounded border p-4"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="rounded bg-blue-500 px-8 py-4 text-white hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
