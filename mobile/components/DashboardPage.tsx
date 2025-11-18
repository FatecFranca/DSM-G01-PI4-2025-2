
import React from 'react';
import useMockIoTData from '../hooks/useMockIoTData';
import Icon from './Icon';

interface DataCardProps {
    icon: string;
    title: string;
    value: string;
    unit: string;
    color: string;
}

const DataCard: React.FC<DataCardProps> = ({ icon, title, value, unit, color }) => (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
        <div className={`p-3 rounded-full ${color}`}>
            <Icon path={icon} size={24} className="text-white" />
        </div>
        <div>
            <p className="text-sm text-medium-text">{title}</p>
            <p className="text-2xl font-bold text-dark-text">
                {value}<span className="text-lg font-normal ml-1">{unit}</span>
            </p>
        </div>
    </div>
);

const DashboardPage: React.FC = () => {
    const { data } = useMockIoTData();

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <header className="mb-6">
                <h1 className="text-4xl font-bold text-dark-text">Olá, Usuário!</h1>
                <p className="text-md text-medium-text">O status da sua planta está atualizado.</p>
            </header>

            <div className="mb-6">
                <div className="max-w-sm mx-auto">
                    <DataCard 
                        icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z M12 11a2 2 0 100-4 2 2 0 000 4z" 
                        title="Umidade do Solo" 
                        value={data.soilMoisture.toFixed(0)} 
                        unit="%"
                        color="bg-blue-500"
                    />
                </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
                 <h2 className="text-lg font-bold text-dark-text mb-2">Registro do Sistema</h2>
                 <div className="text-sm space-y-1 font-mono">
                    <p><span className="text-green-600 font-semibold">[OK]</span> Sistema operacional.</p>
                    <p><span className="text-blue-600 font-semibold">[INFO]</span> Último ciclo de rega concluído.</p>
                    <p className="text-medium-text">Última rega: {data.lastWatered}</p>
                 </div>
            </div>
        </div>
    );
};

export default DashboardPage;