import Image from "next/image";
import Viki from "@/public/Viki.jpg";

export default function AboutMe() {
  return (
    <section className="mt-10 md:h-screen grid place-items-center md:p-[5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center max-w-6xl w-full px-4">
        <div>
          <Image
            src={Viki}
            alt="About Me"
            layout="responsive"
            width={500}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="h-full">
          <h2 className="text-5xl text-[var(--color-primary)] font-bold mb-4">O mnie</h2>
          <p className="text-lg text-gray-600 mt-[]">Nazywam się Wiktoria Niemczewska i pomagam spełniać marzenia o życiu pod hiszpańskim słońcem. 
          Specjalizuję się w sprzedaży i wynajmie nieruchomości w Hiszpanii – zarówno dla tych, którzy szukają domu na stałe, jak i dla inwestorów czy osób planujących zakup wakacyjnego apartamentu.</p>
          <p className="text-lg text-gray-600 mt-2">            
          Stawiam na autentyczność, relacje i zaufanie. Każda transakcja to dla mnie coś więcej niż tylko liczby – to osobista historia, która zaczyna się od rozmowy i zrozumienia Twoich potrzeb.
          </p>
          <p className="mt-1 text-lg text-gray-600 mt-2">W mojej pracy stawiam na jakość. Każda oferta, którą przygotowuję, jest dopracowana w najmniejszych szczegółach – od profesjonalnych zdjęć po skuteczny marketing i promocję w social mediach. Wierzę, że współpraca z innymi agentami, rzetelne przygotowanie nieruchomości i nowoczesne narzędzia sprzedaży to klucz do sukcesu.</p>
          <p className="text-lg text-gray-600 mt-2"> Jeśli szukasz kogoś, kto sprzeda Twoje mieszkanie lub dom w najlepszej cenie i z pełnym zaangażowaniem – zapraszam do kontaktu!</p>
        </div>
      </div>
    </section>
  );
}