import { useEffect, useRef, useState } from 'react';
import { Layers, Users, Activity, Clock } from 'lucide-react';

const stats = [
  { icon: Layers, value: '500+', label: 'Projects Completed' },
  { icon: Users,  value: '200+', label: 'Happy Clients' },
  { icon: Activity, value: '98%', label: 'Client Satisfaction' },
  { icon: Clock,  value: '24/7', label: 'Support Available' },
];

const StatsStrip = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const cards = track.querySelectorAll('.stat-card');
      let closest = 0, minDiff = Infinity;
      cards.forEach((c, i) => {
        const diff = Math.abs(c.getBoundingClientRect().left - track.getBoundingClientRect().left);
        if (diff < minDiff) { minDiff = diff; closest = i; }
      });
      setActiveIndex(closest);
    };
    track.addEventListener('scroll', handleScroll);
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll('.stat-card');
    if (cards[i]) cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  return (
    <div className="w-full">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-4
          overflow-x-auto md:overflow-x-visible
          scroll-smooth snap-x snap-mandatory
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          pb-1 md:pb-0"
      >
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div
            key={i}
            className="stat-card
              flex-none w-[72vw] md:flex-1
              snap-start
              bg-blue-950 border border-red-500/25 border-t-2 border-t-red-500
              rounded-xl p-5 md:p-4
              flex flex-col gap-2"
          >
            <div className="w-10 h-10 md:w-9 md:h-9 bg-red-500/10 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-red-500" strokeWidth={2} />
            </div>
            <p className="text-3xl md:text-2xl font-extrabold text-red-500 leading-none tracking-tight">
              {value}
            </p>
            <p className="text-sm font-medium text-white/55">{label}</p>
          </div>
        ))}
      </div>

      {/* Dots — mobile only */}
      <div className="flex md:hidden justify-center gap-1.5 mt-3">
        {stats.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === activeIndex ? 'bg-red-500' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsStrip;