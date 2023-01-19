import React, { useRef, useState } from "react";

import Job from "../Job/Job";
import LoaderSpinner from "../../components/Loader/LoaderSpinner";

import { useSearch } from "../../hooks/useSearch";
import { APIResponse, JobInterface } from "../../models/model";

import JobCard from "../Job/JobCard";

import "./GridCardsJobs.css";

export default function ListJobsCards() {
  const datas = useSearch<APIResponse>("datas/datas.json");
  const results = datas ? datas.results : null;

  const [job, setJob] = useState<JobInterface | null>(null);

  const jobSelect = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  const handleJob = (job: JobInterface, e?: React.MouseEvent) => {
    setJob(job);

    if (jobSelect.current && wrapper.current) {
      jobSelect.current.classList.add("active");
      wrapper.current.classList.add("active");
    }

    console.log(e?.target);
  };

  const close = (selector: string) => {
    const select = document.querySelector(selector);

    if (select) {
      if (
        select.classList.contains("active") &&
        jobSelect.current &&
        wrapper.current
      ) {
        select.classList.remove("active");
        jobSelect.current.classList.remove("active");
        wrapper.current.classList.remove("active");
      }
    }
  };

  return (
    <div className="wrapper-jobs" ref={wrapper}>
      {!results ? (
        <div className="no-jobs">Aucun poste trouvé</div>
      ) : (
        <>
          <div className="jobs">
            {results.map((job) => (
              <JobCard key={job.id} infos={job} onClick={handleJob} />
            ))}
          </div>

          <div className="job-select shadow" ref={jobSelect}>
            <div
              role="button"
              className="close"
              onClick={() => {
                close(".job-select.active");
                document
                  .querySelector(".wrapper-jobs")
                  ?.classList.remove("active");
              }}
            >
              X
            </div>
            <Job job={job} />
          </div>
        </>
      )}
    </div>
  );
}
