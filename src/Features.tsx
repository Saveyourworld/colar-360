export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Massive 3600W AC Output",
      description: "Power 99% of home appliances, from heavy-duty refrigerators and AC units to high-precision medical equipment."
    },
    {
      icon: "☀️",
      title: "Hyper-Fast Solar Charging",
      description: "Utilize advanced MPPT technology to juice up from 0 to 80% in under 2 hours using direct sunlight—independence from the grid."
    },
    {
      icon: "🔋",
      title: "EV-Grade LiFePO4 Battery",
      description: "Built with premium Lithium Iron Phosphate cells designed for 3,500+ cycles. That’s over 10 years of daily use."
    },
    {
      icon: "📱",
      title: "Smart App Ecosystem",
      description: "Monitor discharge rates, toggle ports remotely, and optimize charging cycles directly from your smartphone."
    },
    {
      icon: "🛡️",
      title: "UPS Grade Reliability",
      description: "With a <10ms switchover time, your desktop computers and servers won't even flicker when the grid goes down."
    }
  ];

  return (
    <section className="py-16 lg:py-32 px-4 bg-slate-50">
      {/* Container expands from max-w-2xl (mobile) to max-w-7xl (PC) */}
      <div className="max-w-2xl lg:max-w-7xl mx-auto">
        
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4">
            Colar 3600: Ultimate Energy Freedom
          </h2>
          <p className="text-slate-500 text-lg lg:text-xl max-w-3xl mx-auto">
            Engineered for off-grid living, emergency backup, and industrial-grade performance.
          </p>
        </div>

        {/* Responsive Grid: 
          - 1 column on mobile (default)
          - 2 columns on tablets (md:)
          - 3 columns on PC (lg:)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
            >
              <div className="text-5xl mb-6 bg-slate-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-amber-50 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-2xl text-slate-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}