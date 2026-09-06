import { calculateSipFutureValue } from "./sipCalculator";

export const RISK_PROFILES = {
  conservative: {
    label: "Conservative",
    preRetirementReturn: 9,
    postRetirementReturn: 7,
  },
  moderate: {
    label: "Moderate",
    preRetirementReturn: 11,
    postRetirementReturn: 8,
  },
  aggressive: {
    label: "Aggressive",
    preRetirementReturn: 12,
    postRetirementReturn: 9,
  },
};

export const INCOME_PATTERNS = {
  steady: {
    label: "Steady Income",
    value: "steady",
  },
  growing: {
    label: "Growing Income",
    value: "growing",
  },
};

function calculateRetirementCorpus({
  monthlyNeedsAtRetirement,
  retirementYears,
  inflationPercent,
  postRetirementReturnPercent,
  incomePattern,
}) {
  const annualWithdrawal = monthlyNeedsAtRetirement * 12;
  const inflationRate = inflationPercent / 100;
  const postReturn = postRetirementReturnPercent / 100;
  const years = retirementYears;

  if (annualWithdrawal <= 0 || years <= 0) {
    return 0;
  }

  if (incomePattern === "steady") {
    if (postReturn === 0) {
      return annualWithdrawal * years;
    }

    return (
      (annualWithdrawal * (1 - Math.pow(1 + postReturn, -years))) / postReturn
    );
  }

  if (postReturn === inflationRate) {
    return annualWithdrawal * years;
  }

  return (
    (annualWithdrawal *
      (1 - Math.pow((1 + inflationRate) / (1 + postReturn), years))) /
    (postReturn - inflationRate)
  );
}

export function calculateMonthlySipForGoal(
  futureValue,
  months,
  annualRatePercent,
) {
  const target = Number(futureValue) || 0;
  const totalMonths = Number(months) || 0;
  const annualRate = Number(annualRatePercent) || 0;

  if (target <= 0 || totalMonths <= 0) {
    return 0;
  }

  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    return target / totalMonths;
  }

  const factor =
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
    (1 + monthlyRate);

  return target / factor;
}

export function calculateRetirementPlan(inputs) {
  const presentAge = Number(inputs.presentAge) || 0;
  const retirementAge = Number(inputs.retirementAge) || 0;
  const incomeNeededTill = Number(inputs.incomeNeededTill) || 0;
  const presentMonthlyNeeds = Number(inputs.presentMonthlyNeeds) || 0;
  const inflationPercent = Number(inputs.inflationPercent) || 0;
  const riskAppetite = inputs.riskAppetite || "moderate";
  const retirementRiskAppetite = inputs.retirementRiskAppetite || "moderate";
  const incomePattern = inputs.incomePattern || "growing";

  const yearsToRetirement = Math.max(retirementAge - presentAge, 0);
  const retirementYears = Math.max(incomeNeededTill - retirementAge, 0);
  const savingsMonths = yearsToRetirement * 12;

  const monthlyNeedsAtRetirement =
    presentMonthlyNeeds *
    Math.pow(1 + inflationPercent / 100, yearsToRetirement);

  const preRetirementReturn =
    RISK_PROFILES[riskAppetite]?.preRetirementReturn ??
    RISK_PROFILES.moderate.preRetirementReturn;
  const postRetirementReturn =
    RISK_PROFILES[retirementRiskAppetite]?.postRetirementReturn ??
    RISK_PROFILES.moderate.postRetirementReturn;

  const totalCorpus = calculateRetirementCorpus({
    monthlyNeedsAtRetirement,
    retirementYears,
    inflationPercent,
    postRetirementReturnPercent: postRetirementReturn,
    incomePattern,
  });

  const monthlySipNeeded = calculateMonthlySipForGoal(
    totalCorpus,
    savingsMonths,
    preRetirementReturn,
  );

  const yearlyProjection = Array.from({ length: yearsToRetirement }, (_, index) => {
    const year = index + 1;
    return {
      year,
      age: presentAge + year,
      accumulated: calculateSipFutureValue(
        monthlySipNeeded,
        year * 12,
        preRetirementReturn,
      ),
      targetCorpus: totalCorpus,
    };
  });

  return {
    yearsToRetirement,
    retirementYears,
    savingsMonths,
    monthlyNeedsAtRetirement,
    totalCorpus,
    monthlySipNeeded,
    lumpsumAtRetirement: totalCorpus,
    preRetirementReturn,
    postRetirementReturn,
    yearlyProjection,
  };
}

export function createAgeOptions(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}
