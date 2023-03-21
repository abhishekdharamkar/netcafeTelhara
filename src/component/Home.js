
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../assets/s2.jpeg"
import image2 from "../assets/s1.jpeg"
import image3 from "../assets/s3.jpeg"
import "./Home.css"
export default function Home() {
    
return(
    <div className="mb-40">
    <div className="m-2 name mt-24 ">
    <div ><img src={image2}  alt ="Image not available" className="h-[180px] nameimage rounded-lg" /></div>
    <div className="text-center m-auto sm:text-6xl text-2xl text-red-600">श्री गजानन नेट कॅफे आणि झेरॉक्स</div>
    </div>

    <hr/>
    <div className=" mt-2 ml-2 font-extrabold">
    <div className="uppercase font-extrabold"> services available</div>
   <div className="mt-4 text-center services">
    <div className="servicesItem">स्कॉलरशिप फॉर्म</div>
    <div className="servicesItem">पॅन कार्ड</div>
    <div className="servicesItem">स्पर्धा परीक्षा</div>

    <div className="servicesItem">अर्ज रेल्वे रिझर्वेशन</div>

    <div className="servicesItem">आधार कार्ड प्रिंट</div>

    <div className="servicesItem">मोबाईल द्वारे प्रिंट</div>

    <div className="servicesItem">कलर झेरॉक्स</div>
    <div className="servicesItem">ऑनलाईन ऍडमिशन फॉर्म ऑनलाइन बँक</div>
    <div className="servicesItem">खाते मनी</div>
    <div className="servicesItem">पिक विमा ,सातबारा 8 अ लाईट बिल</div>
    <div className="servicesItem">कास्ट व्हॅलेडीटी</div>
   </div>
    </div>
    <div className="ml-2 mt-2 uppercase font-extrabold mb-2">Our Gallary</div>
            <Carousel className="mx-8 mb-6" autoPlay={true} interval={4000} showArrows={true} showThumbs={false} showStatus={false}>
                <div>
                    <img src={image1} alt ="Image not available" className="max-h-[500px] " />
                    
                </div>
                <div>
                    <img src={image2} alt ="Image not available" className="max-h-[500px] " />
                    
                </div>
                <div>
                    <img src={image3} alt ="Image not available" className="max-h-[500px] " />
                    
                </div>
            </Carousel>
            <div>
                <span>

                </span>
            </div>

    </div>
)
}