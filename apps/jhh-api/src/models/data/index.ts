export * as pets from "./pets";

export interface IDAOFactory<DTOType, DAOType> {
  createDAO: (dto: DTOType) => DAOType;
}

export interface IDocumentFactory<DAOType, DocumentType> {
  createDocument: (dao: DAOType) => DocumentType;
}
