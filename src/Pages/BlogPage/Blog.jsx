import React from "react";
import BlogImage from "../../assets/hero/BlogImage.jpg";
import BlogImage1 from "../../assets/hero/BlogImage1.jpg";
import BlogImage2 from "../../assets/hero/BlogImage2.jpg";
import BlogImage3 from "../../assets/hero/BlogImage3.jpg";
import BlogImage4 from "../../assets/hero/BlogImage4.jpg";
import BlogImage5 from "../../assets/hero/BlogImage5.jpg";
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "14 Sep",
      author: "salman",
      comments: 0,
      category: "Consulting",
      title: "Journeys Of Discovery Uncovering Hidden Treasures",
      excerpt:
        "With worldwide annual spend on digital advertising surpassing $325 billion, it’s no...",
      image: BlogImage,
    },
    {
      id: 2,
      date: "14 Sep",
      author: "salman",
      comments: 0,
      category: "Immigration",
      title: "Unlocking Opportunities The Visa Journey Unveiled",
      excerpt:
        "With worldwide annual spend on digital advertising surpassing $325 billion, it’s no...",
      image: BlogImage1,
    },
    {
      id: 3,
      date: "14 Sep",
      author: "salman",
      comments: 0,
      category: "Business",
      title: "Navigating Borders Ultimate Guide To Visa Success",
      excerpt:
        "With worldwide annual spend on digital advertising surpassing $325 billion, it’s no...",
      image: BlogImage2,
    },
    {
      id: 4,
      date: "14 Sep",
      author: "salman",
      comments: 0,
      category: "Green Card",
      title: "Citizenship Concept On How To Become A UK Resident",
      excerpt:
        "With worldwide annual spend on digital advertising surpassing $325 billion, it’s no...",
      image: BlogImage3,
    },
    {
      id: 5,
      date: "14 Sep",
      author: "salman",
      comments: 0,
      category: "Green Card",
      title: "Wonders Of Ancient Civilizations Through Egypt",
      excerpt:
        "With worldwide annual spend on digital advertising surpassing $325 billion, it’s no...",
      image: BlogImage4,
    },
    {
      id: 6,
      date: "14 Sep",
      author: "salman",
      comments: 2,
      category: "Business",
      title: "The Road To Adventure Embarking On New Horizons",
      excerpt:
        "With worldwide annual spend on digital advertising surpassing $325 billion, it’s no...",
      image: BlogImage5,
    },
  ];
  return (
    <>
      <h2>
        <div
          className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

          <div className="relative z-10 text-center text-white px-4 sm:px-8 md:px-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Blog Grid
            </h1>
          </div>

          <div className="relative z-10 text-center text-white px-4 sm:px-8 md:px-20 absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2">
            <p className="text-xs sm:text-sm md:text-base">
              <span className="font-semibold">Home</span> &nbsp;—&nbsp; Coaching
            </p>
          </div>
        </div>
      </h2>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-center rounded">
                    <p className="text-lg font-bold leading-none">
                      {post.date.split(" ")[0]}
                    </p>
                    <p className="text-xs">{post.date.split(" ")[1]}</p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-sm text-gray-500 flex items-center gap-4 mb-2">
                    <span>👤 {post.author}</span>
                    <span>💬 Comments ({post.comments})</span>
                    <span>🏷️ {post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="text-red-600 font-semibold inline-flex items-center hover:underline"
                  >
                    Read More <span className="ml-1">➜</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
