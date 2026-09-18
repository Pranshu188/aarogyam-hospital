# Aarogyam Multispeciality Hospital Website

A demonstration and portfolio website designed for **Aarogyam Multispeciality Hospital**, located in Ahmedabad, Gujarat, India.

Built with **React**, **TypeScript**, and **Tailwind CSS**, this demonstration website showcases clinical excellence, patient-first care, advanced robotic and surgical technologies, and seamless appointment booking.

---

## Key Features & Highlights

- **14 Complete Navigable Pages**:
  - **Home**: Hero with quick doctor search, quick actions, credibility animated statistics, Centres of Excellence, Featured Doctors, Emergency 24/7 strip, Technology showcase, Health Packages, Testimonials, Wellness Articles, FAQs, and Accreditation badges.
  - **About Us**: Hospital vision, leadership message from Medical Director, 350+ bed infrastructure, 85 ICU beds, 12 Modular OTs, and core clinical values.
  - **Doctors Directory**: Real-time search and multi-filtering by specialty, experience, availability, gender, and consultation mode.
  - **Doctor Detail**: Comprehensive profile views showing clinical qualifications, education, fellowships, OPD schedules, conditions treated, and appointment CTA.
  - **Centres of Excellence (Specialties)**: 16 clinical departments with subspecialties, technologies, and faculty links.
  - **Department Detail**: Specialized clinical views detailing equipment (e.g. 3T MRI, Biplane Cath Lab, Da Vinci Robotics), procedures, and doctors.
  - **Treatments & Procedures**: Catalog of surgical procedures across cardiology, oncology, orthopaedics, gastroenterology, and urology.
  - **Hospital Facilities**: Modern campus infrastructure with modular OTs, Level III NICU, 24/7 pharmacy, diagnostic imaging, and deluxe patient rooms.
  - **Health Packages**: 7 preventive health checkups (Essential, Comprehensive, Executive, Women's Wellness, Senior Care, Diabetic, Cardiac) with detailed test breakdowns, preparation guidelines, and demonstration pricing.
  - **Patient Services**: Patient care roadmap, cashless TPA / insurance desk with empanelled partners, and international patient care.
  - **Book Appointment**: Interactive 5-step booking wizard with specialty/doctor picker, date selection, time slot buttons, patient details validation, and realistic confirmation card.
  - **Emergency Care**: Dedicated 24/7 emergency portal with hotline (`+91 79 4567 8900`), one-touch dialing, and ambulance dispatch simulation.
  - **Contact Us**: Ahmedabad location details (Bodakdev, SG Highway), interactive contact form with instant validation, OPD hours, and transit distances.
  - **FAQ**: Searchable accordion covering appointments, insurance, visiting hours, and digital records.

- **Design System**:
  - **Primary**: Deep Navy / Medical Blue (`#0a2540`, `#0f3b68`, `#1e40af`, `#0284c7`)
  - **Secondary**: Medical Teal / Aqua (`#0d9488`, `#06b6d4`, `#14b8a6`)
  - **Backgrounds**: Crisp White (`#ffffff`), Subtle Cool Grey (`#f8fafc`, `#f1f5f9`)
  - **Typography**: Google Font **Plus Jakarta Sans**
  - **Emergency Accents**: Restrained crimson reserved for trauma and emergency care
  - **Mobile Experience**: Sticky bottom quick bar (`24/7 Call` | `Find Doctor` | `Book Visit`) and responsive touch drawer.

---

## GitHub Pages Deployment

The application is configured with:
1. Vite relative asset base (`base: './'`).
2. Client-side hash routing (`#/<route>`), preventing HTTP 404 errors when refreshing on static GitHub Pages hosting.
3. `.nojekyll` file included in `public/` to prevent Jekyll processing.

### Deploying to GitHub

1. Initialize git and push to your GitHub repository:
```bash
git init
git add .
git commit -m "feat: Initial commit for Aarogyam Multispeciality Hospital website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

2. To build and deploy to GitHub Pages:
```bash
# Build the production bundle
npm run build
```
You can deploy the generated `dist` folder to the `gh-pages` branch or configure GitHub Pages in your repository settings under **Settings > Pages > Source > GitHub Actions** or deploy from branch `gh-pages`.

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```

---

## Demonstration Notice

*Aarogyam Multispeciality Hospital is a fictional demonstration institution created for web design portfolio purposes. All doctor profiles, testimonials, contact details, statistics, and pricing shown are demonstration assets.*
