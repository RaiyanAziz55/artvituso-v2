import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-center italic mb-6">
        An exclusive online gallery for buying and selling exquisite artworks.
        A place where art enthusiasts can connect, explore, and be inspired.
      </p>
      <section className="text-center">
        <div className="text-left space-y-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p>
            Founded in 2024, ArtVirtuoso is an online gallery that connects art enthusiasts from around the world. Our platform provides a space for artists to showcase their work and for collectors to discover unique pieces.
          </p>
          <p>
            Our team is dedicated to promoting the arts and creating a community where people can buy and sell artwork, attend virtual events, and participate in discussions about the art world.
          </p>
          <h2 className="text-2xl font-bold">What We Offer</h2>
          <p>
            At ArtVirtuoso, you can find a diverse range of artworks including paintings, sculptures, digital art, and more. Our easy-to-use platform ensures a seamless experience for both buyers and sellers.
          </p>
          <p>
            We also host a variety of events such as virtual exhibitions, artist talks, and workshops. These events provide opportunities for learning, networking, and fostering a deeper appreciation for the arts.
          </p>
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            Our mission is to make art accessible to everyone and to support artists in their creative endeavors. We believe in the power of art to inspire, educate, and transform communities.
          </p>
          <p>
            Join us on this journey to explore the beauty and diversity of the art world. Whether you are an artist, a collector, or simply an art lover, ArtVirtuoso is your gateway to a world of creativity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
