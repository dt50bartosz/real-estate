import { LocationEdit, MailOpen, Phone } from "lucide-react";



export default function Kontakt() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Kontakt</h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div className="flex flex-col items-center">
            <MailOpen className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-white">Email</h3>
            <p className="text-sm text-white">nieruchomosciwsloncu@gmail.com</p>
          </div>

          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-white">Telefon</h3>
            <p className="text-sm text-white">Es +34 603 347 193</p>
            <p className="text-sm text-white">Pl +48 451 084 875</p>
          </div>
        </div>
      </div>
    </section>
  );
}
