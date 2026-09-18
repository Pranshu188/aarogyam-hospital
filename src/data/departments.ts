import { Department } from '../types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    slug: 'cardiology',
    name: 'Cardiology & Cardiac Surgery',
    iconName: 'HeartPulse',
    tagline: 'Centres of Excellence in Comprehensive Heart Care',
    shortDesc: '24/7 Primary Angioplasty, advanced biplane cath lab, bypass surgery, electrophysiology, and preventative heart wellness.',
    fullDesc: 'The Aarogyam Institute of Cardiac Sciences is recognized for cutting-edge coronary interventions, structural heart repairs, minimally invasive valve surgeries, and dedicated cardiac intensive care. Our 24/7 Primary PCI team maintains an average door-to-balloon time of under 48 minutes.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Procedures Performed', value: '14,000+' },
      { label: 'Door-to-Balloon Time', value: '< 48 mins' },
      { label: 'Cath Labs', value: '2 Biplane Units' },
      { label: 'Clinical Success Rate', value: '99.2%' }
    ],
    keyProcedures: [
      'Primary & Elective Coronary Angioplasty (PTCA)',
      'Fractional Flow Reserve (FFR) & IVUS Guided Stenting',
      'Coronary Artery Bypass Grafting (CABG / Off-pump)',
      'TAVI / TAVR (Transcatheter Aortic Valve Implantation)',
      'Pacemaker, ICD & CRT-D Device Implantation',
      'Pediatric Congenital Heart Defect Closure'
    ],
    keyTechnologies: [
      'Philips Azurion Biplane Cath Lab with ClarityIQ',
      'Intravascular Ultrasound (IVUS) & Optical Coherence Tomography (OCT)',
      'Rotablation & Intravascular Lithotripsy (IVL)',
      'Dedicated 16-bed Coronary Care Unit (CCU)'
    ],
    conditionsTreated: [
      'Coronary Artery Disease & Acute Heart Attack',
      'Valvular Heart Disease (Stenosis & Regurgitation)',
      'Heart Failure & Cardiomyopathy',
      'Heart Rhythm Disorders (Arrhythmias)',
      'Congenital Heart Defects in Adults and Children'
    ],
    faqs: [
      {
        question: 'What should I do in case of sudden chest discomfort?',
        answer: 'Immediately call our 24/7 Emergency Helpline at +91 79 4567 8900. Do not drive yourself; our emergency cardiac ambulance equipped with telemetry and ACLS paramedics will reach you.'
      },
      {
        question: 'How quickly can an angioplasty be scheduled at Aarogyam?',
        answer: 'Emergency angioplasty is carried out immediately 24/7 upon arrival. Elective procedures can be scheduled following outpatient evaluation, typically within 24 to 48 hours.'
      }
    ]
  },
  {
    id: 'orthopaedics',
    slug: 'orthopaedics',
    name: 'Orthopaedics & Joint Replacement',
    iconName: 'Bone',
    tagline: 'Pioneers in Robotic Joint Arthroplasty and Sports Medicine',
    shortDesc: 'Precision robotic knee and hip replacements, arthroscopy, sports trauma, spine stabilization, and limb reconstruction.',
    fullDesc: 'Aarogyam Orthopaedics integrates computerized robotic navigation with rapid-recovery surgical protocols. Patients undergoing joint replacements often begin walking within 4 to 6 hours post-surgery in our specialized joint rehabilitation pavilion.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Joint Replacements', value: '8,500+' },
      { label: 'Mobility Recovery Time', value: '4 - 6 Hours' },
      { label: 'Dedicated OTs', value: '3 Class 100 OTs' },
      { label: 'Infection Rate', value: '< 0.05%' }
    ],
    keyProcedures: [
      'Robotic Total & Partial Knee Replacement',
      'Direct Anterior Total Hip Replacement',
      'Arthroscopic ACL, PCL & Meniscus Reconstruction',
      'Rotator Cuff & Shoulder Arthroscopy',
      'Spine Decompression & Microdiscectomy',
      'Complex Polytrauma & Pelvi-acetabular Reconstruction'
    ],
    keyTechnologies: [
      'Mako & Stryker Robotic Navigation Systems',
      'Class 10,000 Laminar Airflow Orthopaedic Theatres',
      'High-Definition 4K Arthroscopy Towers',
      'Advanced Hydrotherapy & Physiotherapy Gymnasium'
    ],
    conditionsTreated: [
      'Severe Osteoarthritis of Knee, Hip and Shoulder',
      'Sports Injuries & Ligament Tears',
      'Herniated Discs & Sciatica',
      'Osteoporosis & Fragility Fractures',
      'Avascular Necrosis (AVN)'
    ],
    faqs: [
      {
        question: 'How long will I need to stay in the hospital after a knee replacement?',
        answer: 'With our robotic minimally invasive technique and ERAS (Enhanced Recovery After Surgery) protocol, average hospital stay is 2 to 3 days.'
      },
      {
        question: 'Can both knees be operated in the same sitting?',
        answer: 'Yes, bilateral robotic knee replacement is performed for eligible patients after thorough cardiac and pre-anaesthetic clearance.'
      }
    ]
  },
  {
    id: 'neurology',
    slug: 'neurology',
    name: 'Neurology & Neurosurgery',
    iconName: 'Brain',
    tagline: 'Comprehensive Brain, Spine & Stroke Care',
    shortDesc: 'Comprehensive Stroke Unit, micro-neurosurgery, minimally invasive spine surgery, epilepsy monitoring, and neuro-rehabilitation.',
    fullDesc: 'Our Neurosciences department houses western India\'s advanced Neuro-Intensive Care Unit, pairing neuro-navigation and high-precision intraoperative monitoring for complex brain tumors, vascular aneurysms, and acute ischemic stroke interventions.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Acute Stroke Saves', value: '3,200+' },
      { label: 'Neuro Surgeries', value: '5,000+' },
      { label: 'Dedicated Neuro ICU', value: '20 Beds' },
      { label: 'Door-to-Needle Time', value: '< 35 mins' }
    ],
    keyProcedures: [
      'Emergency Mechanical Thrombectomy for Acute Stroke',
      'Awake Craniotomy & Brain Tumor Resection',
      'Endovascular Aneurysm Coiling & AVM Embolization',
      'Minimally Invasive Endoscopic Spine Surgery',
      'Deep Brain Stimulation (DBS) for Parkinson’s',
      'Pediatric Neurosurgery & Shunt Procedures'
    ],
    keyTechnologies: [
      'BrainLAB Optical Neuro-Navigation System',
      'Zeiss Kinevo 900 Surgical Microscope with Fluorescene',
      '32-Channel Intraoperative Neuro-Monitoring (IONM)',
      'Video-EEG Telemetry Monitoring Suite'
    ],
    conditionsTreated: [
      'Ischemic & Hemorrhagic Stroke',
      'Brain Tumors (Glioma, Meningioma, Acoustic Neuroma)',
      'Epilepsy & Intractable Seizures',
      'Parkinson\'s Disease & Tremor Disorders',
      'Spinal Cord Compression & Spinal Tumors'
    ],
    faqs: [
      {
        question: 'What is the "Golden Window" for stroke treatment?',
        answer: 'The first 4.5 hours from the onset of symptoms is the critical window for intravenous thrombolytic clot-busting medication, and up to 24 hours for mechanical thrombectomy.'
      }
    ]
  },
  {
    id: 'obstetrics-gynaecology',
    slug: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    iconName: 'Baby',
    tagline: 'Woman-Centric Care Across Every Phase of Life',
    shortDesc: 'High-risk obstetrics, painless natural birthing suites, advanced gynaecological laparoscopy, PCOS, and menopausal wellness.',
    fullDesc: 'Dedicated to women\'s health with warmth, clinical dignity, and world-class safety standards. Aarogyam features private LDR (Labor, Delivery, Recovery) suites, an adjoining Level III NICU, and 3D laparoscopic surgery for rapid recovery.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Happy Deliveries', value: '18,000+' },
      { label: 'Private LDR Suites', value: '6 Suites' },
      { label: 'Normal Delivery Focus', value: '82%' },
      { label: 'Level III NICU', value: '20 Beds' }
    ],
    keyProcedures: [
      'Painless Labour & Epidural Analgesia',
      'High-Risk Gestational Management',
      'Total Laparoscopic Hysterectomy (TLH)',
      'Laparoscopic Myomectomy (Fibroid Removal)',
      'Hysteroscopic Polypectomy & Septum Resection',
      'Comprehensive Infertility Workup'
    ],
    keyTechnologies: [
      'Modern LDR (Labor-Delivery-Recovery) Beds',
      'GE Voluson E10 4D High-Resolution Ultrasound',
      'Karl Storz 3D Laparoscopy Stack',
      'Centralized Fetal Telemetry & Monitoring'
    ],
    conditionsTreated: [
      'High-Risk Pregnancies & Multiple Gestations',
      'Uterine Fibroids & Adenomyosis',
      'Polycystic Ovarian Syndrome (PCOS)',
      'Endometriosis & Chronic Pelvic Pain',
      'Pelvic Organ Prolapse & Menopausal Disorders'
    ],
    faqs: [
      {
        question: 'Do you offer painless normal delivery options?',
        answer: 'Yes, Aarogyam provides 24/7 dedicated obstetric anaesthesia for painless labour through controlled epidural analgesia.'
      }
    ]
  },
  {
    id: 'gastroenterology',
    slug: 'gastroenterology',
    name: 'Gastroenterology & Hepatology',
    iconName: 'Activity',
    tagline: 'Comprehensive Digestive Health & Liver Care',
    shortDesc: 'Advanced endoscopy, colonoscopy, ERCP, liver disease management, fatty liver clinic, and surgical gastro interventions.',
    fullDesc: 'Our digestive disease institute provides comprehensive screening, diagnosis, and non-surgical endoscopic treatments for conditions of the esophagus, stomach, intestines, liver, pancreas, and biliary system.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Endoscopies Done', value: '22,000+' },
      { label: 'ERCP Procedures', value: '4,500+' },
      { label: 'Daycare Discharge', value: '94%' },
      { label: 'Endoscopy Suites', value: '3 Dedicated' }
    ],
    keyProcedures: [
      'Diagnostic & Therapeutic Upper GI Endoscopy',
      'High-Definition Colonoscopy with AI Polyp Detection',
      'Endoscopic Retrograde Cholangiopancreatography (ERCP)',
      'Endoscopic Ultrasound (EUS) & FNA Biopsy',
      'FibroScan for Non-Invasive Liver Assessment',
      'Third-Space Endoscopy (POEM for Achalasia)'
    ],
    keyTechnologies: [
      'Olympus EVIS X1 Endoscopy System with Narrow Band Imaging (NBI)',
      'Echosens FibroScan 502 Touch',
      'Dual-Energy ERCP C-Arm Imaging',
      'State-of-the-Art Automated Endoscope Reprocessors (AER)'
    ],
    conditionsTreated: [
      'Gastroesophageal Reflux (GERD) & Acid Peptic Disease',
      'Liver Cirrhosis & Fatty Liver (NAFLD / NASH)',
      'Inflammatory Bowel Disease (Ulcerative Colitis & Crohn’s)',
      'Gallbladder Stones & Common Bile Duct (CBD) Stones',
      'Acute and Chronic Pancreatitis'
    ],
    faqs: [
      {
        question: 'Is an endoscopy painful?',
        answer: 'No. At Aarogyam, endoscopies are performed under conscious sedation administered by our anaesthesiologists, ensuring a comfortable, painless experience with same-day discharge.'
      }
    ]
  },
  {
    id: 'oncology',
    slug: 'oncology',
    name: 'Comprehensive Cancer Care (Oncology)',
    iconName: 'ShieldAlert',
    tagline: 'Precision Oncology: Medical, Surgical & Preventative',
    shortDesc: 'Multidisciplinary tumor board, robotic surgical oncology, day-care chemotherapy lounge, targeted immunotherapy, and screening.',
    fullDesc: 'The Aarogyam Cancer Institute provides comprehensive oncology care guided by organ-specific tumor boards. Every patient case is evaluated jointly by surgical oncologists, medical oncologists, radiation experts, pathologists, and geneticists to determine the most effective personalized treatment plan.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Cancer Surgeries', value: '6,400+' },
      { label: 'Tumor Board Reviews', value: '100% Cases' },
      { label: 'Chemo Daycare Beds', value: '18 Bays' },
      { label: 'Screening Patients', value: '15,000+' }
    ],
    keyProcedures: [
      'Minimally Invasive & Robotic Cancer Resections',
      'Breast Conservation Surgery & Oncoplasty',
      'Hyperthermic Intraperitoneal Chemotherapy (HIPEC)',
      'Targeted Therapy & Precision Immunotherapy',
      'Chemotherapy Infusion via Chemoport',
      'Comprehensive Preventative Cancer Screening'
    ],
    keyTechnologies: [
      'Class 100 Biosafety Cabinet for Chemotherapy Compounding',
      'Da Vinci Surgical Robotic Suite',
      'Digital Mammography with 3D Tomosynthesis',
      'Automated Immunohistochemistry (IHC) Pathology Lab'
    ],
    conditionsTreated: [
      'Breast, Ovarian, Cervical and Uterine Cancers',
      'Gastrointestinal (Colorectal, Stomach, Pancreatic) Tumors',
      'Head, Neck and Oral Cavity Cancers',
      'Lung and Thoracic Malignancies',
      'Hematologic Malignancies (Leukemia, Lymphoma, Myeloma)'
    ],
    faqs: [
      {
        question: 'What is a Multidisciplinary Tumor Board?',
        answer: 'A team of surgical, medical, and radiation oncologists, radiologists, and pathologists meet regularly to discuss each cancer patient’s reports and collectively finalize an evidence-based roadmap.'
      }
    ]
  },
  {
    id: 'paediatrics',
    slug: 'paediatrics',
    name: 'Paediatrics & Neonatology',
    iconName: 'Smile',
    tagline: 'Compassionate Care for Newborns, Children & Teens',
    shortDesc: 'Level III NICU, pediatric intensive care (PICU), pediatric surgery, vaccination clinics, and child growth surveillance.',
    fullDesc: 'From premature infants requiring specialized incubators to playful toddlers and teenagers, Aarogyam\'s Department of Child Health combines clinical pediatric excellence with child-friendly environments that minimize hospital anxiety.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Preterm Infants Saved', value: '2,800+' },
      { label: 'Level III NICU Beds', value: '20 Beds' },
      { label: 'Pediatric ICU', value: '10 Beds' },
      { label: 'Vaccination Coverage', value: '100% IAP' }
    ],
    keyProcedures: [
      'High-Frequency Neonatal Ventilation & Surfactant Therapy',
      'Total Parenteral Nutrition (TPN) for Preterm Babies',
      'Pediatric Minimally Invasive Laparoscopy',
      'Developmental Assessment & Growth Surveillance',
      'Pediatric Asthma Clinic & Allergy Desensitization'
    ],
    keyTechnologies: [
      'GE Giraffe OmniBed Incubators',
      'SLE High-Frequency Oscillatory Ventilators',
      'LED Double-Surface Phototherapy Units',
      'Non-Invasive Nitric Oxide Delivery System'
    ],
    conditionsTreated: [
      'Extreme Prematurity (< 28 weeks gestation)',
      'Severe Childhood Pneumonia, Sepsis & Dengue',
      'Childhood Asthma, Allergies & Eczema',
      'Failure to Thrive & Growth Stunting',
      'Congenital Malformations'
    ],
    faqs: [
      {
        question: 'Does the hospital provide routine childhood immunizations?',
        answer: 'Yes, our Well-Baby and Pediatric Clinic operates 6 days a week, administering all national and IAP-recommended vaccines with cold-chain monitoring.'
      }
    ]
  },
  {
    id: 'nephrology',
    slug: 'nephrology',
    name: 'Nephrology & Renal Dialysis',
    iconName: 'Droplet',
    tagline: 'Advanced Kidney Care and 24/7 Dialysis Services',
    shortDesc: '24/7 Hemodialysis, CRRT for critical care, kidney transplant program, diabetic kidney clinic, and ultrasound-guided renal biopsy.',
    fullDesc: 'Comprehensive renal diagnostics and therapeutic care. Aarogyam\'s 24/7 Dialysis Pavilion features 24 computerized dialysis machines, dedicated reverse-osmosis water filtration, and isolated units for seropositive patients.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Dialysis Sessions Done', value: '45,000+' },
      { label: 'Dialysis Stations', value: '24 Beds' },
      { label: 'Water Purity Standard', value: 'AAMI / ISO' },
      { label: 'Transplant Success', value: '98.5%' }
    ],
    keyProcedures: [
      'High-Flux Hemodialysis & Hemodiafiltration',
      'Continuous Renal Replacement Therapy (CRRT) in ICU',
      'AV Fistula Creation & PermCath Placement',
      'Live-Donor Kidney Transplantation',
      'Ultrasound-Guided Real-Time Renal Biopsy'
    ],
    keyTechnologies: [
      'Fresenius 5008S Hemodiafiltration Stations',
      'Double-Pass RO Ultrapure Water System',
      'Prismaflex CRRT Systems in ICU'
    ],
    conditionsTreated: [
      'Chronic Kidney Disease (Stages 1 to 5)',
      'Acute Kidney Injury & Fluid Overload',
      'Diabetic & Hypertensive Nephropathy',
      'Glomerulonephritis & Nephrotic Syndrome',
      'Polycystic Kidney Disease'
    ],
    faqs: [
      {
        question: 'Is emergency dialysis available during night hours?',
        answer: 'Yes, our dialysis center operates round-the-clock with nephrologists and certified dialysis technicians on active duty.'
      }
    ]
  },
  {
    id: 'urology',
    slug: 'urology',
    name: 'Urology & Andrology',
    iconName: 'Crosshair',
    tagline: 'Minimally Invasive Laser & Robotic Urological Care',
    shortDesc: 'Holmium laser stone removal, prostate enucleation (HoLEP), robotic kidney and prostate surgeries, and male health.',
    fullDesc: 'Aarogyam Urology specializes in scarless laser management for urinary stones, minimally invasive surgery for enlarged prostates, robotic uro-oncology, and reconstructive urology.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Laser Stone Procedures', value: '12,000+' },
      { label: 'Same-day Discharge', value: '88%' },
      { label: 'Laser Tech', value: '100W Holmium' },
      { label: 'Infection Rate', value: '< 0.1%' }
    ],
    keyProcedures: [
      'Retrograde Intrarenal Surgery (RIRS) with Flexible Ureteroscopy',
      'Mini-PCNL for Large Kidney Stones',
      'Holmium Laser Enucleation of Prostate (HoLEP)',
      'Robotic Partial Nephrectomy & Radical Prostatectomy',
      'Microsurgical Varicocelectomy'
    ],
    keyTechnologies: [
      'Lumenis Pulse 100W Holmium Laser',
      'Olympus Flexible Digital Ureteroscopes',
      'Storz HD Uro-laparoscopy Stack'
    ],
    conditionsTreated: [
      'Kidney, Ureteric & Bladder Stones',
      'Enlarged Prostate (BPH)',
      'Prostate, Bladder & Kidney Cancer',
      'Urethral Strictures',
      'Male Infertility & Erectile Dysfunction'
    ],
    faqs: [
      {
        question: 'Are incisions required for laser kidney stone surgery?',
        answer: 'No incisions are made. Flexible scopes enter through the natural urinary tract, and the laser pulverizes stones into fine dust.'
      }
    ]
  },
  {
    id: 'pulmonology',
    slug: 'pulmonology',
    name: 'Pulmonology & Critical Care',
    iconName: 'Wind',
    tagline: 'Advanced Respiratory Care & Sleep Diagnostics',
    shortDesc: 'Asthma, COPD, ILD management, diagnostic bronchoscopy, allergy profiling, and Level 1 overnight sleep diagnostic studies.',
    fullDesc: 'Dedicated to diagnosing and treating diseases affecting the lungs and breathing airways. Aarogyam features dedicated pulmonary function laboratories, allergy immunotherapy, and interventional bronchoscopy suites.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Bronchoscopies Done', value: '4,000+' },
      { label: 'Sleep Studies Conducted', value: '2,500+' },
      { label: 'Dedicated ICU Beds', value: '85 Beds' },
      { label: 'PFT Precision', value: 'Gold Standard' }
    ],
    keyProcedures: [
      'Flexible Fibreoptic & Video Bronchoscopy',
      'Bronchoalveolar Lavage (BAL) & Transbronchial Biopsy',
      'Complete Pulmonary Function Testing (Spirometry, DLCO)',
      'Overnight Polysomnography (Sleep Study)',
      'Intercostal Chest Tube Drainage & Pleurodesis'
    ],
    keyTechnologies: [
      'Jaeger MasterScreen PFT System',
      'Philips Alice 6 Diagnostic Sleep Telemetry System',
      'Fujinon Video Bronchoscopes with EBUS'
    ],
    conditionsTreated: [
      'Chronic Obstructive Pulmonary Disease (COPD)',
      'Severe Refractory Asthma',
      'Interstitial Lung Disease (ILD) & Pulmonary Fibrosis',
      'Obstructive Sleep Apnea (OSA)',
      'Pulmonary Tuberculosis & Pleural Effusion'
    ],
    faqs: [
      {
        question: 'What happens during a sleep study for snoring?',
        answer: 'You stay overnight in our private sleep suite while non-invasive sensors monitor brain waves, oxygen saturation, airflow, and heart rhythm to identify sleep apnea.'
      }
    ]
  },
  {
    id: 'general-surgery',
    slug: 'general-surgery',
    name: 'General & Minimally Invasive Surgery',
    iconName: 'Scissors',
    tagline: 'Precision Laparoscopy & Daycare Surgical Excellence',
    shortDesc: 'Laparoscopic hernia repair, gallbladder removal, appendectomy, laser proctology (piles, fistula), and trauma surgery.',
    fullDesc: 'Our Department of General & Laparoscopic Surgery utilizes high-definition 4K camera systems to perform complex abdominal procedures through miniature keyhole incisions, leading to minimal pain, negligible scarring, and rapid resumption of regular activity.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Laparoscopic Surgeries', value: '16,000+' },
      { label: 'Daycare Discharges', value: '75%' },
      { label: 'Modular OTs', value: '12 Theatres' },
      { label: 'Wound Infection Rate', value: '< 0.08%' }
    ],
    keyProcedures: [
      'Laparoscopic Cholecystectomy (Gallbladder Removal)',
      'Laparoscopic Inguinal & Ventral Hernia Repair (TEP / TAPP)',
      'Laparoscopic Appendectomy',
      'Laser Proctology (Fissure, Fistula, Hemorrhoids)',
      'Emergency Exploratory Laparotomy for Trauma'
    ],
    keyTechnologies: [
      'Olympus 4K Ultra-HD Laparoscopic Towers',
      'Harmonic Scalpel & LigaSure Vessel Sealing',
      'Leonardo Diode Laser for Proctology'
    ],
    conditionsTreated: [
      'Gallstones & Acute Cholecystitis',
      'Hernias (Inguinal, Umbilical, Incisional)',
      'Appendicitis',
      'Piles, Anal Fistula & Fissures',
      'Thyroid & Salivary Gland Tumors'
    ],
    faqs: [
      {
        question: 'How fast can I resume office work after laparoscopic gallbladder surgery?',
        answer: 'Most patients return home within 24 hours and can comfortably resume light desk work within 3 to 5 days.'
      }
    ]
  },
  {
    id: 'internal-medicine',
    slug: 'internal-medicine',
    name: 'Internal Medicine & Diabetology',
    iconName: 'Stethoscope',
    tagline: 'Holistic Adult Medical Care & Chronic Disease Management',
    shortDesc: 'Comprehensive management of diabetes, hypertension, infectious diseases (dengue, malaria), thyroid, and multisystem disorders.',
    fullDesc: 'The cornerstone of patient care at Aarogyam. Our physicians provide holistic diagnosis and treatment for acute infectious illnesses and long-term chronic conditions like diabetes, dyslipidemia, and autoimmune diseases.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'OPD Patients Treated', value: '60,000+' },
      { label: 'Comprehensive Health Checks', value: '18,000+' },
      { label: 'Diabetic Reversals Supported', value: '1,400+' },
      { label: '24/7 Physician On Duty', value: 'Yes' }
    ],
    keyProcedures: [
      'Comprehensive Metabolic & Diabetes Care',
      'Management of Fever of Unknown Origin (FUO)',
      'Continuous Glucose Monitoring (CGM) Initiation',
      'Geriatric Health Assessment & Polypharmacy Review',
      'Adult Preventive Immunization'
    ],
    keyTechnologies: [
      'Abbott Freestyle Libre Continuous Glucose Monitoring',
      'Automated Rapid Blood Gas (ABG) Analyzers',
      'Point-of-Care Ultrasound (POCUS) at Bedside'
    ],
    conditionsTreated: [
      'Type 1 & Type 2 Diabetes Mellitus',
      'Hypertension & Metabolic Syndrome',
      'Infectious Diseases (Typhoid, Dengue, Malaria, Swine Flu)',
      'Thyroid and Endocrine Disorders',
      'Unexplained Weight Loss or Fatigue'
    ],
    faqs: [
      {
        question: 'Do you offer preventative diabetic complications screenings?',
        answer: 'Yes, our Diabetic Comprehensive Check evaluates retinal microvasculature, peripheral nerve sensation, urine microalbumin, and cardiac risk markers.'
      }
    ]
  },
  {
    id: 'dermatology',
    slug: 'dermatology',
    name: 'Dermatology & Cosmetology',
    iconName: 'Sparkles',
    tagline: 'Clinical Skin Health and Evidence-Based Aesthetics',
    shortDesc: 'Treatment for psoriasis, eczema, acne, vitiligo, hair restoration, scar revision, and medical aesthetic procedures.',
    fullDesc: 'Aarogyam Dermatology combines medical skin pathology care with cutting-edge laser technologies to ensure patients look and feel their healthiest.',
    image: 'https://images.unsplash.com/photo-1594824813584-93b51b272f2d?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Patients Consulted', value: '14,000+' },
      { label: 'Laser Treatments', value: '5,200+' },
      { label: 'FDA-Approved Lasers', value: '4 Devices' },
      { label: 'Patient Satisfaction', value: '98.4%' }
    ],
    keyProcedures: [
      'Narrowband UVB Phototherapy for Vitiligo & Psoriasis',
      'Fractional CO2 Laser for Acne Scars',
      'Platelet-Rich Plasma (PRP) for Hair Loss',
      'Dermatosurgery for Moles, Cysts & Skin Tags',
      'Chemical Peels & Medical Hydrafacials'
    ],
    keyTechnologies: [
      'Alma Harmony XL Pro Laser Platform',
      'Waldmann Whole-Body Phototherapy Chamber',
      'DermLite DL4 Polarized Dermatoscope'
    ],
    conditionsTreated: [
      'Psoriasis & Vitiligo',
      'Cystic Acne & Severe Post-Acne Scarring',
      'Alopecia Areata & Androgenetic Alopecia',
      'Atopic Dermatitis & Eczema',
      'Fungal Infections & Urticaria'
    ],
    faqs: [
      {
        question: 'Are cosmetic skin treatments safe on sensitive Indian skin?',
        answer: 'Yes. All laser protocols at Aarogyam are calibrated specifically for Indian skin types (Fitzpatrick III-V) under dermatologist supervision.'
      }
    ]
  },
  {
    id: 'ophthalmology',
    slug: 'ophthalmology',
    name: 'Ophthalmology (Eye Care)',
    iconName: 'Eye',
    tagline: 'Preserving Vision with Robotic & Laser Precision',
    shortDesc: 'Micro-incision cataract surgery (MICS), diabetic retinopathy, glaucoma management, LASIK evaluation, and pediatric vision.',
    fullDesc: 'From advanced bladeless cataract extractions with premium multifocal and toric lens implants to retinal laser photocoagulation, Aarogyam Eye Institute provides complete visual wellness under one roof.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Cataract Extractions', value: '11,000+' },
      { label: 'Laser Retinal Procedures', value: '3,800+' },
      { label: 'Daycare Surgical Time', value: '15 - 20 Mins' },
      { label: 'Visual Acuity Recovery', value: '99.1%' }
    ],
    keyProcedures: [
      'Micro-Incision Phacoemulsification with Foldable IOLs',
      'Intravitreal Anti-VEGF Injections for Retinal Edema',
      'Argon Laser Photocoagulation for Diabetic Retinopathy',
      'Selective Laser Trabeculoplasty (SLT) for Glaucoma',
      'Computerized Visual Field Analysis (Perimetry)'
    ],
    keyTechnologies: [
      'Alcon Centurion Vision System for Phaco',
      'Zeiss Cirrus HD-OCT Optical Coherence Tomographer',
      'Humphrey Field Analyzer 3 (HFA3)',
      'Zeiss Lumera 700 Surgical Microscope'
    ],
    conditionsTreated: [
      'Age-Related Cataracts',
      'Diabetic Retinopathy & Macular Edema',
      'Glaucoma & High Intraocular Pressure',
      'Dry Eye Syndrome & Blepharitis',
      'Refractive Errors (Myopia, Hyperopia, Astigmatism)'
    ],
    faqs: [
      {
        question: 'Can I go home on the same day after cataract surgery?',
        answer: 'Yes, micro-incision cataract surgery takes only 15 minutes and patients are discharged within 2 hours after a brief rest.'
      }
    ]
  },
  {
    id: 'emergency-trauma',
    slug: 'emergency-trauma',
    name: 'Emergency & 24/7 Trauma Care',
    iconName: 'Ambulance',
    tagline: 'Life-Saving Critical Interventions Round-the-Clock',
    shortDesc: 'Immediate triage, dedicated resuscitation bays, mobile telemetry ambulances, stroke and cardiac emergency pathways.',
    fullDesc: 'Our 24-hour Emergency Department is equipped with dedicated Level 1 trauma resuscitation bays, rapid CT access, round-the-clock emergency physicians, trauma surgeons, and advanced cardiac life support (ACLS) response teams.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Emergencies Handled', value: '30,000+' },
      { label: 'Triage Response', value: 'Instant' },
      { label: 'ACLS Ambulances', value: '6 Mobile Units' },
      { label: 'Availability', value: '24 Hours / 365 Days' }
    ],
    keyProcedures: [
      'Emergency Endotracheal Intubation & Mechanical Ventilation',
      'Immediate Thrombolysis for Stroke & Heart Attack',
      'Polytrauma Resuscitation & Damage Control Surgery',
      'Emergency Arterial Embolization for Massive Hemorrhage',
      'Pediatric Emergency Resuscitation'
    ],
    keyTechnologies: [
      'Point-of-Care Blood Gas & Cardiac Enzyme Analyzers (results < 10 mins)',
      'Direct Elevator Access to Modular Theatres and Cath Labs',
      'Philips Intellivue Patient Resuscitation Monitors',
      '6 GPS-Enabled Telemetry Ambulances'
    ],
    conditionsTreated: [
      'Acute Myocardial Infarction (Heart Attack)',
      'Acute Ischemic / Hemorrhagic Stroke',
      'Motor Vehicle Accidents & Severe Polytrauma',
      'Acute Respiratory Failure & Severe Asthma Attack',
      'Poisoning, Anaphylaxis & Snakebite Emergencies'
    ],
    faqs: [
      {
        question: 'What is the direct emergency ambulance contact number?',
        answer: 'You can immediately dial +91 79 4567 8900 anytime. Our dispatch team mobilizes the nearest ambulance with ACLS staff instantly.'
      }
    ]
  }
];
