import { FaWrench, FaOilCan, FaShieldAlt, FaCheckCircle, FaPercentage } from "react-icons/fa";
import Link from "next/link";

export default function PromoDetails() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore Our Winter Warm Deal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Satisfaction Guarantee */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaWrench className="text-orange-500 w-8 h-8 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Satisfaction Guarantee</h3>
            </div>
            <p className="text-gray-600">Experience peace of mind with repairs covered up to $500 within the first 14 days or 500 miles.</p>
          </div>
          {/* Free Oil Changes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaOilCan className="text-orange-500 w-8 h-8 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Free Oil Changes</h3>
            </div>
            <p className="text-gray-600">Enjoy 4 complimentary oil changes over the next 12 months to keep your car in top condition.</p>
          </div>
          {/* Warranty Protection */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-orange-500 w-8 h-8 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Warranty Protection</h3>
            </div>
            <p className="text-gray-600">Drive confidently with comprehensive coverage for major systems, ensuring peace of mind whether you finance or pay cash.</p>
          </div>
          {/* Certified Inspections */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-orange-500 w-8 h-8 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Certified Inspections</h3>
            </div>
            <p className="text-gray-600">Rest assured knowing every car is thoroughly inspected by our trusted mechanic before sale.</p>
          </div>
          {/* Maintenance Discounts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaPercentage className="text-orange-500 w-8 h-8 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Maintenance Discounts</h3>
            </div>
            <p className="text-gray-600">Enjoy 15% off all future labor costs for 6 months after your first year with us.</p>
          </div>
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <Link href="/pre-approval">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">Get Started</button>
          </Link>
          <Link href="/#faqs">
            <button className="bg-transparent border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white">See FAQs</button>
          </Link>
        </div>
      </div>
    </section>
  );
} 