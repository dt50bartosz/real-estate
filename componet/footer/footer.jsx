import Kontakt from "./kontakt";
import SocialMedia from "./social-media";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Skontaktuj się z nami</h3>
          <Kontakt />
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Śledź nas</h3>
          <SocialMedia />
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Cila Media. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
