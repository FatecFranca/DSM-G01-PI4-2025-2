
import { useState, useEffect } from 'react';
import { IoTData } from '../types';

const useMockIoTData = () => {
  const [data, setData] = useState<IoTData>({
    soilMoisture: 65,
    lastWatered: 'Hoje, 08:15',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        soilMoisture: Math.max(0, Math.min(100, prevData.soilMoisture + (Math.random() - 0.5) * 2)), // Fluctuate slightly
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);
  
  return { data };
};

export default useMockIoTData;