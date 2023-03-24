import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/s2.jpeg";
import image2 from "../assets/s1.jpeg";
import image3 from "../assets/s3.jpeg";
import "./Home.css";
import { useState } from "react";
import PopUp from "./PopUp";
export default function Home() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="mb-14">
      <div className=" mt-24 ">
        <marquee style={{ color: "olive", fontSize: "40px" }}>
          सदैव आपल्या सेवेत...🙏
        </marquee>
      </div>
      <div className="m-2 name  ">
        <div>
          <img
            src={image2}
            alt="Image not available"
            className="h-[180px] nameimage rounded-lg"
          />
        </div>
        <div className="text-center m-auto sm:text-6xl text-2xl text-red-600">
          श्री गजानन नेट कॅफे & झेरॉक्स
        </div>
      </div>

      <hr />
      <div className=" mt-2 ml-2 font-extrabold">
        <div className="uppercase font-extrabold"> services available</div>
        <div className="mt-4 text-center services">
          <PopUp
            message="स्कॉलरशिप फॉर्म महाराष्ट्र थेट लाभ हस्तांतरण (महा डीबीटी- डायरेक्ट बेनिफिट ट्रान्स्फर) शिष्यवृत्ती हा राज्य सरकारचा एक उपयुक्त कार्यक्रम आहे.  ज्यांना शैक्षणिक शुल्क देणे परवडत नाही, अशा विद्यार्थ्यांना महाराष्ट्र सरकारतर्फे https://mahaDBTmahait.gov.in/login/login या महा डीबीटी पोर्टलच्या माध्यमातून  शिष्यवृत्ती देण्यात येते.  विद्यार्थ्यांच्या प्रकार आणि श्रेणीनुसार विविध प्रकारच्या महा डीबीटी शिष्यवृत्तींचा लाभ घेण्यासाठी जे विद्यार्थी शिष्यवृत्तीच्या शोधात आहेत, त्यांच्यासाठी हे पोर्टल म्हणजे एका छताखाली सर्व उत्तरे मिळण्याचे ठिकाण आहे.  या पोर्टलमुळे, महाराष्ट्र सरकारच्या संबंधित कार्यालयात न जाताच विद्यार्थ्यांना सहजपणे शिष्यवृत्तीचा लाभ घेता येईल.  महा डीबीटी पोर्टल इंग्रजी आणि मराठी भाषेत उपलब्ध आहे. व तसेच अनेक स्कॉलरशिपची माहिती आपला कडे उपलब्ध आहे."
            heading="स्कॉलरशिप फॉर्म"
          />
          <PopUp
            message="24 तास मध्ये आपणस पॅनकार्ड काढून मिळेल.
                     पॅनकार्ड काढण्यासाठी आधार कार्ड व आधारकार्ड ला मोबाईल नंबर असणे आवश्यक आहे."
            heading="पॅन कार्ड"
          />
          <PopUp
            message="विविध सरकारी व खासगी क्षेत्रातील नोकरी विषयक माहिती व फ्रॉम भरून मिळतील."
            heading="स्पर्धा परीक्षा अर्ज"
          />
          <PopUp
            message="ट्रेनमध्ये प्रवास करण्यासाठी तिकीटाची आवश्यकता असते आणि येथून त्रास सुरू होतो . परंतु आता आपल्या माध्यमातून रेल्वे तिकीट बुक केले जाईल ..."
            heading="रेल्वे रिझर्वेशन"
          />
          <PopUp
            message="आधारकार्ड पावती वरून आधार कार्ड प्रिंट काढून मिळेल. आधार कार्ड pvc ऑर्डर करून मिळेल..."
            heading="आधार कार्ड प्रिंट"
          />
          <PopUp
            message="सर्व ऑनलाईन द्वारे प्रिंट आपला कडे काढून मिळतील."
            heading="मोबाईल द्वारे प्रिंट"
          />
          <PopUp
            message="A4, A3 ,पेज कलर झेरॉक्स काढून मिळेल."
            heading="कलर झेरॉक्स"
          />
          <PopUp
            message="BA,BCOM,BSC,MA,MCOM,MSC, NEET CET,JEE वर इतर सर्व वर्ग एडमिशन फ्रॉम आपला कडे भरून मिळतील..."
            heading="ऑनलाईन ऍडमिशन फॉर्म"
          />
          <PopUp
            message="सर्व बँक खाते आपला कडे काढून मिळतील,सर्व बँक व तसेच pm किसान पैसे आपणास कुठून काढून मिळतील..."
            heading="ऑनलाइन बँक खाते मनी"
          />
          <PopUp
            message="खरीप ,रब्बी
                    प्रधानमंत्री फसल विमा योजना 
                    विमा आपला कडे काढून मिळेल..
                    त्यासाठी आपणास
                    7/12
                    आधारकार्ड
                    बँक पासबुक
                    स्वयंघोषणापत्र 
                    असे आवश्यक आहे
                    7/12 8 अ
                    आपला कडे डिजिटल काढून मिळेल"
            heading="पिक विमा,सातबारा 8 अ"
          />
          <PopUp
            message="लाईट बिल,मोबाईल बिल
                    व इतर सर्व बिले भरण्याची आपला कडे सेवा उपलब्ध आहे"
            heading="लाईट बिल"
          />
          <PopUp
            message="कास्ट व्हॅलेडीटी आपल्याकडे काढून मिळेल
                    त्यासाठी लागणारे कागदपत्रे 
                    1) 12वी बोनाफाईड सर्टिफिकेट
                    2) आधार कार्ड झेरॉक्स.
                    3) कॉलेज कव्हरिंग लेटर
                    4) विद्यार्थी वरीजनल का सर्टिफिकेट आणि झेरॉक्स
                    5) विद्यार्थी टीसी आणि निर्गम उतारा चौथी आणि सातवी
                    6) वडील  टीसी आणि निर्गम उतारा
                    7) आजोबा टी सी आणि निर्गम उतारा
                    8) फॉर्म नंबर तीन वंशावळ
                    9) जातीचा शपथपत्र फॉर्म नंबर 17
                    10) रक्ताचा नात्यातील कास्ट व्हॅलिडीटी असल्यास
                    11) पंजोबा कोतवाल बुक नक्कल
                    12) विद्यार्थी एक फोटो
                    13) विद्यार्थ्यांची सही व पालकाची सही"
            heading="कास्ट व्हॅलेडीटी"
          />
          <PopUp message="रिझ्युम (resume) 
          बायोडेटा
तसेच इतर सर्व ऑफिस एक्सेल पॉवर पॉइंट कामे केले जातील.." heading="जॉब वर्क"/>
        </div>
      </div>
      <div className="ml-2 mt-2 uppercase font-extrabold mb-2">Our Gallary</div>
      <Carousel
        className="mx-8 mb-6"
        autoPlay={true}
        interval={4000}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img
            src={image1}
            alt="Image not available"
            className="max-h-[500px]"
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Image not available"
            className="max-h-[500px] "
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Image not available"
            className="max-h-[500px]  "
          />
        </div>
      </Carousel>
      <div>
        <span></span>
      </div>
    </div>
  );
}
