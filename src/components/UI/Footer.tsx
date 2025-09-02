import logo from "../../assets/logos/SmallLogo2.png";
import textLogo from "../../assets/logos/Text-Logo.png";
import backgroundImage from "../../assets/images/background.png";

import PS from "../../assets/images/GOOGLEPAY.png";
import AS from "../../assets/images/AppStore.png";
import { Link } from "react-router-dom";

import Card2 from "../animated/Card2";

const Footer = () => {
  const footerButtons = [
    {
      id: 11,
      title: "Alkhaleej Takaful",
      description: [
        { label: "About", link: "/about" },
        { label: "Medical", link: "/medical" },
        { label: "Corporate Insurance", link: "/corporate-insurance" },
        { label: "Investor Relations", link: "/investor-relations" },
      ],
    },
    {
      id: 12,
      title: "Products",
      description: [
        { label: "Motor insurance", link: "/products/motor" },
        { label: "Medical", link: "/products/medical" },
        { label: "Marine insurance", link: "/products/marine" },
        { label: "Travel insurance", link: "/products/travel" },
        { label: "Personal Accidents", link: "/products/personal-accidents" },
      ],
    },
    {
      id: 13,
      title: "Contact",
      description: [
        { label: "Email: cs@alkhaleej.com", link: "mailto:cs@alkhaleej.com" },
        {
          label: "Toll-Free: 8005007 (From 7:30 AM to 10:00 PM)",
          link: "tel:8005007",
        },
      ],
    },
  ];

  return (
    <>
      <div className="h-auto w-full bg-akti-burgundy">
        <div
          className="w-full text-white rounded-t-2xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <XSpacing> */}
          <div className="px-4">
            <div className="w-full pt-1">
              <div className="flex w-full justify-between items-center pt-6">
                <h2 className="text-xl font-semibold uppercase ">
                  Office <br /> Address
                </h2>
                <img src={logo} alt="" className="h-16 w-16 object-contain " />
              </div>

              <div className="w-full">
                <Card2 />
              </div>
            </div>

            <div className="">
              <div className=" pt-4 lg:pt-6 pb-4 md:pb-0 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div>
                  <img
                    src={textLogo}
                    alt="text logo"
                    className="h-24 w-36 object-contain hover:cursor-pointer"
                  />
                </div>

                {footerButtons.map((section) => (
                  <div key={section.id}>
                    <h4 className="font-bold text-base mb-3">
                      {section.title}
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {section.description.map((item, idx) => (
                        <li key={idx}>
                          {section.id === 11 || section.id === 12 ? (
                            <Link
                              to={item.link}
                              className="hover:underline hover:text-gray-300 transition"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <a
                              href={item.link || "#"}
                              className="hover:underline hover:text-gray-300 transition"
                            >
                              {item.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="flex gap-3 md:gap-1">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit text-sm bg-[#E0E0E0]/40 border text-[#ffffff] border-[#ffffff] p-2 rounded-full hover:cursor-pointer"
                  >
                    Facebook
                  </a>

                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit text-sm bg-[#E0E0E0]/40 border text-[#ffffff] border-[#ffffff] p-2 rounded-full hover:cursor-pointer"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit text-sm bg-[#E0E0E0]/40 border text-[#ffffff] border-[#ffffff] p-2 rounded-full hover:cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className=" py-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col gap-4 md:flex-row justify-between w-full items-center ">
                  <p className="text-sm">
                    2025 © Alkhaleej. All rights reserved
                  </p>

                  <div className="flex space-x-4">
                    <div className="hover:cursor-pointer">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img
                          src={PS}
                          alt="Playstore"
                          className="h-fit w-36 object-contain"
                        />
                      </a>
                    </div>

                    <div className="hover:cursor-pointer">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img
                          src={AS}
                          alt="appstore"
                          className="h-fit w-36 object-contain"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </XSpacing> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
