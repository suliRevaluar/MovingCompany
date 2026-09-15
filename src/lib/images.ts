export const serviceImages: Record<string, string> = {
  Residential: "/images/service-residential.webp",
  Commercial: "/images/service-commercial.webp",
  "Long Distance": "/images/service-long-distance.webp",
  Packing: "/images/service-packing.webp",
  "Specialty Moving": "/images/service-specialty.webp",
};

export const galleryImages = Array.from(
  { length: 6 },
  (_, index) => `/images/gallery-${String(index + 1).padStart(2, "0")}.webp`,
);
