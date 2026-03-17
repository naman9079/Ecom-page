import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">Last updated: March 17, 2026</p>
            <p className="text-sm text-gray-500 mt-2">Daecom Studio</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto space-y-10 text-base leading-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p>
                At Daecom Studio, we respect your privacy and are committed to protecting the personal
                information you share with us. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or submit
                information through our forms, advertisements, or other digital platforms.
              </p>
              <p>
                By using our website and services, you agree to the collection and use of information
                in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>

              <h3 className="text-xl font-medium">1. Personal Information</h3>
              <p>
                When you interact with our website, contact us, or submit a form (including lead
                generation forms through social media platforms), we may collect personal information
                such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Company Name</li>
                <li>Project Details or Inquiry Information</li>
                <li>Any other information you voluntarily provide</li>
              </ul>
              <p>
                This information helps us understand your requirements and respond to your inquiries
                effectively.
              </p>

              <h3 className="text-xl font-medium">2. Automatically Collected Information</h3>
              <p>
                When you visit our website, certain information may be automatically collected through
                cookies and tracking technologies, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IP Address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited on our website</li>
                <li>Time spent on pages</li>
                <li>Referral sources</li>
              </ul>
              <p>
                This information helps us improve the performance, usability, and security of our
                website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <p>The information we collect may be used for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To respond to inquiries and project requests</li>
                <li>To provide consultation or service-related information</li>
                <li>To improve our website and user experience</li>
                <li>To analyze website traffic and engagement</li>
                <li>To run advertising campaigns and measure performance</li>
                <li>To send updates, newsletters, or promotional content (if you opt in)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Advertising and Marketing</h2>
              <p>We may use third-party advertising platforms such as:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Meta Platforms (Facebook and Instagram advertising)</li>
                <li>Google advertising services</li>
              </ul>
              <p>These platforms may use cookies, pixels, and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Track user activity on our website</li>
                <li>Measure ad performance</li>
                <li>Deliver relevant advertisements</li>
                <li>Build remarketing audiences</li>
              </ul>
              <p>
                For example, tools such as the Meta Pixel may track actions like page visits or form
                submissions in order to improve advertising effectiveness.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Cookies and Tracking Technologies</h2>
              <p>Our website may use cookies and similar tracking technologies to enhance user experience.</p>
              <p>Cookies help us:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Understand visitor behavior</li>
                <li>Improve website functionality</li>
                <li>Personalize content and advertisements</li>
                <li>Analyze marketing campaign performance</li>
              </ul>
              <p>
                You can choose to disable cookies through your browser settings, though doing so may
                affect certain functionalities of the website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Sharing of Information</h2>
              <p>We do not sell, trade, or rent your personal information to third parties.</p>
              <p>
                However, we may share information with trusted service providers who help us operate our
                website or marketing activities, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Website hosting providers</li>
                <li>Marketing and analytics platforms</li>
                <li>Advertising platforms</li>
              </ul>
              <p>
                These third parties are required to protect your information and use it only for the
                intended purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your
                personal information against unauthorized access, misuse, or disclosure.
              </p>
              <p>
                While we strive to protect your information, no method of transmission over the internet
                is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Third-Party Links</h2>
              <p>
                Our website may contain links to external websites. We are not responsible for the
                privacy practices or content of those third-party websites.
              </p>
              <p>
                We encourage users to review the privacy policies of any external websites they visit.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Your Rights</h2>
              <p>
                Depending on your location, you may have rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The right to access your personal information</li>
                <li>The right to request corrections</li>
                <li>The right to request deletion of your data</li>
                <li>The right to withdraw consent for marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes
                outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated revision date.
              </p>
              <p>
                We encourage users to review this page periodically to stay informed about how we protect
                their information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how your information is handled,
                please contact us:
              </p>
              <p className="text-gray-700">
                Daecom Studio
                <br />
                Email: info@daecomstudio.com
                <br />
                Website: https://daecomstudio.com/
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
