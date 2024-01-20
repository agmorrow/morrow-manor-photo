import AboutImg from "../assets/images/_28.jpg";

const containerStyles = {
  backgroundColor: '#ffffff',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23000000' fill-opacity='0.2' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E")`,
};



export default function About() {
  return (
    <div className="bg-white" style={containerStyles}>
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
