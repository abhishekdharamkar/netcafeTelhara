
import {IoLogoWhatsapp} from "react-icons/io"
import profile from "../assets/profile.jpeg"
import {BsFillArrowDownCircleFill} from "react-icons/bs"
function ContactUs() {
    
    return(
      <>
     
      <img src={profile} className="h-60 w-72 mt-20 mx-auto  object-cover" alt="not available " />
    <div className=" mt-3 mb-44 flex flex-col md:flex-row md:justify-evenly mx-8 gap-10 md:gap-0 ">
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full ">
   <div className="flex space-x-4">
    <div className="  ">
      <div className="">Vaibhav K Dharamkar</div>
      <div className="">
        <div className="">
          <div className="mt-2 flex cursor-pointer"  onClick={() => window.open("https://wa.me/7020212810", "_blank")}> Mo. 7020212810 <IoLogoWhatsapp className="text-green-500 ml-1 mt-[3px]"/></div>
          <div className="mt-2"> Email. Abc@gmail.com</div>

        </div>
      </div>
    </div>
  </div>

  
</div>

<div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full ">
  <div className="flex space-x-4">
    <div className="  ">
      <div className="">Mayur R Shengokar</div>
      <div className="">
        <div className="">
        <div className="mt-2 flex cursor-pointer"  onClick={() => window.open("https://wa.me/9850362912", "_blank")}> Mo. 9850362912 <IoLogoWhatsapp className="text-green-500 ml-1 mt-[3px]"/></div>
          <div className="mt-2"> Email. Abc@gmail.com</div>
        </div>
      </div>
    </div>
  </div>
  
</div>
    </div>
    </>
    )
}
export default ContactUs;