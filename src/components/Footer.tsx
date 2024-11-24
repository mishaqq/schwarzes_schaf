import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Schwarzes Schaf</h3>
            <p className="text-neutral-400 text-sm">
              Kunstvolle Tätowierungen und einzigartige Designs in einer 
              entspannten Atmosphäre.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-neutral-400 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Musterstraße 123, 12345 Berlin</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@schwarzes-schaf.de" className="hover:text-white transition-colors">
                  info@schwarzes-schaf.de
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @schwarzes.schaf.tattoo
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-neutral-400 text-sm">
              <p>Dienstag - Freitag: 12:00 - 20:00</p>
              <p>Samstag: 12:00 - 18:00</p>
              <p>Sonntag & Montag: Geschlossen</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400 text-sm">
          <p>© {new Date().getFullYear()} Schwarzes Schaf Tattoo. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;