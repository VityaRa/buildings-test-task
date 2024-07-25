import { IApartment } from "./apartment.types";

export const getApartmentLabel = (apartment: IApartment) => {
  return `Квартира ${apartment.id}`
}