import { IBuilding } from "./building.types";

export const getBuildingLabel = (buildingId: IBuilding['id']) => {
  return `Дом ${buildingId}`
}