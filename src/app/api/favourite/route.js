import mongoose from 'mongoose';
import {MenuItem} from "@/models/MenuItem";
import {User} from "@/models/User";
import {Favorite} from "@/models/Favorite";
import NextAuth, {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
    mongoose.connect(process.env.MONGO_URL);
    const {Usermail,menuItemName} = await req.json();
    // console.log(Usermail + menuItemName);
    const menuItem = await MenuItem.findOne({ name: menuItemName });

    let favorite = await Favorite.findOne({ userMail: Usermail });
    console.log(favorite);
    if (!favorite) {
        
        favorite = new Favorite({
          userMail: Usermail,
          favorites: [{ menuItem: menuItem._id }],
        });
      } else {
        
        const isAlreadyFavorite = favorite.favorites.some(fav => fav.menuItem.equals(menuItem._id));
        if (!isAlreadyFavorite) {
         
          favorite.favorites.push({ menuItem: menuItem });
        }
      }
      await favorite.save();
      console.log(favorite);
      //console.log("ffewcwecwecwecwewecewc");

    return Response.json(true);
    
}

export async function GET() {
    mongoose.connect(process.env.MONGO_URL);
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    console.log(userEmail);

    const favorites = await Favorite.find({ userMail: userEmail }).populate('favorites.menuItem');
    // console.log("test");
    // console.log(favorites);
    // console.log("testttttt");
    // console.log(favorites[0]);
    

    return Response.json(favorites[0]);
  }