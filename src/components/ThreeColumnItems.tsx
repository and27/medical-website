import { IconBase } from "react-icons";
import { FaBeer } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa6";

interface ThreeColumnItemsProps {
  items: {
    title: string;
    description: string;
    href: string;
  }[];
}

const ThreeColumnItems = ({ items }: ThreeColumnItemsProps) => {
  return (
    <div className="grid lg:mb-0 lg:max-w-5xl lg:grid-cols-3 mx-auto gap-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 shadow-lg p-5 bg-white"
        >
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-500 p-5">
            <FaBabyCarriage size={50} color="white" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-800">
            {item.title}
          </h3>
          <p className="text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ThreeColumnItems;
