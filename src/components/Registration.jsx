import {
  User,
  Mail,
  Phone,
  BriefcaseBusiness,
  Building2,
  ArrowUpRight,
  CalendarDays,
  Video
} from "lucide-react";

function Registration() {

  // Handle registration form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Additional validation
    const fullName = form.elements.fullName.value.trim();
    const phone = form.elements.phone.value.trim();
    const organization = form.elements.organization.value.trim();

    const namePattern = /^[A-Za-z][A-Za-z .'-]*[A-Za-z]$/;
    const phonePattern = /^[6-9][0-9]{9}$/;
    const organizationPattern = /^[A-Za-z][A-Za-z &.,'()-]*$/;

    // Validate full name
    if (fullName.length < 3 || !namePattern.test(fullName)) {
      alert("Please enter a valid full name.");
      form.elements.fullName.focus();
      return;
    }

    // Validate phone number
    if (!phonePattern.test(phone)) {
      alert(
        "Please enter a valid 10-digit mobile number starting with 6, 7, 8 or 9."
      );
      form.elements.phone.focus();
      return;
    }

    // Validate college/company
    if (
      organization.length < 2 ||
      !organizationPattern.test(organization)
    ) {
      alert(
        "Please enter a valid college or company name without numbers."
      );
      form.elements.organization.focus();
      return;
    }

    // Submit registration data to Netlify
    try {
      const formData = new FormData(form);

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) {
        throw new Error("Registration submission failed.");
      }

      // Navigate to our custom React Thank You page
      window.history.pushState({}, "", "/thank-you/");

      window.dispatchEvent(
        new PopStateEvent("popstate")
      );

    } catch (error) {
      console.error("Registration Error:", error);

      alert(
        "Registration failed. Please try again."
      );
    }
  };


  // Allow only valid name characters
  const handleNameInput = (e) => {
    e.target.value = e.target.value.replace(
      /[^A-Za-z .'-]/g,
      ""
    );
  };


  // Allow only digits in phone number
  const handlePhoneInput = (e) => {
    e.target.value = e.target.value
      .replace(/[^0-9]/g, "")
      .slice(0, 10);
  };


  // Allow valid college/company characters without numbers
  const handleOrganizationInput = (e) => {
    e.target.value = e.target.value.replace(
      /[^A-Za-z &.,'()-]/g,
      ""
    );
  };


  return (
    <section
      className="registration-section section"
      id="registration"
    >
      <div className="container">

        {/* HEADER */}
        <div className="registration-header">

          <span className="section-label">
            JOIN THE SUMMIT
          </span>

          <h2 className="section-title">
            Reserve Your <span>Free Seat</span>
          </h2>

          <p>
            Be part of the AI Manufacturing Summit 2026.
            Register now and explore the future of intelligent
            manufacturing.
          </p>

        </div>


        <div className="registration-layout">

          {/* LEFT INFORMATION */}
          <div className="registration-info">

            <h3>
              Don't Miss the Future of Manufacturing.
            </h3>

            <p>
              Join industry professionals, technology enthusiasts
              and students to discover how artificial intelligence
              is transforming modern manufacturing.
            </p>


            <div className="registration-details">

              {/* DATE AND TIME */}
              <div className="registration-detail-item">

                <div className="registration-detail-icon">
                  <CalendarDays size={22} />
                </div>

                <div>
                  <span>DATE & TIME</span>

                  <strong>5 December 2026</strong>

                  <p>10:00 AM – 12:00 PM IST</p>
                </div>

              </div>


              {/* EVENT FORMAT */}
              <div className="registration-detail-item">

                <div className="registration-detail-icon">
                  <Video size={22} />
                </div>

                <div>
                  <span>EVENT FORMAT</span>

                  <strong>Live Online Webinar</strong>

                  <p>Attend from anywhere</p>
                </div>

              </div>

            </div>


            {/* FREE BADGE */}
            <div className="registration-free-badge">

              <span>FREE</span>

              <p>
                Registration is completely free.
              </p>

            </div>

          </div>


          {/* REGISTRATION FORM */}
          <div className="registration-form-wrapper">

            <div className="form-heading">

              <h3>Register for the Summit</h3>

              <p>
                Fill in your details to reserve your seat.
              </p>

            </div>


            <form
              className="registration-form"
              name="summit-registration"
              method="POST"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >

              {/* NETLIFY FORM IDENTIFICATION */}
              <input
                type="hidden"
                name="form-name"
                value="summit-registration"
              />


              {/* HONEYPOT SPAM PROTECTION */}
              <div hidden>
                <label>
                  Don't fill this out:
                  <input name="bot-field" />
                </label>
              </div>


              {/* FULL NAME */}
              <div className="form-group">

                <label htmlFor="fullName">
                  Full Name
                </label>

                <div className="input-wrapper">

                  <User size={18} />

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    minLength={3}
                    maxLength={50}
                    pattern="[A-Za-z][A-Za-z .'-]*[A-Za-z]"
                    title="Enter a valid name using letters, spaces, hyphens or apostrophes."
                    onInput={handleNameInput}
                    required
                  />

                </div>

              </div>


              {/* EMAIL */}
              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <div className="input-wrapper">

                  <Mail size={18} />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    maxLength={100}
                    required
                  />

                </div>

              </div>


              {/* PHONE */}
              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <div className="input-wrapper">

                  <Phone size={18} />

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your 10-digit mobile number"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    pattern="[6-9][0-9]{9}"
                    title="Enter exactly 10 digits starting with 6, 7, 8 or 9."
                    maxLength={10}
                    onInput={handlePhoneInput}
                    required
                  />

                </div>

              </div>


              {/* OCCUPATION */}
              <div className="form-group">

                <label htmlFor="occupation">
                  Occupation
                </label>

                <div className="input-wrapper">

                  <BriefcaseBusiness size={18} />

                  <select
                    id="occupation"
                    name="occupation"
                    defaultValue=""
                    required
                  >

                    <option value="" disabled>
                      Select your occupation
                    </option>

                    <option value="Student">
                      Student
                    </option>

                    <option value="Working Professional">
                      Working Professional
                    </option>

                    <option value="Engineer">
                      Engineer
                    </option>

                    <option value="Business Owner">
                      Business Owner
                    </option>

                    <option value="Researcher">
                      Researcher
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>

              </div>


              {/* COLLEGE / COMPANY */}
              <div className="form-group">

                <label htmlFor="organization">
                  College / Company
                </label>

                <div className="input-wrapper">

                  <Building2 size={18} />

                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    placeholder="Enter college or company name"
                    autoComplete="organization"
                    minLength={2}
                    maxLength={100}
                    pattern="[A-Za-z][A-Za-z &.,'()-]*"
                    title="Enter a college or company name using letters and common punctuation. Numbers are not allowed."
                    onInput={handleOrganizationInput}
                    required
                  />

                </div>

              </div>


              {/* CONSENT */}
              <div className="form-consent">

                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  value="Agreed"
                  required
                />

                <label htmlFor="consent">
                  I agree to receive event-related updates
                  regarding this webinar.
                </label>

              </div>


              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="registration-submit"
              >

                Register Now

                <ArrowUpRight size={19} />

              </button>


              <p className="form-note">
                Your information will be used for event registration.
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Registration;