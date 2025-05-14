import AdditionalInformation from "./additional-information";
import Description from "./description";

export default function MiddleSection({middleSection}) {

  const {additionalInformation,propertyDescription} = middleSection

  return (
    <section className="mt-[24rem] md:mt-[1rem] block">
      
      <div className="">
        <AdditionalInformation additionalInformation = {additionalInformation} />
        <Description propertyDescription = {propertyDescription}/>
      </div>
    </section>
  );
}
