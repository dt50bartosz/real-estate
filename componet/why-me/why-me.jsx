import Image from "next/image";
import Viki2 from "@/public/viki2.jpg";

export default function WhyMe() {
  return (
    <section className="md:h-[75vh] px-4 py-8 bg-white text-gray-800 flex flex-col">
      <h1 className="md:mb-[5rem] text-3xl sm:text-4xl font-extrabold mb-5 text-center text-[var(--color-primary)]">
        Dlaczego warto ze mną współpracować?
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 w-full max-w-6xl max-h-[50vh] mx-auto">
        
        {/* Tile 1 */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow flex flex-col justify-center md:col-start-1">
          <p className="text-lg sm:text-xl font-semibold mb-2 text-[var(--color-dark-green)]">
            Spersonalizowane podejście
          </p>
          <span className="text-sm text-gray-700">
            Każdy klient i nieruchomość to dla mnie osobna historia. Tworzę indywidualne strategie sprzedaży, które skutecznie przyciągają odpowiednich kupujących.
          </span>
        </div>

        {/* Tile 2 */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow flex flex-col justify-center md:row-start-2">
          <p className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
            Nowoczesne technologie
          </p>
          <span className="text-sm text-gray-700">
            Wykorzystuję innowacyjne narzędzia – od profesjonalnych zdjęć, przez wirtualne spacery, po reklamy targetowane – by Twoja nieruchomość wyróżniała się na rynku.
          </span>
        </div>

        {/* Tile 3 */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow flex flex-col justify-center md:col-start-3 md:row-start-1">
          <p className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
            Skuteczna komunikacja
          </p>
          <span className="text-sm text-gray-700">
            Zawsze jestem dostępna i informuję Cię na bieżąco. Współpraca ze mną to pełna przejrzystość i poczucie bezpieczeństwa.
          </span>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex justify-center items-center w-full h-full md:row-span-3 md:col-start-2 md:row-start-1">
          <Image
            src={Viki2}
            alt="Dlaczego współpraca"
            className="rounded-2xl shadow-md object-cover  "
          />
        </div>

        {/* Tile 4 */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow flex flex-col justify-center md:col-start-1 md:row-start-3">
          <p className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
            Lokalna wiedza i doświadczenie
          </p>
          <span className="text-sm text-gray-700">
            Doskonale znam lokalny rynek – wiem, jak wycenić nieruchomość, by sprzedała się szybko i korzystnie.
          </span>
        </div>

        {/* Tile 5 */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow flex flex-col justify-center md:col-start-3 md:row-start-2">
          <p className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
            Kompleksowa obsługa
          </p>
          <span className="text-sm text-gray-700">
            Zajmuję się wszystkim – od przygotowania oferty po negocjacje i finalizację transakcji. Ty możesz skupić się na swoich sprawach.
          </span>
        </div>

        {/* Tile 6 */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow flex flex-col justify-center md:col-start-3 md:row-start-3">
          <p className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
            Realne rezultaty
          </p>
          <span className="text-sm text-gray-700">
            Moim celem jest Twój sukces – zadowolenie klientów i efektywna sprzedaż to moja najlepsza wizytówka.
          </span>
        </div>
      </div>
    </section>
  );
}
