import React, { Component } from "react";

class Card {
  constructor(title, img) {
    this.title = title;
    this.img = img;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.cards = [
      new Card("Consider it done!", "https://picsum.photos/300/200"),
      new Card("Design", "https://picsum.photos/200/200"),
      new Card("Idea", "https://picsum.photos/201/200"),
      new Card("Creative", "https://picsum.photos/202/200"),
    ];
  }

  render() {
    return (
      <div className="bg-gray-100 min-h-screen p-6">
        <Navbar />
        <Hero />
        <Grid cards={this.cards} />
        <Pricing />
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold">Grid</h2>

        <div className="flex items-center gap-6 text-gray-500">
          <a href="#">How it works</a>
          <a href="#">Who we are</a>
          <a href="#">Contact</a>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

class Hero extends Component {
  render() {
    return (
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          Combine <span className="text-red-500">fine</span> images
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          To represent a product
        </p>
      </div>
    );
  }
}

class Grid extends Component {
  render() {
    return (
      <div className="grid grid-cols-4 gap-4 mb-20">
        {this.props.cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition"
          >
            <img src={card.img} className="w-full h-40 object-cover" />
            <h3 className="p-4 font-semibold">{card.title}</h3>
          </div>
        ))}
      </div>
    );
  }
}

class Pricing extends Component {
  render() {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-10">
          Affordable pricing
        </h2>

        <div className="flex justify-center gap-6">
          <div className="bg-white p-6 rounded-2xl shadow w-40">
            <h3 className="font-bold">Free</h3>
            <p className="text-2xl">$0</p>
            <button className="mt-4 border px-4 py-2 rounded-lg">
              Try
            </button>
          </div>

          <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow w-40 scale-110">
            <h3 className="font-bold">$24</h3>
            <p>Best</p>
            <button className="mt-4 bg-white text-indigo-600 px-4 py-2 rounded-lg">
              Buy
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow w-40">
            <h3 className="font-bold">$12</h3>
            <p>Corp</p>
            <button className="mt-4 border px-4 py-2 rounded-lg">
              Buy
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;