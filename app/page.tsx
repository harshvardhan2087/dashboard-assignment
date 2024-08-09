import Head from 'next/head';

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard Landing Page</title>
        <meta name="description" content="Discover our powerful dashboard to enhance your business operations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100 flex flex-col">
 
        <header className="bg-blue-600 text-white">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Empower Your Business with Our Dashboard</h1>
            <p className="text-lg md:text-xl mb-8">An intuitive and powerful dashboard to streamline your operations.</p>
            <a href="#get-started" className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition">Get Started</a>
          </div>
        </header>


        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Real-Time Analytics</h3>
                <p className="text-gray-700">Get insights into your business operations with real-time data analytics.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Customizable Dashboards</h3>
                <p className="text-gray-700">Personalize your dashboard to fit your specific needs and preferences.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Advanced Reporting</h3>
                <p className="text-gray-700">Generate comprehensive reports to make data-driven decisions.</p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">This dashboard has transformed our operations The real-time analytics are incredibly useful</p>
                <span className="font-semibold">Gagan Sharma</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">We love the customizable features. It is easy to adapt the dashboard to our needs</p>
                <span className="font-semibold">Neeraj Arora</span>

              </div>
            </div>
          </div>
        </section>

        
        <section id="get-started" className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <a href="#" className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition">Sign Up Now</a>
          </div>
        </section>

        
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2024 Harshvardhan Yadav All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;




















