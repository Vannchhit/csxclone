import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag } from "primereact/tag";

type props = {
  title: string;
  tagValue?: string;
  icon?: IconProp;
  actionContent?: JSX.Element;
};

function PageHeader({ title, tagValue, icon, actionContent }: props) {
  return (
    <div className="flex justify-between items-center mt-2 mb-3 text-gray-700">
      <div className="flex flex-row items-center">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="text-lg lg:text-xl xl:text-2xl pr-2 hidden md:block"
          />
        )}
        <p className="flex items-center gap-2 text-lg lg:text-xl xl:text-2xl font-bold">
          {title}
          {tagValue && <Tag value={tagValue} severity="danger" rounded />}
        </p>
      </div>
      <div className="flex gap-2">{actionContent}</div>
    </div>
  );
}

export default PageHeader;
