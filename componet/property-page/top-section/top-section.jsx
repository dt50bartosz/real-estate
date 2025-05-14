import Gallery from "./galery";
import BasicInformation from "./basic-information";
import BasicInformationMobile from "./basic-infromation-mobile";
import Address from "./address";
import { convertToTowns } from "@/lib/utils";

export default function TopSection({ topSection }) {
  const { topSection: topInfo, basicInformation } = topSection;
  const { title, price,town,postal_code } = topInfo;
  const {photos} = topSection;
  const {financialInfo} = topSection;
  

  return (
    <section className="w-full mb-[10rem]">
      <h1 className="text-4xl text-[var(--color-secondary)]">
        {title}
      </h1>
      <h2 className="mt-3 text-3xl text-[var(--color-accent)]">
        Cena: {price}€
      </h2>
      <div className="mt-[1rem]">
        <Address town={convertToTowns(town)} postCode = {postal_code}/>
      </div>
      <div className="h-[40vh] mt-10 flex md:gap-15 xl:gap-7rem]">
        <Gallery photos={photos} />
        <div>
        <BasicInformation basicInfo={basicInformation} />
        
        </div>

      </div>
      <BasicInformationMobile basicInfo={basicInformation} />
    </section>
  );
}
