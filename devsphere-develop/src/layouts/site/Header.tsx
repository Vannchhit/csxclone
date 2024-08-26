import React from "react";
import csxLogo from "@src/assets/logos/csx_logo.gif";
import LanguageToggle from "@src/components/LanguageSwitcher";
import { MegaMenu } from "primereact/megamenu";
import LngLink from "@src/components/LngLink";
import { MenuItem } from "primereact/menuitem";
import useLngNavigate from "@src/hooks/useLngNavigate";
import "./style.css";

export default function Header() {
  const navigate = useLngNavigate();

  const items: MenuItem[] = [
    {
      /*
      label: "About",
      icon: "pi pi-box",
      items: [
        [
          {
            label: "Information",
            items: [
              {
                label: "Contact",
                command: () => {
                  navigate("/contact");
                },
              },
            ],
          },
        ],
      ],
    */
    },
    {
      label: "Business",
      className: "menu-parent-label",
      items: [
        { 
          items: [
            {
              label: "Business Overview",
            },
            {
              label: "Capital Market IT Service",
            },
            {
              label: "IT Infrastructure Service",       
            },
            {
              label: "Financial Information Service",
            },
            {
              label: "Blockchain Service",
            },
            {
              label: "New Business",
            }
          ]  
        },
      ],
    },
    {
      label: "Media Room",
      className: "menu-parent-label",
      items: [
        { 
          items: [
            {
              label: "CI Introduction",
            },
            {
              label: "Brochure",
            },
            {
              label: "PR Movie Clip",       
            },
            {
              label: "At a Glance",
            }
          ]  
        },
      ],
    },
    {
      label: "About Us",
      className: "menu-parent-label",
      items: [
        { 
          items: [
            {
              label: "Company Information",
            },
            {
              label: "Organization Chart",
            },
            {
              label: "Sitemap",       
            },
          ]  
        },
      ],
    },
    {
      label: "Contact",
      className: "menu-parent-label",
      items: [
        {
          items: [
            {
              label: "Customer Center",
            },
            {
              label: "Location & Contact",
            },
          ],
        },
      ],
    },
  ];
  const start = (
    <LngLink to={"/"}>
      <img
        alt="logo"
        className="mr-2"
        style={{ minWidth: "70px", height: "40px" }}
        src={csxLogo}
      />
    </LngLink>
  );

  const end = (
    <div className="flex items-center gap-2">
      <LanguageToggle />
    </div>
  );

  return (
    <div className="sticky top-0 shadow-md bg-white z-50">
      <div className="w-full ">
        <MegaMenu
          model={items}
          className="border-none bg-white text-base lg:text-sm text-sm"
          start={start}
          end={end}
          breakpoint="1200px" // Adjust this value as needed
        />
      </div>
    </div>
  );
}
