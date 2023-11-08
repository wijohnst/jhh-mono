/**
 * @module - Pet Data Layer Model
 */

import { PetDTO } from "@models/modules/pets";
import { Schema } from "mongoose";

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
type IPetDocument = Omit<PetDAO, "id"> & {
  _id: Schema.Types.ObjectId;
};

/**
 * PetDocumentFactory - Factory for creating PetDocuments
 */
export interface IPetDocumentFactory {
  createPetDocument: (petDAO: PetDAO) => IPetDocument;
}

/**
 * PetDocumentSchema - Pet document schema for MongoDB
 */
export const PetDocumentSchema = new Schema<IPetDocument>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  species: { type: String, required: true },
  iconId: { type: String, required: true, default: "default-pet-icon" },
});

/**
 * PetDAOFactory - Factory for creating PetDAOs
 */
export interface IPetDAOFactory {
  createPetDAO: (petDTO: PetDTO) => PetDAO;
}
