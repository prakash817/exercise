import { FAQ } from "@/components/policy/FAQ";
import { StickyCTA } from "@/components/policy/StickyCTA";
import { AdvisorSection, BenefitsSection, FinalCtaSection, FORM_SECTION_ID, HeroSection, PolicyFooter, PolicyHeader, QuoteFormSection, RisksSection, TestimonialsSection, } from "@/components/policy/component";
import { policyStylesToCssVars, resolvePolicyStyles } from "@/lib/policy-theme";
export function PolicyLanding({ policy, advisor }) {
    const styles = resolvePolicyStyles(policy.styles);
    const themeVars = policyStylesToCssVars(styles);
    const formProps = {
        formId: "quote-form-bottom",
        title: policy.formTitle,
        subtitle: policy.formSubtitle,
        ageRanges: policy.ageRanges,
        coverageOptions: policy.coverageOptions,
        submitButtonText: policy.submitButtonText,
        trustBadge: policy.trustBadge,
        policyId: policy.id,
        policyName: policy.name,
        userId: advisor.id,
    };
    const sectionProps = { policy, advisor, styles };
    return (<div style={themeVars} className="min-h-screen bg-gradient-to-b from-[var(--p-bg-from)] via-[var(--p-bg-via)] to-[var(--p-bg-to)] text-[var(--p-text-secondary)]">
      <PolicyHeader {...sectionProps}/>
      <HeroSection {...sectionProps} formProps={formProps}/>
      <RisksSection policy={policy} styles={styles}/>
      <BenefitsSection policy={policy} styles={styles}/>
      <AdvisorSection {...sectionProps}/>
      <TestimonialsSection policy={policy} styles={styles}/>
      <QuoteFormSection policy={policy} styles={styles} formProps={formProps}/>
      <FAQ title={policy.faqTitle} items={policy.faqs}/>
      <FinalCtaSection policy={policy} styles={styles}/>
      <PolicyFooter {...sectionProps}/>
      <StickyCTA text={policy.stickyCtaText} targetId={FORM_SECTION_ID}/>
    </div>);
}
