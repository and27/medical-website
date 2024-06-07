import { IconType } from "react-icons";

interface ThreeColumnItemsProps {
  items: {
    title: string;
    description: string;
    icon: IconType;
  }[];
}

const ThreeColumnItems = ({ items }: ThreeColumnItemsProps) => {
  return (
    <div className="grid lg:mb-0 lg:max-w-5xl lg:grid-cols-3 mx-auto gap-5">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center gap-4 shadow hover:shadow-lg p-7 bg-white"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-teal-500 p-5">
              <Icon size={50} color="white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-700">
              {item.title}
            </h3>
            <p className="text-slate-500">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ThreeColumnItems;
