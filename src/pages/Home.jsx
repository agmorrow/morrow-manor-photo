const Home = () => {
  const images = [
    { src: "../src/assets/gallery/IMG_0194.jpg", alt: "Image 1" },
    { src: "../src/assets/gallery/IMG_0378.jpg", alt: "Image 2" },
    { src: "../src/assets/gallery/IMG_0663.jpg", alt: "Image 3" },
    { src: "../src/assets/gallery/IMG_2316.jpg", alt: "Image 4" },
    { src: "../src/assets/gallery/IMG_7410.jpg", alt: "Image 5" },
    { src: "../src/assets/gallery/IMG_0824.jpg", alt: "Image 6" },
    { src: "../src/assets/gallery/IMG_6216.jpg", alt: "Image 7" },
    { src: "../src/assets/gallery/IMG_0403.jpg", alt: "Image 8" },
    { src: "../src/assets/gallery/IMG_2371.jpg", alt: "Image 9" },
    { src: "../src/assets/gallery/IMG_6137.jpg", alt: "Image 10" },
    { src: "../src/assets/gallery/IMG_1803.jpg", alt: "Image 11" },
    { src: "../src/assets/gallery/IMG_8259.jpg", alt: "Image 12" },
    { src: "../src/assets/gallery/IMG_6247.jpg", alt: "Image 13" },
    { src: "../src/assets/gallery/IMG_0740.jpg", alt: "Image 14" },
    { src: "../src/assets/gallery/IMG_2251.jpg", alt: "Image 15" },
    { src: "../src/assets/gallery/IMG_5738.jpeg", alt: "Image 16" },
    { src: "../src/assets/gallery/IMG_9881.jpg", alt: "Image 17" },
    { src: "../src/assets/gallery/IMG_0739.jpg", alt: "Image 17" },
  ];

  return (
    <div className="w-full min-h-[500px]">
      <div className="px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
