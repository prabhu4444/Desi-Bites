import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema({
  userMail: { type: String, required: true },
  favorites: [{
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  }],
}, { timestamps: true });

export const Favorite = mongoose.models.Favorite || mongoose.model('Favorite', FavoriteSchema);
