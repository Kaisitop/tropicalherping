const countryCodes = {
  US: "+1",
  CA: "+1",
  GB: "+44",
  AU: "+61",
  ZZ: "", // International
  AF: "+93",
  AX: "+358",
  AL: "+355",
  DZ: "+213",
  AS: "+1",
  AD: "+376",
  AO: "+244",
  AI: "+1",
  AG: "+1",
  AR: "+54",
  AM: "+374",
  AW: "+297",
  AC: "+247",
  AT: "+43",
  AZ: "+994",
  BS: "+1",
  BH: "+973",
  BD: "+880",
  BB: "+1",
  BY: "+375",
  BE: "+32",
  BZ: "+501",
  BJ: "+229",
  BM: "+1",
  BT: "+975",
  BO: "+591",
  BQ: "+599",
  BA: "+387",
  BW: "+267",
  BR: "+55",
  IO: "+246",
  BN: "+673",
  BG: "+359",
  BF: "+226",
  BI: "+257",
  KH: "+855",
  CM: "+237",
  CV: "+238",
  KY: "+1",
  CF: "+236",
  TD: "+235",
  CL: "+56",
  CN: "+86",
  CX: "+61",
  CC: "+61",
  CO: "+57",
  KM: "+269",
  CG: "+242",
  CD: "+243",
  CK: "+682",
  CR: "+506",
  CI: "+225",
  HR: "+385",
  CU: "+53",
  CW: "+599",
  CY: "+357",
  CZ: "+420",
  DK: "+45",
  DJ: "+253",
  DM: "+1",
  DO: "+1",
  EC: "+593",
  EG: "+20",
  SV: "+503",
  GQ: "+240",
  ER: "+291",
  EE: "+372",
  ET: "+251",
  FK: "+500",
  FO: "+298",
  FM: "+691",
  FJ: "+679",
  FI: "+358",
  FR: "+33",
  GF: "+594",
  PF: "+689",
  GA: "+241",
  GM: "+220",
  GE: "+995",
  DE: "+49",
  GH: "+233",
  GI: "+350",
  GR: "+30",
  GL: "+299",
  GD: "+1",
  GP: "+590",
  GU: "+1",
  GT: "+502",
  GG: "+44",
  GN: "+224",
  GW: "+245",
  GY: "+592",
  HT: "+509",
  VA: "+39",
  HN: "+504",
  HK: "+852",
  HU: "+36",
  IS: "+354",
  IN: "+91",
  ID: "+62",
  IR: "+98",
  IQ: "+964",
  IE: "+353",
  IM: "+44",
  IL: "+972",
  IT: "+39",
  JM: "+1",
  JP: "+81",
  JE: "+44",
  JO: "+962",
  KZ: "+7",
  KE: "+254",
  KI: "+686",
  XK: "+383",
  KW: "+965",
  KG: "+996",
  LA: "+856",
  LV: "+371",
  LB: "+961",
  LS: "+266",
  LR: "+231",
  LY: "+218",
  LI: "+423",
  LT: "+370",
  LU: "+352",
  MO: "+853",
  MG: "+261",
  MW: "+265",
  MY: "+60",
  MV: "+960",
  ML: "+223",
  MT: "+356",
  MH: "+692",
  MQ: "+596",
  MR: "+222",
  MU: "+230",
  YT: "+262",
  MX: "+52",
  MD: "+373",
  MC: "+377",
  MN: "+976",
  ME: "+382",
  MS: "+1",
  MA: "+212",
  MZ: "+258",
  MM: "+95",
  NA: "+264",
  NR: "+674",
  NP: "+977",
  NL: "+31",
  NC: "+687",
  NZ: "+64",
  NI: "+505",
  NE: "+227",
  NG: "+234",
  NU: "+683",
  NF: "+672",
  KP: "+850",
  MK: "+389",
  MP: "+1",
  NO: "+47",
  OM: "+968",
  PK: "+92",
  PW: "+680",
  PS: "+970",
  PA: "+507",
  PG: "+675",
  PY: "+595",
  PE: "+51",
  PH: "+63",
  PL: "+48",
  PT: "+351",
  PR: "+1",
  QA: "+974",
  RE: "+262",
  RO: "+40",
  RU: "+7",
  RW: "+250",
  BL: "+590",
  SH: "+290",
  KN: "+1",
  LC: "+1",
  MF: "+590",
  PM: "+508",
  VC: "+1",
  WS: "+685",
  SM: "+378",
  ST: "+239",
  SA: "+966",
  SN: "+221",
  RS: "+381",
  SC: "+248",
  SL: "+232",
  SG: "+65",
  SX: "+1",
  SK: "+421",
  SI: "+386",
  SB: "+677",
  SO: "+252",
  ZA: "+27",
  KR: "+82",
  SS: "+211",
  ES: "+34",
  LK: "+94",
  SD: "+249",
  SR: "+597",
  SJ: "+47",
  SZ: "+268",
  SE: "+46",
  CH: "+41",
  SY: "+963",
  TW: "+886",
  TJ: "+992",
  TZ: "+255",
  TH: "+66",
  TL: "+670",
  TG: "+228",
  TK: "+690",
  TO: "+676",
  TT: "+1",
  TA: "+290",
  TN: "+216",
  TR: "+90",
  TM: "+993",
  TC: "+1",
  TV: "+688",
  UG: "+256",
  UA: "+380",
  AE: "+971",
  UY: "+598",
  UZ: "+998",
  VU: "+678",
  VE: "+58",
  VN: "+84",
  VG: "+1",
  VI: "+1",
  WF: "+681",
  EH: "+212",
  YE: "+967",
  ZM: "+260",
  ZW: "+263",
};

class NewsletterForm extends HTMLElement {
  constructor() {
    super();

    this.style.display = "none";
  }

  countryCodeToEmoji(code) {
    if (!code || code === "ZZ") return "🌍";
    return code
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(char.charCodeAt(0) + 127397)
      );
  }

  generateCountryOptions() {
    const countries = [
      { code: "AC", name: "Ascension Island" },
      { code: "AD", name: "Andorra" },
      { code: "AE", name: "United Arab Emirates" },
      { code: "AF", name: "Afghanistan" },
      { code: "AG", name: "Antigua and Barbuda" },
      { code: "AI", name: "Anguilla" },
      { code: "AL", name: "Albania" },
      { code: "AM", name: "Armenia" },
      { code: "AO", name: "Angola" },
      { code: "AR", name: "Argentina" },
      { code: "AS", name: "American Samoa" },
      { code: "AT", name: "Austria" },
      { code: "AU", name: "Australia" },
      { code: "AW", name: "Aruba" },
      { code: "AX", name: "Åland Islands" },
      { code: "AZ", name: "Azerbaijan" },
      { code: "BA", name: "Bosnia and Herzegovina" },
      { code: "BB", name: "Barbados" },
      { code: "BD", name: "Bangladesh" },
      { code: "BE", name: "Belgium" },
      { code: "BF", name: "Burkina Faso" },
      { code: "BG", name: "Bulgaria" },
      { code: "BH", name: "Bahrain" },
      { code: "BI", name: "Burundi" },
      { code: "BJ", name: "Benin" },
      { code: "BM", name: "Bermuda" },
      { code: "BN", name: "Brunei Darussalam" },
      { code: "BO", name: "Bolivia" },
      { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
      { code: "BR", name: "Brazil" },
      { code: "BS", name: "Bahamas" },
      { code: "BT", name: "Bhutan" },
      { code: "BW", name: "Botswana" },
      { code: "BY", name: "Belarus" },
      { code: "BZ", name: "Belize" },
      { code: "CA", name: "Canada" },
      { code: "CD", name: "Congo, Democratic Republic" },
      { code: "CF", name: "Central African Republic" },
      { code: "CG", name: "Congo" },
      { code: "CH", name: "Switzerland" },
      { code: "CI", name: "Côte d’Ivoire" },
      { code: "CK", name: "Cook Islands" },
      { code: "CL", name: "Chile" },
      { code: "CM", name: "Cameroon" },
      { code: "CN", name: "China" },
      { code: "CO", name: "Colombia" },
      { code: "CR", name: "Costa Rica" },
      { code: "CU", name: "Cuba" },
      { code: "CV", name: "Cabo Verde" },
      { code: "CW", name: "Curaçao" },
      { code: "CY", name: "Cyprus" },
      { code: "CZ", name: "Czech Republic" },
      { code: "DE", name: "Germany" },
      { code: "DJ", name: "Djibouti" },
      { code: "DK", name: "Denmark" },
      { code: "DM", name: "Dominica" },
      { code: "DO", name: "Dominican Republic" },
      { code: "DZ", name: "Algeria" },
      { code: "EC", name: "Ecuador" },
      { code: "EE", name: "Estonia" },
      { code: "EG", name: "Egypt" },
      { code: "ES", name: "Spain" },
      { code: "ET", name: "Ethiopia" },
      { code: "FI", name: "Finland" },
      { code: "FJ", name: "Fiji" },
      { code: "FM", name: "Micronesia" },
      { code: "FR", name: "France" },
      { code: "GA", name: "Gabon" },
      { code: "GB", name: "United Kingdom" },
      { code: "GD", name: "Grenada" },
      { code: "GE", name: "Georgia" },
      { code: "GH", name: "Ghana" },
      { code: "GI", name: "Gibraltar" },
      { code: "GL", name: "Greenland" },
      { code: "GM", name: "Gambia" },
      { code: "GN", name: "Guinea" },
      { code: "GQ", name: "Equatorial Guinea" },
      { code: "GR", name: "Greece" },
      { code: "GT", name: "Guatemala" },
      { code: "GU", name: "Guam" },
      { code: "GY", name: "Guyana" },
      { code: "HK", name: "Hong Kong" },
      { code: "HN", name: "Honduras" },
      { code: "HR", name: "Croatia" },
      { code: "HT", name: "Haiti" },
      { code: "HU", name: "Hungary" },
      { code: "ID", name: "Indonesia" },
      { code: "IE", name: "Ireland" },
      { code: "IL", name: "Israel" },
      { code: "IN", name: "India" },
      { code: "IQ", name: "Iraq" },
      { code: "IR", name: "Iran" },
      { code: "IS", name: "Iceland" },
      { code: "IT", name: "Italy" },
      { code: "JM", name: "Jamaica" },
      { code: "JO", name: "Jordan" },
      { code: "JP", name: "Japan" },
      { code: "KE", name: "Kenya" },
      { code: "KG", name: "Kyrgyzstan" },
      { code: "KH", name: "Cambodia" },
      { code: "KR", name: "South Korea" },
      { code: "KW", name: "Kuwait" },
      { code: "KZ", name: "Kazakhstan" },
      { code: "LA", name: "Laos" },
      { code: "LB", name: "Lebanon" },
      { code: "LC", name: "Saint Lucia" },
      { code: "LI", name: "Liechtenstein" },
      { code: "LK", name: "Sri Lanka" },
      { code: "LR", name: "Liberia" },
      { code: "LS", name: "Lesotho" },
      { code: "LT", name: "Lithuania" },
      { code: "LU", name: "Luxembourg" },
      { code: "LV", name: "Latvia" },
      { code: "LY", name: "Libya" },
      { code: "MA", name: "Morocco" },
      { code: "MC", name: "Monaco" },
      { code: "MD", name: "Moldova" },
      { code: "ME", name: "Montenegro" },
      { code: "MG", name: "Madagascar" },
      { code: "MH", name: "Marshall Islands" },
      { code: "MK", name: "North Macedonia" },
      { code: "ML", name: "Mali" },
      { code: "MM", name: "Myanmar" },
      { code: "MN", name: "Mongolia" },
      { code: "MO", name: "Macao" },
      { code: "MR", name: "Mauritania" },
      { code: "MT", name: "Malta" },
      { code: "MU", name: "Mauritius" },
      { code: "MV", name: "Maldives" },
      { code: "MW", name: "Malawi" },
      { code: "MX", name: "Mexico" },
      { code: "MY", name: "Malaysia" },
      { code: "MZ", name: "Mozambique" },
      { code: "NA", name: "Namibia" },
      { code: "NE", name: "Niger" },
      { code: "NG", name: "Nigeria" },
      { code: "NI", name: "Nicaragua" },
      { code: "NL", name: "Netherlands" },
      { code: "NO", name: "Norway" },
      { code: "NP", name: "Nepal" },
      { code: "NZ", name: "New Zealand" },
      { code: "OM", name: "Oman" },
      { code: "PA", name: "Panama" },
      { code: "PE", name: "Peru" },
      { code: "PG", name: "Papua New Guinea" },
      { code: "PH", name: "Philippines" },
      { code: "PK", name: "Pakistan" },
      { code: "PL", name: "Poland" },
      { code: "PR", name: "Puerto Rico" },
      { code: "PT", name: "Portugal" },
      { code: "PY", name: "Paraguay" },
      { code: "QA", name: "Qatar" },
      { code: "RO", name: "Romania" },
      { code: "RS", name: "Serbia" },
      { code: "RU", name: "Russia" },
      { code: "RW", name: "Rwanda" },
      { code: "SA", name: "Saudi Arabia" },
      { code: "SD", name: "Sudan" },
      { code: "SE", name: "Sweden" },
      { code: "SG", name: "Singapore" },
      { code: "SI", name: "Slovenia" },
      { code: "SK", name: "Slovakia" },
      { code: "SN", name: "Senegal" },
      { code: "SO", name: "Somalia" },
      { code: "SR", name: "Suriname" },
      { code: "SV", name: "El Salvador" },
      { code: "SY", name: "Syria" },
      { code: "SZ", name: "Eswatini" },
      { code: "TC", name: "Turks and Caicos Islands" },
      { code: "TD", name: "Chad" },
      { code: "TG", name: "Togo" },
      { code: "TH", name: "Thailand" },
      { code: "TJ", name: "Tajikistan" },
      { code: "TL", name: "Timor-Leste" },
      { code: "TN", name: "Tunisia" },
      { code: "TR", name: "Turkey" },
      { code: "TT", name: "Trinidad and Tobago" },
      { code: "TZ", name: "Tanzania" },
      { code: "UA", name: "Ukraine" },
      { code: "UG", name: "Uganda" },
      { code: "US", name: "United States" },
      { code: "UY", name: "Uruguay" },
      { code: "UZ", name: "Uzbekistan" },
      { code: "VE", name: "Venezuela" },
      { code: "VN", name: "Vietnam" },
      { code: "ZA", name: "South Africa" },
      { code: "ZM", name: "Zambia" },
      { code: "ZW", name: "Zimbabwe" },
      { code: "ZZ", name: "International" },
    ];

    return countries
      .map(
        (country) =>
          `<option value ="${country.code}">${this.countryCodeToEmoji(
            country.code
          )} ${country.name} (${countryCodes[country.code] || ""})</option>)`
      )
      .join("");
  }

  async connectedCallback() {
    try {
      const cssResponse = await fetch("Styles/form.css");
      const css = await cssResponse.text();

      this.innerHTML = `
        <style>${css}</style>
        <div id="el_tLzgYUBqr">
        <div id="el_Gfa3rPcwOk">
          <button id="el_0oUlA2lH4n" type="button" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          
          <div id="el_GxAiZNU-0A">
            <img id="el_Q4UrQCVpGQ" src="https://www.tropicalherping.com/logos/th_circular.png" alt="Logo">
            
            <div id="el_SHMhFl7GMy">
              <h2 id="el_26oFcNl58BE">Join our newsletter</h2>
              <p id="el_yolPq0KeBfC">Join our newsletter to receive updates about upcoming herping and wildlife photography tours.</p>
              
              <form id="el_a1SzyTQCI1a" class="step visible">
                <div id="el_wrapper_BWFjQtQPbyN">
                  <input id="el_BWFjQtQPbyN" type="text" name="FNAME" placeholder="First name" required>
                  <div id="el_BWFjQtQPbyN_error_message" class="error_message"></div>
                </div>
                
                <div id="el_wrapper_UjY1_eK5nlz">
                  <input id="el_UjY1_eK5nlz" type="text" name="LNAME" placeholder="Last name" required>
                  <div id="el_UjY1_eK5nlz_error_message" class="error_message"></div>
                </div>
                
                <div id="el_wrapper_iu2Yah6lknz">
                  <input id="el_iu2Yah6lknz" type="email" name="EMAIL" placeholder="Email address" required>
                  <div id="el_iu2Yah6lknz_error_message" class="error_message"></div>
                </div>
                
                <div id="el_wrapper_3LjCx4PnItw">
                  <div id="el_3LjCx4PnItw_input_country_select_wrapper">
                    <select name="area" id="countrySelect">
                      ${this.generateCountryOptions()}
                    </select>
                    <div id="countrySelector">🇺🇸</div>
                  </div>
                  <input id="el_3LjCx4PnItw" type="tel" name="number" placeholder="Phone number">
                  <div id="el_3LjCx4PnItw_error_message" class="error_message"></div>
                </div>
                
                <button id="el_WVGSab4sC9K" type="submit">
                  <span id="el_kjhAdi5xV_x">Subscribe</span>
                  <div id="el_QYA2LygIq"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div id="el_uo0H7xprg0" style="display:none;">
        <div id="el_E1-JH5blt9">
          <button id="el_-F1U4zvxne" type="button" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          
          <div id="el_Er1BLsNtV4">
            <img id="el_DhWCKqTm70" src="https://www.tropicalherping.com/logos/th_circular.png" alt="Logo">
            
            <div id="el_OmFSOsod_T">
              <h2 id="el_rT4IX3Mpdb">Thank you!</h2>
              <p id="el_9gVooPYAhZ">You've joined our community.</p>
            </div>
          </div>
        </div>
      </div>`;
      this.setupEventListeners();
    } catch (error) {
      console.error("Error loading form resources:", error);
    }
  }
  setupEventListeners() {
    const form = this.querySelector("#el_a1SzyTQCI1a");
    const formContainer = this.querySelector("#el_tLzgYUBqr");
    const thankYouContainer = this.querySelector("#el_uo0H7xprg0");
    const closeButtons = this.querySelectorAll('[aria-label="Close"]');

    closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        formContainer.style.display = "none";
        thankYouContainer.style.display = "none";
        this.style.display = "none";
      });
    });

    formContainer.addEventListener("click", (e) => {
      if (e.target === formContainer) {
        formContainer.style.display = "none";
        this.style.display = "none";
      }
    });

    thankYouContainer.addEventListener("click", (e) => {
      if (e.target === thankYouContainer) {
        thankYouContainer.style.display = "none";
        this.style.display = "none";
      }
    });

    const countrySelect = this.querySelector("#countrySelect");
    const countrySelector = this.querySelector("#countrySelector");

    countrySelect.addEventListener("change", (e) => {
      countrySelector.textContent = this.countryCodeToEmoji(e.target.value);
    });

    countrySelector.textContent = this.countryCodeToEmoji(countrySelect.value);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      const countryCode = formData.get("area");
      const phoneNumber = formData.get("number");
      const phoneNumberComplete = countryCodes[countryCode] + phoneNumber;

      formData.set("MMERGE4", phoneNumberComplete);

      try {
        await fetch(
          "https://tropicalherping.us13.list-manage.com/subscribe/post?u=3d3985b1c2e8d34cd442da655&amp;id=f75738dccb&amp;f_id=00958eeaf0",
          {
            method: "POST",
            body: formData,
            mode: "no-cors",
          }
        );
      } catch (error) {
        console.warn("Mailchimp no-cors request");
      }
      form.style.display = "none";
      form.classList.remove("visible");
      formContainer.style.display = "none";
      thankYouContainer.style.display = "flex";
    });
  }
}

customElements.define("newsletter-form", NewsletterForm);
