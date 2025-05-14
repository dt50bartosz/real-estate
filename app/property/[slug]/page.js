import PropertyPage from "@/componet/property-page/property-page";
import { slugToTitle } from "@/lib/utils";
import { convertToTowns } from "@/lib/utils";

export default async function PropertyPageWrapper({ params }) {
  const { slug } = await params;
  console.log("params",slug);

  const res = await fetch(`${process.env.NEXT_PUBLIC_HTML}/property/property-by-title/${slugToTitle(slug)}`);

  if (!res.ok) {
    return <div>Failed to fetch property data</div>;
  }
  
  const propertyData = await res.json();
  

  const {
    useful_area,
    total_area,
    bedrooms,
    bathrooms,
    floor,
    year_of_construction,
    orientation,

    town,
    postal_code,
    street,
    latitude,
    longitude,

    price,
    ibi,
    community,
    property_id,
    title,
    photos,
    items,
    seller_name,
    telephone,
    description,
    property_type,
    property_condition,
    status,
  } = propertyData;

  const topSection = {
    basicInformation: {
      property_id,
      useful_area,
      total_area,
      bedrooms,
      bathrooms,
      floor,
      year_of_construction,
      orientation,
      ibi,
      community,
      property_condition,
      
    },
    topSection: {
      title,
      price,
      town,
      postal_code,
    },    
    photos
  };

  const middleSection = {
    additionalInformation: { items},
    propertyDescription: description
  };

  const location = {
    latitude,
    longitude

  }


  


  return (
    <PropertyPage
      topSection={topSection}
      middleSection = {middleSection}
      location = {location}
         
    />
  );
}
