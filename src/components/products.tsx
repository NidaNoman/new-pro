
"use client";
import Image from "next/image";
export default function BestsellerProducts() {
    // Data for 8 products
    const products = [
      { id: 1, Image: "/pic1.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black " ] },
      { id: 2, Image: "/pic2.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
      { id: 3, Image: "/pic-pic.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
      { id: 4, Image: "/pic4.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
      { id: 5, Image: "/pic5.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
      { id: 6, Image: "/pic6.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
      { id: 7, Image: "/pic7.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
      { id: 8, Image: "/pic8.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    ];
  
    return (
      <div className="bg-white w-full  m-0">
        {/* Header Section */}
        <div className="text-center mb-0">
          <p className="text-blue-600 font-medium uppercase">Featured Products</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bestseller Products</h1>
          <p className="text-gray-500">Problems trying to resolve the conflict between</p>
        </div>
  
        {/* Product Grid Section */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-[238px] h-[615px] ">
              <div className="w-full aspect-w-3 aspect-h-4">
                <Image
                  className="w-full h-full object-cover"
                  src={product.Image}
                  alt={product.title}
                  width={300}
                  height={400}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.department}</p>
                <div className="text-gray-500 text-sm mb-4">
                  <span className="line-through">{product.oldPrice}</span>
                  <span className="text-green-500 font-bold ml-2">{product.newPrice}</span>
                </div>
                <div className="flex justify-center gap-2">
                  {product.colors.map((color, index) => (
                    <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  