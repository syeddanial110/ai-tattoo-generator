import img1 from "../assets/Images/scroll1.png";
import img2 from "../assets/Images/scroll2.png";
import img3 from "../assets/Images/scroll3.png";
import img4 from "../assets/Images/scroll4.png";

export const dummyData = [
  {
    id: 1,
    name: `Ultimate Savings Bundles 8:30 - 4:00 PM | Ages 3-7 Multi-Sports, STEM, Ninja Fitness Schedule and Curriculum Below`,
    slug: `Ultimate Savings Bundles 8:30 - 4:00 PM | Ages 3-7 Multi-Sports, STEM, Ninja Fitness Schedule and Curriculum Below`,
    link: `http://localhost:3000/user/collection`,
    image: `https://images.unsplash.com/photo-1612839291954-0c3f2a1b5d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60`,
    dropDownMenu: [
      { id: 212, name: `Full-Day | Same 1 WK for 2 Kids - Rs.106,300.00` },
      { id: 213, name: `Full-Day | Same 2 WK for 2 Kids - Rs.106,300.00` },
      { id: 214, name: `Full-Day | Same 4 WK for 2 Kids - Rs.106,300.00` },
    ],
  },
  {
    id: 2,
    name: `Ultimate Savings Bundles 9:30 - 4:00 PM | Ages 2-4 Multi-Sports, STEM, Ninja Fitness Schedule and Curriculum Below`,
    slug: `Ultimate Savings Bundles 9:30 - 4:00 PM | Ages 2-4 Multi-Sports, STEM, Ninja Fitness Schedule and Curriculum Below`,
    link: `http://localhost:3000/user/collection`,
    image: `https://images.unsplash.com/photo-1612839291954-0c3f2a1b5d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60`,
    dropDownMenu: [
      { id: 112, name: `Full-Day | Same 1 WK for 2 Kids - Rs.106,300.00` },
      { id: 113, name: `Full-Day | Same 2 WK for 2 Kids - Rs.106,300.00` },
      { id: 114, name: `Full-Day | Same 4 WK for 2 Kids - Rs.106,300.00` },
    ],
  },
];

// Correctly export `generateSlides` as a function
export const generateSlides = () => [
  { src: img1, alt: "Slide 1" },
  { src: img2, alt: "Slide 2" },
  { src: img3, alt: "Slide 3" },
  { src: img4, alt: "Slide 4" },
];