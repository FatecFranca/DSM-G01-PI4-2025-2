
import React, { useState, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import StatisticsPage from './components/StatisticsPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLoginSuccess = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-300 via-white to-blue-300 font-sans">
      <main className="pb-4"> 
        <StatisticsPage />
      </main>
    </div>
  );
};

export default App;
