export default function Footer() {
  return (
    <>
      <div className="bg-black text-gray-300">
        <footer className="py-12 px-6 md:px-12 flex flex-col items-center max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-10 w-full">
            
            <div>
              <h4 className="text-lg mb-4 text-white font-semibold">FIND A STORE</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white text-sm">BECOME A MEMBER
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm">SIGN UP FOR EMAIL
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm">Send Us Feedback
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm">STUDENT DISCOUNT
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-4 text-white font-semibold">GET HELP</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white text-sm">
                    Order Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm"> Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm"> Return
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm"> Payment Option
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm"> Contact Us At Nike.com Inquiries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm"> Contact Us On All Other Inquiries
                  </a>
                </li>
              </ul>
            </div>

            
            <div>
              <h4 className="text-lg mb-4 text-white font-semibold">ABOUT NIKE</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white text-sm"> News </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm"> Carriers </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm"> Investors </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white text-sm"> Sustainability </a>
                </li>
              </ul>
            </div>
          </div>

          
          <div className="flex space-x-4 mt-8 justify-center">
            <img src="/twitter.png" alt="Twitter" className="h-6 w-6 cursor-pointer" />
            <img src="/facebook.png" alt="Facebook" className="h-6 w-6 cursor-pointer" />
            <img src="/youtube.png" alt="YouTube" className="h-6 w-6 cursor-pointer" />
            <img src="/insta.png" alt="Instagram" className="h-6 w-6 cursor-pointer" />
          </div>
        </footer>

        <div className="flex flex-wrap items-center justify-between py-4 px-6 md:px-12 bg-black text-sm max-w-screen-xl mx-auto">

          <div className="flex items-center space-x-2">
            <img src="/location.png" alt="Location" className="h-4 w-4" />
            <p>India</p>
          </div>

          <p className="text-center flex-1 md:flex-none md:text-left mt-4 md:mt-0"> © 2023 Nike, Inc. All Rights Reserved </p>

          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <a href="#" className="hover:text-white"> Guides </a>
            </li>
            <li>
              <a href="#" className="hover:text-white"> Terms of Sale </a>
            </li>
            <li>
              <a href="#" className="hover:text-white"> Terms of Use </a>
            </li>
            <li>
              <a href="#" className="hover:text-white"> Nike Privacy Policy </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
