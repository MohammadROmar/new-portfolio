import { Section } from '@/components/Section';
import { ContactForm } from '@/components/ContactForm';
import { ContactLinks } from '@/components/ContactLinks';

export function Contact() {
  return (
    <Section
      eyebrow="Get in touch"
      id="contact"
      subtitle="Have a project in mind or just want to say hi? Send a message, or reach me directly below."
      title="Let's build something."
    >
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <ContactForm />
        </div>

        <ContactLinks />
      </div>
    </Section>
  );
}
