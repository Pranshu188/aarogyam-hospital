import { Facility } from '../types';

export const FACILITIES: Facility[] = [
  {
    id: 'modular-ots',
    title: '12 Advanced Modular Operation Theatres',
    category: 'Surgical',
    description: 'Equipped with Class 100 HEPA air-handling systems, antimicrobial glass wall cladding, laminar airflow, and integrated 4K digital video telemetry.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      'Zero-particle Class 100 laminar airflow',
      'Integrated Stryker 4K video recording and live consultation integration',
      'Dual ceiling-suspended surgical pendants with motorized articulation',
      'Dedicated orthopaedic joint replacement and cardiac bypass theatres'
    ]
  },
  {
    id: 'intensive-care-units',
    title: '85-Bed Multispeciality Intensive Care Units',
    category: 'Critical Care',
    description: 'Divided into dedicated Medical ICU, Surgical ICU, Coronary Care (CCU), and Neuro ICU, maintained with a strict 1:1 nurse-to-patient ratio.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      '1:1 dedicated critical care nursing ratio',
      'High-end mechanical ventilators with automated weaning software',
      'Central continuous hemodynamic telemetry stations',
      'Isolation cubicles with negative pressure for airborne infection control'
    ]
  },
  {
    id: 'level-3-nicu',
    title: 'Level III Neonatal Intensive Care Unit (NICU)',
    category: 'Critical Care',
    description: 'A 20-bed advanced haven for premature and critically ill newborns, equipped with high-frequency ventilators and micro-environment incubators.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      'GE Giraffe OmniBed hybrid micro-environment incubators',
      'Nitric oxide and surfactant administration protocols',
      'Kangaroo Mother Care (KMC) family integration lounge',
      'Surveillance protocols preventing healthcare-associated neonate infections'
    ]
  },
  {
    id: 'emergency-trauma-center',
    title: '24/7 Level 1 Emergency & Trauma Centre',
    category: 'Critical Care',
    description: 'Immediate resuscitation zone with direct ramp and elevator connectivity to modular surgical suites and biplane cath labs.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      'Triaged resuscitation bays with defibrillators and crash carts',
      'Dedicated minor OT within emergency department',
      'Direct emergency entrance with spacious ambulance turnaround',
      '24/7 emergency physician and trauma surgeon presence'
    ]
  },
  {
    id: 'diagnostic-imaging',
    title: 'Advanced Diagnostic Imaging & Radiology',
    category: 'Diagnostics',
    description: 'Features a 3.0 Tesla Silent MRI, 128-Slice Low-Dose Dual Energy CT, digital 3D mammography, and high-frequency color Doppler ultrasound systems.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      'Siemens 3T Silent MRI with ultra-short tunnel for claustrophobic patients',
      '128-slice CT with 80% reduced radiation protocols',
      'Digital breast tomosynthesis 3D mammography',
      'Cloud PACS: Digital access to scans via secure QR code'
    ]
  },
  {
    id: 'automated-pathology-lab',
    title: 'Automated 24/7 NABL-Accredited Pathology Lab',
    category: 'Diagnostics',
    description: 'High-throughput robotic analyzers handling hematology, clinical biochemistry, microbiology, and histopathology around the clock.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      'Barcoded pneumatic sample transport system across hospital floors',
      'Turnaround time for critical emergency blood panels under 25 minutes',
      'Comprehensive microbiology with automated blood culture systems',
      'Strict internal and external quality assurance controls'
    ]
  },
  {
    id: 'inhouse-pharmacy',
    title: '24/7 In-House Central Pharmacy',
    category: 'Support Services',
    description: 'Fully stocked pharmacy carrying genuine temperature-controlled medications, oncology biologics, and medical surgical consumables.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      '100% genuine medicines sourced directly from authorized manufacturers',
      'Cold-chain storage units with dual temperature alarms',
      'Bedside medicine delivery for admitted inpatients',
      'Dedicated counseling counter for medication dosages and schedules'
    ]
  },
  {
    id: 'deluxe-suites',
    title: 'Deluxe & Executive Inpatient Suites',
    category: 'Patient Comfort',
    description: 'Spacious, sunlit patient rooms designed with calming biophilic elements, private attendant couch beds, motorized ICU-grade beds, and en-suite bathrooms.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      'Acoustically insulated private suites with natural daylight views',
      'Ergonomic multi-position patient beds with nurse call buttons',
      'High-speed Wi-Fi, smart television, and individual climate control',
      'In-room attendant dining service with customized nutrition menus'
    ]
  },
  {
    id: 'blood-bank',
    title: '24/7 Licensed Component Blood Bank',
    category: 'Critical Care',
    description: 'Equipped with blood apheresis machines for single-donor platelets (SDP), fresh frozen plasma (FFP), and packed red blood cells.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      '100% NAT (Nucleic Acid Tested) screening for supreme transfusion safety',
      'Continuous temperature-monitored refrigerated platelet agitators',
      'Emergency uncrossmatched O-negative blood stock on immediate standby',
      'Voluntary blood donation drives and donor care lounge'
    ]
  },
  {
    id: 'physiotherapy-rehab',
    title: 'Physiotherapy & Sports Rehabilitation Centre',
    category: 'Patient Comfort',
    description: 'Dedicated post-surgical recovery gym with electrotherapy, hydrocollator units, gait training tracks, and sports injury trainers.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      'Computerized balance and gait analysis systems',
      'Cardiopulmonary rehabilitation protocols for post-bypass patients',
      'Targeted spinal traction and electrotherapy modalities',
      'Ergonomic counseling for return to work'
    ]
  },
  {
    id: 'cardiac-cath-lab',
    title: 'Dual Biplane Interventional Cath Labs',
    category: 'Surgical',
    description: 'State-of-the-art flat-panel angiography suites for complex coronary angioplasties, neurovascular coiling, and peripheral vascular stenting.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      'Sub-50 millisecond image acquisition with minimal radiation dose',
      'Integrated IVUS, OCT, and FFR hemodynamic recording',
      'Direct emergency access corridor from hospital ambulance port',
      'Dedicated 8-bed pre and post-cath observation ward'
    ]
  },
  {
    id: 'ambulance-fleet',
    title: 'GPS-Enabled ACLS & BLS Ambulance Fleet',
    category: 'Support Services',
    description: 'Mobile emergency rooms on wheels equipped with transport ventilators, multi-parameter monitors, defibrillators, and live telemetry to our ER.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800',
    keyHighlights: [
      'Real-time GPS tracking with traffic-optimized navigation across Ahmedabad',
      'Mobile telemetry transmitting live ECG directly to in-hospital cardiologists',
      'Staffed by certified emergency medical technicians and paramedics',
      'Equipped for pediatric and neonatal inter-hospital critical transport'
    ]
  }
];
