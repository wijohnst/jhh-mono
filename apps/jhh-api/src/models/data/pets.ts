/**
 * @module - Pet Data Layer Model
 */

import { PetDTO } from "@models/modules/pets";
import { Schema } from "mongoose";
import { IDAOFactory } from ".";

/**
 * PetDAO - Pet Data Access Object
 */
export type PetDAO = {
  id: string;
  name: string;
  species: string;
  iconId: string;
};

/**
 * IPetDocument - Pet document interface for MongoDB
 */
export type PetDocument = Omit<PetDAO, "id"> & {
  _id: Schema.Types.ObjectId;
};

/**
 * PetDocumentSchema - Pet document schema for MongoDB
 */
export const PetDocumentSchema = new Schema<PetDocument>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  species: { type: String, required: true },
  iconId: { type: String, required: true, default: "default-pet-icon" },
});
