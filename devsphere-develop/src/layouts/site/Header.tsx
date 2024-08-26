import csxLogo from "@src/assets/logos/csx_logo.gif";
import LanguageToggle from "@src/components/LanguageSwitcher";
import { MegaMenu } from "primereact/megamenu";
import LngLink from "@src/components/LngLink";
import { MenuItem } from "primereact/menuitem";
import useLngNavigate from "@src/hooks/useLngNavigate";

export default function Header() {
  const navigate = useLngNavigate();
  const items: MenuItem[] = [
    {
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
    },
  ];

  const start = (
    <LngLink to={"/"}>
      <img
        alt="logo"
        className="mr-2"
        style={{ minWidth: "70px", height: "40px" }}
        src={csxLogo}
      ></img>
    </LngLink>
  );

  const end = (
    <div className="flex items-center gap-2">
      <LanguageToggle />
    </div>
  );

  return (
    <div className="sticky top-0 shadow-md bg-white z-50">
      <div className="max-w-screen-2xl mx-auto">
        <MegaMenu
          model={items}
          className="border-none bg-white text-base lg:text-sm"
          start={start}
          end={end}
          breakpoint="1024px"
        />
      </div>
    </div>
  );
}
