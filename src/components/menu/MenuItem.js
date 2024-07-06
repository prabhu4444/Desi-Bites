"use client"
import { useState } from 'react';
import toast from 'react-hot-toast';
import {useProfile} from "@/components/UseProfile";
import UserTabs from "@/components/layout/UserTabs";


export default function MenuItem(menuItem) {
  const {
    image, name, description, basePrice,
    sizes, extraIngredientPrices,
  } = menuItem;
  const {load, data} = useProfile();
  const [isFavorite, setIsFavorite] = useState(false); 

  const addToFavorites = () => {
    const creationPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/favourite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Usermail: data.email,
          menuItemName: name,
        }),
      });
      setIsFavorite(true); 

      if (response.ok)
        resolve();
      else
        reject();
    });

    toast.promise(creationPromise, {
      loading: 'Adding your favourite item',
      success: 'Added to favorites',
      error: 'Failed to add to favorites',
    });
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-ind hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img src={image} className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">
        {description}
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">Add to cart ${basePrice}</button>
      {!isFavorite ? (
        <button className="mt-4 bg-blue-500 text-white rounded-full px-8 py-2" onClick={addToFavorites}>
          Add to Favorite
        </button>
      ) : (
        <button className="mt-4 bg-gray-300 text-gray-600 rounded-full px-8 py-2" disabled>
          Already added to Favorite
        </button>
      )}
    </div>
  );
}
