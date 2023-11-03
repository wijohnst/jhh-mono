import { Schema, Types as MongooseTypes, model } from "mongoose";

enum Species {
  DOG = "DOG",
  CAT = "CAT",
  BIRD = "BIRD",
}

interface IPet {
  _id: MongooseTypes.ObjectId;
  name: string;
  species: Species;
  iconId: string;
}

const petSchema = new Schema<IPet>({
  _id: Schema.Types.ObjectId,
  name: String,
  species: {
    type: String,
    enum: Object.values(Species),
  },
  iconId: {
    type: String,
    default: "default-pet-icon",
  },
});

export const Pet = model<IPet>("Pet", petSchema);
