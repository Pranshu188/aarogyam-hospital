import { HealthPackage } from '../types';

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'essential-health-check',
    slug: 'essential-health-check',
    name: 'Essential Health Check',
    tag: 'Popular',
    price: 1999,
    originalPrice: 3500,
    description: 'A vital preventative screening for young professionals and individuals looking for regular annual health baseline monitoring.',
    recommendedFor: 'Men & Women aged 18 to 40 years',
    fastingRequired: true,
    reportDelivery: 'Same day (within 6 hours)',
    totalTests: 48,
    categories: [
      {
        categoryName: 'Blood & Hematology',
        tests: ['Complete Blood Count (CBC) with ESR', 'Blood Group & Rh Typing', 'Peripheral Blood Smear']
      },
      {
        categoryName: 'Metabolic & Diabetic Markers',
        tests: ['Fasting Blood Sugar (FBS)', 'HbA1c (3-Month Average Glucose)']
      },
      {
        categoryName: 'Lipid Profile (Heart Health)',
        tests: ['Total Cholesterol', 'HDL Good Cholesterol', 'LDL Bad Cholesterol', 'VLDL & Triglycerides']
      },
      {
        categoryName: 'Liver & Kidney Functions',
        tests: ['SGOT & SGPT', 'Bilirubin Total & Direct', 'Serum Creatinine', 'Blood Urea Nitrogen', 'Uric Acid']
      },
      {
        categoryName: 'Diagnostics & Consultations',
        tests: ['Resting 12-Lead Electrocardiogram (ECG)', 'Chest X-Ray (PA View)', 'Urine Routine & Microscopic', 'Comprehensive Physician Consultation']
      }
    ]
  },
  {
    id: 'comprehensive-health-check',
    slug: 'comprehensive-health-check',
    name: 'Comprehensive Health Check',
    tag: 'Best Value',
    price: 3999,
    originalPrice: 7200,
    description: 'Thorough head-to-toe screening incorporating cardiovascular ultrasound, abdominal imaging, and vitamin profiling.',
    recommendedFor: 'Adults aged 35+ looking for in-depth organ evaluation',
    fastingRequired: true,
    reportDelivery: 'Same day evening',
    totalTests: 68,
    categories: [
      {
        categoryName: 'Complete Organ Panels',
        tests: ['CBC with 24-parameter automated differential', 'Comprehensive Liver Function Test (11 parameters)', 'Renal Function Test with eGFR', 'Electrolytes (Sodium, Potassium, Chloride)']
      },
      {
        categoryName: 'Advanced Cardiac Profiling',
        tests: ['12-Lead Digital ECG', '2D Echocardiography with Color Doppler', 'Treadmill Stress Test (TMT)', 'Lipid Profile Extended']
      },
      {
        categoryName: 'Imaging & Ultrasound',
        tests: ['Ultrasound Whole Abdomen & Pelvis', 'High-Resolution Digital Chest X-Ray']
      },
      {
        categoryName: 'Vitamins & Hormones',
        tests: ['Vitamin D (25-OH Total)', 'Vitamin B12 Immunoassay', 'Thyroid Profile (TSH, Free T3, Free T4)']
      },
      {
        categoryName: 'Specialist Consultations',
        tests: ['Senior Physician Consultation', 'Dietary & Lifestyle Counselling Session', 'Dental & Eye Evaluation']
      }
    ]
  },
  {
    id: 'executive-health-check',
    slug: 'executive-health-check',
    name: 'Executive Platinum Health Check',
    tag: 'Executive',
    price: 6999,
    originalPrice: 12500,
    description: 'Our most comprehensive diagnostic evaluation designed for corporate executives, high-stress professionals, and proactive leaders.',
    recommendedFor: 'Executives, business leaders and individuals over 40',
    fastingRequired: true,
    reportDelivery: 'Within 24 hours with full digital dossier',
    totalTests: 84,
    categories: [
      {
        categoryName: 'Cardiac & Vascular Scoring',
        tests: ['CT Coronary Calcium Scoring', '2D Echo + TMT', 'hs-CRP (Cardiac Risk Marker)', 'Carotid Doppler Screening', 'Apo-A1 & Apo-B']
      },
      {
        categoryName: 'Cancer Screening Markers',
        tests: ['PSA (Prostate for Men) / CA-125 & Pap Smear (for Women)', 'Serum CEA (Carcinoembryonic Antigen)', 'Stool Occult Blood']
      },
      {
        categoryName: 'Complete Metabolic & Endocrine',
        tests: ['HbA1c & Fasting Insulin (HOMA-IR)', 'Homocysteine Level', 'Thyroid Antibodies', 'Full Vitamin & Mineral Battery']
      },
      {
        categoryName: 'Pulmonary & Specialized Diagnostics',
        tests: ['Pulmonary Function Test (Spirometry)', 'Ultrasound Whole Abdomen with Elastography', 'Dexa Bone Mineral Density Scan']
      },
      {
        categoryName: 'Multi-Specialist Reviews',
        tests: ['Consultant Cardiologist Review', 'Internal Medicine Director Review', 'Clinical Nutritionist Consultation', 'Executive Lounge Amenities & Complimentary Breakfast']
      }
    ]
  },
  {
    id: 'womens-wellness-check',
    slug: 'womens-wellness-check',
    name: 'Women’s Wellness & Hormonal Check',
    tag: 'Specialized',
    price: 2999,
    originalPrice: 5500,
    description: 'Customized clinical package addressing breast health, cervical wellness, bone density, hormonal balance, and thyroid function.',
    recommendedFor: 'Women of all ages (adolescent, reproductive, perimenopausal)',
    fastingRequired: true,
    reportDelivery: 'Same day',
    totalTests: 56,
    categories: [
      {
        categoryName: 'Gynecological & Breast Health',
        tests: ['Digital Mammography / Breast Ultrasound (as per age)', 'Cervical Pap Smear (LBC)', 'Pelvic Ultrasound (TVS/TAS)']
      },
      {
        categoryName: 'Bone & Micronutrients',
        tests: ['Serum Calcium & Phosphorus', 'Vitamin D3 & Vitamin B12', 'Serum Ferritin & Iron Studies']
      },
      {
        categoryName: 'Hormonal Profile',
        tests: ['TSH & Free T4', 'Prolactin & LH/FSH (as indicated)', 'Fasting Blood Sugar & HbA1c']
      },
      {
        categoryName: 'Vital Organs & CBC',
        tests: ['Complete Hemogram (anemia screening)', 'Liver & Kidney Profiling', 'Urine Microscopic Evaluation']
      },
      {
        categoryName: 'Clinical Consultation',
        tests: ['Consultation with Senior Gynaecologist', 'Nutritional Assessment for Women’s Health']
      }
    ]
  },
  {
    id: 'senior-care-package',
    slug: 'senior-care-package',
    name: 'Senior Citizen Platinum Care',
    tag: 'Senior Focused',
    price: 3499,
    originalPrice: 6800,
    description: 'Designed specifically for elders to evaluate cardiovascular health, joint and bone strength, kidney status, and cognitive well-being.',
    recommendedFor: 'Seniors aged 60 years and above',
    fastingRequired: true,
    reportDelivery: 'Same day with elder care coordinator assistance',
    totalTests: 62,
    categories: [
      {
        categoryName: 'Cardiovascular & Stroke Prevention',
        tests: ['12-Lead ECG', '2D Echocardiography', 'Lipid Profile Extended', 'Electrolytes with Serum Magnesium']
      },
      {
        categoryName: 'Bones, Joints & Mobility',
        tests: ['Bone Mineral Density (Dexa Scan)', 'Serum Calcium, Phosphorus & Alkaline Phosphatase', 'Vitamin D3 Level', 'Serum Uric Acid (Gout)']
      },
      {
        categoryName: 'Renal & Hepatic Health',
        tests: ['KFT with eGFR', 'Urine Microalbumin to Creatinine Ratio', 'LFT Complete']
      },
      {
        categoryName: 'Geriatric Screening',
        tests: ['Ultrasound Whole Abdomen', 'Prostate PSA (Men) / Pelvic USG (Women)', 'Vision & Cataract Screening', 'Audiometry (Hearing Screen)']
      },
      {
        categoryName: 'Care Coordination',
        tests: ['Dedicated Wheelchair Assistant', 'Comprehensive Geriatrician Consultation', 'Medication Safety & Interaction Review']
      }
    ]
  },
  {
    id: 'diabetic-care-package',
    slug: 'diabetic-care-package',
    name: 'Comprehensive Diabetic Care Package',
    tag: 'Chronic Care',
    price: 2499,
    originalPrice: 4800,
    description: 'A focused evaluation to prevent diabetic complications affecting the eyes, kidneys, heart, and feet.',
    recommendedFor: 'Pre-diabetic and diagnosed diabetic patients',
    fastingRequired: true,
    reportDelivery: 'Same day',
    totalTests: 42,
    categories: [
      {
        categoryName: 'Glycemic Control Markers',
        tests: ['Fasting & Post-Prandial Blood Sugar', 'HbA1c Glycated Hemoglobin', 'Estimated Average Glucose (eAG)']
      },
      {
        categoryName: 'Target Organ Protection',
        tests: ['Urine Microalbumin/Creatinine Ratio (Early Kidney Guard)', 'Serum Creatinine & eGFR', 'Lipid Profile Complete']
      },
      {
        categoryName: 'Microvascular Screening',
        tests: ['Dilated Retinal Eye Examination by Ophthalmologist', 'Biothesiometry (Diabetic Neuropathy Foot Vibration Screen)', 'Peripheral Doppler Pulse Check']
      },
      {
        categoryName: 'Consultation & Planning',
        tests: ['Consultation with Diabetologist / Endocrinologist', 'Personalized Low-GI Diabetic Meal Plan']
      }
    ]
  },
  {
    id: 'cardiac-wellbeing-package',
    slug: 'cardiac-wellbeing-package',
    name: 'Healthy Heart Comprehensive Package',
    tag: 'Heart Care',
    price: 4499,
    originalPrice: 8500,
    description: 'Detailed assessment of cardiac muscle efficiency, electrical rhythm, coronary vessel health, and blood biomarkers.',
    recommendedFor: 'Individuals with family history of heart disease or hypertension',
    fastingRequired: true,
    reportDelivery: 'Same day with cardiologist review',
    totalTests: 52,
    categories: [
      {
        categoryName: 'Functional Cardiac Diagnostics',
        tests: ['12-Lead Digital Resting ECG', '2D Echocardiogram with Strain Imaging', 'Treadmill Stress Test (TMT) / Stress Echo']
      },
      {
        categoryName: 'Biochemical Vascular Risk',
        tests: ['Lipid Fractionation (LDL, HDL, Triglycerides, VLDL)', 'hs-CRP (High-Sensitivity C-Reactive Protein)', 'Serum Homocysteine', 'Serum Lipoprotein(a)']
      },
      {
        categoryName: 'Metabolic & Baseline',
        tests: ['Fasting Glucose & HbA1c', 'Complete Blood Count', 'Renal Function Test (Electrolytes, Creatinine)', 'Chest X-Ray']
      },
      {
        categoryName: 'Consultation',
        tests: ['One-on-One Consultation with Senior Interventional Cardiologist', 'Cardioprotective Lifestyle Strategy']
      }
    ]
  }
];
