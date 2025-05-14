import { Facebook, Instagram, PlayCircle } from "lucide-react"; // PlayCircle used as TikTok placeholder

export default function SocialMedia() {
  return (
    <section className=" py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className=" text-white text-3xl font-bold text-gray-800 mb-10">Znajdź nas w mediach </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div className="flex flex-col items-center">
            <Facebook className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="text-white text-lg font-semibold">Facebook</h3>
            <p className=" text-white text-sm">https://www.facebook.com/profile.php?id=61558387974897</p>
          </div>

          <div className="flex flex-col items-center">
            <Instagram className="w-8 h-8 text-pink-500 mb-2" />
            <h3 className="text-white text-lg font-semibold">Instagram</h3>
            <p className="text-sm text-white">@hiszpania.nieruchomosci</p>
          </div>
        </div>
      </div>
    </section>
  );
}
