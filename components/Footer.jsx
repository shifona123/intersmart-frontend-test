import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#172536] px-8 py-20 text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1350px]">

       
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">

          
          
          <div>
            <h3 className="text-[23px] font-medium">
              Services
            </h3>

            <div className="mt-7 space-y-6">
              <p className="text-[16px] font-normal text-white/90">
                Hyperparameter model tuning
              </p>

              <p className="text-[16px] font-normal text-white/90">
                PoC of AI Solutions
              </p>

              <p className="text-[16px] font-normal text-white/90">
                AI Model Optimization
              </p>

              <p className="text-[16px] font-normal text-white/90">
                AI Consultation
              </p>
            </div>
          </div>

         
          <div>
            <h3 className="text-[23px] font-medium">
              Pages
            </h3>

            <div className="mt-7 space-y-6">
              <p className="text-[16px] font-normal text-white/90">
                Services
              </p>

              <p className="text-[16px] font-normal text-white/90">
                Technology
              </p>

              <p className="text-[16px] font-normal text-white/90">
                Portfolio
              </p>

              <p className="text-[16px] font-normal text-white/90">
                Virtual team
              </p>

              <p className="text-[16px] font-normal text-white/90">
                Contact us
              </p>
            </div>
          </div>

          
          <div>
            <h3 className="text-[23px] font-medium">
              Stay connected
            </h3>

            
            <div className="mt-7 flex items-center gap-4">

            
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-[7px] border border-white text-white transition hover:bg-white hover:text-[#172536]"
              >
                <FaFacebookF className="text-[16px]" />
              </a>

              
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-[7px] border border-white text-white transition hover:bg-white hover:text-[#172536]"
              >
                <FaInstagram className="text-[18px]" />
              </a>

            
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-[7px] border border-white text-white transition hover:bg-white hover:text-[#172536]"
              >
                <FaLinkedinIn className="text-[17px]" />
              </a>

             
              <a
                href="#"
                aria-label="X"
                className="flex h-[32px] w-[32px] items-center justify-center rounded-[7px] border border-white text-white transition hover:bg-white hover:text-[#172536]"
              >
                <FaXTwitter className="text-[16px]" />
              </a>

            </div>
          </div>
        </div>

        
        <div className="mt-16 flex flex-col gap-5 border-t border-white/20 pt-6 text-[15px] text-white/90 md:flex-row md:items-center md:justify-between">

          <p>
            © 2023 Intersmart Ltd. All rights reserved.
          </p>

          <p>
            Privacy Policy | GDPR Policy | Terms of Service
          </p>

        </div>

      </div>
    </footer>
  );
}