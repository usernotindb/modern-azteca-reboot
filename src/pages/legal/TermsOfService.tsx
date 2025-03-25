
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8"
        >
          <h1 className="text-3xl font-bold mb-8 text-aztec-900">Terms of Service</h1>
          
          <div className="space-y-6 text-aztec-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">1. Introduction</h2>
              <p>
                Welcome to Azteca Technology. These Terms of Service ("Terms") govern your use of our website, products, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Azteca Technology's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on Azteca Technology's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="mt-2">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Azteca Technology at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">3. Disclaimer</h2>
              <p>
                The materials on Azteca Technology's website are provided on an 'as is' basis. Azteca Technology makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="mt-2">
                Further, Azteca Technology does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">4. Limitations</h2>
              <p>
                In no event shall Azteca Technology or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Azteca Technology's website, even if Azteca Technology or a Azteca Technology authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">5. Revisions and Errata</h2>
              <p>
                The materials appearing on Azteca Technology's website could include technical, typographical, or photographic errors. Azteca Technology does not warrant that any of the materials on its website are accurate, complete or current. Azteca Technology may make changes to the materials contained on its website at any time without notice. Azteca Technology does not, however, make any commitment to update the materials.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">6. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Texas and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
