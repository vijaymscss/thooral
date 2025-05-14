import { API_CONFIG } from "./config";
import type { Coordinates } from "./types";

class WeatherApi {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    });

    return `${endpoint}?${searchParams.toString()}`;
  }

  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
  }

  async getCurrentWeather<T>({ lat, lon }: Coordinates): Promise<T> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
      lat: lat,
      lon: lon,
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });

    return this.fetchData<T>(url);
  }

  async getForecast<T>({ lat, lon }: Coordinates): Promise<T> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
      lat: lat,
      lon: lon,
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });

    return this.fetchData<T>(url);
  }

  async reverseGeocode<T>(lat: number, lon: number): Promise<T> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/reverse`, {
      lat: lat,
      lon: lon,
      limit: 1,
    });

    return this.fetchData<T>(url);
  }
}

export const weatherApi = new WeatherApi();
