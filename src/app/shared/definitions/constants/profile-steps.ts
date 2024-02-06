import {ProfileAccordionButton} from '../viewparams/profile-accordion-button.interface';

export const profileSteps: ProfileAccordionButton[] = [
  {
    title: 'Address Details',
    url: ['address-details'],
    controlName: 'addressDetails',
    collapsed: true,
  },
  {
    title: 'Personal Info',
    url: ['personal-info'],
    controlName: 'personalInfo',
    collapsed: true,
  },
  {
    title: 'Current Residence',
    url: ['current-residence'],
    controlName: 'currentResidence',
    collapsed: true,
  },
  {
    title: 'References',
    url: ['references'],
    controlName: 'references',
    collapsed: true,
  },
  {
    title: 'Additional Info',
    url: ['additional-info'],
    controlName: 'additionalInfo',
    collapsed: true,
  },
  {
    title: 'Review Info',
    url: ['review-info'],
    controlName: 'reviewInfo',
    collapsed: true,
  },
  {
    title: 'Payment Details',
    url: ['payment-details'],
    controlName: 'paymentDetails',
    collapsed: true,
  }
];
