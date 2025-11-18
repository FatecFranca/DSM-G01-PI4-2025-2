
import React from 'react';
import Icon from './Icon';

const StatisticsPage: React.FC = () => {
  const powerBiEmbedUrl = "https://app.powerbi.com/view?r=eyJrIjoiNWRhZmUxZjMtMDNlZi00MGQyLWFmNzItODgyNjk2ZWMzOWIzIiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9";
  const isUrlConfigured = true;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-dark-text">Estatísticas</h1>
        <p className="text-md text-medium-text">Com tecnologia Power BI</p>
      </header>
      
      <div className="bg-white rounded-xl shadow-lg aspect-video">
        {isUrlConfigured ? (
          <iframe 
            src={powerBiEmbedUrl} 
            title="Relatório Power BI"
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen={true}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-xl p-4">
            <Icon 
              path="M3 13.125C3 12.504 3.504 12 4.125 12h15.75c.621 0 1.125.504 1.125 1.125v6.75C21 20.496 20.496 21 19.875 21H4.125C3.504 21 3 20.496 3 19.875v-6.75zM4.125 3C3.504 3 3 3.504 3 4.125v6.75C3 11.496 3.504 12 4.125 12h15.75c.621 0 1.125-.504 1.125-1.125V4.125C21 3.504 20.496 3 19.875 3H4.125z" 
              size={48}
              className="text-slate-400"
            />
            <h3 className="text-xl font-semibold text-dark-text mt-4">Relatório Power BI</h3>
            <p className="text-medium-text text-center mt-2">
              Seu painel do Power BI apareceria aqui.
              <br/>
              Por favor, configure a URL de incorporação no código-fonte.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticsPage;
