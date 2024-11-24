import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="pt-20">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Kunst auf deiner Haut
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                condimentum odio consectetur, mattis eros eu, dapibus felis.
                Nunc tincidunt interdum cursus. Nam sollicitudin dictum
                convallis.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Termin vereinbaren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Ausgewählte Arbeiten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80",
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden">
                <img
                  src={image}
                  alt={`Featured work ${index + 1}`}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/work"
              className="inline-flex items-center text-lg hover:text-neutral-400 transition-colors duration-300"
            >
              Mehr Arbeiten ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Preview */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Unser Studio</h2>
              <p className="text-neutral-300 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                condimentum odio consectetur, mattis eros eu, dapibus felis.
                Nunc tincidunt interdum cursus. Nam sollicitudin dictum
                convallis.
              </p>
              <Link
                to="/studio-vibes"
                className="inline-flex items-center text-lg hover:text-neutral-400 transition-colors duration-300"
              >
                Studio entdecken
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80"
                alt="Studio interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
