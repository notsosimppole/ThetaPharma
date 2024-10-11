export default function HomePage() {
  return (
    <main className="flex min-h-screen text-white">
      <section className="w-full h-[85vh] relative bg-[url('/assets/images/haath-photo.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full px-[12%] py-10 bg-black bg-opacity-45 flex flex-col">
          <div className="flex flex-col gap-10">
            <h1 className="text-6xl font-lora leading-snug w-[44%]">Elevating Your Health With Every Pill We Fill</h1>
            <div className="flex flex-col gap-2 w-[48%]">
              <p className="text-md  font-lato">Theta Pharmaceuticals, are in the business of healthcare for nearly three decades having a top-class ultra-modern (WHO-GMP) manufacturing facility. A passionate team of experts works here on Tablets, Liquids, Dusting Powder, External Solutions, Ointments, and Sterile Products such as Eye/ Ear drops.</p>
              <p className="font-lato text-md">We are a third-party manufacturing company that specializes in creating high-quality pharmaceutical products for our clients</p>
            </div>
          </div>
          <div className="w-[45%] py-10 flex flex-col gap-4">
            <button className="bg-dark-blue border-2 border-dark-blue text-white w-full py-4 px-4 font-sora font-normal hover:bg-transparent hover:text-dark-blue transition-all duration-200 ease-in">Know More</button>
            <p className="font-lora text-2xl">0135-2935555, 29366666</p>
          </div>
        </div>
      </section>
    </main>
  );
}
