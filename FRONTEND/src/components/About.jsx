import React from 'react'

const About = () => {
  return (
    <div>
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          About Our Bookstore
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Welcome to <span className="font-semibold text-indigo-600">BookNest</span>, 
          your cozy corner for discovering, reading, and sharing stories that inspire.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          alt="Bookshelf"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Since 2015, we’ve been connecting readers with stories that spark
            imagination and creativity. Whether you're into timeless classics or
            modern tales, our shelves are filled with books that speak to every heart.
          </p>
          <p className="text-gray-700 leading-relaxed">
            More than just a bookstore, we’re a community for readers and dreamers.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-10">
          What We Believe In
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Knowledge</h3>
            <p className="text-gray-600 text-sm">
              Sharing the joy and power of reading with everyone.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Bringing readers and writers together in one space.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Diversity</h3>
            <p className="text-gray-600 text-sm">
              Celebrating voices and stories from all over the world.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Passion</h3>
            <p className="text-gray-600 text-sm">
              Driven by love for books, stories, and creativity.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  
    </div>
  )
}

export default About

