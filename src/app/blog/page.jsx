"use client";

import Link from "next/link";
import Head from "next/head";

const BlogPage = () => {
  // Color scheme
  const colors = {
    primary: "#C93C3C",
    secondary: "#1E293B",
    accent: "#E74C3C",
    lightText: "#FFFFFF",
    mutedText: "#B0B0B0",
  };

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt:
        "Exploring the latest trends and technologies shaping the web development landscape.",
      date: "May 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Best Practices for UI/UX Design",
      excerpt:
        "Learn how to create intuitive user interfaces that enhance user experience and engagement.",
      date: "April 28, 2024",
      readTime: "7 min read",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Optimizing Website Performance",
      excerpt:
        "Essential techniques to improve your website's loading speed and overall performance.",
      date: "April 10, 2024",
      readTime: "4 min read",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>Blog | Professional Insights</title>
        <meta
          name="description"
          content="Read our latest articles on technology, design, and development"
        />
      </Head>

      {/* Hero Section */}
      <div
        className="relative py-24 px-4 sm:px-6 lg:px-8 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold text-[#c93c3c]">
            Our Latest Insights
            <span className="text-white">.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 mx-auto max-w-2xl">
            Professional articles, industry trends, and expert knowledge.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            Latest Articles
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden px-6 pt-10 pb-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-xl"
                style={{ backgroundColor: colors.secondary }}
              >
                <span
                  className="absolute top-10 left-1/2 -translate-x-1/2 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[10]"
                  style={{ backgroundColor: colors.primary }}
                ></span>

                <div className="h-48 overflow-hidden relative z-10 rounded-lg mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="flex justify-between items-center">
                    <span
                      className="text-sm font-medium"
                      style={{ color: colors.primary }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: colors.mutedText }}
                    >
                      {post.date}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-semibold transition"
                    style={{ color: colors.lightText }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-sm" style={{ color: colors.mutedText }}>
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center pt-4">
                    <span
                      className="text-sm"
                      style={{ color: colors.mutedText }}
                    >
                      {post.readTime}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm font-medium transition flex items-center gap-1"
                      style={{ color: colors.primary }}
                    >
                      Read More <span>→</span>
                    </Link>
                  </div>
                </div>

                <div
                  className="absolute inset-0 z-0 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div
          className="rounded-xl p-12 text-center border border-[#333333] relative overflow-hidden"
          style={{
            backgroundColor: colors.secondary,
          }}
        >
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            }}
          />
          <div className="relative z-10">
  <h3 className="text-3xl font-bold mb-4 text-white">Stay Updated</h3>
  <p className="text-lg text-[#B0B0B0] mb-8 max-w-2xl mx-auto">
    Subscribe to our newsletter to receive the latest blog posts and
    industry insights.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
    <input
      type="email"
      placeholder="Your email address"
      className="flex-grow px-4 py-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-white text-white bg-transparent placeholder-gray-300 z-10 relative"
    />
    <button className="bg-white hover:bg-gray-200 text-[#c93c3c] font-medium py-3 px-6 rounded-lg transition z-10 relative">
      Subscribe
    </button>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;
