import type { Coordinates } from "@/api/types";
import { useEffect, useState } from "react";

interface GeoLocation {
  coordinates: Coordinates | null;
  error: string | null;
  loading: boolean;
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<GeoLocation>({
    coordinates: null,
    error: null,
    loading: true,
  });

  const getLocation = () => {
    setLocation((prev) => ({ ...prev, loading: true, error: null }));

    if (!navigator.geolocation) {
      setLocation((prev) => ({ ...prev, loading: false, error: "Geolocation is not supported by this browser." }));
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation((prev) => ({
          ...prev,
          loading: false,
          coordinates: { lat: latitude, lon: longitude },
        }));
      },
      (error) => {
        setLocation((prev) => ({ ...prev, loading: false, error: error.message }));
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000,
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {
    ...location,
    getLocation,
  };
};
