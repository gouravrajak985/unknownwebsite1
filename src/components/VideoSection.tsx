import { Play } from 'lucide-react';

function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#003366] to-[#0070BA] aspect-video">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 hover:bg-white/30 transition-all cursor-pointer transform hover:scale-110">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <h3 className="text-2xl font-bold mb-2">SAP Business One Overview</h3>
              <p className="text-blue-100">Watch how SAP Business One transforms businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
