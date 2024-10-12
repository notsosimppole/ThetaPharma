import React from "react";

const ProductRange = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-lato">
      <div className="flex flex-col md:flex-row">
        <img
          className="h-full pr-8 md:w-1/2"
          src="https://picsum.photos/800/600"
          alt="Random product image"
        />

        <div className="mt-8 font-lato *:leading-loose md:mt-0 md:w-1/2">
          <p className="font-lora uppercase tracking-wide text-sky-600">
            OUR PRODUCT RANGE
          </p>
          <h2 className="mt-2 font-lora text-4xl font-light text-gray-900">
            Wide Range of Quality Products
          </h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Theta Pharmaceuticals Ltd. has a top notch manufacturing facility
            where a committed group of professionals are employed.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            With a state-of-the-art production facility and a team of dedicated
            professionals. Our extensive range of products and commitment to
            quality make us a trusted choice in the industry.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            We provide a wide range of products, as shown below:
          </p>
        </div>
      </div>
    </div>
  );
};

const ApprovedProductsTable = () => {
  const products = [
    { dosageForm: "Tablet", domestic: 344, export: 209, total: 553 },
    { dosageForm: "Capsules", domestic: 53, export: 51, total: 104 },
    { dosageForm: "Liquid", domestic: 70, export: 39, total: 109 },
    { dosageForm: "Ophthalmic", domestic: 32, export: 47, total: 79 },
    { dosageForm: "Ointment", domestic: 70, export: 32, total: 102 },
    { dosageForm: "External Preparations", domestic: 21, export: 0, total: 21 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 font-lato leading-loose">
      <h1 className="font-lora text-4xl font-light text-gray-900">
        Our Approved Products
      </h1>
      <p className="mt-4 text-gray-700">
        Our team of experts work closely with regulatory authorities to ensure
        that our products meet all relevant standards and guidelines for both
        domestic and export markets. We have a deep understanding of the
        regulatory requirements for different markets and are able to navigate
        the approval process efficiently to bring our products to market
        quickly.
      </p>
      <div className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-sky-400 text-white">
              <th className="border border-sky-500 p-2 text-left">
                Dosage Form
              </th>
              <th className="border border-sky-500 p-2 text-left">
                For Domestic Markets
              </th>
              <th className="border border-sky-500 p-2 text-left">
                For Export Markets
              </th>
              <th className="border border-sky-500 p-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-sky-100" : "bg-sky-50"}
              >
                <td className="border border-sky-200 p-2">
                  {product.dosageForm}
                </td>
                <td className="border border-sky-200 p-2">
                  {product.domestic}
                </td>
                <td className="border border-sky-200 p-2">{product.export}</td>
                <td className="border border-sky-200 p-2">{product.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      <ProductRange />
      <ApprovedProductsTable />
    </div>
  );
}
