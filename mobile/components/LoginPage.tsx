import React, { useState } from 'react';
import Icon from './Icon';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      setError('Por favor, insira o email e a senha.');
      return;
    }
    setError('');
    onLoginSuccess();
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gradient-to-b from-blue-300 via-white to-blue-300 p-4">
      <div className="mx-auto w-full max-w-md">
        <header className="text-center mb-8">
          <div className="inline-block bg-white p-4 rounded-full shadow-lg mb-4">
            <Icon
              path="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm0 18a8 8 0 0 1-8-8c0-3.35 2.073-6.22 5-7.485v.001c.214.288.45.56.707.818l2.25 2.25a.5.5 0 0 1 0 .707l-2.058 2.058a.5.5 0 0 0 0 .707l2.121 2.121a.5.5 0 0 0 .707 0l2.058-2.058a.5.5 0 0 1 .707 0l2.25 2.25a.5.5 0 0 1 .146.353v.001a8 8 0 0 1-5.485 5z"
              size={64}
              className="text-primary"
            />
          </div>
          <h1 className="text-5xl font-bold text-blue-900">IoT de Plantas</h1>
          <p className="text-lg text-blue-700">Sistema de Irrigação Inteligente</p>
        </header>
        
        <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-medium-text mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@exemplo.com"
              className="w-full h-11 px-3 bg-slate-100 border border-slate-300 rounded-lg text-base text-dark-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-medium-text mb-2">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full h-11 px-3 bg-slate-100 border border-slate-300 rounded-lg text-base text-dark-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors duration-200 mt-2"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;