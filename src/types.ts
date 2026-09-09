export type LebaneseGovernorate =
  | 'Beirut'
  | 'Mount Lebanon'
  | 'North'
  | 'South'
  | 'Bekaa'
  | 'Nabatieh'
  | 'Akkar'
  | 'Baalbek-Hermel';

export interface LebaneseDistrict {
  id: string;
  name: string;
  arabicName: string;
  governorate: LebaneseGovernorate;
  zone: 'Zone 1 (Greater Beirut)' | 'Zone 2 (Mount Lebanon)' | 'Zone 3 (Regional / Coastal)' | 'Zone 4 (Remote / Mountain)';
  standardEtaHours: number;
  expressAvailable: boolean;
  baseDeliveryUsd: number;
  baseDeliveryLbp: number;
}

export type TrackingStatus =
  | 'order_created'
  | 'courier_assigned'
  | 'picked_up'
  | 'at_beirut_hub'
  | 'in_transit'
  | 'out_for_delivery'
  | 'delivered'
  | 'failed_attempt'
  | 'returned_to_hub';

export interface TrackingStep {
  status: TrackingStatus;
  title: string;
  description: string;
  timestamp: string;
  location: string;
  completed: boolean;
  isCurrent?: boolean;
}

export interface ShipmentDetails {
  waybill: string;
  orderNumber: string;
  senderName: string;
  senderPhone: string;
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  city: string;
  governorate: LebaneseGovernorate;
  currentStatus: TrackingStatus;
  statusLabel: string;
  estimatedDelivery: string;
  codAmount: number;
  codCurrency: 'USD' | 'LBP';
  serviceType: 'Next-Day Standard' | 'Same-Day Express' | 'Return Exchange';
  weightKg: number;
  packageCount: number;
  courierName?: string;
  courierPhone?: string;
  timeline: TrackingStep[];
  notes?: string;
}

export interface RateCalculationParams {
  originDistrict: string;
  destinationDistrict: string;
  weightKg: number;
  speed: 'standard' | 'express';
  codAmount: number;
  codCurrency: 'USD' | 'LBP';
}

export interface RateCalculationResult {
  deliveryFeeUsd: number;
  deliveryFeeLbp: number;
  codHandlingFeeUsd: number;
  codHandlingFeeLbp: number;
  totalCostUsd: number;
  totalCostLbp: number;
  netPayoutToMerchantUsd: number;
  netPayoutToMerchantLbp: number;
  estimatedEta: string;
  exchangeRate: number;
}

export interface PickupBooking {
  id: string;
  merchantName: string;
  businessName: string;
  phone: string;
  pickupAddress: string;
  district: string;
  pickupDate: string;
  timeWindow: 'Morning (9 AM - 1 PM)' | 'Afternoon (1 PM - 5 PM)' | 'Evening (5 PM - 8 PM)';
  packageCount: number;
  serviceType: 'e_commerce_delivery' | 'bulk_warehouse_inbound' | 'instant_document';
  requiresFlyerBags: boolean;
  notes?: string;
  status: 'confirmed' | 'scheduled' | 'dispatched';
}

export interface MerchantPartnerLead {
  fullName: string;
  businessName: string;
  instagramOrWebsite: string;
  phone: string;
  email: string;
  monthlyOrdersRange: '10 - 50 orders' | '50 - 200 orders' | '200 - 500 orders' | '500+ orders';
  needsWarehousing: boolean;
  primaryLocation: string;
}

export interface WarehouseItem {
  sku: string;
  name: string;
  category: string;
  stockQty: number;
  reservedQty: number;
  availableQty: number;
  shelfLocation: string;
  lowStockThreshold: number;
}

export interface MerchantDashboardSummary {
  todayDelivered: number;
  inTransit: number;
  codCollectedThisWeekUsd: number;
  codCollectedThisWeekLbp: number;
  pendingPayoutUsd: number;
  nextPayoutDate: string;
  deliverySuccessRate: number;
}
