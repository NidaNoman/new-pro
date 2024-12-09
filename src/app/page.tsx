import Feature from "@/components/feat";
import Footer from "@/components/footer";
import ProductPromo from "@/components/greensection";
import Header from "@/components/header";
import Hero from "@/components/hero";
import EditorsPick from "@/components/picspart";
import BestsellerProducts from "@/components/products";
import NeuralUniverse from "@/components/universal";

export default function Home(){
  return(
    <div>
      <Header/>
      <Hero/>
      <EditorsPick/>
      <BestsellerProducts/>
      < ProductPromo/>

      <NeuralUniverse/>
      <Feature/>
      <Footer/>


      

    </div>
  )
}