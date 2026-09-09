import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  DollarSign, 
  Warehouse, 
  PlusCircle, 
  CheckCircle2, 
  Clock, 
  Truck, 
  Download, 
  Search, 
  Filter, 
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Boxes,
  ArrowUpRight
} from 'lucide-react';
import { SAMPLE_WAYBILLS, SAMPLE_WAREHOUSE_ITEMS, SAMPLE_DASHBOARD_SUMMARY } from '../data/mockShipments';
import { ShipmentDetails } from '../types';

interface MerchantDashboardPreviewProps {
  onTrackWaybill: (waybill: string) => void;
  onOpenPickupModal: () => void;
  onOpenPartnerModal: () => void;
}

export const MerchantDashboardPreview: React.FC<MerchantDashboardPreviewProps> = ({
  onTrackWaybill,
  onOpenPickupModal,
  onOpenPartnerModal,
}) => {
  const [activeTab, setActiveTab] = useState<'shipments' | 'cod' | 'inventory' | 'create'>('shipments');
  const [statusFilter, setStatusFilter] = useState<'all' | 'out_for_delivery' | 'delivered' | 'at_beirut_hub'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample shipments expanded for the merchant table
  const allMerchantShipments: ShipmentDetails[] = [
    ...SAMPLE_WAYBILLS,
    {
      waybill: 'RT-4419-BEY',
      orderNumber: 'ORD-9932',
      senderName: 'Luxe Beirut Apparel',
      senderPhone: '+961 70 882 119',
      recipientName: 'Karim Chemaly',
      recipientPhone: '+961 3 410 882',
      recipientAddress: 'Verdun, Dunes Center St, Bldg 18',
      city: 'Beirut',
      governorate: 'Beirut',
      currentStatus: 'delivered',
      statusLabel: 'Delivered & Cash Remitted',
      estimatedDelivery: 'Delivered Yesterday',
      codAmount: 85,
      codCurrency: 'USD',
      serviceType: 'Next-Day Standard',
      weightKg: 1.1,
      packageCount: 1,
      courierName: 'Charbel Khoury',
      courierPhone: '+961 70 192 834',
      timeline: [],
    },
    {
      waybill: 'RT-6311-STH',
      orderNumber: 'ORD-8114',
      senderName: 'Luxe Beirut Apparel',
      senderPhone: '+961 70 882 119',
      recipientName: 'Hiba Bsat',
      recipientPhone: '+961 70 219 401',
      recipientAddress: 'Saida, Eastern Corniche, Al Bahr Bldg',
      city: 'Saida',
      governorate: 'South',
      currentStatus: 'out_for_delivery',
      statusLabel: 'With Courier (En Route)',
      estimatedDelivery: 'Today by 4:00 PM',
      codAmount: 5200000,
      codCurrency: 'LBP',
      serviceType: 'Next-Day Standard',
      weightKg: 1.8,
      packageCount: 1,
      courierName: 'Ahmad Kassir',
      courierPhone: '+961 71 332 901',
      timeline: [],
    },
    {
      waybill: 'RT-9012-BKA',
      orderNumber: 'ORD-7201',
      senderName: 'Luxe Beirut Apparel',
      senderPhone: '+961 70 882 119',
      recipientName: 'Elie Maalouf',
      recipientPhone: '+961 8 812 390',
      recipientAddress: 'Zahle, Boulevard, Villa Maalouf',
      city: 'Zahle',
      governorate: 'Bekaa',
      currentStatus: 'at_beirut_hub',
      statusLabel: 'Sorting for Bekaa Shuttle',
      estimatedDelivery: 'Tomorrow by 2:00 PM',
      codAmount: 55,
      codCurrency: 'USD',
      serviceType: 'Next-Day Standard',
      weightKg: 2.1,
      packageCount: 1,
      timeline: [],
    },
  ];

  const filteredShipments = allMerchantShipments.filter((s) => {
    const matchesStatus = statusFilter === 'all' || s.currentStatus === statusFilter;
    const matchesQuery =
      s.waybill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.recipientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesQuery;
  });

  return (
    <section id="merchant-portal" className="py-16 lg:py-24 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Partner Software Demo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Automated logistics dashboard for all partners
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore the real-time control center our Lebanese merchants use every day to manage dispatches, track couriers, review inventory, and reconcile COD cash balances.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPartnerModal}
              className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-md shadow-orange-600/25 transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Get Merchant Access</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dashboard Shell Frame */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Window Bar (Simulating Merchant Portal) */}
          <div className="bg-slate-900/90 px-5 py-3.5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                portal.rtdeliveries.net / merchant / luxe-beirut-apparel
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-medium">
                Store: <strong>Luxe Beirut Apparel</strong>
              </span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                API Connected
              </span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-900/40 border-b border-slate-800/80">
            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 block">Today&apos;s Delivered</span>
              <div className="text-xl font-black text-white mt-0.5">
                {SAMPLE_DASHBOARD_SUMMARY.todayDelivered} Orders
              </div>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 mt-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>{SAMPLE_DASHBOARD_SUMMARY.deliverySuccessRate}% success rate</span>
              </span>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 block">Parcels in Transit</span>
              <div className="text-xl font-black text-orange-400 mt-0.5">
                {SAMPLE_DASHBOARD_SUMMARY.inTransit} Couriers En Route
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">Across Beirut, Metn &amp; Regions</span>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 block">Weekly COD Collected</span>
              <div className="text-xl font-black text-emerald-400 mt-0.5">
                ${SAMPLE_DASHBOARD_SUMMARY.codCollectedThisWeekUsd.toLocaleString()} USD
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                + {(SAMPLE_DASHBOARD_SUMMARY.codCollectedThisWeekLbp / 1000000).toFixed(1)}M LBP
              </span>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 block">Pending Payout</span>
              <div className="text-xl font-black text-white mt-0.5">
                ${SAMPLE_DASHBOARD_SUMMARY.pendingPayoutUsd.toLocaleString()} USD
              </div>
              <span className="text-[10px] text-orange-400 font-semibold mt-1 block truncate">
                Disbursed Thursday 3 PM
              </span>
            </div>
          </div>

          {/* Tab Navigation Controls */}
          <div className="px-5 pt-4 border-b border-slate-800 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('shipments')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'shipments'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Live Orders &amp; Dispatches ({allMerchantShipments.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('cod')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'cod'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>COD Cash Ledger</span>
              </button>

              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'inventory'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Warehouse className="w-3.5 h-3.5" />
                <span>Beirut Hub Inventory ({SAMPLE_WAREHOUSE_ITEMS.length} SKUs)</span>
              </button>
            </div>

            <button
              onClick={onOpenPickupModal}
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer mb-2 sm:mb-0"
            >
              <PlusCircle className="w-3.5 h-3.5 text-orange-400" />
              <span>Create New Dispatch</span>
            </button>
          </div>

          {/* TAB 1: SHIPMENTS TABLE */}
          {activeTab === 'shipments' && (
            <div className="p-5 space-y-4">
              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-72">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by waybill or recipient..."
                    className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-orange-500"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                </div>

                <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto text-xs">
                  <span className="text-slate-400 text-[11px] mr-1 hidden sm:inline">Filter:</span>
                  <button
                    onClick={() => setStatusFilter('all')}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      statusFilter === 'all'
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatusFilter('out_for_delivery')}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      statusFilter === 'out_for_delivery'
                        ? 'bg-orange-600/80 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Out for Delivery
                  </button>
                  <button
                    onClick={() => setStatusFilter('delivered')}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      statusFilter === 'delivered'
                        ? 'bg-emerald-600/80 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Delivered
                  </button>
                  <button
                    onClick={() => setStatusFilter('at_beirut_hub')}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      statusFilter === 'at_beirut_hub'
                        ? 'bg-blue-600/80 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    At Hub
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                    <tr>
                      <th className="px-4 py-3">Waybill #</th>
                      <th className="px-4 py-3">Recipient &amp; Address</th>
                      <th className="px-4 py-3">COD Amount</th>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredShipments.map((shipment) => (
                      <tr key={shipment.waybill} className="hover:bg-slate-900/50 transition-colors">
                        <td className="px-4 py-3.5">
                          <span className="font-mono font-bold text-orange-400 block">
                            {shipment.waybill}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            {shipment.orderNumber}
                          </span>
                        </td>

                        <td className="px-4 py-3.5">
                          <div className="font-bold text-white">{shipment.recipientName}</div>
                          <div className="text-[11px] text-slate-400">
                            {shipment.recipientAddress}, {shipment.city}
                          </div>
                        </td>

                        <td className="px-4 py-3.5 font-bold text-emerald-400">
                          {shipment.codCurrency === 'USD'
                            ? `$${shipment.codAmount.toLocaleString()} USD`
                            : `${shipment.codAmount.toLocaleString()} LBP`}
                        </td>

                        <td className="px-4 py-3.5 text-slate-400">
                          {shipment.serviceType}
                        </td>

                        <td className="px-4 py-3.5">
                          {shipment.currentStatus === 'delivered' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Delivered &amp; Paid</span>
                            </span>
                          ) : shipment.currentStatus === 'out_for_delivery' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-300 text-[11px] font-bold">
                              <Truck className="w-3 h-3 animate-bounce" />
                              <span>With Courier</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-[11px] font-bold">
                              <Clock className="w-3 h-3" />
                              <span>Sorting Hub</span>
                            </span>
                          )}
                        </td>

                        <td className="px-4 py-3.5 text-right">
                          <button
                            onClick={() => onTrackWaybill(shipment.waybill)}
                            className="px-2.5 py-1 bg-slate-800 hover:bg-orange-600 hover:text-white rounded-md text-[11px] font-bold text-slate-300 transition-colors cursor-pointer"
                          >
                            Track Live
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: COD LEDGER */}
          {activeTab === 'cod' && (
            <div className="p-5 space-y-6">
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Current Settlement Cycle
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                      Verified Safe Bag Deposit
                    </span>
                  </div>
                  <div className="text-2xl font-black text-white">
                    $3,820.00 USD{' '}
                    <span className="text-sm font-normal text-slate-400">
                      + 42,500,000 LBP
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Next automatic disbursement: <strong>Thursday at 3:00 PM</strong> (Whish Money / Cash Pickup / Lebanese Bank Transfer).
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => alert('Sample Remittance Statement (PDF) downloaded for cycle ending Sep 07.')}
                    className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Remittance PDF</span>
                  </button>
                </div>
              </div>

              {/* Settlement History */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Recent COD Remittance Settlements
                </h4>
                <div className="divide-y divide-slate-800/80 border border-slate-800 rounded-xl overflow-hidden text-xs">
                  <div className="p-4 bg-slate-900/60 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block">Remittance #RT-REM-8921</span>
                      <span className="text-[11px] text-slate-400">Paid out via Whish Money to +961 70 882 119</span>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-emerald-400 text-sm block">+$4,120.00 USD</span>
                      <span className="text-[10px] text-slate-400">Sep 01, 2026</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900/60 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block">Remittance #RT-REM-8840</span>
                      <span className="text-[11px] text-slate-400">Paid out via Cash Desk at Beirut Central Hub</span>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-emerald-400 text-sm block">+$3,690.00 USD</span>
                      <span className="text-[10px] text-slate-400">Aug 25, 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WAREHOUSE INVENTORY */}
          {activeTab === 'inventory' && (
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Beirut Central Hub Inventory Storage
                  </h4>
                  <p className="text-xs text-slate-400">
                    Live shelf stock physically stored at Corniche El Nahr facility with 24/7 power &amp; pick-and-pack.
                  </p>
                </div>

                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                  Fulfillment Status: Ready for Dispatch
                </span>
              </div>

              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                    <tr>
                      <th className="px-4 py-3">SKU</th>
                      <th className="px-4 py-3">Product Name</th>
                      <th className="px-4 py-3">Shelf Bin Location</th>
                      <th className="px-4 py-3">Total Stock</th>
                      <th className="px-4 py-3">Reserved</th>
                      <th className="px-4 py-3">Available</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {SAMPLE_WAREHOUSE_ITEMS.map((item) => (
                      <tr key={item.sku} className="hover:bg-slate-900/50">
                        <td className="px-4 py-3 font-mono font-bold text-orange-400">
                          {item.sku}
                        </td>
                        <td className="px-4 py-3 font-semibold text-white">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 text-slate-400">
                          {item.shelfLocation}
                        </td>
                        <td className="px-4 py-3 font-bold text-slate-300">
                          {item.stockQty}
                        </td>
                        <td className="px-4 py-3 text-amber-400">
                          {item.reservedQty}
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold">
                            {item.availableQty} units
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Card footer CTA */}
          <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-400">
              Want this dashboard connected to your Shopify or WooCommerce store?
            </span>
            <button
              onClick={onOpenPartnerModal}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors cursor-pointer"
            >
              Request Store Integration &rarr;
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
