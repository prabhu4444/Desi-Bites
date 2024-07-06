"use client"
import { useEffect, useState } from 'react';
import UserTabs from "@/components/layout/UserTabs";

export default function FavoriteList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('/api/favourite'); 
        if (!response.ok) {
          throw new Error('Failed to fetch favorites');
        }
        const data = await response.json(); 
        console.log(data);
        setFavorites(data.favorites);
      } catch (error) {
        console.error('Error fetching favorites:', error);
        
      }
    };

    fetchFavorites();
  }, []);

  return (
    <section className="mt-8 mx-auto max-w-2xl">
      <UserTabs isAdmin={true} />
      <br/>
      <h2>Your Favorite Items</h2>
      <br/>
      <br/>
      {favorites.length === 0 ? (
        <p>Loading your favorite Item.</p>
      ) : (
        <ul>
          {favorites.map((favItem) => (
            <li key={favItem._id}>
              
              <p>Favorite Item Name: {favItem.menuItem.name}</p>
              <p>Favorite Item Description: {favItem.menuItem.description}</p>
              
              <br/>
              
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
