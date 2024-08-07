'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(categories => {
        setCategories(categories);
        console.log(categories); 
      })
      .catch(error => console.error('Error fetching categories:', error));

    fetch('/api/menu-items')
      .then(res => res.json())
      .then(menuItems => {
        setMenuItems(menuItems);
        console.log(menuItems); 
      })
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <section className="m-8">
      {categories.length > 0 && categories.map(c => (
        <div key={c._id}>
          <div className="text-center">
            <SectionHeaders mainHeader={c.name} />
          </div>
          <div className="grid sm:grid-cols-4 gap-4 mt-6 mb-12">
            {menuItems && menuItems.filter(item => item.category === c._id).map(item => (
              <MenuItem key={item._id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
