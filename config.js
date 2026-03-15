// ============================================
// BRAND CONFIGURATION - EDIT THIS FILE ONLY
// ============================================

const BRAND_CONFIG = {
    // Basic Info
    name: "Your Name",
    shortName: "YourName",
    tagline: "Making childhood fashionable, one outfit at a time",
    
    // Currency
    currency: "PKR",
    currencySymbol: "₨",
    
    // Contact
    email: "hello@yourname.com",
    phone: "+92 300 1234567",
    whatsapp: "+923001234567",
    
    // Social Links (leave empty string if not available)
    social: {
        facebook: "https://facebook.com/yourname",
        instagram: "https://instagram.com/yourname",
        twitter: "",
        pinterest: ""
    },
    
    // Colors (CSS variables)
    colors: {
        primary: "#FF6B9D",
        secondary: "#C44569",
        accent: "#F8B500",
        background: "#FFF5F7"
    },
    
    // Business Details
    address: "123 Fashion Street, Karachi, Pakistan",
    
    // Demo Products (used if Firebase is empty)
    demoProducts: [
        { name: 'Rainbow Unicorn Dress', price: 4500, category: 'Dresses', badge: 'New' },
        { name: 'Dinosaur Adventure Tee', price: 2800, category: 'Tops' },
        { name: 'Cloud Soft Pajamas', price: 3500, category: 'Sleepwear', badge: 'Best Seller' },
        { name: 'Little Explorer Overalls', price: 5200, category: 'Bottoms' },
        { name: 'Princess Tulle Skirt', price: 3800, category: 'Bottoms' },
        { name: 'Superhero Cape Set', price: 4200, category: 'Costumes', badge: 'Hot' },
        { name: 'Bunny Ears Headband', price: 1200, category: 'Accessories' },
        { name: 'Winter Warm Jacket', price: 6500, category: 'Outerwear', badge: 'New' }
    ],
    
    // Firebase Config (same for all files)
    firebase: {
        apiKey: "AIzaSyBiANLlCR3cH2bpRWBsqTSlVDSGP_SzCWU",
        authDomain: "resturant-dev-1.firebaseapp.com",
        databaseURL: "https://resturant-dev-1-default-rtdb.firebaseio.com",
        projectId: "resturant-dev-1",
        storageBucket: "resturant-dev-1.firebasestorage.app",
        messagingSenderId: "65901772301",
        appId: "1:65901772301:web:679c3fa7e85d6c602f5f44"
    }
};

// Helper function to format price
function formatPrice(price) {
    return `${BRAND_CONFIG.currency} ${price}`;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BRAND_CONFIG;
}
