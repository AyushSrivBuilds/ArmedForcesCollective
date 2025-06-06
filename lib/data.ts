// Mock data for program events
export const programsData = [
  {
    id: 1,
    title: "Cybersecurity Awareness Workshop",
    description: "Learn about digital threats and how to protect yourself and your family online.",
    type: "workshop",
    audience: "civilians",
    date: "2025-06-15",
    time: "10:00 AM - 1:00 PM",
    location: "Virtual",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    registrationRequired: true,
    featured: true,
  },
  {
    id: 2,
    title: "Emergency Preparedness Seminar",
    description: "Essential skills and knowledge for handling emergency situations in your community.",
    type: "webinar",
    audience: "families",
    date: "2025-06-20",
    time: "3:00 PM - 5:00 PM",
    location: "Delhi Community Center",
    image: "https://images.pexels.com/photos/6964103/pexels-photo-6964103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    registrationRequired: true,
    featured: true,
  },
  {
    id: 3,
    title: "Leadership Skills for Veterans",
    description: "Transitioning military leadership skills to civilian professional environments.",
    type: "course",
    audience: "veterans",
    date: "2025-06-25",
    time: "9:00 AM - 4:00 PM",
    location: "Mumbai Veteran Center",
    image: "https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    registrationRequired: true,
    featured: true,
  },
  {
    id: 4,
    title: "National Security Symposium",
    description: "Experts discuss current challenges and strategies in national security.",
    type: "webinar",
    audience: "civilians",
    date: "2025-07-05",
    time: "2:00 PM - 6:00 PM",
    location: "Virtual",
    image: "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    registrationRequired: true,
    featured: false,
  },
  {
    id: 5,
    title: "Military Technology Showcase",
    description: "Discover advancements in defense technology and their civilian applications.",
    type: "workshop",
    audience: "veterans",
    date: "2025-07-12",
    time: "10:00 AM - 5:00 PM",
    location: "Bengaluru Defense Expo",
    image: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    registrationRequired: true,
    featured: false,
  },
  {
    id: 6,
    title: "Family Resilience Training",
    description: "Building strong families that can weather challenges and support service members.",
    type: "bootcamp",
    audience: "families",
    date: "2025-07-18",
    time: "9:00 AM - 3:00 PM",
    location: "Chennai Military Family Center",
    image: "https://images.pexels.com/photos/6647110/pexels-photo-6647110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    registrationRequired: true,
    featured: false,
  },
  {
    id: 7,
    title: "Digital Intelligence Gathering",
    description: "Understanding how to analyze online information for security purposes.",
    type: "course",
    audience: "civilians",
    date: "2025-07-25",
    time: "1:00 PM - 4:00 PM",
    location: "Virtual",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    registrationRequired: true,
    featured: true,
  },
  {
    id: 8,
    title: "Post-Service Career Development",
    description: "Career strategies and opportunities for veterans in various sectors.",
    type: "bootcamp",
    audience: "veterans",
    date: "2025-08-02",
    time: "9:00 AM - 5:00 PM",
    location: "Hyderabad Defense Academy",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    registrationRequired: true,
    featured: true,
  },
  {
    id: 9,
    title: "Youth Security Awareness",
    description: "Age-appropriate security education for children of military families.",
    type: "workshop",
    audience: "families",
    date: "2025-08-10",
    time: "10:00 AM - 12:00 PM",
    location: "Multiple Locations",
    image: "https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    registrationRequired: true,
    featured: true,
  },
];

// Mock data for veterans
export const veteransData = [
  {
    id: 1,
    name: "Maj. Rajiv Sharma",
    rank: "Major",
    branch: "Army",
    yearsOfService: 22,
    expertise: ["Leadership", "Strategic Planning", "Crisis Management"],
    bio: "Major Sharma served in challenging terrains across India, leading complex operations and training programs. He now shares his expertise in leadership and crisis management.",
    image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: "Cmdr. Priya Nair",
    rank: "Commander",
    branch: "Navy",
    yearsOfService: 18,
    expertise: ["Maritime Security", "Technology Integration", "International Relations"],
    bio: "Commander Nair specialized in maritime security and international naval cooperation. Her insights on global security challenges are sought after by organizations worldwide.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    available: true,
    featured: true,
  },
  {
    id: 3,
    name: "Wg. Cmdr. Arjun Mehta",
    rank: "Wing Commander",
    branch: "Air Force",
    yearsOfService: 20,
    expertise: ["Aerial Strategy", "Drone Technology", "Defense Innovation"],
    bio: "Wing Commander Mehta is a former fighter pilot with expertise in aerial defense strategies and emerging technologies. He now consults on defense innovation.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    available: true,
    featured: true,
  },
  {
    id: 4,
    name: "Col. Vikram Singh",
    rank: "Colonel",
    branch: "Army",
    yearsOfService: 26,
    expertise: ["Border Security", "Counter-Terrorism", "Intelligence"],
    bio: "Colonel Singh has extensive experience in border security and counter-terrorism operations. He now educates civilians on practical security awareness.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    available: true,
    featured: false,
  },
  {
    id: 5,
    name: "Capt. Anita Desai",
    rank: "Captain",
    branch: "Navy",
    yearsOfService: 15,
    expertise: ["Logistics", "Supply Chain", "Emergency Response"],
    bio: "Captain Desai specialized in logistics and emergency response during natural disasters. She brings practical knowledge on resource management during crises.",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    available: true,
    featured: false,
  },
  {
    id: 6,
    name: "Gp. Capt. Rohit Kapoor",
    rank: "Group Captain",
    branch: "Air Force",
    yearsOfService: 23,
    expertise: ["Cybersecurity", "Electronic Warfare", "Digital Defense"],
    bio: "Group Captain Kapoor led cybersecurity initiatives for the Air Force. His expertise in digital threats and defenses is invaluable in today's connected world.",
    image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    available: true,
    featured: false,
  },
];

// Mock data for educational resources
export const resourcesData = [
  {
    id: 1,
    title: "Home Security Guide",
    description: "Essential tips to protect your home and family from security threats.",
    category: "Security Awareness",
    fileType: "pdf",
    pages: 24,
    downloadCount: 3427,
    datePublished: "2025-01-15",
    featured: true,
  },
  {
    id: 2,
    title: "Natural Disaster Preparedness",
    description: "How to prepare for and respond to earthquakes, floods, and other natural disasters.",
    category: "Emergency Preparedness",
    fileType: "pdf",
    pages: 36,
    downloadCount: 5280,
    datePublished: "2025-02-03",
    featured: true,
  },
  {
    id: 3,
    title: "Spotting Fake News & Misinformation",
    description: "Techniques to identify and combat misinformation in media and online sources.",
    category: "Misinformation",
    fileType: "pdf",
    pages: 18,
    downloadCount: 7619,
    datePublished: "2025-02-28",
    featured: true,
  },
  {
    id: 4,
    title: "Digital Security Best Practices",
    description: "Protect your online identity and personal information with these security measures.",
    category: "Security Awareness",
    fileType: "pdf",
    pages: 22,
    downloadCount: 4185,
    datePublished: "2025-03-10",
    featured: false,
  },
  {
    id: 5,
    title: "Community Emergency Response Team Guide",
    description: "How to form and operate a community response team during emergencies.",
    category: "Emergency Preparedness",
    fileType: "pdf",
    pages: 42,
    downloadCount: 3027,
    datePublished: "2025-03-25",
    featured: false,
  },
  {
    id: 6,
    title: "Media Literacy for National Security",
    description: "Understanding how media messaging can impact national security perspectives.",
    category: "Misinformation",
    fileType: "pdf",
    pages: 28,
    downloadCount: 2854,
    datePublished: "2025-04-05",
    featured: false,
  },
  {
    id: 7,
    title: "Child Online Safety Guide",
    description: "Protecting children from online threats and ensuring their digital wellbeing.",
    category: "Security Awareness",
    fileType: "pdf",
    pages: 32,
    downloadCount: 6328,
    datePublished: "2025-04-18",
    featured: false,
  },
  {
    id: 8,
    title: "First Aid & Medical Emergency Response",
    description: "Basic first aid skills and emergency medical response procedures.",
    category: "Emergency Preparedness",
    fileType: "pdf",
    pages: 46,
    downloadCount: 8731,
    datePublished: "2025-05-02",
    featured: false,
  },
  {
    id: 9,
    title: "Social Media Misinformation Toolkit",
    description: "Tools and techniques to identify and counter misinformation on social platforms.",
    category: "Misinformation",
    fileType: "pdf",
    pages: 20,
    downloadCount: 5126,
    datePublished: "2025-05-20",
    featured: false,
  },
];

// Mock data for shop products
export const productsData = [
  {
    id: 1,
    name: "Armed Forces Commemorative T-Shirt",
    description: "Premium cotton t-shirt featuring commemorative armed forces design.",
    price: 899,
    category: "Apparel",
    image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: true,
    new: false,
    featured: true,
  },
  {
    id: 2,
    name: "Security Awareness Field Manual",
    description: "Comprehensive guide to personal and family security in various situations.",
    price: 499,
    category: "Books",
    image: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: true,
    new: true,
    featured: true,
  },
  {
    id: 3,
    name: "Tactical Backpack",
    description: "Military-grade tactical backpack with multiple compartments and water resistance.",
    price: 2499,
    category: "Gear",
    image: "https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: true,
    new: false,
    featured: true,
  },
  {
    id: 4,
    name: "Armed Forces Coffee Mug",
    description: "Ceramic mug featuring emblems of the Indian Armed Forces.",
    price: 349,
    category: "Accessories",
    image: "https://images.pexels.com/photos/1251833/pexels-photo-1251833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: true,
    new: false,
    featured: false,
  },
  {
    id: 5,
    name: "Veteran Stories: Courage & Service",
    description: "Collection of inspiring stories from veterans of the Indian Armed Forces.",
    price: 599,
    category: "Books",
    image: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: true,
    new: true,
    featured: false,
  },
  {
    id: 6,
    name: "Military Heritage Wall Clock",
    description: "Elegant wall clock featuring historical military symbols and regimental badges.",
    price: 1299,
    category: "Home Decor",
    image: "https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: true,
    new: false,
    featured: false,
  },
];