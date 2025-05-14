import PropertyCard from "../cards/property-card";

export default function DisplayProperties({ properties }) {
  console.log("properties", properties);

  const hasProperties = Array.isArray(properties) && properties.length > 0;

  return (
    <section className="w-full mt-10 mb-10">
      {hasProperties ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {properties.map((property, index) => (
            <PropertyCard key={index} className="flex-1" property={property} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600">Brak dostępnych nieruchomości</p>
      )}
    </section>
  );
}
