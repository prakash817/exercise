import StarRating from "./StarRating";
import TestimonialComment from "./TestimonialComment";
import TestimonialProfile from "./TestimonialProfile";

const DEFAULT_AVATAR = "/avatar.svg";

export default function TestimonialCard({
  item,
  isActive,
  isExpanded,
  onToggleComment,
  cardRef,
}) {
  return (
    <article
      ref={cardRef}
      className={`testimonial-card${isActive ? " is-active" : ""}`}
      aria-hidden={!isActive}
    >
      <div className="testimonial-card__quote" aria-hidden="true">
        "
      </div>
      <StarRating rating={item.rating} />
      <TestimonialComment
        comment={item.comment}
        isExpanded={isExpanded}
        onToggle={onToggleComment}
        isActive={isActive}
      />
      <TestimonialProfile
        name={item.name}
        role={item.role}
        image={DEFAULT_AVATAR}
      />
    </article>
  );
}
