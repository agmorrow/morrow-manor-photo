import AboutImg from "../assets/images/_28.jpg";

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Morrow Manor Photography is a husband and wife photography team
              based in Denver.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Hi! We&#39;re Austin & Marissa. We&#39;re newlywed best friends
              who love coffee, travel, and The Office. Our backgrounds are
              actually in social work (homeless & domestic violence services)
              but we are also passionate about serving people with our art.
              That&#39;s where photography comes in. Being able to express our
              creativity while capturing the joy in life for our clients is why
              we started this business. We would love to adventure with you &
              share in those big moments ~ The Morrows
            </p>
          </div>
          <div className="relative mt-16 lg:mt-8">
            <img className="rounded-md" src={AboutImg} alt="App screenshot" />
          </div>
        </div>
      </div>
    </div>
  );
}
