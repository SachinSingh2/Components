import React from "react";
import Links from "./Links";

export default function SideBar() {
  const LinkData = [
    { label: "DropDown", path: "/" },
    { label: "Accordion", path: "/Accordion" },
    { label: "Buttons", path: "/Buttons" },
    { label: "Modal", path: "/Modal" },
    { label: "Table", path: "/Table" },
    { label: "Counter", path: "/Counter" }
  ];

  const Render = LinkData.map((data, index) => {
    return <div key={index}>
        <Links className="mb-8" activeClassName='font-bold border-l-4 border-blue-500 pl-' to={data.path}>{data.label}</Links>
    </div>;
  });

  return <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
    {Render}
  </div>;
}
