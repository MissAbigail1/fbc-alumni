import { ArrowLeft, GraduationCap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Directory() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-stone-50 font-sans text-gray-900 flex items-center py-16">
      <div className="max-w-3xl w-full mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-fbc-green text-xs font-bold uppercase tracking-widest mb-8">
          <Users className="w-4 h-4" /> Directory Coming Soon
        </div>
        <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center">
          <GraduationCap className="w-10 h-10 text-fbc-green" />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-950 mb-5">FBC Alumni Directory</h1>
        <p className="text-fbc-gold text-lg font-semibold mb-6">Coming Soon</p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-5">
          We are preparing a dedicated alumni directory to help Fourah Bay College alumni connect with one another.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          When the directory launches, alumni will be able to sign in using their <strong className="text-gray-900">University ID number</strong> and access the alumni directory to discover and connect with fellow alumni.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center justify-center gap-2 bg-fbc-green hover:bg-fbc-green-dark text-white font-bold rounded px-6 py-3 text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Homepage
        </button>
      </div>
    </main>
  );
}

export default Directory;
