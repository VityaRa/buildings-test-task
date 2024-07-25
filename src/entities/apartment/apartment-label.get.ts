import { IApartment } from "./apartment.types";

export const getApartmentLabel = (apartmentId: IApartment['id']) => {
  return `Квартира ${apartmentId}`
}