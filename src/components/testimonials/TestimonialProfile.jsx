export default function TestimonialProfile({ name, role, image }) {
  return (
    <div className="testimonial-card__profile">
      <img src={image} alt={name} loading="lazy" />
      <div>
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
    </div>
  );
}
