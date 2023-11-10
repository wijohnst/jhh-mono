import { Schema } from "mongoose";
import { PetData } from "jhh-types";

export interface IDAOFactory<DTOType, DAOType> {
  createDAO: (dto: DTOType) => DAOType;
}

export interface IDocumentFactory<DAOType, DocumentType> {
  createDocument: (dao: DAOType) => DocumentType;
}

/**
 * IPetDocument - Pet document interface for MongoDB
 */
export type PetDocument = Omit<PetData.PetDAO, "id"> & {
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
