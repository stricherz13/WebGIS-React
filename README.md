# WebGIS Template Starter Project

## Overview
This is a starter WebGIS project built with **React**. The project is designed to serve as a universal frontend template for WebGIS and web mapping applications. It provides a foundational structure for creating interactive mapping applications, complete with a sidebar for tools/forms and an interactive map powered by **Leaflet**.

---

## Features
- **Interactive Map**: An interactive map using React Leaflet with support for layers, markers, and popups.
- **Sidebar**: A collapsible sidebar designed for forms, filters, and tools.
- **Search Functionality**: Search for locations with reverse geocoding using OpenStreetMap's Nominatim API.
- **Material UI**: Clean and responsive UI components for the sidebar, navbar, and overall layout.
- **Dynamic Map View**: Map automatically pans and zooms to searched locations.

---

## Tech Stack
- **React**: Frontend framework for building user interfaces.
- **React Leaflet**: For rendering and interacting with maps.
- **Material UI**: UI library for responsive and modern components.
- **OpenStreetMap Nominatim API**: For geocoding search functionality.

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/stricherz13/WebGIS-React.git
   ```

2. Navigate to the project directory:
   ```bash
   cd WebGIS-React
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser:
   ```
   http://localhost:5173
   ```

---

## Project Structure
```
project/
├── public/             # Static assets (e.g., favicon, map icon, etc.)
├── src/                # Source code
│   ├── components/     # Reusable components (e.g., Sidebar, MapView)
│   ├── App.js          # Main application file
│   └── index.js        # Entry point
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

---

## Usage
### Interactive Map
- Pan and zoom to explore the map.
- Add custom markers or layers by extending the `MapView` component.

### Sidebar
- Use the provided form for tool integration.
- Add additional controls, filters, or forms as needed.

### Search Functionality
- Enter a location name in the search bar.
- The map automatically pans to the corresponding coordinates.

---

## Customization
### Update the Favicon
To replace the favicon with your own:
1. Add your favicon file (e.g., `map-icon.svg`) to the `public/` directory.
2. Update the `<link>` tag in `public/index.html`:
   ```html
   <link rel="icon" type="image/svg+xml" href="/map-icon.svg" />
   ```

### Add More Features
- Use React Leaflet plugins for advanced mapping functionality (e.g., heatmaps, drawing tools).
- Integrate APIs like Google Maps, Mapbox, or Esri for additional geospatial data.
- Add state management (e.g., Redux, Zustand) for complex interactions.

---

## Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments
- [React](https://reactjs.org/)
- [Leaflet](https://leafletjs.com/)
- [Material UI](https://mui.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)

