"use client";

import Image from "next/image";
import judges from "@/(assets)/Judges.json"

interface Judge {
  id: number;
  name: string;
  bio: string;
  imagePath: string;
  role: string;
}


export default function Judges() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap content-evenly gap-8">
          {judges.map((judge) => (
            <div key={judge.id} className="overflow-hidden bg-card  md:w-[20vw]">
              <div className="aspect-square relative">
                <Image
                  src={judge.imagePath}
                  alt={judge.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 500px) 50vw, (max-width: 200) 25vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-1 text-black">{judge.name}</h3>
                <a href={judge.link} className="text-md text-primary/80 mb-3">{judge.role}</a>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {judge.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}