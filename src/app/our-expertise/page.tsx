"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ClientsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clients = [
    {
      id: 1,
      name: "Mankind Pharma",
      image: "https://picsum.photos/200/100",
    },
    {
      id: 2,
      name: "Pinnacle Life Science",
      image: "https://picsum.photos/200/100",
    },
    {
      id: 3,
      name: "Torrent Pharma",
      image: "https://picsum.photos/200/100",
    },
    // Add more clients as needed
  ];

  const totalSlides = Math.ceil(clients.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="w-full bg-gradient-to-b from-sky-100 to-sky-200 py-16">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="mb-12 space-y-6 text-left">
          <h2 className="font-lora text-4xl font-light text-gray-900">
            Clients we have previously served
          </h2>
          <p className="mx-auto text-left font-lato text-gray-600">
            At Theta Pharma, we are proud to have had the opportunity to work
            with a diverse range of clients in the past. Some of the notable
            individuals and organizations we have served include:
          </p>
          <p className="mx-auto font-lato text-gray-600">
            Our team at Theta Pharma is committed to delivering exceptional
            service and value to all of our clients, and we look forward to
            continuing to build strong partnerships in the future.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="container relative mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Logos Container */}
          <div className="overflow-hidden px-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex w-full justify-around gap-8">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="flex h-32 w-64 items-center justify-center bg-white p-6 shadow-md"
                  >
                    <img
                      src={client.image}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index ? "bg-gray-800" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GlobalPresenceSection() {
  const countryMembers = [
    { country: "Cambodia", organization: "MOH" },
    { country: "Kenya", organization: "PPB" },
    { country: "Mongolia", organization: "MOHAS" },
    { country: "Malawi", organization: "PMPB" },
    { country: "Myanmar", organization: "MFADA" },
    { country: "Nigeria", organization: "NAFDAC" },
    { country: "Philippines", organization: "FDA" },
    { country: "Sri Lanka", organization: "CODA" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl space-y-8">
        {/* Title */}
        <h2 className="font-lora text-4xl font-light text-gray-900">
          Our Global Presence
        </h2>

        {/* Introduction Text */}
        <div className="space-y-6 font-lato text-gray-600">
          <p>
            At Theta Pharma, we are proud to have had the opportunity to work in
            various countries globally. Our global presence is a testament to
            our commitment to serving customers worldwide.
          </p>

          <p>
            We believe that our clients should not have to sacrifice quality for
            efficiency, which is why we employ the latest technology and have
            rigorous quality control processes in place. With a team of experts
            and a commitment to sustainable manufacturing practices, we are
            poised to support your brand's growth for years to come.
          </p>
        </div>

        {/* Country Members Section */}
        <div className="space-y-4">
          <p className="font-lato text-gray-600">
            Our country members include:
          </p>

          <ul className="grid grid-cols-2 gap-3 font-lato text-gray-600 sm:grid-cols-3 md:grid-cols-4">
            {countryMembers.map((member, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
                <span>
                  {member.country}-{member.organization}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CertificationsSection() {
  const certificates = [
    {
      id: 1,
      title: "WHO GMP Certificate",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Drug License Certificate",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "ISO 9001:2015 Certificate",
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Quality Management Certificate",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        {/* Title Section */}
        <div className="text-center">
          <div className="mb-2 inline-block">
            <div className="h-1 w-16 bg-blue-500"></div>
          </div>
          <h2 className="font-lora text-4xl font-light text-gray-900">
            Ensuring Your Health, Ensuring Our Standards
          </h2>
        </div>

        {/* Description */}
        <p className="mx-auto max-w-4xl text-center font-lato text-gray-600">
          At Theta Pharmaceuticals, we understand the vital role that quality
          and safety play in ensuring the health of patients around the world.
          That's why we take pride in displaying our GLP, WHO, ISO, and Drug
          License certifications, which demonstrate our commitment to producing
          safe and effective medicines.
        </p>

        {/* Certificates Display */}
        <div className="mt-12">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg bg-gray-100 p-8">
            {/* Certificate Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="overflow-hidden rounded-lg p-2 transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpertisePage() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main>
        <div className="container mx-auto space-y-10 px-4 py-12 leading-loose">
          <h1 className="font-lora text-4xl font-light text-gray-900">
            Our Expertise
          </h1>

          {/* Accreditation Section */}
          <div className="space-y-6">
            <h2 className="font-lora text-3xl font-light text-gray-900">
              Our Accreditation
            </h2>

            <div className="font-lato text-gray-600">
              <p>
                We are proud to be certified by the World Health Organization
                (WHO). Our plants are strictly following Good Manufacturing
                Practices (cGMP) as per WHO TRS guidelines in the manufacturing
                and testing of our products. We are committed to meeting the
                highest standards in the industry and our WHO certification is a
                testament to that commitment. We take pride in ensuring that our
                products are of the highest quality and are produced in a manner
                that meets the all the regulatory standards.
              </p>
            </div>
          </div>

          {/* Dosage Forms Section */}
          <div className="space-y-6">
            <h2 className="font-lora text-3xl font-light text-gray-900">
              Dosage Forms
            </h2>

            <div className="flex items-center justify-between gap-10">
              {/* Left side - Image */}
              <div className="w-1/2">
                <div className="overflow-hidden rounded-lg bg-sky-400 p-8">
                  <img
                    src="/api/placeholder/800/600"
                    alt="Pharmaceutical dosage forms illustration"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Right side - Text */}
              <div className="w-1/2 space-y-6 text-center font-lato">
                <p className="text-gray-600">
                  We are equipped to produce a wide range of dosage forms,
                  including solid oral, ophthalmic, and topicals.
                </p>

                <p className="text-gray-600">
                  Our facilities are designed to ensure efficient and consistent
                  production and we have a team of experienced professionals who
                  are committed to meeting the highest standards of quality and
                  efficiency. We are confident in our ability to deliver
                  high-quality products in a timely manner to meet the needs of
                  our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Clients Section */}

        <ClientsSection />
        <GlobalPresenceSection />
        <CertificationsSection />
      </main>
    </div>
  );
}
