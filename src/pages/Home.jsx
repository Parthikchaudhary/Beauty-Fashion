import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BrandsYouWillLove from "../components/BrandsYouWillLove";
import CliniqueCarousel from "../components/CliniqueCarousel";
import EucerinCarousel from "../components/EucerinCarousel";
import FocusOnSection from "../components/FocusOnSection";
import EditorsPicksSection from "../components/EditorsPicksSection";
import Responsive from '../components/Responsive';
import MultipleRows from '../components/MultipleRow';
import MyProducts from "../components/OneImages";



export const Home = () => {
    return(
        <>
    <div>
      {/* Other sections */}
      <CliniqueCarousel />
    </div>
    <div>
      {/* Other content */}
      <EucerinCarousel />
    </div>
     <div>
      {/* Other home content */}
      <FocusOnSection />
      <EditorsPicksSection />
      <BrandsYouWillLove />

      <Responsive />

      <MultipleRows />

      <MyProducts />
      
    </div>
    <div>
      
    </div>
        </>
    )
}