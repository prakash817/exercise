import { policy } from "@/lib/db/seed/helpers";
import { POLICY_STYLES } from "@/lib/db/seed/policy-styles";
export const seedPolicies = [
    policy({
        id: "term-insurance-v3",
        styles: POLICY_STYLES.warmAmber,
        name: "Term Life Insurance",
        tagline: "A Promise Your Family Can Cash",
        heroTitle: "The Love Letter You'll Never Write — But They'll Always Have",
        heroSubtitle: "Your presence is irreplaceable. But your income isn't. ₹1 Crore term cover from just ₹490/month ensures your family's dreams survive even if you can't be there.",
        monthlyPremium: "₹490",
        coverAmount: "₹1 Cr",
        claimSettlementRate: "98.7%",
        ctaText: "Write My Promise",
        formTitle: "Write Your Promise",
        formSubtitle: "₹1 Crore cover from ₹490/mo • Free quote",
        ageRanges: [
            { label: "21–25", value: "21-25" },
            { label: "26–30", value: "26-30" },
            { label: "31–35", value: "31-35" },
            { label: "36–40", value: "36-40" },
            { label: "41–50", value: "41-50" },
        ],
        coverageOptions: [
            { label: "₹50 Lakhs", value: "50L" },
            { label: "₹75 Lakhs", value: "75L" },
            { label: "₹1 Crore", value: "1Cr" },
            { label: "₹2 Crore", value: "2Cr" },
            { label: "Not Sure", value: "not-sure" },
        ],
        submitButtonText: "Secure My Family's Future — Free",
        trustBadge: "IRDAI compliant • 100% secure",
        risksTitle: "What Your Family Loses If You're Not There Tomorrow",
        risks: [
            {
                amount: "₹40L+",
                title: "Home EMI",
                description: "Bank doesn't wait. House gets auctioned.",
            },
            {
                amount: "₹25L+",
                title: "Kids' Education",
                description: "Dreams of IIT/MBBS — gone overnight.",
            },
            {
                amount: "₹50K+",
                title: "Monthly Expenses",
                description: "Groceries, bills, school fees — who pays?",
            },
            {
                amount: "₹3Cr+",
                title: "Retirement Dream",
                description: "Spouse works till 70? Or lives on charity?",
            },
        ],
        benefitsTitle: "One Payment. Complete Protection.",
        benefitsSubtitle: "Your Promise Includes",
        benefits: [
            {
                title: "₹1 Crore Death Benefit",
                description: "Tax-free lump sum to your family. Clears loans, funds education, replaces income for 10+ years",
            },
            {
                title: "Critical Illness Rider",
                description: "₹25-50L payout on diagnosis of cancer, heart attack, stroke — while you're alive to use it",
            },
            {
                title: "Accidental Death Benefit",
                description: "Double cover in case of accidental death. ₹2 Crore payout for the price of ₹1 Crore cover",
            },
            {
                title: "Premium Lock-in",
                description: "Your ₹490/month never increases. Lock today's premium for 30+ years — inflation-proof protection",
            },
            {
                title: "Paperless Claims",
                description: "Digital documentation. 3-day claim settlement for 87% of claims. No running to offices",
            },
            {
                title: "Return of Premium Option",
                description: "Get all premiums back if you survive the term. It's like free insurance — you literally can't lose",
            },
        ],
        advisorSectionTitle: "Why You Need a Human, Not a Website",
        advisorFeatures: [
            {
                title: "Cover Calculator",
                description: "Not ₹50L, not ₹2Cr — we calculate the exact cover based on your loans, income, dependents, and goals.",
            },
            {
                title: "Claim Ratio Analysis",
                description: "LIC pays 98.7%. Max Life pays 99.3%. We steer you away from insurers with low claim ratios.",
            },
            {
                title: "Rider Strategy",
                description: "Critical illness, waiver of premium, accidental death — which riders are worth the extra ₹50/month?",
            },
            {
                title: "Claim Time Handholding",
                description: "When the worst happens, your family won't fight the insurer alone. We handle every document and follow-up.",
            },
        ],
        testimonialsTitle: "Promises That Were Kept",
        testimonials: [
            {
                badge: "₹1 Cr Claim Settled",
                quote: "Lost my husband at 38. His ₹1 Cr term policy was settled in 8 days. We kept our home.",
                name: "Sunita Verma",
                location: "Lucknow",
            },
            {
                badge: "₹75L + Critical Illness",
                quote: "The critical illness rider paid ₹25L while I was alive. My family still has the ₹75L death benefit.",
                name: "Rajiv Menon",
                location: "Kochi",
            },
            {
                badge: "₹50L Claim in 5 Days",
                quote: "After my husband's accident, that ₹50L claim saved us from selling our house.",
                name: "Neha Gupta",
                location: "Jaipur",
            },
        ],
        faqTitle: "Term Insurance Questions",
        faqs: [
            {
                question: "How much term cover do I need?",
                answer: "A good rule of thumb is 10–15x your annual income, plus outstanding loans and future goals.",
            },
            {
                question: "Term insurance returns nothing if I survive. Isn't that a waste?",
                answer: "Term insurance is pure protection — like a seatbelt. Your family gets a tax-free lump sum if something happens.",
            },
            {
                question: "I'm healthy. Why do I need this now?",
                answer: "Premiums increase with age. Buying early locks in the lowest rate for 30+ years.",
            },
            {
                question: "What if the company doesn't pay the claim?",
                answer: "We only recommend insurers with 97%+ claim settlement ratios and handle the entire claim process.",
            },
            {
                question: "Should I buy term insurance or whole life?",
                answer: "For most families, term insurance offers 10x more cover at a fraction of the cost.",
            },
        ],
        footerText: "IRDAI Certified Advisors",
        stickyCtaText: "Secure My Family Free",
    }),
    policy({
        id: "term-insurance",
        styles: POLICY_STYLES.warmAmber,
        name: "Term Insurance",
        tagline: "IRDAI Licensed • 98% Claim Settlement",
        heroTitle: "Your Family Deserves ₹1 Crore Protection For Just ₹500/Month",
        heroSubtitle: "Don't leave your family's future to chance. Get pure life cover with the highest claim settlement ratio — starting today.",
        monthlyPremium: "₹500",
        coverAmount: "₹1 Cr",
        claimSettlementRate: "98%",
        ctaText: "Get My ₹1 Crore Term Plan Quote",
        formTitle: "Get ₹1 Crore Cover @ ₹500/mo",
        formSubtitle: "Compare plans in 60 seconds",
        ageRanges: [
            { label: "No, I don't smoke", value: "no" },
            { label: "Yes, occasionally", value: "yes" },
        ],
        coverageOptions: [
            { label: "Level Cover", value: "level" },
            { label: "Increasing Cover", value: "increasing" },
            { label: "Return of Premium", value: "rop" },
            { label: "Joint Life Cover", value: "joint" },
            { label: "Whole Life Plan", value: "whole-life" },
        ],
        submitButtonText: "Get My Free Term Plan Quote",
        risksTitle: "What Happens to Your Family If Something Happens to You?",
        risks: [
            {
                amount: "₹80L",
                title: "Underinsured Gap",
                description: "The average Indian is underinsured by ₹80 lakhs. Only 3% have adequate cover.",
            },
            {
                amount: "₹20-50L",
                title: "Children's Dreams at Risk",
                description: "Education costs ₹20-50 lakhs. Who funds it if you're gone?",
            },
            {
                amount: "6 months",
                title: "Savings Drain Fast",
                description: "Most families exhaust savings within 6 months of losing the breadwinner.",
            },
            {
                amount: "1.5L+",
                title: "Accidents Don't Send Notice",
                description: "Over 1.5 lakh road deaths in India every year. Are you covered?",
            },
        ],
        benefitsTitle: "The Smartest Financial Move for Your Family",
        benefitsSubtitle: "Why Term Insurance",
        benefits: [
            {
                title: "Highest Coverage, Lowest Cost",
                description: "₹1 Crore cover for as low as ₹500/month — pure protection, no frills",
            },
            {
                title: "Family's Financial Safety Net",
                description: "Lump-sum payout ensures your family maintains their lifestyle",
            },
            {
                title: "Tax Savings Under 80C",
                description: "Save up to ₹46,800 in taxes every year on your premiums",
            },
            {
                title: "Secure Children's Future",
                description: "Education, marriage, dreams — all funded even in your absence",
            },
            {
                title: "Loan Cover Included",
                description: "Outstanding home/car loans get paid off — no burden on family",
            },
            {
                title: "Critical Illness Add-on",
                description: "Optional rider pays lump-sum on diagnosis of 34+ critical illnesses",
            },
        ],
        advisorSectionTitle: "Why Buy Term Insurance Through Us?",
        advisorFeatures: [
            {
                title: "Unbiased Plan Comparison",
                description: "We compare plans from HDFC Life, ICICI Pru, Max Life, Tata AIA & 12 more.",
            },
            {
                title: "98%+ Claim Settlement Focus",
                description: "We only recommend insurers with 97%+ claim settlement ratio.",
            },
            {
                title: "End-to-End Documentation",
                description: "From medical tests to policy issuance — we handle everything.",
            },
            {
                title: "Zero Extra Cost",
                description: "Same premium as direct purchase. Our commission comes from the insurer.",
            },
        ],
        testimonialsTitle: "Families Who Made the Right Choice",
        testimonials: [
            {
                badge: "₹1.5 Cr @ ₹780/mo",
                quote: "The advisor compared 6 plans and saved me ₹3,200/year vs what I was about to buy online.",
                name: "Vikram Singh",
                location: "Jaipur",
            },
            {
                badge: "Claim in 12 Days",
                quote: "After my husband's sudden passing, the claim was settled in 12 days. The advisor helped with every document.",
                name: "Deepa Nair",
                location: "Chennai",
            },
            {
                badge: "₹1 Cr for ₹14K/yr",
                quote: "Was paying ₹18K/year for just ₹50L cover. Switched to ₹1 Cr cover for ₹14K/year.",
                name: "Amit Bhatt",
                location: "Ahmedabad",
            },
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                question: "How much term insurance cover do I need?",
                answer: "Typically 10-15x annual income plus loans and future goals. Your advisor calculates the exact amount.",
            },
            {
                question: "What's the difference between term and life insurance?",
                answer: "Term is pure protection at lowest cost. Life insurance adds savings but much lower cover for same premium.",
            },
            {
                question: "Do I need a medical test to buy term insurance?",
                answer: "Depends on age, cover amount and health. Many policies offer tele-medical for younger applicants.",
            },
            {
                question: "What happens if I don't die during the policy term?",
                answer: "Standard term pays nothing on survival. Return of Premium plans refund all premiums at maturity.",
            },
            {
                question: "Is the claim process difficult for my family?",
                answer: "With the right insurer and advisor support, most claims settle within 15-30 days.",
            },
        ],
        footerText: "IRDAI Licensed • All rights reserved",
        stickyCtaText: "Get ₹1 Cr Term Plan @ ₹500/mo",
    }),
    policy({
        id: "term-insurance-v7",
        styles: POLICY_STYLES.emeraldGuard,
        name: "Term Insurance V7",
        tagline: "Built for families. Trusted by advisors.",
        heroTitle: "If you're not there tomorrow, who pays the EMIs?",
        heroSubtitle: "Who picks up your kids from school? ₹1 Crore term cover for less than your monthly OTT subscriptions. Because love isn't enough — your family needs a plan.",
        monthlyPremium: "₹500",
        coverAmount: "₹2 Cr",
        claimSettlementRate: "98.7%",
        ctaText: "Protect My Family Now",
        formTitle: "Get up to ₹2 Crore Term Cover",
        formSubtitle: "Premiums from ~₹500/month • Free unbiased advice",
        ageRanges: [
            { label: "21–25 yrs", value: "21-25" },
            { label: "26–30 yrs", value: "26-30" },
            { label: "31–35 yrs", value: "31-35" },
            { label: "36–40 yrs", value: "36-40" },
            { label: "41–45 yrs", value: "41-45" },
            { label: "46+ yrs", value: "46+" },
        ],
        coverageOptions: [
            { label: "Below ₹5L", value: "below-5L" },
            { label: "₹5–10L", value: "5-10L" },
            { label: "₹10–20L", value: "10-20L" },
            { label: "₹20–50L", value: "20-50L" },
            { label: "₹50L+", value: "50L+" },
        ],
        submitButtonText: "Secure My Family's Future",
        risksTitle: "Imagine the Day You're Not There",
        risks: [
            {
                amount: "EMI",
                title: "The home loan that becomes a burden",
                description: "Your spouse inherits the EMI but not the income. Term cover pays it off.",
            },
            {
                amount: "₹20L+",
                title: "School fees they can't afford",
                description: "Your kids' education shouldn't pause because life paused for you.",
            },
            {
                amount: "Dignity",
                title: "The dignity of independence",
                description: "Your parents and partner shouldn't have to ask anyone for help.",
            },
        ],
        benefitsTitle: "Our Promise to Your Family",
        benefitsSubtitle: "Protection that holds you",
        benefits: [
            {
                title: "₹50L–₹2Cr Lump Sum",
                description: "A single tax-free payout that replaces your income for years.",
            },
            {
                title: "Cover for 30–40 years",
                description: "Lock today's low premium until you're 60, 65 or 70.",
            },
            {
                title: "Tax saving up to ₹46,800",
                description: "Section 80C deduction every year you pay the premium.",
            },
            {
                title: "Optional rider protection",
                description: "Add critical illness, disability or accidental cover for the same family.",
            },
        ],
        advisorSectionTitle: "Without a Plan vs With CoverEase",
        advisorFeatures: [
            {
                title: "Premium at age 30 for ₹1Cr",
                description: "Wait & pay double later vs ₹500–700/month locked today.",
            },
            {
                title: "Home loan if you're gone",
                description: "Spouse inherits EMI vs loan paid off, home stays.",
            },
            {
                title: "Children's education",
                description: "Compromise / loans vs fully funded.",
            },
            {
                title: "Family confidence",
                description: "Constant worry vs genuine peace of mind.",
            },
        ],
        testimonialsTitle: "Real Families. Real Peace of Mind.",
        testimonials: [
            {
                badge: "₹1Cr @ ₹780",
                quote: "I was paying ₹2,000/month for ₹50L cover. Advisor switched me to ₹1Cr at ₹780. Same insurer.",
                name: "Vikram Joshi",
                location: "Hyderabad",
            },
            {
                badge: "₹75L in 21 days",
                quote: "After my husband's accident, the ₹75L claim came through in 21 days. My kids' school year never paused.",
                name: "Neha Sharma",
                location: "Delhi",
            },
            {
                badge: "Home + Cover",
                quote: "We bought our home and our term plan in the same month. Both EMIs are protection.",
                name: "Arjun & Kavita Rao",
                location: "Chennai",
            },
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                question: "How much term cover do I need?",
                answer: "10-15x annual income plus outstanding loans. Your advisor calculates based on your full financial picture.",
            },
            {
                question: "Why is term cover so cheap?",
                answer: "It's pure protection with no savings component — you only pay for the risk coverage period.",
            },
            {
                question: "Do I get any money back if I survive?",
                answer: "Standard term pays nothing. Return of Premium plans refund premiums at maturity for higher cost.",
            },
            {
                question: "What about pre-existing conditions?",
                answer: "Must be disclosed honestly. Some conditions may increase premium or require exclusions.",
            },
            {
                question: "Can I trust an online advisor?",
                answer: "IRDAI-licensed advisors follow strict regulations. We compare 25+ insurers with zero extra cost to you.",
            },
        ],
        footerText: "IRDAI-Compliant Insurance Advisors",
        stickyCtaText: "Get My Term Cover Now",
    }),
    policy({
        id: "life-insurance-v4",
        styles: POLICY_STYLES.roseFamily,
        name: "Life Insurance V4",
        tagline: "Life Insurance — Protection + Returns",
        heroTitle: "FD में पैसा सड़ रहा है? Smart Investment शुरू करो!",
        heroSubtitle: "Life Insurance = Guaranteed Returns + Life Cover + Tax Savings। FD से better, risk-free growth।",
        monthlyPremium: "₹2,000",
        coverAmount: "₹25-50L",
        claimSettlementRate: "6-8%",
        ctaText: "अभी Free Consultation Book करें",
        formTitle: "Life Insurance + Guaranteed Returns",
        formSubtitle: "Protection + Savings • 100% Free Consultation",
        ageRanges: [
            { label: "21–25 yrs", value: "21-25" },
            { label: "26–30 yrs", value: "26-30" },
            { label: "31–35 yrs", value: "31-35" },
            { label: "36–45 yrs", value: "36-45" },
            { label: "46+ yrs", value: "46+" },
        ],
        coverageOptions: [
            { label: "Wealth Creation", value: "wealth" },
            { label: "Child's Future", value: "child" },
            { label: "Retirement", value: "retirement" },
            { label: "Tax Saving", value: "tax" },
        ],
        submitButtonText: "हां! Best Life Plan दिखाओ",
        risksTitle: "ये गलतियाँ बहुत महंगी पड़ती हैं",
        risks: [
            {
                amount: "5-6%",
                title: "FD में return कम",
                description: "Inflation 7% है — FD में पैसा रखने से purchasing power कम हो रही है।",
            },
            {
                amount: "₹0",
                title: "Protection + savings दोनों चाहिए",
                description: "Term plan में savings नहीं, FD में protection नहीं। Life insurance दोनों देता है।",
            },
            {
                amount: "3-4x",
                title: "जल्दी शुरू करो",
                description: "25 में शुरू करो तो maturity पर 3-4x मिलता है। 40 में शुरू करने पर काफी कम।",
            },
            {
                amount: "Bias",
                title: "Bank agents की limitation",
                description: "Independent advisor 30+ companies compare करके best plan recommend करता है।",
            },
        ],
        benefitsTitle: "Life Insurance — Smart Choice",
        benefitsSubtitle: "Protection + Returns + Tax Savings",
        benefits: [
            {
                title: "Protection + Guaranteed Returns",
                description: "Life cover + maturity पर guaranteed amount — win-win combination।",
            },
            {
                title: "6-8% Guaranteed Returns",
                description: "FD से better returns with life cover bonus — risk-free growth।",
            },
            {
                title: "Tax-Free Maturity (10(10D))",
                description: "Maturity amount completely tax-free — सारा पैसा आपका।",
            },
            {
                title: "₹1.5L Tax Deduction (80C)",
                description: "Premium payment पर ₹1.5 Lakh तक income tax deduction।",
            },
        ],
        advisorSectionTitle: "Life Insurance vs FD",
        advisorFeatures: [
            {
                title: "Returns",
                description: "FD: 5-6% taxable vs Life Insurance: 6-8% tax-free.",
            },
            {
                title: "Life Cover",
                description: "FD: ₹0 vs Life Insurance: ₹25-50 Lakh.",
            },
            {
                title: "Tax on Returns",
                description: "FD: Full tax vs Life Insurance: Tax-free maturity.",
            },
            {
                title: "Discipline",
                description: "FD: Easy withdraw vs Life Insurance: Forced savings habit.",
            },
        ],
        testimonialsTitle: "Smart Investors",
        testimonials: [
            {
                badge: "8K+ Investors",
                quote: "29 investors ने आज plan शुरू किया। 4.8 rating with 6-8% guaranteed returns.",
                name: "Cover Ease",
                location: "India",
            },
        ],
        faqTitle: "अक्सर पूछे जाने वाले सवाल",
        faqs: [
            {
                question: "Life insurance vs Term insurance — कौन सा better?",
                answer: "Term for pure protection at lowest cost. Life insurance when you want savings + cover together.",
            },
            {
                question: "Life insurance में कितना return मिलता है?",
                answer: "Traditional plans offer 6-8% guaranteed returns plus life cover, tax-free at maturity.",
            },
            {
                question: "क्या LIC best है?",
                answer: "LIC is trusted but not always cheapest. We compare 30+ insurers for your specific needs.",
            },
            {
                question: "Existing policy surrender करनी चाहिए?",
                answer: "Depends on surrender value vs new plan benefits. Never surrender without expert review.",
            },
            {
                question: "कितना premium भरना चाहिए?",
                answer: "Typically 10-15% of annual income for comprehensive protection and savings.",
            },
        ],
        footerText: "Certified Insurance Advisors",
        stickyCtaText: "Smart Plan शुरू करें",
    }),
    policy({
        id: "life-insurance-v5",
        styles: POLICY_STYLES.violetPremium,
        name: "Life Insurance V5",
        tagline: "Life Insurance — Protection + Returns",
        heroTitle: "Your Money Is Losing Value in FDs — Start Investing Smart!",
        heroSubtitle: "Life Insurance = Guaranteed Returns + Life Cover + Tax Savings. Better than FD, risk-free growth.",
        monthlyPremium: "₹2,000",
        coverAmount: "₹25-50L",
        claimSettlementRate: "6-8%",
        ctaText: "Book Free Consultation Now",
        formTitle: "Life Insurance + Guaranteed Returns",
        formSubtitle: "Protection + Savings • 100% Free Consultation",
        ageRanges: [
            { label: "21–25 yrs", value: "21-25" },
            { label: "26–30 yrs", value: "26-30" },
            { label: "31–35 yrs", value: "31-35" },
            { label: "36–45 yrs", value: "36-45" },
            { label: "46+ yrs", value: "46+" },
        ],
        coverageOptions: [
            { label: "Wealth Creation", value: "wealth" },
            { label: "Child's Future", value: "child" },
            { label: "Retirement", value: "retirement" },
            { label: "Tax Saving", value: "tax" },
        ],
        submitButtonText: "Yes! Show Me the Best Plan",
        risksTitle: "These Mistakes Are Very Costly",
        risks: [
            {
                amount: "5-6%",
                title: "FD Gives 5-6% — Inflation Takes 7%",
                description: "Keeping money in FDs means your purchasing power shrinks every year.",
            },
            {
                amount: "₹0",
                title: "Want Both Protection + Savings?",
                description: "Term plans have no savings. FDs have no protection. Life insurance delivers both.",
            },
            {
                amount: "3-4x",
                title: "Start Early = Higher Returns",
                description: "Starting at 25 gives 3-4x maturity value. Starting at 40 gives significantly less.",
            },
            {
                amount: "Bias",
                title: "Bank Agents Only Sell Their Own Products",
                description: "An independent advisor compares 30+ companies for the genuinely best plan.",
            },
        ],
        benefitsTitle: "Life Insurance — A Smart Choice",
        benefitsSubtitle: "Protection + Returns + Tax Savings",
        benefits: [
            {
                title: "Protection + Guaranteed Returns",
                description: "Life cover plus guaranteed maturity amount — a win-win combination.",
            },
            {
                title: "6-8% Guaranteed Returns",
                description: "Better than FD returns with life cover bonus — risk-free growth.",
            },
            {
                title: "Tax-Free Maturity (Section 10(10D))",
                description: "Your maturity amount is completely tax-free — every rupee is yours.",
            },
            {
                title: "₹1.5L Tax Deduction (Section 80C)",
                description: "Get income tax deduction up to ₹1.5 Lakh on your premium payments.",
            },
        ],
        advisorSectionTitle: "Meet Your Life Insurance Expert",
        advisorFeatures: [
            {
                title: "Certified Life Insurance Advisor",
                description: "15+ years experience specializing in term, health, life insurance and retirement planning.",
            },
            {
                title: "30+ Companies Compared",
                description: "Independent comparison across all major insurers — not tied to one company.",
            },
            {
                title: "Life Insurance vs FD",
                description: "FD: 5-6% taxable, no cover. Life Insurance: 6-8% tax-free with ₹25-50L life cover.",
            },
            {
                title: "3 Simple Steps",
                description: "Book consultation → Compare plans → Start smart investment.",
            },
        ],
        testimonialsTitle: "Smart Investors",
        testimonials: [
            {
                badge: "8K+ Investors",
                quote: "29 investors started a plan today. 4.8 rating with guaranteed returns and tax-free maturity.",
                name: "Cover Ease",
                location: "India",
            },
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                question: "Life insurance vs Term insurance — which is better?",
                answer: "Term for maximum protection at lowest cost. Life insurance when you want guaranteed savings plus cover.",
            },
            {
                question: "What returns can I expect from life insurance?",
                answer: "Traditional plans typically offer 6-8% guaranteed returns with tax-free maturity under Section 10(10D).",
            },
            {
                question: "Is LIC the best option?",
                answer: "LIC is trusted but we compare 30+ insurers to find the best value for your specific goals.",
            },
            {
                question: "Should I surrender my existing policy?",
                answer: "Get expert review before surrendering — you may lose accumulated benefits.",
            },
            {
                question: "How much premium should I pay?",
                answer: "Typically 10-15% of annual income, balanced across protection and savings goals.",
            },
        ],
        footerText: "Certified Insurance Advisors",
        stickyCtaText: "Start Your Smart Plan",
    }),
    policy({
        id: "life-insurance-v7",
        styles: POLICY_STYLES.oceanTeal,
        name: "Life Insurance V7",
        tagline: "Built for families. Trusted by advisors.",
        heroTitle: "Build a future that stays with your family long after the paychecks stop.",
        heroSubtitle: "Guaranteed savings + life cover in one plan. Protection for them today, a tax-free lump sum tomorrow.",
        monthlyPremium: "₹2,000",
        coverAmount: "10× Premium",
        claimSettlementRate: "7-8%",
        ctaText: "Protect My Family Now",
        formTitle: "Start saving from ₹2,000/month",
        formSubtitle: "Guaranteed returns • Tax-free maturity • Free advice",
        ageRanges: [
            { label: "21–30 yrs", value: "21-30" },
            { label: "31–40 yrs", value: "31-40" },
            { label: "41–50 yrs", value: "41-50" },
            { label: "51+ yrs", value: "51+" },
        ],
        coverageOptions: [
            { label: "Wealth Creation", value: "wealth" },
            { label: "Child's Future", value: "child" },
            { label: "Retirement", value: "retirement" },
            { label: "Tax Saving", value: "tax" },
        ],
        submitButtonText: "Plan My Family's Future",
        risksTitle: "Imagine the Day You're Not There",
        risks: [
            {
                amount: "Inflation",
                title: "Savings that quietly vanish",
                description: "Inflation eats your fixed deposit interest while you sleep.",
            },
            {
                amount: "₹0",
                title: "No safety net for them",
                description: "If your income stops, what holds the household together?",
            },
            {
                amount: "Someday",
                title: "Dreams pushed to 'someday'",
                description: "A daughter's wedding, a son's MBA — they shouldn't depend on luck.",
            },
        ],
        benefitsTitle: "Our Promise to Your Family",
        benefitsSubtitle: "Protection that holds you",
        benefits: [
            {
                title: "Guaranteed Maturity Amount",
                description: "Know exactly what you'll receive after 10, 15, or 20 years.",
            },
            {
                title: "Built-in Life Cover",
                description: "If anything happens, family receives the full sum assured tax-free.",
            },
            {
                title: "Section 80C + 10(10D) benefits",
                description: "Save tax on premium and on maturity — both ends.",
            },
            {
                title: "Disciplined wealth creation",
                description: "Auto-debit means you save first, spend later.",
            },
        ],
        advisorSectionTitle: "Without a Plan vs With CoverEase",
        advisorFeatures: [
            {
                title: "Returns",
                description: "FD: 6.5% taxable vs 7–8% guaranteed tax-free with life insurance.",
            },
            {
                title: "Life cover bundled",
                description: "No cover with FD vs 10× premium sum assured with life plan.",
            },
            {
                title: "Tax on maturity",
                description: "TDS on FD interest vs fully tax-free under 10(10D).",
            },
            {
                title: "Family security",
                description: "Only what's saved vs full sum assured even if you're gone.",
            },
        ],
        testimonialsTitle: "Real Families. Real Peace of Mind.",
        testimonials: [
            {
                badge: "₹14L Tax-Free",
                quote: "We started ₹5,000/month 15 years ago. Got ₹14L tax-free at maturity for our daughter's wedding.",
                name: "Pradeep & Latha",
                location: "Coimbatore",
            },
            {
                badge: "Savings + Protection",
                quote: "The advisor showed me one plan that does both. My family's future feels solid now.",
                name: "Manish Aggarwal",
                location: "Jaipur",
            },
            {
                badge: "Guaranteed at 60",
                quote: "This plan will pay me a guaranteed lump sum at 60. I sleep better at night.",
                name: "Sneha Pillai",
                location: "Kochi",
            },
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                question: "How is this different from a mutual fund SIP?",
                answer: "Life insurance guarantees maturity amount regardless of market. SIP returns vary with markets.",
            },
            {
                question: "Is the maturity amount really tax-free?",
                answer: "Yes, under Section 10(10D) for policies meeting premium-to-sum-assured ratio requirements.",
            },
            {
                question: "What if I miss a premium?",
                answer: "Grace period applies. Lapsed policies may have reduced benefits — contact advisor immediately.",
            },
            {
                question: "Can I withdraw early?",
                answer: "Surrender value available after minimum period but less than full maturity benefit.",
            },
            {
                question: "Will the returns beat inflation?",
                answer: "Guaranteed plans offer 7-8% — competitive with inflation over long term with added life cover.",
            },
        ],
        footerText: "IRDAI-Compliant Insurance Advisors",
        stickyCtaText: "Start My Family Plan",
    }),
    policy({
        id: "retirement",
        styles: POLICY_STYLES.sunsetGold,
        name: "Retirement Planning",
        tagline: "SEBI Registered • 10K+ Retirement Plans Created",
        heroTitle: "Retire With Dignity, Not Compromise",
        heroSubtitle: "Get a personalized retirement roadmap from certified financial planners. Start building your freedom fund today — no matter your age.",
        monthlyPremium: "₹5,000",
        coverAmount: "₹3-5 Cr",
        claimSettlementRate: "10K+",
        ctaText: "Get My Free Retirement Plan",
        formTitle: "Plan Your Retirement Free",
        formSubtitle: "Takes less than 60 seconds",
        ageRanges: [
            { label: "Below ₹5,000", value: "below-5k" },
            { label: "₹5,000 – ₹15,000", value: "5k-15k" },
            { label: "₹15,000 – ₹50,000", value: "15k-50k" },
            { label: "Above ₹50,000", value: "above-50k" },
        ],
        coverageOptions: [
            { label: "Mutual Fund SIPs", value: "sip" },
            { label: "NPS Planning", value: "nps" },
            { label: "Pension Plans", value: "pension" },
            { label: "PPF & FD Strategy", value: "ppf" },
            { label: "Annuity Plans", value: "annuity" },
        ],
        submitButtonText: "Get My Free Retirement Plan",
        risksTitle: "95% of Indians Are NOT Financially Ready to Retire",
        risks: [
            {
                amount: "7%",
                title: "Inflation Eats 7% Yearly",
                description: "Your savings lose purchasing power every single year without proper investment.",
            },
            {
                amount: "30%",
                title: "EPF & Pension Not Enough",
                description: "Government pension & EPF rarely cover even 30% of your post-retirement needs.",
            },
            {
                amount: "3x",
                title: "Starting Late Costs 3x More",
                description: "Delaying by just 5 years can triple the monthly investment needed.",
            },
            {
                amount: "3-5x",
                title: "Medical Costs After 60",
                description: "Healthcare expenses surge 3-5x after age 60. Are you financially prepared?",
            },
        ],
        benefitsTitle: "Your Complete Retirement Roadmap",
        benefitsSubtitle: "What You Get",
        benefits: [
            {
                title: "Goal-based Planning",
                description: "Custom plan based on your lifestyle, expenses, and retirement age",
            },
            {
                title: "Investment Strategy",
                description: "Optimal mix of equity, debt, NPS, and PPF tailored to your risk profile",
            },
            {
                title: "SIP Recommendations",
                description: "Right mutual fund SIPs to build your retirement corpus systematically",
            },
            {
                title: "NPS & EPF Optimization",
                description: "Maximize your NPS tax benefits and EPF allocation strategy",
            },
            {
                title: "Inflation-proof Plan",
                description: "Strategies that beat inflation and protect your purchasing power",
            },
            {
                title: "Tax-efficient Withdrawals",
                description: "Structured withdrawal plan to minimize tax in retirement years",
            },
        ],
        advisorSectionTitle: "Why Plan Retirement With Us?",
        advisorFeatures: [
            {
                title: "Holistic Planning",
                description: "We look at your complete financial picture — not just one product or scheme.",
            },
            {
                title: "Data-Driven Projections",
                description: "Realistic corpus calculations based on inflation, returns, and your lifestyle.",
            },
            {
                title: "Goal-Aligned Investments",
                description: "Every rupee is invested to move you closer to your specific retirement number.",
            },
            {
                title: "No Hidden Fees",
                description: "Transparent fee structure. We earn from advisory, not commissions.",
            },
        ],
        testimonialsTitle: "People Who Started Early Are Thriving",
        testimonials: [
            {
                badge: "On track ₹3 Cr",
                quote: "Started at 32 with ₹15K SIP. On track for ₹3 Cr by 55. Best financial decision I've made.",
                name: "Anand Krishnan",
                location: "Bangalore",
            },
            {
                badge: "₹60K Tax Saved",
                quote: "Tax-saving NPS + PPF combo saves ₹60K+ annually while building my corpus.",
                name: "Meera Joshi",
                location: "Pune",
            },
            {
                badge: "Retire at 60",
                quote: "At 45, I thought it was too late. Now I'm confident about retiring at 60 with dignity.",
                name: "Rajesh Verma",
                location: "Delhi",
            },
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                question: "How much money do I need to retire comfortably?",
                answer: "Typically 25-30x your annual expenses. A ₹50K/month lifestyle needs ₹1.5-2Cr corpus minimum.",
            },
            {
                question: "Is it too late to start retirement planning at 40?",
                answer: "Never too late — but requires higher monthly investment. Start today to minimize the gap.",
            },
            {
                question: "Should I invest in NPS, PPF, or Mutual Funds?",
                answer: "Best approach combines all three based on age, risk tolerance and tax situation.",
            },
            {
                question: "What's the minimum monthly investment to start?",
                answer: "You can start with as little as ₹5,000/month. Every amount compounds over time.",
            },
            {
                question: "Do you charge any fees for the initial consultation?",
                answer: "Initial consultation is 100% free with no obligation.",
            },
        ],
        footerText: "SEBI Registered • All rights reserved",
        stickyCtaText: "Get Free Retirement Plan",
    }),
    policy({
        id: "retirement-v2",
        styles: POLICY_STYLES.deepIndigo,
        name: "Retirement Planning V2",
        tagline: "SEBI Registered • 8000+ Retirements Planned",
        heroTitle: "Your Salary Stops. Your Expenses Don't. Are You Ready?",
        heroSubtitle: "You'll need ₹3-5 Crores to retire comfortably. Most people have less than ₹20 lakhs saved at 50. Don't be one of them.",
        monthlyPremium: "₹5,000",
        coverAmount: "₹3-5 Cr",
        claimSettlementRate: "8000+",
        ctaText: "Get My Free Retirement Plan",
        formTitle: "Will You Have Enough?",
        formSubtitle: "Free retirement gap analysis in 60 seconds",
        ageRanges: [
            { label: "25–30 yrs", value: "25-30" },
            { label: "31–40 yrs", value: "31-40" },
            { label: "41–50 yrs", value: "41-50" },
            { label: "51+ yrs", value: "51+" },
        ],
        coverageOptions: [
            { label: "Below ₹50,000", value: "below-50k" },
            { label: "₹50,000 – ₹1 Lakh", value: "50k-1L" },
            { label: "₹1 – ₹3 Lakhs", value: "1-3L" },
            { label: "Above ₹3 Lakhs", value: "above-3L" },
        ],
        submitButtonText: "Calculate My Retirement Gap — Free",
        risksTitle: "Why 80% of Indians Retire Into Poverty",
        risks: [
            {
                amount: "0",
                title: "No Pension for Private Sector",
                description: "Unlike government jobs, private employees get no pension. EPF won't last 5 years.",
            },
            {
                amount: "25 yrs",
                title: "Living 25+ Years Post-60",
                description: "Average life expectancy is 85+. That's 25 years of expenses with zero income.",
            },
            {
                amount: "4x",
                title: "₹50K/mo Today = ₹2L/mo at 60",
                description: "At 7% inflation, your monthly expenses quadruple in 20 years.",
            },
            {
                amount: "Burden",
                title: "Don't Burden Your Children",
                description: "Financial independence in retirement is the greatest gift to your children.",
            },
        ],
        benefitsTitle: "What We Build For You",
        benefitsSubtitle: "Your Retirement Roadmap",
        benefits: [
            {
                title: "Retirement Gap Analysis",
                description: "Exact calculation of how much you need vs how much you'll have",
            },
            {
                title: "Monthly SIP Roadmap",
                description: "Precise monthly investment to hit your corpus — start from ₹5,000",
            },
            {
                title: "NPS + PPF + SIP Mix",
                description: "Optimal allocation across NPS, PPF, equity SIP, and debt funds",
            },
            {
                title: "Lifestyle Preservation Plan",
                description: "Maintain travel, hobbies, healthcare — without compromise",
            },
            {
                title: "Medical Emergency Buffer",
                description: "Dedicated health corpus for post-retirement medical expenses",
            },
            {
                title: "Passive Income Strategy",
                description: "Dividend stocks, rental income, SWP — monthly income that replaces salary",
            },
        ],
        advisorSectionTitle: "Why Plan With Us?",
        advisorFeatures: [
            {
                title: "Age-Specific Strategy",
                description: "30-year-old needs aggressive equity. 50-year-old needs safe debt. Right mix for your age.",
            },
            {
                title: "Inflation-Proof Corpus",
                description: "We project 20-30 years ahead with realistic inflation so you never run short.",
            },
            {
                title: "Tax Optimization",
                description: "NPS 80CCD(1B) + 80C can save ₹2L+ in taxes while building retirement wealth.",
            },
            {
                title: "Annual Review & Rebalance",
                description: "Markets change, life changes. We rebalance annually to keep you on track.",
            },
        ],
        testimonialsTitle: "People Who Started Planning",
        testimonials: [
            {
                badge: "₹2.8 Cr Target",
                quote: "At 45, I had only ₹8 lakhs in EPF. With ₹35K/month SIP, I'm now on track.",
                name: "Anil Gupta",
                location: "Noida",
            },
            {
                badge: "₹60K/month at 60",
                quote: "NPS + SIP combo gives me ₹60K/month passive income at 60. I sleep peacefully now.",
                name: "Deepa Nair",
                location: "Kochi",
            },
            {
                badge: "40% More Growth",
                quote: "Moved from FDs to balanced portfolio. Corpus grew 40% more in just 2 years.",
                name: "Ramesh Yadav",
                location: "Jaipur",
            },
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                question: "How much do I need to retire?",
                answer: "25-30x annual expenses. For ₹1L/month lifestyle, target ₹3-3.5Cr minimum.",
            },
            {
                question: "Is EPF/PPF enough for retirement?",
                answer: "Rarely. EPF typically provides only 20-30% of required retirement corpus.",
            },
            {
                question: "Should I invest in NPS?",
                answer: "Yes — extra ₹50K tax benefit under 80CCD(1B) plus market-linked growth.",
            },
            {
                question: "I'm 45. Is it too late to start?",
                answer: "Not too late but requires aggressive saving. Structured catch-up plans available.",
            },
            {
                question: "What about rental income for retirement?",
                answer: "Rental can supplement but shouldn't be sole strategy — diversification is key.",
            },
        ],
        footerText: "Certified Financial Planners",
        stickyCtaText: "Plan My Retirement",
    }),
    policy({
        id: "retirement-v3",
        styles: POLICY_STYLES.sageRetire,
        name: "Retirement Planning V3",
        tagline: "SEBI Registered • 12,000+ Plans Created",
        heroTitle: "You Have Exactly 300 Months To Build ₹5 Crore",
        heroSubtitle: "The clock is ticking. Every month you delay, you need to invest ₹47,000 more to reach the same goal. Start today and you might need just ₹15,000/month.",
        monthlyPremium: "₹15,000",
        coverAmount: "₹5 Cr",
        claimSettlementRate: "12K+",
        ctaText: "Start My Countdown",
        formTitle: "How Many Months Left?",
        formSubtitle: "Free countdown analysis • Zero obligation",
        ageRanges: [
            { label: "25–30", value: "25-30" },
            { label: "31–35", value: "31-35" },
            { label: "36–40", value: "36-40" },
            { label: "41–45", value: "41-45" },
            { label: "46–50", value: "46-50" },
            { label: "51+", value: "51+" },
        ],
        coverageOptions: [
            { label: "At 50 (Early)", value: "50" },
            { label: "At 55", value: "55" },
            { label: "At 58", value: "58" },
            { label: "At 60", value: "60" },
            { label: "At 65+", value: "65+" },
        ],
        submitButtonText: "Start My Countdown — Free",
        risksTitle: "Every Year You Delay Doubles Your Required SIP",
        risks: [
            {
                amount: "₹8,500/mo",
                title: "Start at 25",
                description: "To reach ₹5 Cr — the power of starting early.",
            },
            {
                amount: "₹15,000/mo",
                title: "Start at 30",
                description: "Still manageable with disciplined investing.",
            },
            {
                amount: "₹28,000/mo",
                title: "Start at 35",
                description: "The cost of waiting keeps climbing.",
            },
            {
                amount: "₹62,000/mo",
                title: "Start at 40",
                description: "Every year of delay nearly doubles your required SIP.",
            },
        ],
        benefitsTitle: "A Month-by-Month Roadmap",
        benefitsSubtitle: "Your Countdown Plan",
        benefits: [
            {
                title: "Exact Corpus Number",
                description: "Not vague 'you need crores' — exact number based on city, lifestyle, and inflation",
            },
            {
                title: "SIP Acceleration Plan",
                description: "Start small, grow with salary hikes. SIP increases match career growth",
            },
            {
                title: "NPS + PPF + Equity Mix",
                description: "Perfect 3-bucket strategy balanced for your age",
            },
            {
                title: "Emergency Buffer",
                description: "Separate 2-year buffer so market crashes don't force selling at worst time",
            },
            {
                title: "Lifestyle Cost Lock",
                description: "Lock today's lifestyle — travel, hobbies, grandkids — supported for 30 years",
            },
            {
                title: "Annual Milestone Check",
                description: "Clear yearly targets with course-correction before it's too late",
            },
        ],
        advisorSectionTitle: "Why Plan With a Human, Not an App?",
        advisorFeatures: [
            {
                title: "Apps Give Formulas. We Give Strategy.",
                description: "We build around your home loan, child's abroad dreams, and parents' medical needs.",
            },
            {
                title: "We Factor In the Ugly Truth",
                description: "Medical costs double every 8 years. We stress-test against worst-case scenarios.",
            },
            {
                title: "Tax Savings of ₹1.5-3L/Year",
                description: "NPS 80CCD(1B), PPF under 80C, ELSS — stack tax benefits dramatically.",
            },
            {
                title: "Behavioral Guardrails",
                description: "We stop panic-selling and channel bonuses right. Emotional decisions destroy plans.",
            },
        ],
        testimonialsTitle: "They Started Their Countdown",
        testimonials: [
            {
                badge: "On track ₹6Cr",
                quote: "Started at 32 with ₹18K SIP. Portfolio at ₹22L and growing. 264 months to go.",
                name: "Deepak Sharma",
                location: "Bangalore",
            },
            {
                badge: "Retire at 55",
                quote: "Saving ₹2.1L/year extra in taxes alone through NPS + equity strategy.",
                name: "Kavita Reddy",
                location: "Hyderabad",
            },
            {
                badge: "₹3.2Cr at 50",
                quote: "Late starter at 40. Catch-up plan with ₹65K SIP. Already at ₹3.2Cr at 50.",
                name: "Amit Jain",
                location: "Mumbai",
            },
        ],
        faqTitle: "Retirement Questions",
        faqs: [
            {
                question: "How much money do I actually need to retire?",
                answer: "Depends on lifestyle. We calculate exact corpus based on your city, expenses and inflation.",
            },
            {
                question: "I'm 40+. Is it too late to start?",
                answer: "Never too late — catch-up plans with higher SIP can still build substantial corpus.",
            },
            {
                question: "NPS vs PPF vs Mutual Funds — what's best?",
                answer: "Combination of all three optimized for your age, risk profile and tax situation.",
            },
            {
                question: "What if the market crashes before I retire?",
                answer: "Emergency buffer and age-appropriate asset allocation protect against sequence risk.",
            },
            {
                question: "Will EPF/PF be enough for retirement?",
                answer: "Almost never. EPF covers 20-30% of needs. Active planning fills the gap.",
            },
        ],
        footerText: "SEBI Registered Advisors",
        stickyCtaText: "Start Retirement Countdown",
    }),
    policy({
        id: "retirement-v4",
        styles: POLICY_STYLES.burgundyWine,
        name: "Retirement Planning V4",
        tagline: "Free Retirement Planning Consultation",
        heroTitle: "Retire के बाद बच्चों पर Dependent? ऐसा मत होने दो!",
        heroSubtitle: "₹5,000/month से शुरू करो और ₹1-5 Crore का retirement fund बनाओ। Monthly pension ₹50K-2L।",
        monthlyPremium: "₹5,000",
        coverAmount: "₹1-5 Cr",
        claimSettlementRate: "7K+",
        ctaText: "अभी Free Consultation Book करें",
        formTitle: "Build ₹1-5 Crore Retirement Fund",
        formSubtitle: "Starting ₹5,000/month • 100% Free Consultation",
        ageRanges: [
            { label: "25–30 yrs", value: "25-30" },
            { label: "31–35 yrs", value: "31-35" },
            { label: "36–40 yrs", value: "36-40" },
            { label: "41–45 yrs", value: "41-45" },
            { label: "46–50 yrs", value: "46-50" },
            { label: "50+ yrs", value: "50+" },
        ],
        coverageOptions: [
            { label: "₹50K pension", value: "50k" },
            { label: "₹1L pension", value: "1L" },
            { label: "₹1.5L pension", value: "1.5L" },
            { label: "₹2L pension", value: "2L" },
        ],
        submitButtonText: "हां! Retirement Plan बनाओ",
        risksTitle: "Retirement की सबसे बड़ी Tension — 92% Indians ready नहीं हैं",
        risks: [
            {
                amount: "₹0",
                title: "Retirement के बाद Income ₹0",
                description: "Salary बंद, EMI चालू, medical expenses बढ़ेंगे — बिना plan के कैसे चलेगा?",
            },
            {
                amount: "₹50K-1L",
                title: "Monthly चाहिए Retire के बाद",
                description: "आज के ₹50K = 20 साल बाद ₹2L। इतना corpus कहाँ से आएगा?",
            },
            {
                amount: "₹30-50L",
                title: "EPF/PPF काफी नहीं",
                description: "EPF से ₹30-50L मिलेगा — जो 5-7 साल में ख़त्म। Comfortable retirement के लिए ₹1-5Cr चाहिए।",
            },
            {
                amount: "Independence",
                title: "बच्चों पर Dependent नहीं",
                description: "Self-respect और financial independence के लिए अपना retirement fund ज़रूरी है।",
            },
        ],
        benefitsTitle: "Smart Retirement Plan — Tension Free Life",
        benefitsSubtitle: "What You Get",
        benefits: [
            {
                title: "₹5,000/month से ₹1Cr+ Fund",
                description: "Compounding का जादू — 25 साल में ₹5K/month = ₹1 Crore+ corpus।",
            },
            {
                title: "12-15% Annual Returns (Equity)",
                description: "SIP + NPS + PPF mix से inflation-beating returns।",
            },
            {
                title: "Monthly Pension ₹50K-2L",
                description: "Systematic Withdrawal Plan से regular monthly income retire के बाद।",
            },
            {
                title: "Tax Benefits ₹2L+ per year",
                description: "80C + 80CCD(1B) + NPS benefits — maximum tax savings।",
            },
        ],
        advisorSectionTitle: "Planning vs No Planning",
        advisorFeatures: [
            {
                title: "Retirement Corpus",
                description: "EPF Only (₹30-50L) vs With Plan (₹1-5 Crore).",
            },
            {
                title: "Monthly Pension",
                description: "₹10-15K vs ₹50K-2L with proper planning.",
            },
            { title: "Dependence", description: "On Children vs Fully Independent." },
            {
                title: "Tax Saved",
                description: "Minimal vs ₹2L+/year with optimized strategy.",
            },
        ],
        testimonialsTitle: "Retirement Planning Expert",
        testimonials: [
            {
                badge: "15+ Years",
                quote: "Certified Financial Planner specializing in retirement planning with NPS + MF + Insurance expertise.",
                name: "Subhash Roy",
                location: "Kolkata",
            },
        ],
        faqTitle: "अक्सर पूछे जाने वाले सवाल",
        faqs: [
            {
                question: "Retirement planning कब शुरू करनी चाहिए?",
                answer: "जितनी जल्दी उतना बेहतर। 25-30 की उम्र में शुरू करने से ₹5K/month काफी है।",
            },
            {
                question: "कितना corpus चाहिए comfortable retirement के लिए?",
                answer: "₹1-5 Crore depending on lifestyle. Monthly pension ₹50K-2L target.",
            },
            {
                question: "NPS vs Mutual Fund — कौन better?",
                answer: "दोनों का mix best है — NPS for tax benefit, MF for growth.",
            },
            {
                question: "EPF/PPF पर rely कर सकते हैं?",
                answer: "नहीं — EPF ₹30-50L देता है जो 5-7 साल में खत्म। Active planning जरूरी है।",
            },
            {
                question: "क्या 40-45 में शुरू करना late है?",
                answer: "Late है लेकिन impossible नहीं — aggressive catch-up plan से corpus बन सकता है।",
            },
        ],
        footerText: "Certified Financial Planners",
        stickyCtaText: "Retirement Plan शुरू करें",
    }),
    policy({
        id: "retirement-v7",
        styles: POLICY_STYLES.champagneGold,
        name: "Retirement Planning V7",
        tagline: "Built for families. Trusted by advisors.",
        heroTitle: "Retire with dignity, not dependence on your children.",
        heroSubtitle: "A retirement plan today means you stay the head of the family at 60. Guaranteed monthly income for life, starting at ₹2,000/month savings.",
        monthlyPremium: "₹2,000",
        coverAmount: "Lifetime",
        claimSettlementRate: "8K+",
        ctaText: "Protect My Family Now",
        formTitle: "Get a Lifetime Pension Plan",
        formSubtitle: "Free retirement audit • Customised for your family",
        ageRanges: [
            { label: "25–35 yrs", value: "25-35" },
            { label: "36–45 yrs", value: "36-45" },
            { label: "46–55 yrs", value: "46-55" },
            { label: "56+ yrs", value: "56+" },
        ],
        coverageOptions: [
            { label: "₹2K–5K", value: "2k-5k" },
            { label: "₹5K–10K", value: "5k-10k" },
            { label: "₹10K–25K", value: "10k-25k" },
            { label: "₹25K+", value: "25k+" },
        ],
        submitButtonText: "Plan My Retirement",
        risksTitle: "Imagine the Day You're Not There",
        risks: [
            {
                amount: "60%",
                title: "The day the salary stops",
                description: "60% of urban Indians have no formal retirement savings. Hope isn't a strategy.",
            },
            {
                amount: "Burden",
                title: "Asking your kids for money",
                description: "It's not their burden. It's the result of not planning early enough.",
            },
            {
                amount: "Dreams",
                title: "Postponed dreams",
                description: "The temple trip, the second honeymoon, the small farm — all 'when there's money'.",
            },
        ],
        benefitsTitle: "Our Promise to Your Family",
        benefitsSubtitle: "Protection that holds you",
        benefits: [
            {
                title: "Guaranteed Monthly Pension",
                description: "A fixed amount in your account every month — for life.",
            },
            {
                title: "Power of compounding",
                description: "Start ₹5,000/month at 30 → retire with ₹1.5Cr+ corpus at 60.",
            },
            {
                title: "Tax-efficient withdrawals",
                description: "NPS gives extra ₹50K deduction beyond 80C. We optimise the mix.",
            },
            {
                title: "Spouse pension included",
                description: "Your partner continues to receive income even after you're gone.",
            },
        ],
        advisorSectionTitle: "Without a Plan vs With CoverEase",
        advisorFeatures: [
            {
                title: "Income at 60",
                description: "Whatever's left in FD vs guaranteed pension for life.",
            },
            {
                title: "Tax saving today",
                description: "Limited vs up to ₹2L/year (80C+80CCD).",
            },
            {
                title: "Family security",
                description: "Spouse depends on kids vs joint pension for life.",
            },
            {
                title: "Retirement lifestyle",
                description: "Cut down expenses vs maintain dignity & travel.",
            },
        ],
        testimonialsTitle: "Real Families. Real Peace of Mind.",
        testimonials: [
            {
                badge: "₹52K/month for life",
                quote: "Started at 38 with ₹8,000/month. At 60, I get ₹52,000 every month for life.",
                name: "Anil Kulkarni",
                location: "Pune",
            },
            {
                badge: "Own pension",
                quote: "Advisor included a separate plan for me too. I'll have my own pension. That matters.",
                name: "Lakshmi Iyer",
                location: "Bengaluru",
            },
            {
                badge: "Started at 45",
                quote: "Advisor was honest — said start now or compromise later. Glad I listened.",
                name: "Rajesh Bhatia",
                location: "Lucknow",
            },
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                question: "When should I start planning for retirement?",
                answer: "The day you start earning. Every year of delay increases required monthly investment.",
            },
            {
                question: "How much corpus do I really need?",
                answer: "25-30x annual expenses. We calculate based on your specific lifestyle and city.",
            },
            {
                question: "NPS vs pension plans — which is better?",
                answer: "Combination works best — NPS for tax benefits and growth, pension plans for guaranteed income.",
            },
            {
                question: "What happens to my spouse?",
                answer: "Joint life options ensure spouse continues receiving pension after you.",
            },
            {
                question: "Is this really free advice?",
                answer: "Initial consultation and retirement audit are 100% free with no obligation.",
            },
        ],
        footerText: "IRDAI-Compliant Insurance Advisors",
        stickyCtaText: "Plan My Retirement",
    }),
    policy({
        id: "sip",
        styles: POLICY_STYLES.skyGrowth,
        name: "SIP Investment",
        tagline: "AMFI Registered • Trusted by 25K+ Investors",
        heroTitle: "Build Wealth Systematically With Smart SIP Investments",
        heroSubtitle: "Start with as little as ₹500/month. Get expert guidance to pick the right mutual funds for your goals — retirement, education, or wealth creation.",
        monthlyPremium: "₹500",
        coverAmount: "12-15%",
        claimSettlementRate: "25K+",
        ctaText: "Get Free SIP Advice Now",
        formTitle: "Start Your SIP Journey",
        formSubtitle: "Free expert guidance • Takes 60 seconds",
        ageRanges: [
            { label: "₹500 – ₹2,000", value: "500-2k" },
            { label: "₹2,000 – ₹5,000", value: "2k-5k" },
            { label: "₹5,000 – ₹10,000", value: "5k-10k" },
            { label: "₹10,000 – ₹25,000", value: "10k-25k" },
            { label: "₹25,000+", value: "25k+" },
        ],
        coverageOptions: [
            { label: "Wealth Creation", value: "wealth" },
            { label: "Retirement Fund", value: "retirement" },
            { label: "Child's Education", value: "education" },
            { label: "Home Down Payment", value: "home" },
            { label: "General Savings", value: "savings" },
        ],
        submitButtonText: "Get My Free SIP Plan Now",
        risksTitle: "Why Savings Accounts & FDs Are Losing You Money",
        risks: [
            {
                amount: "4-5%",
                title: "FD Returns Can't Beat Inflation",
                description: "After tax, FDs give 4-5% returns. Inflation is 6-7%. You're losing purchasing power.",
            },
            {
                amount: "12-15%",
                title: "Equity Mutual Funds: 12-15% CAGR",
                description: "Over 10+ years, equity SIPs have consistently delivered 12-15% annual returns.",
            },
            {
                amount: "₹1 Cr",
                title: "₹5K/mo = ₹1 Cr in 20 Years",
                description: "The power of compounding turns small monthly investments into a massive corpus.",
            },
            {
                amount: "₹46,800",
                title: "Tax-Free Returns with ELSS",
                description: "Save up to ₹46,800 in taxes every year with ELSS SIPs under Section 80C.",
            },
        ],
        benefitsTitle: "Why SIP Is the Smartest Way to Invest",
        benefitsSubtitle: "SIP Benefits",
        benefits: [
            {
                title: "Start with ₹500",
                description: "No big lump sum needed. Begin your investment journey with pocket change.",
            },
            {
                title: "Rupee Cost Averaging",
                description: "Buy more units when markets are low, fewer when high — averaging your cost automatically.",
            },
            {
                title: "Power of Compounding",
                description: "Your returns earn returns. ₹10K/mo at 12% becomes ₹1 Cr in 15 years.",
            },
            {
                title: "Goal-Based Planning",
                description: "Align your SIPs to specific goals — retirement, education, home, or travel.",
            },
            {
                title: "SEBI Regulated",
                description: "All mutual funds are regulated by SEBI with strict investor protection norms.",
            },
            {
                title: "Tax Benefits (ELSS)",
                description: "Save up to ₹1.5 lakh under 80C with ELSS funds — with potential 12%+ returns.",
            },
        ],
        advisorSectionTitle: "Choose the Right Fund Category",
        advisorFeatures: [
            {
                title: "Large Cap",
                description: "Stable blue-chip companies for moderate risk and steady returns.",
            },
            {
                title: "Mid Cap",
                description: "Growing companies with higher growth potential and moderate risk.",
            },
            {
                title: "Small Cap",
                description: "High growth potential for aggressive long-term investors.",
            },
            {
                title: "ELSS (Tax)",
                description: "Tax-saving equity funds with 3-year lock-in and 12%+ potential returns.",
            },
        ],
        testimonialsTitle: "Trusted by 25K+ Investors",
        testimonials: [
            {
                badge: "AMFI Registered",
                quote: "Expert guidance to pick the right mutual funds from 40+ AMCs for your specific goals.",
                name: "Cover Ease",
                location: "India",
            },
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                question: "What is SIP and how does it work?",
                answer: "SIP is investing a fixed amount regularly in mutual funds. It averages cost and builds discipline.",
            },
            {
                question: "What is the minimum SIP amount?",
                answer: "Most funds allow SIP starting from ₹500/month. Some ELSS funds start at ₹500.",
            },
            {
                question: "Is SIP safe? Can I lose money?",
                answer: "Equity SIPs fluctuate short-term but historically deliver 12-15% over 10+ years.",
            },
            {
                question: "Can I stop or modify my SIP anytime?",
                answer: "Yes — SIPs are flexible. Pause, modify amount, or redeem anytime (except ELSS lock-in).",
            },
            {
                question: "How are SIP returns taxed?",
                answer: "Equity: LTCG 12.5% above ₹1.25L. Debt: as per your income tax slab.",
            },
        ],
        footerText: "AMFI Registered | SEBI Compliant",
        stickyCtaText: "Start My SIP — Free Expert Advice",
    }),
    policy({
        id: "sip-v4",
        styles: POLICY_STYLES.electricLime,
        name: "SIP Investment V4",
        tagline: "Free SIP Expert Consultation • 25,000+ Investors",
        heroTitle: "FD में पैसा सड़ रहा है? SIP से Crorepati बनो!",
        heroSubtitle: "₹5,000/month SIP = ₹1 Crore in 20 years। Expert guidance से सही fund चुनो — 100% Free consultation।",
        monthlyPremium: "₹500",
        coverAmount: "₹1 Cr",
        claimSettlementRate: "12-15%",
        ctaText: "Free SIP Consultation लो",
        formTitle: "₹500/month se Crorepati बनो!",
        formSubtitle: "SIP शुरू करो • 100% Free Expert Guidance",
        ageRanges: [
            { label: "₹500 – ₹2K", value: "500-2k" },
            { label: "₹2K – ₹5K", value: "2k-5k" },
            { label: "₹5K – ₹10K", value: "5k-10k" },
            { label: "₹10K – ₹25K", value: "10k-25k" },
            { label: "₹25K+", value: "25k+" },
        ],
        coverageOptions: [
            { label: "पैसा बढ़ाना", value: "wealth" },
            { label: "Retirement Fund", value: "retirement" },
            { label: "बच्चों की पढ़ाई", value: "education" },
            { label: "घर/गाड़ी", value: "home" },
            { label: "Tax बचाना", value: "tax" },
        ],
        submitButtonText: "हां! मुझे SIP शुरू करना है",
        risksTitle: "बिना SIP के ये Problems हैं — 95% Indians FD में पैसा रखते हैं",
        risks: [
            {
                amount: "6% vs 7%",
                title: "FD में पैसा सड़ रहा है",
                description: "FD देता है 6%, inflation खाता है 7%। Purchasing power घट रही है।",
            },
            {
                amount: "3.5%",
                title: "Savings Account = नुकसान",
                description: "Savings account में 3.5% interest। Inflation 6-7% है। पैसा actually कम हो रहा है।",
            },
            {
                amount: "₹60L",
                title: "जितनी देर, उतना नुकसान",
                description: "10 साल की देरी = ₹60 लाख का नुकसान! 25 साल में ₹5K SIP = ₹95 लाख।",
            },
            {
                amount: "85%",
                title: "गलत Fund चुनना risky",
                description: "85% investors गलत category में invest करते हैं और average से कम returns पाते हैं।",
            },
        ],
        benefitsTitle: "SIP से क्या मिलेगा",
        benefitsSubtitle: "Smart investing",
        benefits: [
            {
                title: "₹500/month से शुरू करो",
                description: "कोई बड़ी रकम नहीं चाहिए। Pocket money से wealth बनाओ — auto-debit SIP।",
            },
            {
                title: "12-15% Average Returns",
                description: "10+ साल में equity SIP ने consistently 12-15% CAGR दिया है।",
            },
            {
                title: "Tax बचाओ ELSS से",
                description: "Section 80C में ₹1.5 लाख तक deduction। ₹46,800 तक tax savings।",
            },
            {
                title: "Goal-Based Planning",
                description: "Retirement, बच्चों की पढ़ाई, घर — हर goal के लिए सही fund।",
            },
        ],
        advisorSectionTitle: "FD vs SIP Comparison",
        advisorFeatures: [
            {
                title: "Returns (10 yrs)",
                description: "FD: 5-6% vs SIP: 12-15% — nearly double the wealth.",
            },
            {
                title: "₹10K/mo × 20 yrs",
                description: "FD: ₹35 लाख vs SIP: ₹99 लाख — ₹64 lakh difference.",
            },
            {
                title: "Tax Benefit",
                description: "FD: 5yr lock-in vs ELSS: 3yr with 80C deduction.",
            },
            {
                title: "Inflation Beat",
                description: "FD: No vs SIP: Yes — your money actually grows.",
            },
        ],
        testimonialsTitle: "25K+ Investors Trust Us",
        testimonials: [
            {
                badge: "4.9 Rating",
                quote: "127 लोगों ने आज SIP consultation book किया। AMFI Registered expert guidance.",
                name: "Cover Ease",
                location: "India",
            },
        ],
        faqTitle: "अक्सर पूछे जाने वाले सवाल",
        faqs: [
            {
                question: "SIP में minimum कितना invest कर सकते हैं?",
                answer: "₹500/month से शुरू कर सकते हैं। कोई बड़ी रकम की जरूरत नहीं।",
            },
            {
                question: "क्या SIP में पैसा डूब सकता है?",
                answer: "Short-term में fluctuation होता है लेकिन 10+ साल में equity SIP historically positive रहा है।",
            },
            {
                question: "FD और SIP में क्या better है?",
                answer: "Long-term wealth के लिए SIP far better — 12-15% vs 5-6% FD returns.",
            },
            {
                question: "SIP कभी भी बंद कर सकते हैं?",
                answer: "हाँ — pause, modify या redeem anytime (ELSS के 3 year lock-in को छोड़कर)।",
            },
            {
                question: "क्या consultation free है?",
                answer: "100% free — कोई hidden charges नहीं। AMFI registered expert guidance।",
            },
        ],
        footerText: "AMFI Registered | SEBI Compliant",
        stickyCtaText: "SIP शुरू करो — Free Expert Advice",
    }),
];
