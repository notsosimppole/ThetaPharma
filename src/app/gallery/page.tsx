"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  const galleryImages = [
    {
      src: "https://picsum.photos/400/400?random=1",
      caption: "Laboratory Equipment",
    },
    {
      src: "https://picsum.photos/400/400?random=2",
      caption: "Steam Generator Plant and W.F.I. Multi-Column",
    },
    {
      src: "https://picsum.photos/400/400?random=3",
      caption: "Facility Exterior",
    },
    {
      src: "https://picsum.photos/400/400?random=4",
      caption: "Tablet Granulation Section",
    },
    {
      src: "https://picsum.photos/400/400?random=5",
      caption: "Fluid Bed Processor",
    },
    {
      src: "https://picsum.photos/400/400?random=6",
      caption: "Clean Room Corridor",
    },
    {
      src: "https://picsum.photos/400/400?random=7",
      caption: "Mixing Equipment",
    },
    {
      src: "https://picsum.photos/400/400?random=8",
      caption: "Clean Room Equipment",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center font-lora text-4xl font-light text-gray-900">
        Gallery
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              src={image.src}
              alt={image.caption}
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
              onClick={() => setSelectedImage(image)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-h-full max-w-full object-contain"
            />
            <button
              className="absolute -top-10 right-0 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <p className="mt-2 text-center text-white">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
