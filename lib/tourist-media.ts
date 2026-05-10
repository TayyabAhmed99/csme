/** Local assets under `public/tourist-hands-free/banner/` (image1…image9). */
const B = "/tourist-hands-free/banner";

export const touristHeroSlides = [
  { src: `${B}/image1.jpg`, alt: "Mediterranean coastal village above the sea" },
  { src: `${B}/image2.jpg`, alt: "Scenic coastal road beside the ocean" },
  { src: `${B}/image3.jpg`, alt: "Roman amphitheatre of Tarragona overlooking the sea" },
  { src: `${B}/image4.webp`, alt: "Tarragona Roman amphitheatre and coastline" },
  { src: `${B}/image5.jpg`, alt: "Mediterranean hillside town on the coast" },
  { src: `${B}/image6.jpg`, alt: "Aerial view of Tarragona coast and city" },
] as const;

const q = "auto=format&fit=crop";

export const touristServiceFeatures = [
  {
    id: "storage",
    title: "Luggage storage",
    subtitle: "Safe & convenient lockers",
    src: `${B}/image7.jpg`,
    alt: "Secure luggage lockers and self-storage style bays",
  },
  {
    id: "transfers",
    title: "Bag transfers",
    subtitle: "Hotel, station & airport delivery",
    src: `${B}/image8.png`,
    alt: "Courier loading bags for delivery",
  },
  {
    id: "support",
    title: "24/7 support",
    subtitle: "Always here to assist",
    src: `https://images.unsplash.com/photo-1521791136064-7986c2920216?${q}&w=1200&q=80`,
    alt: "Customer support team member with headset",
  },
] as const;

export const touristHowItWorksMedia = [
  {
    src: `${B}/image10.jpg`,
    alt: "Hand holding smartphone for quick booking",
  },
  {
    src: `${B}/image9.jpg`,
    alt: "Luggage being loaded for drop-off or transfer",
  },
  {
    src: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?${q}&w=900&q=80`,
    alt: "Sunny beach and sea — explore hands-free",
  },
] as const;
