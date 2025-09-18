import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import textLogo from "../../assets/logos/brand-logo.png";
import SlidingButton from "../Elements/buttons/SlidingButton";
import { MdOutlineArrowOutward } from "react-icons/md";

import PS from "../../assets/icons/playstore.png";
import AS from "../../assets/icons/app-store.png";

const FooterNew = () => {
  const details = [
    {
      id: 1,
      title: "Alkhaleej Takaful",
      description: [
        { label: "About", link: "/about" },
        { label: "Medical", link: "/medical" },
        { label: "Corporate Insurance", link: "/corporate-insurance" },
        { label: "Investor Relations", link: "/investor-relations" },
      ],
    },
    {
      id: 2,
      title: "Products",
      description: [
        { label: "Motor insurance", link: "/products/motor" },
        { label: "Medical", link: "/products/medical" },
        { label: "Marine insurance", link: "/products/marine" },
        { label: "Travel insurance", link: "/products/travel" },
        {
          label: "Personal Accidents",
          link: "/products/personal-accidents",
        },
      ],
    },
    {
      id: 3,
      title: "Contact",
      description: [
        {
          label: "Email: cs@alkhaleej.com",
          link: "mailto:cs@alkhaleej.com",
        },
        {
          label: "Toll-Free: 8005007 (From 7:30 AM to 10:00 PM)",
          link: "tel:8005007",
        },
      ],
    },
  ];

  return (
    <div className="w-full h-auto bg-akti-white pt-5 ">
      <div className="w-full px-6 lg:px-8 pt-12 text-gray-800 rounded-t-2xl overflow-hidden">
        <div className="w-full pb-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="flex flex-col col-span-2 space-y-7">
            <div className="hover:cursor-pointer">
              <img src={textLogo} alt="Brand Logo" className="w-36 h-auto" />
            </div>
            <h1 className="text-4xl font-semibold leading-none">
              Sign up for <br /> news & updates
            </h1>
            <div className="flex max-w-sm items-center border border-gray-300 rounded-xl overflow-hidden">
              <input
                type="tel"
                placeholder="Your Mobile Number"
                className="bg-transparent px-4 py-4 w-full text-sm outline-none 
                placeholder-gray-600 font-semibold"
              />
              <div className="mr-2">
                <SlidingButton
                  type="submit"
                  className="bg-akti-burgundy-light text-akti-white p-1 flex items-center justify-center rounded-full "
                >
                  <MdOutlineArrowOutward />
                </SlidingButton>
              </div>
            </div>
          </div>

          {details.map((section) => (
            <div key={section.id} className="flex flex-col gap-4">
              <h2 className="font-bold mb-1 text-akti-burgundy-light text-xl">
                {section.title}
              </h2>
              <ul className="space-y-2 text-gray-900 text-sm">
                {section.description.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="hover:font-semibold hover:underline transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {section.id === 3 && (
                <div className="mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.560376365731!2d51.53233767415711!3d25.285370128126033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c541ee9b19db%3A0x139c1db72913bbda!2sGrand%20Hammad%20St%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sin!4v1757660281113!5m2!1sen!2sin"
                    width="100%"
                    height="100"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="h-px bg-gray-400"></div>
      </div>

      <div className="w-full p-8 bg-white ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2 text-gray-800">
            <div className="flex gap-5">
              <a
                href="#"
                className="hover:text-akti-burgundy transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="hover:text-akti-burgundy transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-akti-burgundy transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2025 Alkhaleej. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-gray-600 text-sm">
              Download from <br /> Play Store and App Store
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src={PS} alt="Playstore" className="h-6 object-contain" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src={AS} alt="Appstore" className="h-6 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
