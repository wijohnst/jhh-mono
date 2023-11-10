/**
 * @description - Returns a DTO from a DAO
 */
export interface IDTOFactory<DAOType, DTOType> {
  createDTO: (dao: DAOType) => DTOType;
}
