import { getPlanTitle } from "../helpers/helper";

export default function PlanCard({ plan, onSelect }) {
  const title = getPlanTitle(plan);

  return (
    <article className="plan-card">
      {plan.isMostSold ? (
        <div className="plan-card__badge-row">
          <span className="plan-card__badge" aria-label="Most sold plan">
            <span className="plan-card__badge-icon" aria-hidden="true">
              🔥
            </span>
            Most Sold
          </span>
        </div>
      ) : null}
      <button
        type="button"
        className="plan-card__media"
        onClick={() => onSelect(plan)}
        aria-label={`View details for ${title}`}
      >
        <img src={plan.url} alt={title} loading="lazy" />
      </button>
      <div className="plan-card__body">
        <h3>{plan.plan_name}</h3>
        <button
          type="button"
          className="plan-card__cta"
          onClick={() => onSelect(plan)}
        >
          View Details
        </button>
      </div>
    </article>
  );
}
