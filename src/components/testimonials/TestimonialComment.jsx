"use client";

import { useLayoutEffect, useRef, useState } from "react";

export default function TestimonialComment({
  comment,
  isExpanded,
  onToggle,
  isActive,
}) {
  const contentRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  useLayoutEffect(() => {
    const node = contentRef.current;
    if (!node || isExpanded) {
      setShowMore(false);
      return undefined;
    }

    const checkOverflow = () => {
      setShowMore(node.scrollHeight > node.clientHeight + 1);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(node);

    return () => observer.disconnect();
  }, [comment, isExpanded, isActive]);

  return (
    <div
      className={`testimonial-card__comment-wrap${isExpanded ? " is-expanded" : ""}`}
    >
      <div
        ref={contentRef}
        className="testimonial-card__comment"
        tabIndex={isExpanded ? 0 : undefined}
      >
        {comment}
      </div>

      {showMore && !isExpanded ? (
        <button
          type="button"
          className="testimonial-card__more"
          onClick={(event) => {
            event.stopPropagation();
            onToggle();
          }}
        >
          ...more
        </button>
      ) : null}

      {isExpanded ? (
        <button
          type="button"
          className="testimonial-card__more"
          onClick={(event) => {
            event.stopPropagation();
            onToggle();
          }}
        >
          less
        </button>
      ) : null}
    </div>
  );
}
