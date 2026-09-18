import { Doctor } from '../types';

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-ananya-mehta',
    slug: 'dr-ananya-mehta',
    name: 'Dr. Ananya Mehta',
    title: 'Senior Consultant – Interventional Cardiology',
    departmentId: 'cardiology',
    specialty: 'Cardiology',
    qualifications: 'MBBS, MD (Medicine), DM (Cardiology), FACC (USA)',
    experienceYears: 18,
    opdTimings: 'Mon - Fri: 10:00 AM – 03:00 PM | Sat: 10:00 AM – 01:00 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1200,
    rating: 4.9,
    reviewCount: 342,
    gender: 'Female',
    isAvailableToday: true,
    nextAvailableSlot: 'Today, 11:30 AM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Ananya Mehta is an accomplished interventional cardiologist with over 18 years of clinical leadership in complex coronary angioplasties, radial interventions, heart failure management, and structural heart procedures. Having trained at premier institutes in India and the United States, she has spearheaded Aarogyam\'s 24/7 Primary Angioplasty (Door-to-Balloon < 50 mins) clinical protocol.',
    education: [
      'DM Cardiology – All India Institute of Medical Sciences (AIIMS), New Delhi',
      'MD Internal Medicine – B.J. Medical College, Ahmedabad',
      'MBBS – Gujarat University (Gold Medalist)',
      'Fellowship in Complex Coronary Interventions – Mount Sinai, New York'
    ],
    experienceHistory: [
      'Head of Interventional Cardiology – Aarogyam Multispeciality Hospital (2018 – Present)',
      'Senior Consultant Cardiologist – Apollo Hospitals, Ahmedabad (2012 – 2018)',
      'Assistant Professor – Department of Cardiology, UN Mehta Institute (2007 – 2012)'
    ],
    areasOfExpertise: [
      'Complex Coronary Angioplasty & Stenting',
      'Radial Artery Catheterization',
      'Heart Failure & Cardiomyopathy Care',
      'Pacemaker & ICD Implantation',
      'Preventive & Women’s Cardiovascular Health'
    ],
    conditionsTreated: [
      'Coronary Artery Disease',
      'Acute Myocardial Infarction (Heart Attack)',
      'Cardiac Arrhythmias & Palpitations',
      'Hypertensive Heart Disease',
      'Valvular Heart Conditions'
    ]
  },
  {
    id: 'dr-rohan-shah',
    slug: 'dr-rohan-shah',
    name: 'Dr. Rohan Shah',
    title: 'Consultant – Orthopaedics & Robotic Joint Replacement',
    departmentId: 'orthopaedics',
    specialty: 'Orthopaedics',
    qualifications: 'MBBS, MS (Orthopaedics), MCh (Ortho, UK), Fellowship Joint Replacement (Germany)',
    experienceYears: 14,
    opdTimings: 'Mon - Sat: 09:30 AM – 02:30 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1000,
    rating: 4.8,
    reviewCount: 289,
    gender: 'Male',
    isAvailableToday: true,
    nextAvailableSlot: 'Today, 02:00 PM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Rohan Shah is a recognized specialist in minimally invasive and robotic-assisted total knee and hip replacements. He emphasizes rapid recovery protocols, enabling most joint replacement patients to walk within hours after surgery. Dr. Shah is also deeply active in sports medicine and complex fracture trauma care.',
    education: [
      'MCh Orthopaedics – University of Dundee, United Kingdom',
      'Fellowship in Adult Reconstruction – Asklepios Hospital, Hamburg, Germany',
      'MS Orthopaedics – Civil Hospital & B.J. Medical College, Ahmedabad',
      'MBBS – Pramukhswami Medical College, Karamsad'
    ],
    experienceHistory: [
      'Consultant Orthopaedic Surgeon – Aarogyam Multispeciality Hospital (2019 – Present)',
      'Associate Consultant – Shalby Hospitals, Ahmedabad (2015 – 2019)',
      'Clinical Fellow in Arthroscopy – Ganga Hospital, Coimbatore (2013 – 2015)'
    ],
    areasOfExpertise: [
      'Robotic Total Knee Replacement',
      'Total Hip Arthroplasty (Direct Anterior Approach)',
      'Arthroscopic ACL / Meniscus Reconstruction',
      'Geriatric Fragility Fractures',
      'Sports Injury Rehabilitation'
    ],
    conditionsTreated: [
      'Osteoarthritis of Knee & Hip',
      'Ligament & Meniscal Tears',
      'Frozen Shoulder & Rotator Cuff Injuries',
      'Complex Polytrauma Fractures',
      'Avascular Necrosis (AVN) of Hip'
    ]
  },
  {
    id: 'dr-kavya-patel',
    slug: 'dr-kavya-patel',
    name: 'Dr. Kavya Patel',
    title: 'Senior Consultant – Obstetrics, Gynaecology & Laparoscopic Surgery',
    departmentId: 'obstetrics-gynaecology',
    specialty: 'Obstetrics & Gynaecology',
    qualifications: 'MBBS, MS (OBG), DNB, FICOG, Advanced Laparoscopy (Kiel, Germany)',
    experienceYears: 16,
    opdTimings: 'Mon - Fri: 11:00 AM – 04:00 PM | Sat: 11:00 AM – 02:00 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1100,
    rating: 4.9,
    reviewCount: 412,
    gender: 'Female',
    isAvailableToday: true,
    nextAvailableSlot: 'Today, 12:30 PM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1594824813584-93b51b272f2d?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Kavya Patel brings over 16 years of devoted practice in high-risk obstetrics, natural birthing methodologies, painless labour, and complex gynecological laparoscopy. Known for her empathetic bedside manner and transparent counseling, she has guided over 5,000 successful deliveries across Gujarat.',
    education: [
      'Diploma in Minimal Access Gynaecology – Kiel School of Endoscopy, Germany',
      'DNB (Obstetrics & Gynaecology) – National Board of Examinations, New Delhi',
      'MS (Obstetrics & Gynaecology) – Smt. NHL Municipal Medical College, Ahmedabad',
      'MBBS – Sardar Patel University'
    ],
    experienceHistory: [
      'Head of Obstetrics & Gynaecology – Aarogyam Multispeciality Hospital (2017 – Present)',
      'Senior Consultant – Sterling Hospitals, Ahmedabad (2013 – 2017)',
      'Consultant Gynaecologist – V.S. General Hospital, Ahmedabad (2009 – 2013)'
    ],
    areasOfExpertise: [
      'High-Risk Pregnancy Management',
      'Minimally Invasive Gynecologic Laparoscopy',
      'Uterine Fibroid & Endometriosis Excision',
      'Polycystic Ovarian Syndrome (PCOS) Clinic',
      'Adolescent & Menopausal Care'
    ],
    conditionsTreated: [
      'High-Risk Gestation (Preeclampsia, Gestational Diabetes)',
      'Uterine Fibroids & Ovarian Cysts',
      'Endometriosis & Pelvic Pain',
      'Infertility Workup',
      'Abnormal Uterine Bleeding'
    ]
  },
  {
    id: 'dr-arjun-desai',
    slug: 'dr-arjun-desai',
    name: 'Dr. Arjun Desai',
    title: 'Consultant – Neurology & Comprehensive Stroke Care',
    departmentId: 'neurology',
    specialty: 'Neurology',
    qualifications: 'MBBS, MD (Medicine), DM (Neurology), Fellowship in Stroke (Calgary)',
    experienceYears: 12,
    opdTimings: 'Mon - Sat: 10:30 AM – 03:30 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1300,
    rating: 4.8,
    reviewCount: 198,
    gender: 'Male',
    isAvailableToday: false,
    nextAvailableSlot: 'Tomorrow, 10:30 AM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Arjun Desai leads Aarogyam\'s Comprehensive Stroke Center and Neuro-critical Care unit. Trained extensively in acute ischemic stroke thrombolysis, mechanical thrombectomy pathways, epilepsy syndromes, and movement disorders, Dr. Desai combines advanced clinical diagnostics with dedicated patient support.',
    education: [
      'Clinical Stroke Fellowship – University of Calgary, Canada',
      'DM Neurology – King Edward Memorial (KEM) Hospital, Mumbai',
      'MD Internal Medicine – Medical College, Baroda',
      'MBBS – Gujarat University'
    ],
    experienceHistory: [
      'Lead Neurologist – Aarogyam Multispeciality Hospital (2020 – Present)',
      'Consultant Neurologist – Zydus Hospital, Ahmedabad (2016 – 2020)',
      'Registrar in Neuro-ICU – Hinduja Hospital, Mumbai (2014 – 2016)'
    ],
    areasOfExpertise: [
      'Hyper-acute Ischemic Stroke Protocol',
      'Intractable Epilepsy Management',
      'Parkinson\'s Disease & Movement Disorders',
      'Migraine & Refractory Headache Clinics',
      'Neuromuscular & Autoimmune Neuropathies'
    ],
    conditionsTreated: [
      'Acute Stroke & TIA',
      'Epilepsy & Seizures',
      'Parkinson\'s Disease & Tremors',
      'Chronic Migraines & Cluster Headaches',
      'Multiple Sclerosis & Myasthenia Gravis'
    ]
  },
  {
    id: 'dr-neha-trivedi',
    slug: 'dr-neha-trivedi',
    name: 'Dr. Neha Trivedi',
    title: 'Consultant – Paediatrics & Neonatal Intensive Care (NICU)',
    departmentId: 'paediatrics',
    specialty: 'Paediatrics',
    qualifications: 'MBBS, MD (Paediatrics), Fellowship in Neonatology (IAP), PALS Certified',
    experienceYears: 10,
    opdTimings: 'Mon - Sat: 09:00 AM – 01:00 PM | 05:00 PM – 07:30 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 900,
    rating: 4.9,
    reviewCount: 310,
    gender: 'Female',
    isAvailableToday: true,
    nextAvailableSlot: 'Today, 05:30 PM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Neha Trivedi is an empathetic pediatrician and neonatal intensivist overseeing Aarogyam\'s 20-bed Level III NICU. She specializes in premature newborn survival, developmental surveillance, pediatric respiratory disorders, and evidence-based pediatric vaccination.',
    education: [
      'Fellowship in Neonatal Intensive Care – IAP Neonatology Chapter',
      'MD Paediatrics – B.J. Medical College, Civil Hospital, Ahmedabad',
      'MBBS – Smt. NHL Municipal Medical College, Ahmedabad'
    ],
    experienceHistory: [
      'Senior Pediatrician & In-Charge NICU – Aarogyam Multispeciality Hospital (2019 – Present)',
      'Consultant Pediatrician – Apollo Cradle & Children\'s Hospital (2016 – 2019)',
      'Clinical Fellow – KEM Hospital, Pune (2014 – 2016)'
    ],
    areasOfExpertise: [
      'Level III Neonatal Intensive Care (Extremely Low Birth Weight)',
      'Childhood Growth & Neuro-developmental Monitoring',
      'Pediatric Asthma & Allergies',
      'Comprehensive Pediatric Vaccination Schedules',
      'Pediatric Infectious Illnesses'
    ],
    conditionsTreated: [
      'Premature Birth & Respiratory Distress in Newborns',
      'Severe Childhood Infections & Fevers',
      'Asthma & Bronchiolitis',
      'Failure to Thrive & Nutritional Deficiencies',
      'Developmental Delays'
    ]
  },
  {
    id: 'dr-vivek-joshi',
    slug: 'dr-vivek-joshi',
    name: 'Dr. Vivek Joshi',
    title: 'Senior Consultant – Gastroenterology & Hepatology',
    departmentId: 'gastroenterology',
    specialty: 'Gastroenterology',
    qualifications: 'MBBS, MD (Medicine), DM (Gastroenterology), FSGE (Japan)',
    experienceYears: 17,
    opdTimings: 'Mon - Fri: 10:00 AM – 03:00 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1200,
    rating: 4.8,
    reviewCount: 264,
    gender: 'Male',
    isAvailableToday: true,
    nextAvailableSlot: 'Today, 03:00 PM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Vivek Joshi is a senior gastroenterologist with extensive expertise in therapeutic endoscopies, ERCP, endoscopic ultrasound (EUS), fatty liver disease, and inflammatory bowel disease (IBD). He trained in advanced optical diagnostic endoscopy in Tokyo, Japan, and has performed over 12,000 successful endoscopic interventions.',
    education: [
      'Advanced Therapeutic Endoscopy Fellowship – National Cancer Center, Tokyo, Japan',
      'DM Gastroenterology – Post Graduate Institute of Medical Education & Research (PGIMER), Chandigarh',
      'MD Internal Medicine – B.J. Medical College, Ahmedabad',
      'MBBS – Gujarat University'
    ],
    experienceHistory: [
      'Director of Digestive Diseases – Aarogyam Multispeciality Hospital (2018 – Present)',
      'Senior Consultant Gastroenterologist – CIMS Hospital, Ahmedabad (2012 – 2018)',
      'Assistant Professor – Department of Hepatology, PGIMER, Chandigarh (2008 – 2012)'
    ],
    areasOfExpertise: [
      'Therapeutic Endoscopy & Colonoscopy',
      'ERCP (Biliary & Pancreatic Stenting)',
      'Endoscopic Ultrasound (EUS) Guided Fine Needle Aspiration',
      'Nonalcoholic Fatty Liver Disease (NAFLD) & Cirrhosis',
      'Ulcerative Colitis & Crohn\'s Disease'
    ],
    conditionsTreated: [
      'Gastroesophageal Reflux (GERD) & Peptic Ulcers',
      'Gallstones & Obstructive Jaundice',
      'Cirrhosis & Chronic Hepatitis B / C',
      'Pancreatitis & Pancreatic Pseudocysts',
      'GI Bleeding & Polyp Syndromes'
    ]
  },
  {
    id: 'dr-rajesh-parikh',
    slug: 'dr-rajesh-parikh',
    name: 'Dr. Rajesh Parikh',
    title: 'Director & Senior Consultant – Surgical Oncology',
    departmentId: 'oncology',
    specialty: 'Oncology',
    qualifications: 'MBBS, MS (Surgery), MCh (Surgical Oncology), FICS, FACS (USA)',
    experienceYears: 22,
    opdTimings: 'Mon - Fri: 02:00 PM – 06:00 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1500,
    rating: 4.9,
    reviewCount: 388,
    gender: 'Male',
    isAvailableToday: false,
    nextAvailableSlot: 'Tomorrow, 02:30 PM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Rajesh Parikh is a nationally recognized surgical oncologist with over two decades of oncological surgical leadership. Specializing in organ-preserving oncological resections, robotic thoracic and gastrointestinal oncology, and multidisciplinary tumor boards, Dr. Parikh has mentored generations of surgical oncologists in western India.',
    education: [
      'MCh Surgical Oncology – Tata Memorial Hospital, Mumbai',
      'Fellowship in Robotic Surgical Oncology – Roswell Park Cancer Institute, Buffalo, NY',
      'MS General Surgery – Gujarat Cancer & Research Institute (GCRI), Ahmedabad',
      'MBBS – B.J. Medical College, Ahmedabad'
    ],
    experienceHistory: [
      'Chairman, Aarogyam Comprehensive Cancer Institute (2016 – Present)',
      'Chief Surgical Oncologist – HCG Cancer Centre, Ahmedabad (2010 – 2016)',
      'Associate Professor – Tata Memorial Centre, Mumbai (2004 – 2010)'
    ],
    areasOfExpertise: [
      'Robotic Gastrointestinal & Colorectal Oncology',
      'Breast Cancer Conservative Surgery & Sentinel Lymph Node Biopsy',
      'Head & Neck Tumor Resection with Microvascular Reconstruction',
      'Gynaecological Malignancies & HIPEC Surgery',
      'Multidisciplinary Tumor Board Coordination'
    ],
    conditionsTreated: [
      'Breast Carcinoma',
      'Oral Cavity & Head-Neck Cancers',
      'Colorectal & Esophageal Cancers',
      'Ovarian & Cervical Cancers',
      'Sarcomas & Soft Tissue Tumors'
    ]
  },
  {
    id: 'dr-sneha-rao',
    slug: 'dr-sneha-rao',
    name: 'Dr. Sneha Rao',
    title: 'Consultant – Pulmonology, Sleep Medicine & Critical Care',
    departmentId: 'pulmonology',
    specialty: 'Pulmonology',
    qualifications: 'MBBS, MD (Pulmonary Medicine), DNB (Resp Diseases), FCCP (USA), EDIC',
    experienceYears: 11,
    opdTimings: 'Mon - Sat: 11:30 AM – 04:30 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1000,
    rating: 4.8,
    reviewCount: 175,
    gender: 'Female',
    isAvailableToday: true,
    nextAvailableSlot: 'Today, 04:00 PM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Sneha Rao is a consultant pulmonologist and critical care physician with sharp focus on interventional bronchoscopy, obstructive airway disorders, interstitial lung diseases (ILD), and sleep apnea. She manages Aarogyam\'s state-of-the-art Sleep Diagnostic Lab and Pulmonary Function Testing facility.',
    education: [
      'European Diploma in Intensive Care (EDIC) – Brussels, Belgium',
      'DNB Respiratory Diseases – National Board of Examinations, New Delhi',
      'MD Pulmonary Medicine – Vallabhbhai Patel Chest Institute, University of Delhi',
      'MBBS – Kasturba Medical College, Manipal'
    ],
    experienceHistory: [
      'Consultant Pulmonologist – Aarogyam Multispeciality Hospital (2020 – Present)',
      'Associate Consultant – Medanta – The Medicity, Gurugram (2016 – 2020)',
      'Senior Resident – VP Chest Institute, Delhi (2013 – 2016)'
    ],
    areasOfExpertise: [
      'Diagnostic & Therapeutic Bronchoscopy',
      'Severe Asthma & COPD Management',
      'Interstitial Lung Disease (ILD) & Sarcoidosis',
      'Obstructive Sleep Apnea (Polysomnography)',
      'Post-Infectious Pulmonary Fibrosis Care'
    ],
    conditionsTreated: [
      'Chronic Obstructive Pulmonary Disease (COPD)',
      'Severe Bronchial Asthma',
      'Pneumonia & Pleural Effusion',
      'Tuberculosis & Drug-Resistant TB',
      'Sleep Apnea & Snoring Disorders'
    ]
  },
  {
    id: 'dr-manish-dave',
    slug: 'dr-manish-dave',
    name: 'Dr. Manish Dave',
    title: 'Senior Consultant – Nephrology & Kidney Transplantation',
    departmentId: 'nephrology',
    specialty: 'Nephrology',
    qualifications: 'MBBS, MD (Medicine), DM (Nephrology), FISN',
    experienceYears: 15,
    opdTimings: 'Mon - Fri: 09:00 AM – 02:00 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1200,
    rating: 4.8,
    reviewCount: 220,
    gender: 'Male',
    isAvailableToday: true,
    nextAvailableSlot: 'Today, 01:30 PM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Manish Dave has extensive experience managing chronic kidney disease (CKD), acute renal failure, dialysis modalities, and live-donor renal transplants. Under his leadership, the Aarogyam Dialysis Centre provides 24/7 hemodiafiltration and isolated stations for infectious safety.',
    education: [
      'DM Nephrology – Institute of Kidney Diseases and Research Centre (IKDRC), Ahmedabad',
      'MD General Medicine – Government Medical College, Surat',
      'MBBS – Saurashtra University'
    ],
    experienceHistory: [
      'Head of Nephrology & Dialysis – Aarogyam Multispeciality Hospital (2018 – Present)',
      'Consultant Nephrologist – IKDRC, Ahmedabad (2013 – 2018)',
      'Clinical Fellow – Toronto General Hospital, Canada (2011 – 2013)'
    ],
    areasOfExpertise: [
      'Kidney Transplantation & Immunosuppression',
      'High-Flux Hemodialysis & CRRT in Critical Care',
      'Diabetic Nephropathy & Hypertension Care',
      'Glomerular Diseases & Renal Biopsy',
      'Peritoneal Dialysis (CAPD)'
    ],
    conditionsTreated: [
      'Chronic Kidney Disease (Stages 1-5)',
      'Acute Kidney Injury',
      'Proteinuria & Glomerulonephritis',
      'Resistant Hypertension',
      'Electrolyte & Acid-Base Disorders'
    ]
  },
  {
    id: 'dr-priyadarshini-bhatt',
    slug: 'dr-priyadarshini-bhatt',
    name: 'Dr. Priyadarshini Bhatt',
    title: 'Consultant – Dermatology, Venereology & Aesthetic Medicine',
    departmentId: 'dermatology',
    specialty: 'Dermatology',
    qualifications: 'MBBS, MD (Dermatology), DNB, Fellow in Laser Surgery (Bangkok)',
    experienceYears: 13,
    opdTimings: 'Mon - Sat: 03:00 PM – 07:00 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1000,
    rating: 4.9,
    reviewCount: 305,
    gender: 'Female',
    isAvailableToday: false,
    nextAvailableSlot: 'Tomorrow, 03:30 PM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1594824813584-93b51b272f2d?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Priyadarshini Bhatt offers clinical excellence in medical dermatology, autoimmune skin conditions, pediatric dermatology, and modern evidence-based laser and aesthetic solutions. She works with patient safety and holistic skin wellness as her core priorities.',
    education: [
      'Fellowship in Dermatosurgery & Lasers – Institute of Dermatology, Bangkok',
      'MD Dermatology – Smt. NHL Municipal Medical College, Ahmedabad',
      'MBBS – B.J. Medical College, Ahmedabad'
    ],
    experienceHistory: [
      'Consultant Dermatologist – Aarogyam Multispeciality Hospital (2017 – Present)',
      'Senior Dermatologist – Kaya Skin Clinic, Ahmedabad (2013 – 2017)',
      'Resident Specialist – V.S. General Hospital, Ahmedabad (2010 – 2013)'
    ],
    areasOfExpertise: [
      'Psoriasis & Vitiligo Biologics Therapy',
      'Acne & Acne Scar Remodeling',
      'Dermatosurgery & Mole Excision',
      'Allergy Testing & Chronic Eczema',
      'Medical Laser Treatments'
    ],
    conditionsTreated: [
      'Severe Acne & Rosacea',
      'Psoriasis & Eczema',
      'Hair Loss (Alopecia) & Scalp Disorders',
      'Pigmentation Disorders (Melasma)',
      'Fungal & Bacterial Skin Infections'
    ]
  },
  {
    id: 'dr-harit-solanki',
    slug: 'dr-harit-solanki',
    name: 'Dr. Harit Solanki',
    title: 'Senior Consultant – Urology, Andrology & Robotic Surgery',
    departmentId: 'urology',
    specialty: 'Urology',
    qualifications: 'MBBS, MS (General Surgery), MCh (Urology), Fellow Endourology',
    experienceYears: 14,
    opdTimings: 'Mon - Sat: 10:00 AM – 03:00 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 1100,
    rating: 4.8,
    reviewCount: 240,
    gender: 'Male',
    isAvailableToday: true,
    nextAvailableSlot: 'Today, 01:00 PM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Harit Solanki is an accomplished endourologist and reconstructive urologist specializing in laser stone surgeries (RIRS, Holmium laser enucleation of prostate - HoLEP), reconstructive urethral surgeries, and robotic urological oncology.',
    education: [
      'MCh Urology – Muljibhai Patel Urological Hospital (MPUH), Nadiad',
      'MS General Surgery – Government Medical College, Baroda',
      'MBBS – Gujarat University'
    ],
    experienceHistory: [
      'Head of Urology & Andrology – Aarogyam Multispeciality Hospital (2019 – Present)',
      'Consultant Urologist – Sterling Hospital, Vadodara (2015 – 2019)',
      'Fellow in Robotic Urology – Apollo Hospitals, Chennai (2013 – 2015)'
    ],
    areasOfExpertise: [
      'Laser Kidney Stone Surgery (RIRS / PCNL)',
      'Laser Prostate Surgery (HoLEP / TURP)',
      'Robotic Partial Nephrectomy & Radical Prostatectomy',
      'Male Infertility & Erectile Dysfunction',
      'Reconstructive Urethral Surgeries'
    ],
    conditionsTreated: [
      'Kidney & Ureteric Calculi (Stones)',
      'Benign Prostatic Hyperplasia (BPH / Enlarged Prostate)',
      'Prostate Cancer & Bladder Cancer',
      'Urinary Incontinence & Stricture Urethra',
      'Recurrent Urinary Tract Infections (UTI)'
    ]
  },
  {
    id: 'dr-meera-varma',
    slug: 'dr-meera-varma',
    name: 'Dr. Meera Varma',
    title: 'Senior Consultant – Ophthalmology & Vitreo-Retinal Services',
    departmentId: 'ophthalmology',
    specialty: 'Ophthalmology',
    qualifications: 'MBBS, MS (Ophthalmology), DNB, FMRF (Sankara Nethralaya, Chennai)',
    experienceYears: 15,
    opdTimings: 'Mon - Fri: 09:30 AM – 02:00 PM',
    languages: ['English', 'Gujarati', 'Hindi'],
    consultationFee: 900,
    rating: 4.9,
    reviewCount: 318,
    gender: 'Female',
    isAvailableToday: true,
    nextAvailableSlot: 'Today, 11:00 AM',
    consultationModes: ['in-person', 'video'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    about: 'Dr. Meera Varma is an esteemed ophthalmologist and vitreo-retinal surgeon who completed her advanced fellowship at the world-renowned Sankara Nethralaya. She brings immense precision to micro-incision cataract surgery (MICS), diabetic retinopathy management, and pediatric visual development.',
    education: [
      'Vitreo-Retina Fellowship – Sankara Nethralaya (Vision Research Foundation), Chennai',
      'MS Ophthalmology – M&J Western Regional Institute of Ophthalmology, Ahmedabad',
      'MBBS – B.J. Medical College, Ahmedabad'
    ],
    experienceHistory: [
      'Director of Eye Care Services – Aarogyam Multispeciality Hospital (2017 – Present)',
      'Consultant Vitreo-Retina Surgeon – Netralaya Eye Hospital (2012 – 2017)',
      'Clinical Fellow – Sankara Nethralaya, Chennai (2010 – 2012)'
    ],
    areasOfExpertise: [
      'Micro-Incision Cataract Surgery (Robotic Femto-Cataract)',
      'Diabetic Retinopathy & Macular Degeneration',
      'Glaucoma Diagnostics & Minimally Invasive Glaucoma Surgery',
      'Corneal & Refractive Error Consultation',
      'Pediatric Eye Examinations'
    ],
    conditionsTreated: [
      'Cataracts & Refractive Errors',
      'Diabetic Retinal Disease & Vitreous Hemorrhage',
      'Glaucoma & High Intraocular Pressure',
      'Retinal Detachment & Macular Holes',
      'Dry Eye Syndrome & Corneal Infections'
    ]
  }
];
