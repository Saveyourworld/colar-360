export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Massive 3600W AC Output",
      description: "Power 99% of home appliances, from heavy-duty refrigerators and AC units to high-precision medical equipment without breaking a sweat."
    },
    {
      icon: "☀️",
      title: "Hyper-Fast Solar Charging",
      description: "Utilize advanced MPPT technology to juice up from 0 to 80% in under 2 hours using direct sunlight—independence from the grid has never been faster."
    },
    {
      icon: "🔋",
      title: "EV-Grade LiFePO4 Battery",
      description: "Built with premium Lithium Iron Phosphate cells designed for 3,500+ cycles. That’s over 10 years of daily use before the capacity even hits 80%."
    },
    {
      icon: "📱",
      title: "Smart App Ecosystem",
      description: "Monitor discharge rates, toggle ports remotely, and optimize charging cycles directly from your smartphone via Wi-Fi or Bluetooth."
    },
    {
      icon: "🛡️",
      title: "UPS Grade Reliability",
      description: "With a <10ms switchover time, your desktop computers and servers won't even flicker when the grid goes down. It’s the ultimate invisible safety net."
    }
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-2xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Colar 3600: Ultimate Energy Freedom</h2>
          <p className="text-slate-500">Engineered for off-grid living and emergency backup.</p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl mr-5 bg-slate-50 p-3 rounded-lg">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-xl text-slate-800">{feature.title}</h3>
                <p className="text-gray-600 mt-1 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}