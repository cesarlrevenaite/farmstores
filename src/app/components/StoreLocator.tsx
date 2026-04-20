import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, Navigation, ExternalLink } from 'lucide-react';

interface StoreLocation {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  status: string;
  type: string;
  lat: number;
  lng: number;
}

const storesData: StoreLocation[] = [
  { id: 'FL0102', address: '8801 SW 40 St', city: 'Miami', state: 'FL', zip: '33165', status: 'Open', type: 'Dealer/Licensee', lat: 25.7335, lng: -80.3364 },
  { id: 'FL0104', address: '15000 SW 56 Street', city: 'Miami', state: 'FL', zip: '33185', status: 'Open', type: 'Licensee', lat: 25.7171, lng: -80.4439 },
  { id: 'FL0106', address: '20190 Old Cutler Rd', city: 'Miami', state: 'FL', zip: '33189', status: 'Open', type: 'Licensee', lat: 25.5755, lng: -80.3236 },
  { id: 'FL0108', address: '18800 NW 67 Ave', city: 'Miami', state: 'FL', zip: '33015', status: 'Open', type: 'Dealer/Licensee', lat: 25.9436, lng: -80.3015 },
  { id: 'FL0110', address: '8753 SW 157 Ave', city: 'Miami', state: 'FL', zip: '33193', status: 'Open', type: 'Licensee', lat: 25.6841, lng: -80.4552 },
  { id: 'FL0111', address: '7601 W 32 Avenue', city: 'Hialeah', state: 'FL', zip: '33018', status: 'Open', type: 'Licensee', lat: 25.8812, lng: -80.3117 },
  { id: 'FL0114', address: '1800 SW 3rd Ave', city: 'Miami', state: 'FL', zip: '33129', status: 'Open', type: 'Licensee', lat: 25.7562, lng: -80.2016 },
  { id: 'FL0115', address: '501 Hialeah Drive', city: 'Hialeah', state: 'FL', zip: '33010', status: 'Open', type: 'Licensee', lat: 25.8239, lng: -80.2785 },
  { id: 'FL0116', address: '16801 NE 15 Ave', city: 'N Miami Beach', state: 'FL', zip: '33162', status: 'Open', type: 'Licensee', lat: 25.9317, lng: -80.1705 },
  { id: 'FL0202', address: '9128 Griffin Rd', city: 'Cooper City', state: 'FL', zip: '33328', status: 'Open', type: 'Licensee', lat: 26.0618, lng: -80.2588 },
  { id: 'FL0801', address: '3270 NW 7 Street', city: 'Miami', state: 'FL', zip: '33125', status: 'Open', type: 'Licensee', lat: 25.7797, lng: -80.2505 },
  { id: 'FL0803', address: '4295 E 4 Ave', city: 'Hialeah', state: 'FL', zip: '33013', status: 'Open', type: 'Licensee', lat: 25.8617, lng: -80.2541 },
  { id: 'FL0804', address: '4741 SW 8 Street', city: 'Miami', state: 'FL', zip: '33134', status: 'Open', type: 'Licensee', lat: 25.7645, lng: -80.2713 },
  { id: 'FL1007', address: '11291 NW 87 Ct', city: 'Hialeah Gardens', state: 'FL', zip: '33018', status: 'Open', type: 'Licensee', lat: 25.8752, lng: -80.3391 },
  { id: 'FL1202', address: '960 SW 87 Ave', city: 'Miami', state: 'FL', zip: '33174', status: 'Open', type: 'Licensee', lat: 25.7623, lng: -80.3344 },
  { id: 'FL1203', address: '99 N Royal Poinciana Blvd', city: 'Miami Springs', state: 'FL', zip: '33166', status: 'Open', type: 'Licensee', lat: 25.8208, lng: -80.2842 },
  { id: 'FL1204', address: '9451 SW 56 Street', city: 'Miami', state: 'FL', zip: '33165', status: 'Open', type: 'Licensee', lat: 25.7171, lng: -80.3456 },
  { id: 'FL1205', address: '11190 W Flagler St', city: 'Miami', state: 'FL', zip: '33174', status: 'Open', type: 'Licensee', lat: 25.7695, lng: -80.3773 },
  { id: 'FL1306', address: '7420 SW 57 Ave', city: 'Miami', state: 'FL', zip: '33143', status: 'Open', type: 'Licensee', lat: 25.7011, lng: -80.2863 },
  { id: 'FL1308', address: '17775 NW 78 Ave', city: 'Miami', state: 'FL', zip: '33015', status: 'Open', type: 'Licensee', lat: 25.9338, lng: -80.3231 },
  { id: 'FL1319', address: '1920 NE 123 Street', city: 'North Miami', state: 'FL', zip: '33181', status: 'Open', type: 'Licensee', lat: 25.8872, lng: -80.1652 },
  { id: 'FL1322', address: '11700 Quail Roost Dr', city: 'Miami', state: 'FL', zip: '33177', status: 'Open', type: 'Licensee', lat: 25.5905, lng: -80.3845 },
  { id: 'FL1902', address: '2084 Sarno Road', city: 'Melbourne', state: 'FL', zip: '32935', status: 'Open', type: 'Dealer/Licensee', lat: 28.1066, lng: -80.6483 },
  { id: 'FL2401', address: '10760 Caribbean Blvd', city: 'Cutler Ridge', state: 'FL', zip: '33189', status: 'Open', type: 'Licensee', lat: 25.5785, lng: -80.3661 },
  { id: 'FL2406', address: '12075 S Dixie Hwy', city: 'Pinecrest', state: 'FL', zip: '33156', status: 'Open', type: 'Licensee', lat: 25.6591, lng: -80.3157 },
  { id: 'FL2407', address: '9601 SW 160 St', city: 'Miami', state: 'FL', zip: '33157', status: 'Open', type: 'Licensee', lat: 25.6201, lng: -80.3473 },
  { id: 'FL2411', address: '36 NW 15 Street', city: 'Homestead', state: 'FL', zip: '33030', status: 'Open', type: 'Licensee', lat: 25.4801, lng: -80.4828 },
  { id: 'FL2413', address: '10265 Marlin Rd', city: 'Cutler Bay', state: 'FL', zip: '33157', status: 'Open', type: 'Licensee', lat: 25.5861, lng: -80.3541 },
  { id: 'FL4202', address: '125 Linebaugh Ave W', city: 'Tampa', state: 'FL', zip: '33612', status: 'Remodel', type: 'Remodel', lat: 28.0336, lng: -82.4631 },
  { id: 'FL6201', address: '3515 Webber St', city: 'Sarasota', state: 'FL', zip: '34239', status: 'Open', type: 'Dealer/Licensee', lat: 27.3117, lng: -82.5056 },
  { id: 'FL6410', address: '2324 State Rd 580', city: 'Clearwater', state: 'FL', zip: '34652', status: 'Open', type: 'Dealer/Licensee', lat: 28.0163, lng: -82.7237 }
];

export function StoreLocator() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStore, setSelectedStore] = useState<StoreLocation | null>(null);

  const filteredStores = useMemo(() => {
    if (!searchTerm) return storesData;
    const lowerSearch = searchTerm.toLowerCase();
    return storesData.filter(store => 
      store.city.toLowerCase().includes(lowerSearch) || 
      store.address.toLowerCase().includes(lowerSearch) ||
      store.zip.includes(lowerSearch)
    );
  }, [searchTerm]);

  const handleStoreClick = useCallback((store: StoreLocation) => {
    setSelectedStore(store);
  }, []);

  // Determine what to show on the map
  const mapQuery = selectedStore 
    ? `${selectedStore.address}, ${selectedStore.city}, ${selectedStore.state} ${selectedStore.zip}`
    : searchTerm ? `${searchTerm}, Florida` : "Farm Stores, Florida";
  
  const mapZoom = selectedStore ? 15 : searchTerm ? 11 : 7;
  
  // This generates a generic Google Maps embed URL without requiring an API key
  const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=${mapZoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-gray-50">
      <div className="bg-black text-white py-6 px-4 md:px-8 shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="font-['Oswald',sans-serif] text-3xl md:text-4xl font-bold uppercase tracking-tight">
              Find a <span className="text-red-600">Location</span>
            </h1>
            <p className="text-gray-400 mt-1">Discover a Farm Stores near you.</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search by city, address, or zip..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedStore(null);
              }}
              className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-red-500 focus:bg-black/50 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Store List */}
        <div className="w-full md:w-[400px] lg:w-[450px] bg-white border-r border-gray-200 overflow-y-auto shrink-0 flex flex-col">
          <div className="p-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {filteredStores.length} {filteredStores.length === 1 ? 'Location' : 'Locations'} Found
          </div>
          <div className="flex-1">
            {filteredStores.map((store) => (
              <div 
                key={store.id}
                onClick={() => handleStoreClick(store)}
                className={`p-5 border-b border-gray-100 cursor-pointer transition-all hover:bg-gray-50 ${selectedStore?.id === store.id ? 'bg-red-50/50 border-l-4 border-l-red-600' : 'border-l-4 border-l-transparent'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">
                    {store.address}
                  </h3>
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full ${store.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {store.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 text-sm">
                  {store.city}, {store.state} {store.zip}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-md">
                    <span className="font-medium text-gray-700">{store.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-gray-500 uppercase tracking-widest text-[10px]">Store #{store.id}</span>
                  </div>
                </div>

                {selectedStore?.id === store.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-gray-200/60 flex gap-3"
                  >
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${store.address}, ${store.city}, ${store.state} ${store.zip}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-bold text-sm transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Navigation size={16} />
                      Directions
                    </a>
                  </motion.div>
                )}
              </div>
            ))}
            {filteredStores.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                <MapPin className="mx-auto mb-3 opacity-20" size={48} />
                <p className="font-medium text-lg">No locations found.</p>
                <p className="text-sm mt-1">Try adjusting your search.</p>
              </div>
            )}
          </div>
        </div>

        {/* Map Area - Using a simple iframe embed to avoid API keys and deprecation errors */}
        <div className="flex-1 bg-gray-200 relative">
          <div className="absolute top-4 right-4 z-10">
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/90 hover:bg-white text-black px-6 py-3 rounded-full font-bold text-sm transition-colors shadow-lg backdrop-blur-sm border border-gray-200"
            >
              <ExternalLink size={18} />
              Open in Google Maps
            </a>
          </div>
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src={iframeSrc}
            title="Google Maps Overview"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
