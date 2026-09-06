/**
 * SIP future value using monthly compounding (annuity due —
 * investment at the beginning of each month).
 *
 * FV = P × [((1 + r)^n − 1) / r] × (1 + r)
 */
export function calculateSipFutureValue(monthlyInvestment, months, annualRatePercent) {
  const principal = Number(monthlyInvestment) || 0;
  const totalMonths = Number(months) || 0;
  const annualRate = Number(annualRatePercent) || 0;

  if (principal <= 0 || totalMonths <= 0) {
    return 0;
  }

  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    return principal * totalMonths;
  }

  const compoundFactor = Math.pow(1 + monthlyRate, totalMonths);
  return (
    principal * ((compoundFactor - 1) / monthlyRate) * (1 + monthlyRate)
  );
}

export function calculateSipProjection(monthlyInvestment, years, annualRatePercent) {
  const monthsPerYear = 12;
  const totalMonths = years * monthsPerYear;
  const totalInvestment = monthlyInvestment * totalMonths;
  const futureValue = calculateSipFutureValue(
    monthlyInvestment,
    totalMonths,
    annualRatePercent,
  );

  const yearlyValues = Array.from({ length: years }, (_, index) => {
    const year = index + 1;
    return {
      year,
      futureValue: calculateSipFutureValue(
        monthlyInvestment,
        year * monthsPerYear,
        annualRatePercent,
      ),
      totalInvestment: monthlyInvestment * year * monthsPerYear,
    };
  });

  return {
    totalInvestment,
    futureValue,
    yearlyValues,
  };
}

export function formatIndianCurrency(value) {
  return Math.round(Number(value) || 0).toLocaleString("en-IN");
}

export const SIP_YEAR_OPTIONS = Array.from({ length: 34 }, (_, index) => index + 2);
