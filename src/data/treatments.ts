import { Treatment } from '../types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'coronary-angioplasty',
    name: 'Coronary Angioplasty & Stenting (PTCA)',
    departmentId: 'cardiology',
    category: 'Cardiac Care',
    shortDesc: 'Minimally invasive catheter procedure to restore blood flow in blocked heart arteries using drug-eluting stents.',
    procedureOverview: 'Through a tiny radial artery puncture at the wrist, a slender catheter guides a miniature balloon to the blockage site. The balloon inflates to widen the artery, and a drug-eluting cobalt-chromium stent is deployed with IVUS precision.',
    hospitalStay: '1 to 2 Days',
    recoveryTime: 'Normal routines resumed in 3-5 days',
    keyBenefits: [
      'Immediate relief from angina chest tightness',
      'Minimally invasive radial approach avoids groin wounds',
      'Rapid ambulation within 3 hours post-procedure',
      'Over 99% technical success rate with modern drug-eluting stents'
    ]
  },
  {
    id: 'preventive-cardiology',
    name: 'Preventive Cardiac Evaluation & Risk Stratification',
    departmentId: 'cardiology',
    category: 'Cardiac Care',
    shortDesc: 'Early detection of coronary plaques, arrhythmia screening, lipid profiling, and coronary calcium scoring.',
    procedureOverview: 'Comprehensive non-invasive workup combining 2D Echocardiography with Doppler, Treadmill Stress Testing (TMT), high-sensitivity Troponin & hs-CRP, and computerized Coronary Calcium CT scoring.',
    hospitalStay: 'Outpatient (Half Day)',
    recoveryTime: 'Immediate',
    keyBenefits: [
      'Detects silent atherosclerosis years before heart attack',
      'Personalized cardioprotective diet and exercise prescription',
      'Direct consultation with senior cardiologist'
    ]
  },
  {
    id: 'robotic-knee-replacement',
    name: 'Robotic Total Knee Replacement',
    departmentId: 'orthopaedics',
    category: 'Orthopaedics',
    shortDesc: 'Sub-millimeter implant positioning using 3D robotic navigation for natural joint feel and rapid walking recovery.',
    procedureOverview: 'Using patient-specific 3D anatomical modeling, the robotic arm prepares bone surfaces with micron-level accuracy, ensuring ligament balance and implant longevity up to 25+ years.',
    hospitalStay: '2 to 3 Days',
    recoveryTime: 'Walking within 4-6 hours; full recovery in 3-4 weeks',
    keyBenefits: [
      'Sub-millimeter precision reduces bone loss and blood loss',
      'Natural joint sensation and full range of motion',
      'Significantly lower postoperative pain'
    ]
  },
  {
    id: 'arthroscopic-acl-repair',
    name: 'Arthroscopic Knee Ligament Reconstruction (ACL / PCL)',
    departmentId: 'orthopaedics',
    category: 'Orthopaedics',
    shortDesc: 'Keyhole repair of sports-related knee ligament and meniscus tears through miniature puncture incisions.',
    procedureOverview: 'A high-definition fiberoptic camera and micro-instruments enter the knee joint through 4mm keyhole portals. An autograft tendon is securely positioned using bioabsorbable screws to restore knee stability.',
    hospitalStay: 'Daycare or 1 Day',
    recoveryTime: 'Light activities in 10 days; sports return in 6-9 months',
    keyBenefits: [
      'No large cuts or major muscle disruption',
      'Preserves surrounding joint structures and cartilages',
      'Accelerated sports rehabilitation protocol'
    ]
  },
  {
    id: 'acute-stroke-management',
    name: 'Comprehensive Acute Stroke Thrombolysis & Thrombectomy',
    departmentId: 'neurology',
    category: 'Neurology',
    shortDesc: 'Emergency clot-busting medication and endovascular mechanical clot retrieval for acute ischemic stroke.',
    procedureOverview: 'Immediate CT perfusion scan followed by IV Tenecteplase/Alteplase infusion within the 4.5-hour golden window, and biplane neuro-catheter mechanical thrombectomy within 24 hours to revascularize brain tissue.',
    hospitalStay: '3 to 5 Days in Neuro-ICU',
    recoveryTime: 'Targeted multidisciplinary neuro-rehabilitation begins in 48 hours',
    keyBenefits: [
      'Reverses or drastically limits stroke paralysis',
      'Rapid door-to-needle emergency protocol under 35 minutes',
      '24/7 dedicated neuro-interventional team'
    ]
  },
  {
    id: 'minimally-invasive-spine',
    name: 'Microscopic & Endoscopic Spine Decompression',
    departmentId: 'neurology',
    category: 'Neurology',
    shortDesc: 'Targeted relief for severe sciatica and herniated lumbar discs with microscopic tissue preservation.',
    procedureOverview: 'Performed under high-power surgical magnification. Only the compressing disc fragment is extracted, leaving healthy spinal ligaments and bone integrity uncompromised.',
    hospitalStay: '1 to 2 Days',
    recoveryTime: 'Walking on same day; full desk work in 1-2 weeks',
    keyBenefits: [
      'Tiny skin incision (< 1.5 cm)',
      'Immediate relief from sharp leg nerve radiation',
      'No spinal fusion required in most cases'
    ]
  },
  {
    id: 'therapeutic-endoscopy-ercp',
    name: 'Endoscopic Retrograde Cholangiopancreatography (ERCP)',
    departmentId: 'gastroenterology',
    category: 'Gastroenterology',
    shortDesc: 'Non-surgical extraction of bile duct stones and placement of stents for jaundice and pancreatic duct blocks.',
    procedureOverview: 'A specialized side-viewing endoscope reaches the duodenum under sedation. Radiopaque dye visualizes the biliary ducts under fluoroscopy, and micro-baskets remove trapped stones without abdominal surgery.',
    hospitalStay: '1 Day',
    recoveryTime: 'Normal diet resumed within 24 hours',
    keyBenefits: [
      'Eliminates need for open common bile duct surgery',
      'Immediate relief from obstructive jaundice and cholangitis',
      'Painless daycare or overnight stay'
    ]
  },
  {
    id: 'colonoscopy-polypectomy',
    name: 'Advanced Colonoscopy & Preventive Polypectomy',
    departmentId: 'gastroenterology',
    category: 'Gastroenterology',
    shortDesc: 'High-definition screening of the large intestine and immediate removal of precancerous polyps.',
    procedureOverview: 'Full-length visualization using AI-assisted Narrow Band Imaging (NBI) to identify microscopic adenomas. Suspicious polyps are removed painlessly in the same session.',
    hospitalStay: 'Daycare (Discharge in 2-3 hours)',
    recoveryTime: 'Same day recovery',
    keyBenefits: [
      'Proven gold standard for colon cancer prevention',
      'Sedation administered by anaesthesiologist',
      'Zero downtime'
    ]
  },
  {
    id: 'breast-conservation-surgery',
    name: 'Oncoplastic Breast Conservation Surgery',
    departmentId: 'oncology',
    category: 'Oncology',
    shortDesc: 'Complete cancer removal while preserving natural breast shape and symmetry using reconstructive techniques.',
    procedureOverview: 'The tumor is excised with clear negative margins alongside sentinel lymph node biopsy, followed by tissue rearrangement or volume replacement to preserve aesthetic appearance.',
    hospitalStay: '1 to 2 Days',
    recoveryTime: '2 to 3 weeks',
    keyBenefits: [
      'Equal oncological survival to full mastectomy',
      'Significantly higher emotional and psychological well-being',
      'Minimal post-surgical arm lymphedema'
    ]
  },
  {
    id: 'laser-kidney-stone-rirs',
    name: 'Retrograde Intrarenal Surgery (RIRS) for Kidney Stones',
    departmentId: 'urology',
    category: 'Urology',
    shortDesc: 'Scarless Holmium laser pulverization of kidney stones using flexible digital ureterorenoscopes.',
    procedureOverview: 'A miniature flexible digital scope enters through the natural urinary channel up into the kidney calyces. A high-power Holmium laser fiber turns stones into microscopic dust that washes out naturally in urine.',
    hospitalStay: 'Daycare or 24 Hours',
    recoveryTime: 'Back to routine work within 48 hours',
    keyBenefits: [
      'Zero skin incisions or puncture wounds',
      'Effective even for difficult lower-pole renal stones',
      'High single-session stone clearance rate'
    ]
  },
  {
    id: 'laparoscopic-cholecystectomy',
    name: 'Laparoscopic Gallbladder Removal (Cholecystectomy)',
    departmentId: 'general-surgery',
    category: 'General Surgery',
    shortDesc: 'Keyhole removal of inflamed gallbladder with stones through 4 miniature incisions.',
    procedureOverview: 'Using 4K high-definition laparoscopes, the diseased gallbladder containing stones is safely detached and retrieved in a sterile endo-bag, eliminating future painful gallbladder attacks.',
    hospitalStay: '1 Day',
    recoveryTime: 'Normal desk work in 3 to 4 days',
    keyBenefits: [
      'Tiny scars virtually invisible after healing',
      'Negligible post-operative wound discomfort',
      'Permanently resolves recurrent gallbladder pain'
    ]
  },
  {
    id: 'mics-cataract-surgery',
    name: 'Micro-Incision Cataract Surgery (MICS) with Premium IOLs',
    departmentId: 'ophthalmology',
    category: 'Ophthalmology',
    shortDesc: 'Bladeless 1.8mm cold phacoemulsification with toric and multifocal intraocular lens implantation.',
    procedureOverview: 'Under topical drop anaesthesia (no injections), ultrasonic micro-pulses gently dissolve the clouded crystalline lens. A foldable monofocal, toric, or trifocal lens is positioned inside the capsular bag.',
    hospitalStay: 'Daycare (Total clinic time 2 hours)',
    recoveryTime: 'Clear vision within 24 to 48 hours',
    keyBenefits: [
      'No injection, no stitch, no bandage required',
      'Freedom from reading and distance spectacles with trifocal IOLs',
      'Same-day return home'
    ]
  }
];
