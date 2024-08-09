// src/app/Home/page.tsx

const Home = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Master a new language,
            <br />
            <span className="text-purple-600">open a world of possibilities</span>
          </h1>
          <p className="mt-3 text-gray-500">
            Unlock your potential with our innovative, personalized language learning platform. From beginner to fluent, we are with you every step of the way.
          </p>
          <div className="mt-5 flex justify-center">
            <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded mr-2">Empieza ahora</button>
            <button className="bg-white text-gray-900 border border-gray-300 font-bold py-2 px-4 rounded">Aprende más...</button>
          </div>
        </div>
        <section className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Most popular courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="bg-gray-200 h-32 mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Blah blah</h3>
              <p className="text-gray-500">
                Unlock your potential with our innovative, personalized language learning platform. From beginner to fluent.
              </p>
              <button className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded">Enroll now</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="bg-gray-200 h-32 mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Blah blah</h3>
              <p className="text-gray-500">
                Unlock your potential with our innovative, personalized language learning platform. From beginner to fluent.
              </p>
              <button className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded">Enroll now</button>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded">View all</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
