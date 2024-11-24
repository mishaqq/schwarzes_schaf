import React from "react";
import PageHeader from "../components/PageHeader";
import { MapPin, Mail, Phone, Instagram, Clock } from "lucide-react";

function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      content: "Hahnengasse 11, 89073 Ulm",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@schwarzes-schaf.de",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      content: "+49 00 000000000",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      content: "@schwarzesschaf.ttt",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Kontakt"
        description="Lass uns dein Projekt besprechen"
        image="https://images.unsplash.com/photo-1479767574301-a01c78234a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Kontaktiere uns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-neutral-300">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-neutral-400">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-800 pt-8">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-neutral-300" />
                <div>
                  <h3 className="font-semibold mb-2">Öffnungszeiten</h3>
                  <div className="text-neutral-400 space-y-1">
                    <p>Dienstag - Freitag: 12:00 - 20:00</p>
                    <p>Samstag: 12:00 - 18:00</p>
                    <p>Sonntag & Montag: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
