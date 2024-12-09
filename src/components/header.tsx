// import { 
//   FacebookIcon, Search, ShoppingCart, Heart, Phone, Mail, Instagram, Youtube, Facebook, Twitter 
// } from 'lucide-react';

// export default function Header() {
//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="bg-[#252B42] text-white flex flex-wrap justify-between items-center px-4 py-2 md:flex-nowrap">
//         <div className="flex items-center gap-2">
//           <Phone className="w-4 h-4" />
//           <h6 className="text-sm">(225) 555-0118</h6>
//         </div>

//         <div className="flex items-center gap-2">
//           <Mail className="w-4 h-4" />
//           <h6 className="text-sm">michelle.rivera@example.com</h6>
//         </div>

//         <h6 className="hidden md:block text-sm font-bold">
//           Follow us and get a chance to win 80% off!
//         </h6>

//         <div className="flex items-center gap-3">
//           <h6 className="text-sm font-bold">Follow Us:</h6>
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
//           <a href="#" className="text-xl font-bold">Bandage</a>

//           {/* Navigation Links */}
//           <ul className="hidden md:flex space-x-4">
//             <li><a href="#" className="hover:underline">Home</a></li>
//             <li><a href="/shop" className="hover:underline">Shop</a></li>
//             <li><a href="/about" className="hover:underline">About</a></li>
//             <li><a href="/blog" className="hover:underline">Blog</a></li>
//             <li><a href="/contact" className="hover:underline">Contact</a></li>
//             <li><a href="/pages" className="hover:underline">Pages</a></li>
//           </ul>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden flex items-center space-x-4">
//             <button className="hover:underline">Menu</button>
//           </div>

//           {/* Utility Links */}
//           <div className="flex space-x-4 items-center">
//             <a href="#" className="hover:underline text-sm">Login / Register</a>
//             <Search className="w-5 h-5" />
//             <ShoppingCart className="w-5 h-5" />
//             <Heart className="w-5 h-5" />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

import { 
  FacebookIcon, Search, ShoppingCart, Heart, Phone, Mail, Instagram, Youtube, Facebook, Twitter 
} from 'lucide-react';

export default function Header() {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white flex flex-wrap justify-between items-center px-4 py-2 sm:flex-nowrap">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <h6 className="text-sm">(225) 555-0118</h6>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <h6 className="text-sm">michelle.rivera@example.com</h6>
        </div>

        <h6 className="hidden sm:block text-sm font-bold">
          Follow us and get a chance to win 80% off!
        </h6>

        <div className="flex items-center gap-3">
          <h6 className="text-sm font-bold">Follow Us:</h6>
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold">Bandage</a>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/pages" className="hover:underline">Pages</a></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="hover:underline">Menu</button>
          </div>

          {/* Utility Links */}
          <div className="flex space-x-4 items-center">
            <a href="#" className="hover:underline text-sm">Login / Register</a>
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </nav>
    </div>
  );
}
