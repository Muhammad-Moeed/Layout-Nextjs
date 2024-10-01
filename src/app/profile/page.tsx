import Header from '../components/header';
import Footer from '../components/footer';

function Home () {
  return (
    <div>
      <Header />
      <main className="container mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Profile</h1>
        <p>This is the profile section where you can find details about me.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
