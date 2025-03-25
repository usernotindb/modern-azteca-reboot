
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8"
        >
          <h1 className="text-3xl font-bold mb-8 text-aztec-900">Privacy Policy</h1>
          
          <div className="space-y-6 text-aztec-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">Introduction</h2>
              <p>
                At Azteca Technology, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">Information We Collect</h2>
              <p>
                We may collect personal identification information from users in various ways, including, but not limited to, when users visit our site, register on the site, place an order, fill out a form, and in connection with other activities, services, features or resources we make available on our site.
              </p>
              <p className="mt-2">
                The personal information you may be asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <p className="mt-2">
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">How We Use Your Information</h2>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you to provide you with updates and other information</li>
                <li>Send you emails regarding our products and services</li>
                <li>Find and prevent fraud</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Sites is at your own risk.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this privacy policy.
              </p>
              <p className="mt-2">
                You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>By email: privacy@azteca-tech.com</li>
                <li>By phone: 1-800-AZTECA-TECH</li>
                <li>By mail: 123 Tech Plaza, Suite 500, San Antonio, TX 78123</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
