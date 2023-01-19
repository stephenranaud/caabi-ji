import React from "react";
import { JobInterface } from "../../models/model";

type JobProps = {
  infos: JobInterface;
  onClick?: (job: JobInterface, e?: React.MouseEvent) => void;
};

import "./JobCard.css";
import Button from "../../components/Buttons/Button";

export default function JobCard({ infos, onClick }: JobProps) {
  return (
    <aside className="card-job shadow">
      <div className="card-job__heading">
        <div className="card-job__picture">
          <img src="/src/assets/react.svg" alt={infos.company.display_name} />
        </div>
        <div>
          <h5 className="card-job__title">{infos.title}</h5>
          <p className="card-job__category">{infos.category.label}</p>
        </div>
      </div>

      <div className="card-job__body">
        <p>{infos.description.slice(0, 155)}</p>

        <div className="card-job__tags">
          <div className="card-job__left">
            <div className="card-job__tag card-job--tag1">
              {infos.contract_time}
            </div>
            <div className="card-job__tag card-job--tag2">
              {infos.location.display_name}
            </div>
          </div>

          <div className="card-job__right">
            <div className="card-job__tag">
              {new Date(infos.created).toLocaleDateString("fr")}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Button
            onClick={(e) => (onClick ? onClick(infos, e) : null)}
            type="button"
            className="btn-primary btn--radius"
          >
            Voir l'offre
          </Button>
        </div>
      </div>
    </aside>
  );
}
