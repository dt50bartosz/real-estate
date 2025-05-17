const filterHandlers = {
 location: (val) => ({ town: { $regex: val, $options: 'i' } }),
  rooms: (val) => ({ rooms: Number(val) }),
  bathrooms: (val) => ({ bathrooms: Number(val) }),
  price_min: (val) => ({ price: { $gte: Number(val) } }),
  price_max: (val) => ({ price: { $lte: Number(val) } }),
  condition: (val) => ({ condition: val }),
  type: (val) => ({ type: val }),
  property_id: (val) => ({ _id: val }),
};

export function buildQueryFromSearchParams(searchParams) {
  const filters = Object.fromEntries(searchParams.entries());
  const query = {};

  for (const [key, value] of Object.entries(filters)) {
    if (!value || value === 'undefined') continue;

    const handler = filterHandlers[key];
    if (!handler) continue;

    const part = handler(value);

    // Merge price range properly
    if ((key === 'price_min' || key === 'price_max') && part.price) {
      query.price = { ...query.price, ...part.price };
    } else {
      Object.assign(query, part);
    }
  }

  return query;
}
