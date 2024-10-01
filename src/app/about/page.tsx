import Header from '../components/header';
import Footer from '../components/footer';

function About () {
  return (
    <div>
      <Header />
      <main className="container mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p>This is the About page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
