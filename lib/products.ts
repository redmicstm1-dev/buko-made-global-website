export type Product = {
  slug: string;
  name: string;
  category: string;
  eyebrow: string;
  summary: string;
  overview: string;
  applications: string[];
  selectionPoints: string[];
  whatToConfirm: string[];
  priceNote: string;
  badge: string;
};

export const products: Product[] = [
  {
    slug: 'manual-hospital-bed',
    name: 'Manual Hospital Bed',
    category: 'Hospital Beds & Patient-Care Furniture',
    eyebrow: 'PATIENT-CARE FURNITURE',
    summary: 'A practical bed option for inpatient wards, recovery rooms and general patient-care environments where a manually operated platform is suitable.',
    overview: 'Manual hospital beds are commonly considered for general wards, clinics and care facilities that need an adjustable patient platform without relying on powered movement. The exact configuration varies by supplier and model, so the bed should be selected around the facility’s patient-care routine, space, cleaning process and accessories requirement.',
    applications: ['General hospital and clinic wards', 'Recovery and observation rooms', 'Residential and long-term care settings, where appropriate'],
    selectionPoints: ['Manual adjustment mechanism and available positions', 'Overall dimensions and safe working load stated by the manufacturer', 'Side rails, castors, brakes and head/foot panels', 'Mattress compatibility and included accessories', 'Cleaning requirements, warranty and availability of replacement parts'],
    whatToConfirm: ['Required bed type and adjustment functions', 'Quantity and delivery location', 'Whether mattress and accessories are required', 'Any facility specification or procurement document'],
    priceNote: 'Request a current quotation. Pricing depends on the exact model, accessories, quantity, sourcing and delivery terms.',
    badge: 'Quotation required',
  },
  {
    slug: 'digital-blood-pressure-monitor',
    name: 'Digital Blood Pressure Monitor',
    category: 'Diagnostic & Examination Equipment',
    eyebrow: 'VITAL-SIGN MEASUREMENT',
    summary: 'A digital device for measuring blood pressure and pulse during routine screening and clinical assessment.',
    overview: 'Digital blood pressure monitors are used in clinics, outpatient departments, pharmacies and suitable home-monitoring settings. Different models may be designed for upper-arm or wrist measurement and can vary in cuff sizes, memory, power options and validation status. The intended setting and user should guide selection.',
    applications: ['Routine vital-sign checks in clinics', 'Outpatient and screening services', 'Pharmacy or home monitoring where the model is suitable'],
    selectionPoints: ['Upper-arm or wrist measurement design', 'Available cuff sizes and fit guidance', 'Power source and included accessories', 'Display readability and memory features', 'Manufacturer documentation and evidence of validation for the intended use'],
    whatToConfirm: ['Intended user and clinical setting', 'Required cuff size or range', 'Quantity and preferred model, if known', 'Whether batteries, adapter or carrying case are needed'],
    priceNote: 'Request a current quotation. Model, cuff configuration, documentation and quantity can affect the final price.',
    badge: 'Model-dependent pricing',
  },
  {
    slug: 'multiparameter-patient-monitor',
    name: 'Multiparameter Patient Monitor',
    category: 'Patient Monitoring & Vital-Sign Equipment',
    eyebrow: 'PATIENT MONITORING',
    summary: 'A configurable monitoring system for displaying selected patient vital signs in clinical care environments.',
    overview: 'Multiparameter monitors differ considerably in supported measurements, screen size, alarm features, accessories and intended clinical use. A suitable selection begins with the facility’s monitoring protocol and the parameters required. Exact capabilities must be confirmed against the manufacturer’s official specification for the proposed model.',
    applications: ['Hospital wards and observation areas', 'Emergency and critical-care environments when the selected model is appropriate', 'Procedure and recovery areas'],
    selectionPoints: ['Required parameters, such as ECG, SpO₂, NIBP, temperature or respiration', 'Patient categories supported by the device', 'Alarm configuration and display requirements', 'Compatible probes, cuffs, leads and other accessories', 'Power, service, warranty and manufacturer documentation'],
    whatToConfirm: ['Clinical area and required parameters', 'Adult, paediatric or neonatal use requirements', 'Accessories and quantity', 'Any procurement specification or preferred manufacturer'],
    priceNote: 'Quotation required after configuration is confirmed. Prices vary substantially by parameters, accessories and model.',
    badge: 'Specification-led quotation',
  },
  {
    slug: 'laboratory-microscope',
    name: 'Laboratory Microscope',
    category: 'Laboratory Equipment',
    eyebrow: 'LABORATORY ESSENTIALS',
    summary: 'An optical instrument for viewing prepared samples in education, laboratory and diagnostic workflows appropriate to the selected model.',
    overview: 'Microscopes are available in different optical configurations for different levels of observation and laboratory work. Selection should account for the intended sample types, magnification range, illumination, number of viewing heads, maintenance support and any laboratory procurement specification.',
    applications: ['Teaching and training laboratories', 'Routine laboratory observation', 'Diagnostic workflows where the model meets the laboratory’s requirements'],
    selectionPoints: ['Monocular, binocular or trinocular viewing head', 'Objective lenses and optical specification', 'Illumination type and brightness control', 'Mechanical stage and focusing controls', 'Power requirements, accessories and service arrangements'],
    whatToConfirm: ['Intended laboratory work and sample types', 'Required optical configuration', 'Accessories and quantity', 'Any institutional or laboratory specification'],
    priceNote: 'Request a quotation based on the required optical configuration and accessories.',
    badge: 'Configuration-dependent',
  },
  {
    slug: 'examination-couch',
    name: 'Medical Examination Couch',
    category: 'Hospital Beds & Patient-Care Furniture',
    eyebrow: 'CONSULTATION ROOM FURNITURE',
    summary: 'A patient examination surface for consultation rooms, outpatient clinics and other appropriate assessment spaces.',
    overview: 'Examination couches are available in fixed-height and adjustable configurations, with different frame materials, upholstery, head sections and accessory options. The best fit depends on the room layout, patient access needs, cleaning protocol and the type of examination performed.',
    applications: ['General consultation rooms', 'Outpatient and primary-care clinics', 'Assessment and examination spaces'],
    selectionPoints: ['Fixed or adjustable height', 'Frame construction and stated load capacity', 'Upholstery material and cleaning compatibility', 'Adjustable head section and accessory options', 'Dimensions, delivery access and assembly requirements'],
    whatToConfirm: ['Preferred dimensions and adjustment features', 'Quantity and room location', 'Required accessories', 'Delivery and assembly needs'],
    priceNote: 'Request a current quotation. Frame, adjustment features, dimensions and delivery affect pricing.',
    badge: 'Quotation required',
  },
  {
    slug: 'infusion-pump',
    name: 'Infusion Pump',
    category: 'Emergency & Critical-Care Equipment',
    eyebrow: 'FLUID DELIVERY EQUIPMENT',
    summary: 'A controlled infusion device to be specified according to the clinical protocol, intended use and compatible consumables.',
    overview: 'Infusion devices are safety-critical products and must be selected only after confirming the intended clinical use, delivery method, applicable standards, alarm features, consumable compatibility, service support and user training needs. The proposed model’s official documentation must be reviewed before purchase or clinical use.',
    applications: ['Clinical infusion workflows when supported by the selected device', 'Hospital departments with an approved infusion protocol', 'Facilities able to support device checks, maintenance and staff training'],
    selectionPoints: ['Device type and intended clinical use', 'Flow-rate range and accuracy stated by the manufacturer', 'Alarm and safety features', 'Compatible administration sets and consumables', 'Power backup, service support, training and regulatory documentation'],
    whatToConfirm: ['Required device type and clinical protocol', 'Consumable compatibility requirements', 'Quantity and intended department', 'Required documentation, training and after-sales support'],
    priceNote: 'Quotation required after clinical and technical requirements are defined. No single price should be assumed across different configurations.',
    badge: 'Technical review recommended',
  },
  {
    slug: 'wheelchair',
    name: 'Manual Wheelchair',
    category: 'Rehabilitation & Mobility Equipment',
    eyebrow: 'MOBILITY SUPPORT',
    summary: 'A manually propelled mobility aid with configuration options to suit user needs, transport requirements and care environments.',
    overview: 'Manual wheelchairs vary by seat width, frame design, folding mechanism, wheel configuration, footrests, brakes and weight capacity. Selection should be based on the user’s measurements and mobility needs rather than appearance alone. Clinical or rehabilitation advice may be appropriate for users with complex positioning requirements.',
    applications: ['Mobility support in healthcare facilities', 'Patient transport where suitable', 'Personal mobility when the selected model meets the user’s needs'],
    selectionPoints: ['Seat width and depth', 'Stated user weight capacity', 'Folding or rigid frame design', 'Footrests, armrests, brakes and wheel configuration', 'Portability, maintenance and replacement parts'],
    whatToConfirm: ['User measurements and mobility needs', 'Required weight capacity', 'Indoor, outdoor or mixed use', 'Quantity and delivery location'],
    priceNote: 'Request a quotation based on size, frame and accessory configuration.',
    badge: 'Fit-dependent selection',
  },
  {
    slug: 'sterile-examination-gloves',
    name: 'Medical Examination Gloves',
    category: 'Medical Consumables & Disposables',
    eyebrow: 'MEDICAL CONSUMABLES',
    summary: 'Single-use examination gloves available in different materials, sizes and packaging configurations for suitable clinical tasks.',
    overview: 'Glove selection depends on the intended task, material compatibility, fit, user sensitivity, relevant product standards and the facility’s infection-prevention protocol. Examination gloves should not be assumed suitable for every sterile or surgical procedure. The exact product description and packaging must be confirmed before ordering.',
    applications: ['Routine examination tasks appropriate for the glove type', 'Healthcare and laboratory settings following local protocols', 'Procurement of regularly used disposable supplies'],
    selectionPoints: ['Material, such as nitrile, latex or another stated composition', 'Powdered or powder-free configuration', 'Size range and fit', 'Sterile or non-sterile status', 'Pack quantity, shelf life and manufacturer documentation'],
    whatToConfirm: ['Material and sizes required', 'Sterile or non-sterile requirement', 'Quantity by box or carton', 'Any product standard or procurement specification'],
    priceNote: 'Request a current price based on material, size, packaging, quantity and available batch details.',
    badge: 'Quantity-based pricing',
  },
  {
    slug: 'digital-infrared-thermometer',
    name: 'Digital Infrared Thermometer',
    category: 'Diagnostic & Examination Equipment',
    eyebrow: 'TEMPERATURE MEASUREMENT',
    summary: 'A non-contact temperature measurement device for suitable screening workflows, subject to the model’s intended use and instructions.',
    overview: 'Infrared thermometers differ by measurement site, operating distance, response time, accuracy specification and intended application. A model designed for surface measurement is not automatically suitable for measuring human body temperature. Confirm the manufacturer’s stated intended use and instructions before selection.',
    applications: ['Temperature screening using an appropriate body-temperature model', 'Clinical or workplace screening when consistent with local protocols', 'Facilities requiring quick, non-contact measurements'],
    selectionPoints: ['Manufacturer-stated intended use', 'Measurement range and accuracy specification', 'Distance-to-spot guidance and response time', 'Display, memory and power requirements', 'Calibration guidance and documentation'],
    whatToConfirm: ['Human body-temperature or other intended use', 'Quantity and preferred features', 'Required documentation', 'Delivery location'],
    priceNote: 'Request a current quotation for the intended model and quantity.',
    badge: 'Model-dependent pricing',
  },
  {
    slug: 'portable-ultrasound-system',
    name: 'Portable Ultrasound System',
    category: 'Diagnostic Imaging Equipment',
    eyebrow: 'DIAGNOSTIC IMAGING',
    summary: 'A portable ultrasound platform to be configured around the intended examinations, probes and clinical workflow.',
    overview: 'Ultrasound systems vary by imaging modes, probe compatibility, software options, portability, battery configuration and intended clinical applications. The system and transducers must be specified against the facility’s requirements, and all claimed functions must be checked against the exact manufacturer model and documentation.',
    applications: ['Clinical imaging workflows supported by the selected system', 'Facilities that require portable or space-flexible equipment', 'Diagnostic departments sourcing a system to a defined specification'],
    selectionPoints: ['Required clinical applications and imaging modes', 'Compatible transducers and quantities', 'Display, storage, connectivity and power options', 'Warranty, service and user training', 'Manufacturer documentation and applicable registration requirements'],
    whatToConfirm: ['Intended examinations and clinical department', 'Required probes and software options', 'Quantity and budget range, if available', 'Installation, training and after-sales requirements'],
    priceNote: 'Quotation required after the system configuration is defined. Probe selection and software options can materially affect cost.',
    badge: 'Specification-led quotation',
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
