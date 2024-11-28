import { useState, useEffect } from 'react';
import axios from 'axios';

const isValidGeojson = (data) => {
    return (
        data &&
        data.type === 'FeatureCollection' &&
        Array.isArray(data.features)
    );
};

const useGeojson = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGeojson = async () => {
            try {
                const response = await axios.get(url);

                // Validate GeoJSON data
                if (isValidGeojson(response.data)) {
                    setData(response.data);
                } else {
                    throw new Error('Invalid GeoJSON format');
                }
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            }
        };

        fetchGeojson();
    }, [url]);

    return { data, error };
};

export default useGeojson;
