import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-red-600">
          <h1 className="font-['Oswald',sans-serif] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
            Privacy <span className="text-red-600">Policy</span>
          </h1>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p>
              At Farm Stores, we are committed to protecting your privacy. We developed this Privacy Policy to share with you our information collection practices and the options you have when visiting our Web site. You can always be assured the information we collect is used to provide a more personalized experience for users of this site. By using this site, you are agreeing to accept the practices described in this Privacy Policy.
            </p>

            <p>
              Please note that the other Farm Stores Web sites may be governed by separate policies. When visiting any of our other sites, please refer to its Terms of Use.
            </p>

            <section>
              <h2 className="font-['Oswald',sans-serif] text-2xl font-bold uppercase tracking-wide text-black mb-4">Who is Collecting Your Information</h2>
              <p>
                Farm Stores and its affiliates are the sole owners of the information collected; we will not sell, share, rent or loan this information to any third party. However, we may use and share aggregated information that does not personally identify you with third parties in order to improve the site for our users.
              </p>
            </section>

            <section>
              <h2 className="font-['Oswald',sans-serif] text-2xl font-bold uppercase tracking-wide text-black mb-4">What is Collected, and How Do We Use It</h2>
              <p className="mb-4">
                You can visit our Web site without providing any personal data to us. However, our site does include forms where the following information is requested:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your business contact details (such as your name, company, address and alternate contact) – to help us respond to your business inquiry</li>
                <li>Your company's basic background information (such as areas of focus, history, and gross annual sales) – to help us forward your information to the appropriate department and to better understand your company's capabilities and product offerings</li>
                <li>Information associated with certain electronic documents – to help you pre-qualify for potentially participating in a category review and/or conducting business with us</li>
              </ul>
            </section>

            <section>
              <h2 className="font-['Oswald',sans-serif] text-2xl font-bold uppercase tracking-wide text-black mb-4">Cookies</h2>
              <p>
                By use of this site, you consent to our use of cookies. A "cookie" is a piece of data stored on your hard drive containing information about you. Usage of a cookie is in no way linked to any personally identifiable information while on our Web site.
              </p>
            </section>

            <section>
              <h2 className="font-['Oswald',sans-serif] text-2xl font-bold uppercase tracking-wide text-black mb-4">Security</h2>
              <p>
                Our site includes secured connections where users enter registration details. This means that information is encrypted before it is sent over the Internet between your computer and Farm Stores' computers.
              </p>
            </section>

            <section>
              <h2 className="font-['Oswald',sans-serif] text-2xl font-bold uppercase tracking-wide text-black mb-4">Contact Us</h2>
              <p>
                Please let us know if you have any questions about our Privacy Policy. Simply send us an e-mail at <a href="mailto:info@farmstores.com" className="text-red-600 hover:text-red-700 font-bold transition-colors">info@farmstores.com</a>.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-200 mt-8 text-sm">
              <p className="font-bold text-gray-500 uppercase">COPYRIGHT NOTICE</p>
              <p>Copyright© 2022 Farm Stores, Inc. All rights reserved. Any rights not expressly granted herein are reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
