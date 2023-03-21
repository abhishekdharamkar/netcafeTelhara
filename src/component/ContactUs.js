
import {IoLogoWhatsapp} from "react-icons/io"
function ContactUs() {
    
    return(
    <div className="flex flex-col md:flex-row md:justify-evenly mx-8 gap-10 md:gap-0 mt-32">
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full ">
   <div className="flex space-x-4">
    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
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
    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
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
    )
}
export default ContactUs;