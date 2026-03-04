import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact Us",
  description: "Contact CodeWork Technologies to discuss your next software project."
};

export default function ContactPage() {
  return (
    <>
    <section className="section-space">
      <div className="container-base grid gap-8 lg:grid-cols-2">
        <div>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Contact Us"
              title="Let’s Build Something Valuable Together"
              description="Tell us what you are building and we will share a tailored roadmap for execution."
            />
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            <ScrollReveal>
              <article className="card-surface p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">hello@codeworktech.com</p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <article className="card-surface p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">Phone</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">+91 8393042062</p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <article className="card-surface p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">Office</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  MSK Institute, Station Road, Shikohabad, 203141, U.P
                </p>
                <a
                  href="https://maps.app.goo.gl/nKGDEkFrKystEwib9"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-sm font-medium text-blue-700 transition hover:text-blue-800 dark:text-sky-300 dark:hover:text-sky-200"
                >
                  Open in Google Maps
                </a>
              </article>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={100}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </section>

    <section className="mx-20">
      <ScrollReveal delay={200}>
        <article className="card-surface overflow-hidden p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.898758121104!2d78.5816072!3d27.096487999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39744bce0745fc55%3A0xaca626641b821c20!2sMSK%20Institute!5e0!3m2!1sen!2sin!4v1772556071053!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-90 w-full rounded-xl md:h-80"
          />
        </article>
      </ScrollReveal>
    </section>

    </>

  );
}
