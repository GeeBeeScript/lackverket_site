// app/privacy-policy/page.tsx
import CookiePreferencesButton from "../components/consent/CookiePreferencesButton";

/* ------------------------------------------------------------------ */
/* Fill these in before publishing. Anything still in [BRACKETS] is a  */
/* placeholder and will be visible on the page.                        */
/* ------------------------------------------------------------------ */
const COMPANY_NAME = "Lackverket";
const COMPANY_ADDRESS = ["Strandvägen 4, Söderbärke, södra Dalarna", "Sverige"];
const CONTACT_EMAIL = "info@lackverket.se";
const LAST_UPDATED = "07/10/2026";
// The fields your lead form actually collects.
const FORM_FIELDS = "Första namn, Tilltals namn, E-post, ditt meddelande";
// How long you keep form submissions.
const RETENTION_PERIOD = "Ännu ej fastställt";
// Where the site is hosted and where form submissions are stored.
const HOSTING_PROVIDER = "simply.com";

const ACCEPT_LABEL = "Accept";
const REJECT_LABEL = "Reject";

export const metadata = {
  title: "integritetspolicy",
  description:
    "How we collect, use and protect your personal data, and how we use cookies.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
      <div className="mt-3 space-y-4 text-base leading-relaxed text-neutral-700">
        {children}
      </div>
    </section>
  );
}

const linkClass =
  "font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600";
const cellClass = "border-t border-neutral-200 px-3 py-2 align-top";
const headClass = "px-3 py-2 text-left font-semibold text-neutral-900";

export default function PrivacyPolicyPage() {
  return <PrivacyPolicySv />;
}

function PrivacyPolicyEn() {
  return (
    <main lang="en" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Terms and conditions (added) */}
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        Terms and Conditions and Privacy Policy
      </h1>

      <div className="mb-16 mt-10 border-b border-neutral-200 pb-12">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          Terms and Conditions
        </h2>
        <p className="mt-2 text-sm text-neutral-500">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700">
          <p>
            These terms apply to your use of this website, which is operated by{" "}
            {COMPANY_NAME}, {COMPANY_ADDRESS[0]}, {COMPANY_ADDRESS[1]}. By using
            the website you agree to these terms. If you do not agree, please do
            not use the website.
          </p>
        </div>

        <Section title="Information on this website">
          <p>
            The content of this website is provided as general information about
            us and our products and services. We try to keep it accurate and up
            to date, but we do not guarantee that it is complete, correct or
            current. Any descriptions, images, prices and availability shown may
            change without notice.
          </p>
        </Section>

        <Section title="Enquiries">
          <p>
            Sending us an enquiry through the contact form does not create a
            contract between you and us, and it does not oblige either of us to
            buy or supply anything. Any purchase or service is governed by the
            separate agreement we make with you at that time.
          </p>
          <p>
            Please make sure the details you send us are accurate and are your
            own, or that you have permission to share them.
          </p>
        </Section>

        <Section title="Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>use the website in any way that breaks the law;</li>
            <li>
              attempt to gain unauthorised access to the website, its server or
              any connected system;
            </li>
            <li>
              introduce viruses or other harmful code, or disrupt or overload
              the website;
            </li>
            <li>
              send false, misleading or abusive content through the contact
              form;
            </li>
            <li>
              copy or collect content from the website by automated means
              without our written permission.
            </li>
          </ul>
        </Section>

        <Section title="Intellectual property">
          <p>
            All text, images, logos and design on this website belong to{" "}
            {COMPANY_NAME} or its licensors and are protected by copyright and
            trademark law. You may view the website and print pages for your own
            personal, non-commercial use. Any other use requires our prior
            written permission.
          </p>
        </Section>

        <Section title="Links to other websites">
          <p>
            This website may contain links to websites run by others. We do not
            control them and are not responsible for their content or for how
            they handle your data.
          </p>
        </Section>

        <Section title="Availability">
          <p>
            We aim to keep the website available, but we do not promise that it
            will be free from interruptions or errors. We may change, suspend or
            withdraw all or part of it at any time without notice.
          </p>
        </Section>

        <Section title="Liability">
          <p>
            To the extent the law allows, we are not liable for any loss or
            damage arising from your use of, or inability to use, this website,
            or from your reliance on its content. Nothing in these terms limits
            liability that cannot be limited by law, or affects the rights you
            have as a consumer under mandatory law.
          </p>
        </Section>

        <Section title="Personal data">
          <p>
            How we handle your personal data and use cookies is described in the
            Privacy Policy below.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            We may update these terms from time to time. The date above shows
            when they were last revised. The version published on this page
            applies each time you use the website.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms are governed by Swedish law. If you are a consumer, you
            also keep the protection of the mandatory law of the country where
            you live. Disputes are decided by the Swedish courts, unless
            mandatory law gives you the right to bring a case elsewhere.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${CONTACT_EMAIL[0]}`} className={linkClass}>
              {CONTACT_EMAIL[0]}
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  );
}

function PrivacyPolicySv() {
  return (
    <main lang="sv" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Terms and conditions (added) */}
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
        Allmänna villkor och integritetspolicy
      </h1>

      <div className="mb-16 mt-10 border-b border-neutral-200 pb-12">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          Allmänna villkor
        </h2>
        <p className="mt-2 text-sm text-neutral-500">
          Senast uppdaterad: {LAST_UPDATED}
        </p>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700">
          <p>
            Dessa villkor gäller för din användning av den här webbplatsen, som
            drivs av {COMPANY_NAME}, {COMPANY_ADDRESS[0]}, {COMPANY_ADDRESS[1]}.
            Genom att använda webbplatsen godkänner du dessa villkor. Om du inte
            godkänner dem ber vi dig att inte använda webbplatsen.
          </p>
        </div>

        <Section title="Information på webbplatsen">
          <p>
            Innehållet på den här webbplatsen tillhandahålls som allmän
            information om oss och våra produkter och tjänster. Vi försöker
            hålla det korrekt och uppdaterat, men vi garanterar inte att det är
            fullständigt, korrekt eller aktuellt. Beskrivningar, bilder, priser
            och tillgänglighet som visas kan ändras utan föregående meddelande.
          </p>
        </Section>

        <Section title="Förfrågningar">
          <p>
            Att du skickar en förfrågan till oss via kontaktformuläret innebär
            inte att ett avtal ingås mellan dig och oss, och det förpliktar
            ingen av oss att köpa eller leverera något. Varje köp eller tjänst
            regleras av det separata avtal som vi då ingår med dig.
          </p>
          <p>
            Se till att de uppgifter du skickar till oss är korrekta och är dina
            egna, eller att du har tillåtelse att dela dem.
          </p>
        </Section>

        <Section title="Tillåten användning">
          <p>Du förbinder dig att inte:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>använda webbplatsen på något sätt som strider mot lag;</li>
            <li>
              försöka skaffa dig obehörig åtkomst till webbplatsen, dess server
              eller något anslutet system;
            </li>
            <li>
              föra in virus eller annan skadlig kod, eller störa eller
              överbelasta webbplatsen;
            </li>
            <li>
              skicka falskt, vilseledande eller kränkande innehåll via
              kontaktformuläret;
            </li>
            <li>
              kopiera eller samla in innehåll från webbplatsen med
              automatiserade metoder utan vårt skriftliga tillstånd.
            </li>
          </ul>
        </Section>

        <Section title="Immateriella rättigheter">
          <p>
            All text, alla bilder och logotyper samt all design på den här
            webbplatsen tillhör {COMPANY_NAME} eller dess licensgivare och
            skyddas av upphovsrätts- och varumärkeslagstiftning. Du får visa
            webbplatsen och skriva ut sidor för eget personligt,
            icke-kommersiellt bruk. All annan användning kräver vårt skriftliga
            tillstånd i förväg.
          </p>
        </Section>

        <Section title="Länkar till andra webbplatser">
          <p>
            Den här webbplatsen kan innehålla länkar till webbplatser som drivs
            av andra. Vi kontrollerar dem inte och ansvarar inte för deras
            innehåll eller för hur de hanterar dina uppgifter.
          </p>
        </Section>

        <Section title="Tillgänglighet">
          <p>
            Vi strävar efter att hålla webbplatsen tillgänglig, men vi lovar
            inte att den är fri från avbrott eller fel. Vi kan när som helst
            ändra, tillfälligt stänga eller ta bort hela eller delar av den utan
            föregående meddelande.
          </p>
        </Section>

        <Section title="Ansvar">
          <p>
            I den utsträckning lagen tillåter ansvarar vi inte för förlust eller
            skada som uppstår till följd av att du använder, eller inte kan
            använda, den här webbplatsen, eller till följd av att du förlitar
            dig på dess innehåll. Ingenting i dessa villkor begränsar ansvar som
            inte kan begränsas enligt lag, eller påverkar de rättigheter du har
            som konsument enligt tvingande lag.
          </p>
        </Section>

        <Section title="Personuppgifter">
          <p>
            Hur vi hanterar dina personuppgifter och använder cookies beskrivs i
            integritetspolicyn nedan.
          </p>
        </Section>

        <Section title="Ändringar av villkoren">
          <p>
            Vi kan uppdatera dessa villkor då och då. Datumet ovan visar när de
            senast reviderades. Den version som är publicerad på den här sidan
            gäller varje gång du använder webbplatsen.
          </p>
        </Section>

        <Section title="Tillämplig lag">
          <p>
            Dessa villkor regleras av svensk lag. Om du är konsument behåller du
            också det skydd som följer av tvingande lag i det land där du bor.
            Tvister avgörs av svensk domstol, om inte tvingande lag ger dig rätt
            att väcka talan någon annanstans.
          </p>
        </Section>

        <Section title="Kontakt">
          <p>
            Frågor om dessa villkor kan skickas till{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  );
}
