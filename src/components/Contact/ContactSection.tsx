"use client";

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8">
            AT A MOVE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact</h3>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-1">Email:</p>
                <p className="text-gray-900 font-medium">info@capitalball.com</p>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Phone Number:</p>
                <p className="text-gray-900 font-medium">+62 21 1234 5678</p>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Location</h3>

            <div className="space-y-2">
              <p className="text-gray-900 font-medium">SDM ITB Building</p>
              <p className="text-gray-600">Jalan Ganesha No 10 Building</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Opening Hour</h3>

            <div className="space-y-2">
              <p className="text-gray-900 font-medium">Mon - Fri: 9AM - 4PM</p>
              <p className="text-gray-600">Sat - Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}