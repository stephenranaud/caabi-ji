import { MainHeader } from "../layouts";
import FilterLayout from "../layouts/Filters/FilterLayout";
import ListJobsCards from "../layouts/Lists/ListJobsCards";

import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="wrapper-header">
        <MainHeader />
      </div>

      <div className="home-wrapper container">
        <div className="aside-filter shadow">
          <FilterLayout />
        </div>
        <main className="main-home">
          <ListJobsCards />
        </main>
      </div>
    </>
  );
}
