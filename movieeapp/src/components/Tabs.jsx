"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Tabs = () => {
    const seachParams = useSearchParams();
    const genre = seachParams.get("genre");
    const tabs = [
        {
          name: "En Popüler",
          url: "popular",
        },
        {
          name: "En Son",
          url: "lates",
        },
        {
          name: "Yakında Gelecekler",
          url: "upcoming",
        },
      ];
  return (
    <div className='p-5 m-5 bg-gray-100 dark:bg-gray-700 flex items-center justify-center gap-7'>
        {tabs.map((tab,i)=>(
          <Link
          key={i}
          href={`/?genre=${tab.url}`}
          className={`cursor-pointer  hover:opacity-75 transition-opacity ${
            tab.url === genre
              ? "underline text-orange-600 underline-offset-8 "
              : ""
          }`}
        >
          {tab.name}
        </Link>
        ))}
    </div>
  )
}

export default Tabs