import { Button } from "@/components/ui/button";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { RefreshCcw } from "lucide-react";
import React from "react";

const Dashboard = () => {
  const { coordinates, error, getLocation, loading } = useGeoLocation();
  console.log("error: ", error);
  console.log("coordinates: ", coordinates);

  const refreshData = () => {
    getLocation();
  };

  return (
    <div>
      <div className='flex items-center justify-between py-4'>
        <h1 className='text-xl font-bold'>My Location</h1>
        <Button variant={"outline"} onClick={refreshData} disabled={loading}>
          {loading ? "Loading..." : "Get Location"}
          <RefreshCcw className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
