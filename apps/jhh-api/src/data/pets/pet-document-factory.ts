import { IDocumentFactory } from "@models/data";
import { PetDocument, PetDAO } from "@models/data/pets";

import mongoose from "mongoose";

export class PetDocumentFactory
  implements IDocumentFactory<PetDAO, PetDocument>
{
  constructor() {}

  createDocument = (dao: PetDAO): PetDocument => ({
    _id: new mongoose.Schema.Types.ObjectId(dao.id),
    name: dao.name,
    species: dao.species,
    iconId: dao.iconId,
  });
}
