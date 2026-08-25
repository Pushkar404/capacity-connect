import { competencyMappings } from "../../data/courses";

import PageHeader from "../../components/PageHeader";

import "../../css/CompetencyMapping.css";

function CompetencyMapping() {
  return (
    <div className="competency-mapping">
      <PageHeader
        title="Competency Mapping"
        description="Map courses to the competencies learners develop."
      />

      <button className="add-competency-button">+ Add Competency</button>

      <div className="competency-list">
        {competencyMappings.map((mapping) => (
          <div className="competency-card" key={mapping.id}>
            <h2>{mapping.course}</h2>

            <h3>Competencies</h3>

            <div className="competency-tags">
              {mapping.competencies.map((competency) => (
                <span key={competency}>{competency}</span>
              ))}
            </div>

            <div className="competency-actions">
              <button>Edit</button>

              <button>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompetencyMapping;
