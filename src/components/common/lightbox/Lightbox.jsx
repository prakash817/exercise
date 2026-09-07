import "./Lightbox.css";

export default function Lightbox({ image, onClose }) {
  if (!image) return null

  return (
    <div
      className="lightbox open"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={(event) => {
        if (event.target.classList.contains('lightbox')) onClose()
      }}
    >
      <button type="button" onClick={onClose} aria-label="Close preview">
        ×
      </button>
      <img src={image.src} alt={image.alt} />
    </div>
  )
}
