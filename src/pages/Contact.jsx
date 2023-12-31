import AboutImg from "../assets/images/_20_websize.jpg";

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              For questions or other general inquires...{" "}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-500">
             morrowmanorphotography@gmail.com
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-500 underline underline-offset-2">
            <a href="https://www.instagram.com/morrowmanorphoto" rel="noreferrer" target="_blank">
              Instagram
            </a>
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
