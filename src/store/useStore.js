import { create } from 'zustand';

const useStore = create((set) => ({
    defaultCenter: [38.64, -90.3], // Default map center
    mapCenter: [38.64, -90.3], // Default map center
    setMapCenter: (newCenter) => set({ mapCenter: newCenter }),

    aboutOpen: false, // State for dialog
    openAbout: () => set({ aboutOpen: true }),
    closeAbout: () => set({ aboutOpen: false }),
}));

export default useStore;
