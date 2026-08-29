import type { Metadata } from 'next';

import { ResumeHeader } from '@/components/ResumeHeader';
import { ResumeSection } from '@/components/ResumeSection';
import { ResumeSkills } from '@/components/ResumeSkills';
import { ResumeExperience } from '@/components/ResumeExperience';
import {
  CERTIFICATION_ENTRY,
  EDUCATION_ENTRY,
  RESUME_CONTACTS,
  RESUME_EXPERIENCE,
  RESUME_LANGUAGES,
  RESUME_NAME,
  RESUME_PDF_FILENAME,
  RESUME_PDF_HREF,
  RESUME_ROLE,
  RESUME_SUMMARY,
  SKILL_GROUPS,
  type ResumeCredentialEntry,
} from '@/constants/resume';
import { SITE_NAME } from '@/constants/siteConfig';

const PAGE_DESCRIPTION =
  'Resume of Mohammad Omar — frontend engineer specializing in React and TypeScript architecture for complex, data-intensive products.';

export const metadata: Metadata = {
  title: 'Resume',
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    type: 'website',
    url: '/resume',
    title: `Resume | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Resume | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

const SELECTED_PROJECTS = RESUME_EXPERIENCE.filter(
  (entry) => entry.category === 'selected',
);
const PROFESSIONAL_EXPERIENCE = RESUME_EXPERIENCE.filter(
  (entry) => entry.category === 'experience',
);
const ADDITIONAL_PROJECTS = RESUME_EXPERIENCE.filter(
  (entry) => entry.category === 'additional',
);

export default function ResumePage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20 pt-28 sm:py-24 sm:pt-32 md:px-6">
      <ResumeHeader
        name={RESUME_NAME}
        role={RESUME_ROLE}
        contacts={RESUME_CONTACTS}
        pdfHref={RESUME_PDF_HREF}
        pdfFilename={RESUME_PDF_FILENAME}
      />

      <ResumeSection heading="Summary">
        <p className="text-foreground-soft text-sm leading-6 sm:leading-relaxed">
          {RESUME_SUMMARY}
        </p>
      </ResumeSection>

      <ResumeSection heading="Technical skills">
        <ResumeSkills groups={SKILL_GROUPS} />
      </ResumeSection>

      <ResumeSection heading="Selected engineering projects">
        <ResumeExperience entries={SELECTED_PROJECTS} />
      </ResumeSection>

      <ResumeSection heading="Professional experience">
        <ResumeExperience entries={PROFESSIONAL_EXPERIENCE} />
      </ResumeSection>

      <ResumeSection heading="Additional projects">
        <ResumeExperience entries={ADDITIONAL_PROJECTS} />
      </ResumeSection>

      <ResumeSection heading="Education">
        <CredentialLine entry={EDUCATION_ENTRY} />
      </ResumeSection>

      <ResumeSection heading="Training & certification">
        <CredentialLine entry={CERTIFICATION_ENTRY} />
      </ResumeSection>

      <ResumeSection heading="Languages" className="pb-4">
        <p className="text-foreground-soft text-sm">{RESUME_LANGUAGES}</p>
      </ResumeSection>
    </article>
  );
}

function CredentialLine({ entry }: { entry: ResumeCredentialEntry }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <div>
        <h3 className="text-foreground text-sm font-bold">
          {entry.title}
          {entry.accent ? (
            <span className="text-primary-hover font-normal">
              {' '}
              | {entry.accent}
            </span>
          ) : null}
        </h3>

        <p className="text-foreground-soft mt-0.5 text-xs italic">
          {entry.subtitle}
        </p>
      </div>

      {entry.meta ? (
        <span className="text-muted-foreground text-xs">{entry.meta}</span>
      ) : null}
    </div>
  );
}
