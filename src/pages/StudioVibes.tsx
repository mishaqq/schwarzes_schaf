import React from "react";
import PageHeader from "../components/PageHeader";
import { MapPin, Clock, Shield } from "lucide-react";

function StudioVibes() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Höchste Hygiene-Standards",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum odio consectetur, mattis eros eu, dapibus felis.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Entspannte Atmosphäre",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum odio consectetur, mattis eros eu, dapibus felis. Nunc tincidunt interdum cursus.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Zentrale Lage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum odio consectetur, mattis eros eu, dapibus felis. Nunc tincidunt interdum cursus.",
    },
  ];

  const studioImages = [
    "https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1605647533135-51b5906087d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRhdHRvb3xlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1474260295919-57362ec1d17c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRhdHRvb3xlbnwwfDB8MHx8fDA%3D",
  ];

  return (
    <div>
      <PageHeader
        title="Studio Vibes"
        description="Entdecke unseren kreativen Raum"
        image="https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80"
      />

      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-neutral-800 rounded-lg">
              <div className="mb-4 text-neutral-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studioImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Studio impression ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudioVibes;
