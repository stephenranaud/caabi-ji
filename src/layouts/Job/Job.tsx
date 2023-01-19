import { JobInterface } from "../../models/model";

import "./Job.css";

type Props = {
  job: JobInterface | null;
};

export default function Job({ job }: Props) {
  return (
    job && (
      <div className="show-job">
        <header aria-label="Header Job" className="show-job__heading">
          <img src="/src/assets/commudev9.png" alt="cover picture company" />
        </header>

        <main aria-label="Main Job" className="show-job__body">
          <div className="show-job__logo-company">
            <img src="/src/assets/react.svg" alt="" />
          </div>

          <h2>{job.title}</h2>

          <p>{job.description}</p>
        </main>
      </div>
    )
  );
}
