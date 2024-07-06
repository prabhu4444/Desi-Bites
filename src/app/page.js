import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Desi Bites is your ultimate destination for indulging in the diverse and rich flavors of Indian cuisine. Our app features an extensive menu that celebrates the culinary traditions of North Indian, South Indian, and regional specialties. From aromatic biryanis and spicy curries to delicate dosas and flavorful street food, Desi Bites brings the authentic taste of India to your fingertips. With detailed descriptions and vibrant images for each dish, you can explore and discover new favorites or enjoy the comfort of classic staples.
          </p>
          <p>Customization is at the heart of Desi Bites. We understand that everyone has their unique preferences, so we offer a variety of options to tailor each dish to your liking. Choose your preferred spice level, select the perfect portion size, and add extra ingredients to create a meal that suits your taste. Our dynamic pricing system ensures that the total price updates in real-time as you make your selections, giving you complete control over your order and budget.
          </p>
          <p>Designed with a user-friendly interface and seamless navigation, Desi Bites provides a hassle-free ordering experience. Our app allows you to create an account to save your favorite orders, track your order history, and enjoy exclusive deals and loyalty rewards. Whether you're planning a family dinner, hosting a party, or simply craving your favorite Indian dish, Desi Bites is here to deliver a delicious and convenient dining experience, right from your smartphone.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+9518362470">
            +91 9518362470
          </a>
        </div>
      </section>
    </>
  )
}
