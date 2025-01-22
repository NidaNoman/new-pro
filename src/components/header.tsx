

// "use client"
// import { 
//   FacebookIcon, Search, ShoppingCart, Heart, Phone, Mail, Instagram, Youtube, Facebook, Twitter, Menu, X
// } from 'lucide-react';
// import Link from 'next/link';
// import { useState } from 'react';

// export default function Header() {
//   // State for controlling the mobile menu
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Function to toggle the menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="bg-[#252B42] text-white flex flex-wrap justify-between items-center px-4 py-2 sm:flex-nowrap">
//         <div className="flex items-center gap-2">
//           <Phone className="w-4 h-4" />
//           <span className="text-sm">(225) 555-0118</span>
//         </div>

//         <div className="flex items-center gap-2">
//           <Mail className="w-4 h-4" />
//           <span className="text-sm">michelle.rivera@example.com</span>
//         </div>

//         <span className="hidden sm:block text-sm font-bold">
//           Follow us and get a chance to win 80% off!
//         </span>

//         <div className="flex items-center gap-3">
//           <span className="text-sm font-bold">Follow Us:</span>
//           <Instagram className="w-5 h-5" />
//           <Youtube className="w-5 h-5" />
//           <Facebook className="w-5 h-5" />
//           <Twitter className="w-5 h-5" />
//         </div>
//       </div>

//       {/* Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="text-xl font-bold">Bandage</Link>

//           {/* Navigation Links */}
//           <ul className="hidden md:flex space-x-4">
//             <li><Link href="/" className="hover:underline">Home</Link></li>
//             <li><Link href="/shop" className="hover:underline">Shop</Link></li>
//             <li><Link href="/about" className="hover:underline">About</Link></li>
//             <li><Link href="/blogs" className="hover:underline">Blog</Link></li>
//             <li><Link href="/contact" className="hover:underline">Contact</Link></li>
//             <li><Link href="/pages" className="hover:underline">Pages</Link></li>
//           </ul>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden flex items-center space-x-4">
//             <button onClick={toggleMenu} className="hover:underline">
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Utility Links */}
//           <div className="flex space-x-4 items-center">
//             <Link href="#" className="hover:underline text-sm">Login / Register</Link>
//             <Search className="w-5 h-5" />
//             <ShoppingCart className="w-5 h-5" />
//             <Heart className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Mobile Menu (Hidden by default, shows when isMenuOpen is true) */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white shadow-md">
//             <ul className="flex flex-col space-y-4 py-3 px-4">
//               <li><Link href="/" className="hover:underline">Home</Link></li>
//               <li><Link href="/shop" className="hover:underline">Shop</Link></li>
//               <li><Link href="/about" className="hover:underline">About</Link></li>
//               <li><Link href="/blogs" className="hover:underline">Blog</Link></li>
//               <li><Link href="/contact" className="hover:underline">Contact</Link></li>
//               <li><Link href="/pages" className="hover:underline">Pages</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }


// "use client"
// import { FacebookIcon, Search, ShoppingCart, Heart, Phone, Mail, Instagram, Youtube, Facebook, Twitter, Menu, X } from 'lucide-react';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { useWishlist } from "../hooks/wishlist"

// export default function Header() {
//   // State for controlling the mobile menu
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);
//   const { wishlistCount, addToWishlist } = useWishlist();
//   // Function to toggle the menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleWishlistClick = () => {
//     addToWishlist('demo-product'); // This is just for demonstration
//     setShowMessage(true);
//     setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
//   };




//   return (
//     <div className="relative">
//       {/* Top Bar */}
//       <div className="bg-[#252B42] text-white flex flex-wrap justify-between items-center px-4 py-2 sm:flex-nowrap">
//         <div className="flex items-center gap-2">
//           <Phone className="w-4 h-4" />
//           <span className="text-sm">(225) 555-0118</span>
//         </div>

//         <div className="flex items-center gap-2">
//           <Mail className="w-4 h-4" />
//           <span className="text-sm">michelle.rivera@example.com</span>
//         </div>

//         <span className="hidden sm:block text-sm font-bold">
//           Follow us and get a chance to win 80% off!
//         </span>

//         <div className="flex items-center gap-3">
//           <span className="text-sm font-bold">Follow Us:</span>
//           <Instagram className="w-5 h-5" />
//           <Youtube className="w-5 h-5" />
//           <Facebook className="w-5 h-5" />
//           <Twitter className="w-5 h-5" />
//         </div>
//       </div>

//       {/* Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="text-xl font-bold">Bandage</Link>

//           {/* Navigation Links */}
//           <ul className="hidden md:flex space-x-4">
//             <li><Link href="/" className="hover:underline">Home</Link></li>
//             <li><Link href="/shop" className="hover:underline">Shop</Link></li>
//             <li><Link href="/about" className="hover:underline">About</Link></li>
//             <li><Link href="/blogs" className="hover:underline">Blog</Link></li>
//             <li><Link href="/contact" className="hover:underline">Contact</Link></li>
//             <li><Link href="/pages" className="hover:underline">Pages</Link></li>
//           </ul>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden flex items-center space-x-4">
//             <button onClick={toggleMenu} className="hover:underline">
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Utility Links */}
//           <div className="flex space-x-4 items-center">
//             <Link href="/login" className="hover:underline text-sm">Login / Register</Link>
//             <Search className="w-5 h-5" />
//             <Link href={"/cart"}>
//             <ShoppingCart className="w-5 h-5" />
//             </Link>
//             <button onClick={handleWishlistClick} className="relative">
//               <Heart className="w-5 h-5" />
//               {wishlistCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                   {wishlistCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu (Hidden by default, shows when isMenuOpen is true) */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white shadow-md">
//             <ul className="flex flex-col space-y-4 py-3 px-4">
//               <li><Link href="/" className="hover:underline">Home</Link></li>
//               <li><Link href="/shop" className="hover:underline">Shop</Link></li>
//               <li><Link href="/about" className="hover:underline">About</Link></li>
//               <li><Link href="/blogs" className="hover:underline">Blog</Link></li>
//               <li><Link href="/contact" className="hover:underline">Contact</Link></li>
//               <li><Link href="/pages" className="hover:underline">Pages</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* Wishlist Message */}
//       {showMessage && (
//         <div className="absolute top-full left-0 right-0 bg-green-500 text-white text-center py-2 px-4 transition-all duration-300">
//           Item added to wishlist!
//         </div>
//       )}
//     </div>
//   );
// }
 













"use client";

import {
  FacebookIcon,
  Search,
  ShoppingCart,
  Heart,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useWishlist } from "../hooks/wishlist";
import SearchBar from "@/components/searchbar"; // Import the SearchBar component

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { wishlistCount, addToWishlist } = useWishlist();

  // Handle wishlist click
  const handleWishlistClick = () => {
    addToWishlist("demo-product");
  };

  // Function to handle search
  const handleSearch = (query: string) => {
    console.log("Search Query:", query);
    // Here, you can pass the query to the Shop component via context, props, or routing.
  };

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span className="text-sm">(225) 555-0118</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span className="text-sm">michelle.rivera@example.com</span>
        </div>
        <div className="flex items-center gap-3">
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Bandage
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>

          {/* Utility Links */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="hover:underline text-sm">
              Login / Register
            </Link>
            <button onClick={() => setIsSearchOpen((prev) => !prev)}>
              {/* <Search className="w-5 h-5" /> */}
            </button>
            <Link href="/cart">
              <ShoppingCart className="w-5 h-5" />
              {/* <Heart className="w-5 h-5" /> */}

            </Link>
           
            <button onClick={handleWishlistClick} className="relative">
               
            <Link href="/wishlist">
              {/* <ShoppingCart className="w-5 h-5" /> */}
              <Heart className="w-5 h-5" />

            </Link>
             
           
             
              
       
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            
          </div>
          
        </div>
       </nav>

     
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-full bg-white shadow-md py-2 px-4 z-10">
          <SearchBar onSearch={handleSearch} />
        </div>
   
           


      )}
    </div>

     
  );
}



















