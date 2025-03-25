
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8"
        >
          <h1 className="text-3xl font-bold mb-8 text-aztec-900">Cookie Policy</h1>
          
          <div className="space-y-6 text-aztec-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">What Are Cookies</h2>
              <p>
                As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the site's functionality.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">How We Use Cookies</h2>
              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">The Cookies We Set</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <p className="font-semibold">Account related cookies</p>
                  <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>
                </li>
                
                <li>
                  <p className="font-semibold">Login related cookies</p>
                  <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
                </li>
                
                <li>
                  <p className="font-semibold">Forms related cookies</p>
                  <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
                </li>
                
                <li>
                  <p className="font-semibold">Site preferences cookies</p>
                  <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">Third Party Cookies</h2>
              <p>
                In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                </li>
                <li>
                  From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-aztec-800">More Information</h2>
              <p>
                Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
              </p>
              <p className="mt-2">
                However if you are still looking for more information then you can contact us through one of our preferred contact methods:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Email: cookies@azteca-tech.com</li>
                <li>Phone: 1-800-AZTECA-TECH</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
