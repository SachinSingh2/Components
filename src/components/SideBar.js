import React from "react";
import Links from "./Links";

export default function SideBar() {
  const LinkData = [
    { label: "DropDown", path: "/" },
    { label: "Accordion", path: "/Accordion" },
    { label: "Buttons", path: "/Buttons" },
    { label: "Modal", path: "/Modal" },
  ];

  const Render = LinkData.map((data, index) => {
    return <div key={index}>
        <Links activeClassName='font-bold border-l-4 border-blue-500 pl-' className='mb-3' to={data.path}>{data.label}</Links>
    </div>;
  });

  return <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
    {Render}
  </div>;
}
