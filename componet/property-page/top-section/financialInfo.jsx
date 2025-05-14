export default function FinancialInfo({ info }) {
    const { ibi, community, property_condition } = info;
  
    return (
      <div className="gap-4 p-6 rounded-2xl bg-[var(--color-primary)] shadow-md mt-5">
        <p><strong>IBI:</strong> €{ibi} / year</p>
        <p><strong>Community:</strong> {community}</p>
        <p><strong>Property Condition:</strong> {property_condition}</p>
      </div>
    );
  }
  