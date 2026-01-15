import React from 'react';

export default function Features() {
  const features = [
    {
      title: 'Easy to Use',
      description: 'Intuitive interface designed for users of all skill levels.',
      icon: '🎯',
    },
    {
      title: 'Secure',
      description: 'Your data is protected with industry-standard security measures.',
      icon: '🔒',
    },
    {
      title: 'Fast & Reliable',
      description: 'Built for performance with 99.9% uptime guarantee.',
      icon: '⚡',
    },
    {
      title: 'Scalable',
      description: 'Grows with your business needs, from startup to enterprise.',
      icon: '📈',
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the features that make us stand out
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
