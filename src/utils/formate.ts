import { ContractTime } from "../models/model";

export const formateDate = (date: string | Date) => {
  const MAX_DAYS_NEW_POSTE = 14;

  if (typeof date === "string") {
    let formated: Date | string | number = new Date(date);
    const passedDays = (new Date().getTime() - formated.getTime()) / 1000;

    formated = passedDays > MAX_DAYS_NEW_POSTE ? formated.getDay() : "Nouveau";

    return formated;
  }
};

export function formateContractType(contract: ContractTime) {
  return contract
    .split("_")
    .map((type) => type[0].toUpperCase() + type.slice(1))
    .join(" ");
}
