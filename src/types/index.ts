export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  departmentId: string;
  specialty: string;
  qualifications: string;
  experienceYears: number;
  opdTimings: string;
  languages: string[];
  consultationFee: number;
  rating: number;
  reviewCount: number;
  image: string;
  gender: 'Male' | 'Female';
  isAvailableToday: boolean;
  nextAvailableSlot: string;
  consultationModes: ('in-person' | 'video')[];
  about: string;
  education: string[];
  experienceHistory: string[];
  areasOfExpertise: string[];
  conditionsTreated: string[];
}

export interface Department {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  keyProcedures: string[];
  keyTechnologies: string[];
  conditionsTreated: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Treatment {
  id: string;
  name: string;
  departmentId: string;
  category: string;
  shortDesc: string;
  procedureOverview: string;
  hospitalStay: string;
  recoveryTime: string;
  keyBenefits: string[];
}

export interface HealthPackage {
  id: string;
  slug: string;
  name: string;
  tag: string;
  price: number;
  originalPrice: number;
  description: string;
  recommendedFor: string;
  fastingRequired: boolean;
  reportDelivery: string;
  totalTests: number;
  categories: {
    categoryName: string;
    tests: string[];
  }[];
}

export interface Facility {
  id: string;
  title: string;
  category: 'Critical Care' | 'Diagnostics' | 'Surgical' | 'Patient Comfort' | 'Support Services';
  description: string;
  image: string;
  keyHighlights: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  authorDoctor: string;
  doctorRole: string;
  content: string[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  age: number;
  location: string;
  treatmentReceived: string;
  doctorName: string;
  quote: string;
  date: string;
  rating: number;
}

export interface FAQ {
  id: string;
  category: 'Appointment' | 'Emergency' | 'Insurance' | 'Reports' | 'General';
  question: string;
  answer: string;
}

export interface AppointmentBooking {
  specialtyId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  patientName: string;
  mobileNumber: string;
  email: string;
  age: string;
  gender: string;
  reason: string;
  consultationType: 'in-person' | 'video';
}
