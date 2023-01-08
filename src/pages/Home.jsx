import React from "react";

function Home() {
  return (
    <div className="h-full flex flex-col items-center p-20 pb-40">
      <h1 className="text-5xl font-bold">Hello World</h1>
      <div className="mt-10">
        Hi, I am going to try learning framer motion :D
      </div>

      <br />
      <p>Click Links to see different stuff</p>
      <div className="mt-10">
        <ul className="list-disc">
          <li>
            <a href="/normal-stuff">Normal Stuff</a>
          </li>
          <li>
            <a href="/modal-stuff">Modal Stuff</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
