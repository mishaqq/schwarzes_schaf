import React from "react";
import PageHeader from "../components/PageHeader";

function About() {
  const team = [
    {
      name: "Marie Schmidt",
      role: "Tattoo Artist",
      specialties: "Blackwork, Geometric",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80",
    },
    {
      name: "Thomas Weber",
      role: "Tattoo Artist",
      specialties: "Neo Traditional, Traditional",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
    {
      name: "Sarah Mueller",
      role: "Tattoo Artist",
      specialties: "Fine Line, Minimalist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Über uns"
        description="Lerne unser Team kennen"
        image="https://images.unsplash.com/photo-1523783419860-28486a354a3b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="page-container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-4">Unsere Geschichte</h2>
          <p className="text-neutral-300 mb-4">
            Ut ultricies pharetra neque at vulputate. Donec auctor sagittis
            magna. Suspendisse id augue nec arcu ultrices fringilla in at nunc.
            Proin dictum tellus velit, ac pulvinar dui pharetra eu. Vestibulum
            consectetur, ligula non vulputate egestas, magna risus volutpat
            purus, quis convallis tortor risus ut dui.
          </p>
          <p className="text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            condimentum odio consectetur, mattis eros eu, dapibus felis. Nunc
            tincidunt interdum cursus. Nam sollicitudin dictum convallis.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center">Unser Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-neutral-300 mb-2">{member.role}</p>
              <p className="text-neutral-400 text-sm">{member.specialties}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
