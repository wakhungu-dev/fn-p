import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied shoppers across Kenya
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-semibold">Customer Name</h4>
                  <div className="flex text-yellow-400 mt-1">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;The quality exceeded my expectations! Delivery was faster than promised. Will definitely shop here again.&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;