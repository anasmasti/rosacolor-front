import React from "react";

const FullCard = () => {
  return (
    <section className="w-full bg-blue-50 flex justify-start p-20 flex-col items-start my-8">
      <div className="p-1 bg-blue-100 rounded-sm">
        <p className="text-blue-400 text-sm">New</p>
      </div>
      <div>
        <h3 className="text-6xl font-bold mb-3">Product with blue color</h3>
        <p className="text-gray-400 text-lg w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          harum placeat nulla accusantium explicabo quibusdam quasi beatae rem
          delectus pariatur nesciunt, numquam molestias repellat fugiat expedita
          consectetur eaque, nihil quis?
        </p>
        <p className="mt-5 text-gray-500 text-sm">Publier le : 17/04/2022</p>
      </div>
    </section>
  );
};

export default FullCard;
