export default function Description({ propertyDescription }) {
  return (
    <div className="mt-[5rem]  p-6 rounded-lg shadow-lg w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-[var(--color-secondary)]">
        Opis Nieruchomości
      </h2>
      <div className=" p-4 rounded-lg  flex-wrap">
        <p className="text-gray-600 text-l break-words whitespace-pre-wrap">
          {propertyDescription || "Brak opisu nieruchomości."}
        </p>
      </div>
    </div>
  );
}
