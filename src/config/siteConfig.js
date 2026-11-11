/**
 * Official Velgrid Global Configuration
 */
export const siteConfig = {
  brandName: "Velgrid",
  shortName: "Velgrid",
  whatsappNumber: "6282183952772",
  whatsappDisplay: "+62 821-8395-2772",
  email: "teamvelgrid@gmail.com",
  promoCode: "OPENINGVELGRID",
  openWhatsApp: (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6282183952772?text=${encoded}`, '_blank');
  }
};
