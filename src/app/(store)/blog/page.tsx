import Image from "next/image";
import { FaClock, FaComment, FaChevronRight } from "react-icons/fa";
import React from "react";
import Footer from "@/components/home-components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/productList-components/header";

const FeaturesPosts = () => {
  const blogs = [
    {
      img: "blogs.01.png",
      title: "Healthy Living Tips",
      description:
        "Discover simple and effective ways to maintain a balanced lifestyle with proper nutrition, exercise, and mindfulness",
      date: "20 April 2025",
      comments: 25,
    },
    {
      img: "blogs.02.png",
      title: "Travel Diaries",
      description:
        "Embark on a journey to breathtaking destinations around the world.",
      date: "20 May 2025",
      comments: 65,
    },
    {
      img: "blogs.03.png",
      title: "Tech Trends 2025",
      description:
        "AI to smart gadgets. Explore how technology is reshaping our future.",
      date: "20 June 2025",
      comments: 22,
    },
    {
      img: "blogs.04.png",
      title: "Fashion Forward",
      description:
        "Dive into the world of fashion with updates on the latest styles, trends, and tips.",
      date: "25 June 2025",
      comments: 32,
    },
    {
      img: "blogs.05.png",
      title: "Culinary Delights",
      description:
        "Unleash your inner chef with mouthwatering recipes and cooking hacks. Discover flavors that will tantalize your taste buds.",
      date: "30 July 2025",
      comments: 40,
    },
    {
      img: "blogs.06.png",
      title: "Mindfulness Matters",
      description:
        "Learn techniques to enhance mental clarity and reduce stress. Embrace a peaceful and mindful lifestyle with simple yet effective practices.",
      date: "10 August 2021",
      comments: 18,
    },
  ];

  return (
    <div>
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <Header />
      </ClerkProvider>{" "}
      <div className="text-center mb-20 mt-20 wrapper">
        <h3 id="blog" className="text-[#23A6F0] text-[14px] font-bold">
          From Our Blog
        </h3>
        <h2 className="text-[#252B42] text-[40px] font-bold">Featured Posts</h2>
        <p className="text-[#737373] text-[14px]">
          Stay updated with the latest insights and updates from Bandage Store.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 wrapper">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
          >
            <Image
              src={`/${blog.img}`}
              alt={blog.title}
              width={350}
              height={230}
              className="w-full h-[230px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-[#252B42] text-[20px] font-semibold">
                {blog.title}
              </h3>
              <p className="text-[#737373] text-[14px] mt-2">
                {blog.description}
              </p>
              <div className="flex justify-between items-center mt-4 text-[12px] text-[#737373]">
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#23A6F0]" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-[#23856D]" />
                  <span>{blog.comments} Comments</span>
                </div>
              </div>
              <button className="mt-4 flex items-center text-[#23A6F0] hover:text-white hover:bg-[#23A6F0] text-sm font-bold py-2 px-4 border border-[#23A6F0] rounded transition-all">
                Learn More <FaChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPosts;
