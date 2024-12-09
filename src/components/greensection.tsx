

import Image from 'next/image';

const ProductPromo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-green-600 py-16 px-8 md:px-16 text-white mb-0">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-0">
        <p className="uppercase text-sm font-semibold tracking-wide mb-2">Summer 2020</p>
        <h1 className="text-4xl font-bold mb-4">Vita Classic Product</h1>
        <p className="text-lg leading-relaxed mb-6">
          We know how large objects will act, we know how large objects will act. We know.
        </p>
        <div className="flex items-center space-x-4">
          <p className="text-2xl font-semibold">$16.48</p>
          <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded hover:bg-gray-100">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/green.jpg" // Update with your image path
          alt="Product Image"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProductPromo;





// import Image from "next/image";
// import green from "/green.png";

// export default function GreenDiv(){
//     return(
//         <div className="w-[1440px] rounded-[5px] absolute bg-[#23856D] mt-[-130px] top-[3200px] border">
//             <div className="w-[1440px] h-[709px]">
//              <div className="w-[1440px] h-[709px]">
//                 <div className="w-[1036px] h-[711px] absolute left-[209px] py-[112px] flex  gap-[80px]">
//                     <div className="w-[1049px] h-[599px] flex  gap-[30px]">
//                         <div className="w-[509px] h-[432px] pt-[60px] flex flex-col gap-[30px]">
//                             <h4 className="w-[154px] h-[30px] font-Montserrat font-normal text-[20px] leading-[30px] text-white">SUMMER 2020</h4>
//                             <h1 className="w-[509px] h-[160px] font-Montserrat font-bold text-[58px] leading-[80px] text-white">Vita Classic Product</h1>
//                             <p className="w-[341px] h-[40px] font-Montserrat font-medium text-[14px] leading-[20px] text-white">We know how large objects will act, We know how are objects will act, We know</p>
//                             <div className="w-[295px] h-[52px] flex gap-[34px]">
//                                 <h3 className="w-[77px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] text-white">$16.48</h3>
//                                 <button className="w-[184px] h-[52px] rounded-[5px] px-[40px] bg-[#2DC071] py-[15px] flex gap-[10px]">
//                                     <h1 className="w-[104px] h-[22px] font-Montserrat text-[14px] leading-[22px] flex text-white justify-center ">ADD TO CART</h1>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="w-[510px]">
//                           <Image src={greenman} alt="picman"/>
//                         </div>
//                     </div>
//                 </div>
//              </div>
//             </div>
//         </div>
//     )
// }