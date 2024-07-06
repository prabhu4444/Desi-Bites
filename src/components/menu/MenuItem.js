export default function MenuItem(menuItem) {
  const {
    image, name, description, basePrice,
    sizes, extraIngredientPrices,
  } = menuItem;
  
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-red-100 hover:shadow-ind hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img src={image} className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">
        {description}
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">Add to cart ${basePrice}</button>
    </div>
  );
}
