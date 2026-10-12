import { useNavigate } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader';
import { FileQuestion, ArrowLeft } from 'lucide-react';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50 font-sans flex flex-col">
      <PublicHeader />

      <div className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-stone-200 p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-fbc-green/10 text-fbc-green rounded-full flex items-center justify-center mb-6">
            <FileQuestion className="w-8 h-8" />
          </div>

          <h1 className="text-6xl font-black text-gray-900 mb-2 tracking-tight">404</h1>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Page Under Construction</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            This section of the Fourah Bay College Alumni network is currently being prepared for launch. Please check back later.
          </p>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-fbc-green hover:bg-fbc-green-dark text-white font-semibold py-3 px-6 rounded-lg transition-all text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
