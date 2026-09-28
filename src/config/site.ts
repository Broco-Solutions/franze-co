export const siteConfig = {
  businessName: "Franze & Co.",
  legalName: "Franze & Co. LLC",
  tagline: "Collected furniture for layered coastal living.",
  description:
    "A Miami-based furniture studio curating sculptural indoor and outdoor pieces, warm materials, and relaxed rooms with a collected point of view.",
  url: "https://franze-co.com",
  phone: null as string | null,
  email: null as string | null,
  whatsapp: null as string | null,
  openingHours: [
    { day: "Monday", hours: "By appointment", opens: "10:00", closes: "17:00" },
    { day: "Tuesday", hours: "10:00 AM - 6:00 PM", opens: "10:00", closes: "18:00" },
    { day: "Wednesday", hours: "10:00 AM - 6:00 PM", opens: "10:00", closes: "18:00" },
    { day: "Thursday", hours: "10:00 AM - 7:00 PM", opens: "10:00", closes: "19:00" },
    { day: "Friday", hours: "10:00 AM - 6:00 PM", opens: "10:00", closes: "18:00" },
    { day: "Saturday", hours: "11:00 AM - 5:00 PM", opens: "11:00", closes: "17:00" },
    { day: "Sunday", hours: "Closed", opens: "00:00", closes: "00:00" },
  ],
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    pinterest: null as string | null,
  },
} as const;
