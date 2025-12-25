import donor from "./donor.png";
import "../styles/public.css";

export default function Donor() {
  return (
    <div className="public-page">
      <div className="public-card">

        <h1 className="public-heading">
          Biographical Profile
        </h1>

        <h2 className="public-subheading">
          Shri V. C. Nannapaneni
        </h2>

        <p className="designation">
          Founder, Chairman & Managing Director<br />
          <strong>NATCO Pharma Limited</strong>
        </p>

        <div className="donor-header">
          <img
            src={donor}
            alt="Shri V. C. Nannapaneni"
            className="donor-image"
          />

          <div className="donor-summary">
            <p>
              Shri V. C. Nannapaneni is a visionary technocrat, entrepreneur,
              and philanthropist with a lifelong commitment to making
              specialty medicines accessible and affordable.
            </p>

            <p>
              Under his leadership, NATCO Pharma Limited emerged as a
              globally respected pharmaceutical organization with a strong
              focus on oncology and complex therapies.
            </p>
          </div>
        </div>

        {/* ABOUT */}
        <section className="public-section">
          <h3>Background & Vision</h3>

          <p>
            Born on <strong>30 November 1945</strong>, Shri V. C. Nannapaneni
            pursued his academic excellence in Pharmacy at Andhra University,
            followed by advanced studies in Pharmaceutical Administration
            in the United States.
          </p>

          <p>
            Between 1969 and 1981, he worked with leading pharmaceutical
            companies in the USA, gaining invaluable international exposure
            before returning to India to serve the nation.
          </p>

          <p>
            In 1981, he founded <strong>NATCO Fine Pharmaceuticals Pvt. Ltd.</strong>,
            which later evolved into <strong>NATCO Pharma Limited</strong> in 1996.
          </p>
        </section>

        {/* NATCO CONTRIBUTION */}
        <section className="public-section">
          <h3>Contribution to Healthcare & Oncology</h3>

          <ul className="public-list">
            <li>
              First Indian company to introduce sustained-release generic medicines.
            </li>
            <li>
              Pioneer in generic oncology with the launch of Imatinib Mesylate (2003).
            </li>
            <li>
              Recipient of India’s first compulsory license for Sorafenib.
            </li>
            <li>
              Filed over 185 Indian patents and 189 international patents.
            </li>
          </ul>

          <p>
            NATCO facilities are approved by major global regulatory authorities
            including USFDA, WHO, TGA (Australia), PMDA (Japan), and European agencies.
          </p>
        </section>

        {/* CSR */}
        <section className="public-section">
          <h3>Philanthropy & NATCO Trust</h3>

          <p>
            In 1995, Shri V. C. Nannapaneni founded <strong>NATCO Trust</strong>
            as the CSR arm of NATCO Pharma.
          </p>

          <p>
            The Trust focuses on <strong>Education, Nutrition, Health, Sanitation,
            and Livelihood</strong>, with major initiatives across Telangana and
            Andhra Pradesh.
          </p>

          <p>
            The <strong>NATCO Cancer Care Centre, Guntur</strong> stands as a landmark
            contribution, providing advanced cancer treatment completely free
            of cost to underprivileged patients.
          </p>
        </section>

        {/* EDUCATION */}
        <section className="public-section">
          <h3>Educational Qualifications</h3>

          <ul className="public-list">
            <li>M.S. Pharmaceutical Administration – Long Island University, USA (1972)</li>
            <li>M.S. Pharmacy – Andhra University, India (1968)</li>
            <li>B.S. Pharmacy – Andhra University, India (1967)</li>
          </ul>
        </section>

        {/* AWARDS */}
        <section className="public-section">
          <h3>Major Awards & Recognitions</h3>

          <div className="awards-grid">
            <ul>
              <li>National Award to Small Scale Entrepreneur – Govt. of India</li>
              <li>DSIR National Award for R&D</li>
              <li>Golden Peacock CSR Award</li>
              <li>Compulsory License Award – Govt. of India</li>
              <li>National Safety & OHS Awards</li>
              <li>Patent Excellence & Innovation Awards</li>
            </ul>
          </div>

          <p className="awards-note">
            Shri V. C. Nannapaneni has received over <strong>40 national and
            international awards</strong> for excellence in innovation,
            research, safety, and social responsibility.
          </p>
        </section>

      </div>
    </div>
  );
}
