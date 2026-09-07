import { placementCards } from '../../data/content'
import CardGrid from '../../components/common/card/CardGrid'

export default function JobPlacementSection() {
  return (
    <section id="placement">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Career Services</div>
          <h2>Job Placement Assistance</h2>
          <p>
            Suitable opportunities खोजने, career options समझने और selection preparation में
            guidance.
          </p>
        </div>
        <CardGrid items={placementCards} />
        <p style={{ color: '#607083', fontSize: '12px', marginTop: '18px' }}>
          Job placement assistance does not guarantee employment. Selection depends on employer
          requirements, candidate qualifications and selection processes.
        </p>
      </div>
    </section>
  )
}
