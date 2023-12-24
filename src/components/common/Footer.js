import React from 'react';

const FooterCard = () => {
  return (
    <div className="bg-gray-900 text-white md:flex p-8">
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-900 p-4 rounded-md mb-4 md:mb-0 md:mr-4">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p>Ombrulla is an AI-driven company specializing in extracting
             insights from diverse data sources, including photos, videos,
              and data lakes. Our tailored solutions help businesses make data-driven
               decisions and improve their bottom line through automation and AI-powered 
              analysis.
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-md mb-4 md:mb-0 md:mr-4">
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <p>
            AI Infrastructure Inspection
            AI Visual Inspection
            AI Data Analytics
            AI People Tracking
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-md mb-4 md:mb-0 md:mr-4">
          <h3 className="text-lg font-semibold mb-2">Our Solutions</h3>
          <p>
            Asset Performance Management
            Job Grading & Evaluation
            Compensation Management
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Reach Us</h3>
          <p>
            United Kingdom, 53 Denton close
            Redhill, Surrey, RH1 5LB
            +44 787 999 3892
            Germany, Schützenstraße 51A
            Lübeck, 23558
            +49 179 512 5812
            India, No. 154/20, Royal Space
            Third Floor TI, HSR Layout,
            Bangalore, Karnataka
            560102
            +91 85900 56435
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
