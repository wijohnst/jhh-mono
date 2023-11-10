import { PetData } from "jhh-types";

import { IDocumentFactory, PetDocument } from "@models/data/pets";

import mongoose from "mongoose";

export class PetDocumentFactory
  implements IDocumentFactory<PetData.PetDAO, PetDocument>
{
  constructor() {}

  createDocument = (dao: PetData.PetDAO): PetDocument => ({
    _id: new mongoose.Schema.Types.ObjectId(dao.id),
    name: dao.name,
    species: dao.species,
    iconId: dao.iconId,
  });
}
