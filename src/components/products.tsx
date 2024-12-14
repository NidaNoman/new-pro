
import Image  from "next/image";
export default function BestsellerProducts() {
  // Data for 8 products
  const products = [
    { id: 1, Image: "/pro1.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 2, Image: "/pro2.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 3, Image: "/pro3.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 4, Image: "/pro4.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 5, Image: "/pro5.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 6, Image: "/pro6.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 7, Image: "/pro7.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 8, Image: "/pro8.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
  ];

  return (
    <div className="bg-white w-full m-0 px-4 md:px-[195px] pb-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-[#737373] font-medium uppercase text-base md:text-lg leading-[30px] mb-4">
          Featured Products
        </p>
        <h1 className="text-[#252B42] mb-4 text-2xl md:text-[35px] leading-tight font-bold">
          Bestseller Products
        </h1>
        <p className="text-[#737373] text-sm md:text-base leading-[20px]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            {/* Product Image */}
            <div className="w-full h-[300px] relative">
              <Image
                className="object-contain h-full w-full"
                src={product.Image}
                alt={product.title}
                fill
              />
            </div>

            {/* Product Details */}
            <div className="p-4 flex-1 flex flex-col justify-between text-center">
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
