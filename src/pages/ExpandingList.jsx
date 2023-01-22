import React from "react";
import FencyCard from "../components/FencyCard";

const data = [
  {
    image: "https://picsum.photos/200/300",
    title: "Card Title 1",
    description: "Card Description 1",
    price: "$50",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "Card Title 2",
    description: "Card Description 2",
    price: "$100",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "Card Title 3",
    description: "Card Description 3",
    price: "$150",
  },
];

function ExpandingList() {
  return (
    // screen
    <div className="h-full flex flex-col items-center p-20 pb-40">
      {/* title */}
      <h1 className="text-5xl font-bold">Expanding List</h1>
      {/* cards in grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {data.map((item, index) => (
          <FencyCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ExpandingList;
