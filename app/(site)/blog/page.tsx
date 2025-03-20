// filepath: c:\Users\Lenovo\mealharbor\app\(site)\blog\page.tsx
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import { getPosts } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";

import { integrations, messages } from "@/integration.config";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  const posts: Blog[] = integrations.isSanityEnabled ? await getPosts() : [];

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}

      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {posts.length > 0 ? (
              posts.map((post, key) => <BlogItem key={key} blog={post} />)
            ) : integrations?.isSanityEnabled ? (
              <p>No posts found</p>
            ) : (
              <p >
                {messages.sanity}
                {/* Sanity is not enabled. Follow the{" "}
                <a
                  href="https://www.sanity.io"
                  className="text-primary underline"
                >
                  documentation
                </a>{" "}
                to enable it. */}
              </p>
            )}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
