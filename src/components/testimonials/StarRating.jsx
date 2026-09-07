export default function StarRating({ rating }) {
  return (
    <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`testimonial-stars__star${index < rating ? " is-filled" : ""}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}
