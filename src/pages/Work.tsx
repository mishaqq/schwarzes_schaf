import React from "react";
import PageHeader from "../components/PageHeader";

function Work() {
  const works = [
    {
      image:
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80",
      style: "Blackwork",
      artist: "Marie",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495606629726-9d1ebc2adb5e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRhdHRvb3xlbnwwfDB8MHx8fDA%3D",
      style: "Neo Traditional",
      artist: "Thomas",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80",
      style: "Minimalist",
      artist: "Sarah",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604374376934-2df6fad6519b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      style: "Geometric",
      artist: "Marie",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565727527660-18d58fb5a647?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGl0aW9uYWwlMjB0YXR0b298ZW58MHwwfDB8fHww",
      style: "Traditional",
      artist: "Thomas",
    },
    {
      image:
        "https://images.unsplash.com/photo-1567071208639-716c1009517d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluZWxpbmUlMjB0YXR0b298ZW58MHwwfDB8fHww",
      style: "Fine Line",
      artist: "Sarah",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Unsere Arbeiten"
        description="Eine Auswahl unserer besten Tattoo-Kunstwerke"
        image="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80"
      />

      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={`${work.style} tattoo by ${work.artist}`}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{work.style}</h3>
                <p className="text-neutral-400">Artist: {work.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
