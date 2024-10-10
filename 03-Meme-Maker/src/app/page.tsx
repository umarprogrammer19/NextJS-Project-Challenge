import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Memes {
  name: string;
  url: string;
  id: number;
  box_count: number;
}

export default async function Home() {
  const data = await fetch("https://api.imgflip.com/get_memes");
  const response = await data.json();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-center mt-12 mb-16 text-cyan-400 shadow-lg">
        Meme Generator
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 w-full max-w-7xl">
        {response && response.data.memes.map((item: Memes) => (
          <div key={item.id} className="group flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative w-full h-48 sm:h-64">
              <Image
                src={item.url}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg transition-opacity duration-300 group-hover:opacity-90"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2 truncate">{item.name}</h2>
              <Link href={{
                pathname: "creatememe",
                query: {
                  name: item.name,
                  url: item.url,
                  id: item.id,
                  box_count: item.box_count,
                }
              }}>
                <button className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md transition-all duration-300 transform hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  Generate Meme
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
