export function getPlanTitle(plan) {
  const detail = plan.image_detail.trim();
  const separators = [" — ", " - ", " – ", ". "];

  for (const separator of separators) {
    const index = detail.indexOf(separator);
    if (index > 3 && index <= 80) {
      return detail.slice(0, index).trim();
    }
  }

  return `LIC Plan ${plan.id}`;
}

export function getPlanSummary(plan, maxLength = 110) {
  const detail = plan.image_detail.trim();
  const title = getPlanTitle(plan);
  let summary = detail;

  if (detail.startsWith(title)) {
    summary = detail
      .slice(title.length)
      .replace(/^[.\s—\-–]+/, "")
      .trim();
  }

  if (summary.length <= maxLength) {
    return summary;
  }

  return `${summary.slice(0, maxLength).trim()}...`;
}
