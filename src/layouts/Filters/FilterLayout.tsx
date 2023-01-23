import { ContractTime } from "../../models/model";
import { formateContractType } from "../../utils/formate";

import "./FilterLayout.css";

type PropsContract = {
  contractType: ContractTime;
};

type PropsItemsCheck = {
  employmentItemsCheck: Array<ContractTime>;
  label: string;
};

function EmployItemCheck({ contractType }: PropsContract) {
  const contractFormated = formateContractType(contractType);

  return (
    <div className="employ-check">
      <input type="checkbox" value={contractType} />{" "}
      <label>{contractFormated}</label>
    </div>
  );
}

function ItemsCheck({ employmentItemsCheck, label }: PropsItemsCheck) {
  return (
    <div className="items-check">
      <h4>{label}</h4>
      <ul role="list">
        {employmentItemsCheck.map((employment, i) => (
          <li role="listitem">
            <EmployItemCheck key={i} contractType={employment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FilterLayout() {
  const contractType = [
    ContractTime["FullTime"],
    ContractTime["Remote"],
    ContractTime["Contract"],
  ];

  return (
    <div className="filter">
      <div className="filter-section">
        <ItemsCheck
          label="Type d'emplois"
          employmentItemsCheck={contractType}
        />
      </div>
      <div className="filter-section">
        <ItemsCheck
          label="Salaire"
          employmentItemsCheck={[ContractTime["FullTime"]]}
        />
      </div>
      <div className="filter-section">
        <ItemsCheck
          label="Niveau"
          employmentItemsCheck={[ContractTime["FullTime"]]}
        />
      </div>
    </div>
  );
}
