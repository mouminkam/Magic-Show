import Image from "next/image";

/**
 * BlogContent Component
 * Displays blog post content: title, paragraphs, image, and blockquote
 * 
 * @param {Object} props
 * @param {Object} props.post - Blog post data
 * @param {string} props.post.title - Blog post title
 * @param {string} props.post.content - Blog post content (HTML or text)
 * @param {string} props.post.image - Blog post featured image URL
 * @param {string} props.post.date - Blog post date
 */
export default function BlogContent({ post }) {
  return (
    <section className="blog-detail mt-16 lg:px-10 lg:mt-20">
      <div className="container mx-auto px-4">
        <div className="w-full mx-auto">
          {/* Blog Heading */}
          <h1 className="blog-heading text-3xl lg:text-4xl text-gray-600 uppercase mb-8 lg:mb-12 relative inline-block tracking-widest">
            {post?.title || "SIMPLY TIPS FOR BEAUTY"}
          </h1>

          {/* First Paragraph */}
          <div className="txt-wrap mb-8 lg:mb-12">
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Pharetra, erat sed fermentum feugiat, velit mauris egestas quam,
              ut aliquam massa nisl quis neque. Pharetra, erat sed fermentum
              feugiat, velit mauris egestas quam, ut aliquam massa nisl quis
              neque.Pharetra, erat sed fermentum feugiat, velit mauris egestas
              quam, ut aliquam massa nisl quis neque. Pharetra, erat sed
              fermentum feugiat, velit mauris egestas quam, ut aliquam massa
              nisl quis neque.Pharetra, erat sed fermentum feugiat, velit mauris
              egestas quam, ut aliquam massa nisl quis neque. Pharetra, erat sed
              fermentum feugiat, velit mauris egestas quam, ut aliquam massa
              nisl quis neque.
            </p>
          </div>

          {/* Featured Image */}
          <div className="img-holder mb-8 lg:mb-12 rounded-lg overflow-hidden">
            <Image
              src={post?.image || "/images/img24.jpg"}
              alt={post?.title || "Blog post image"}
              width={1154}
              height={671}
              className="w-full h-auto max-h-screen object-cover"
            />
          </div>

          {/* Blockquote */}
          <blockquote className="blockquote border-l-4 border-gray-600 rounded-lg  pl-6 lg:pl-8 py-4 lg:py-6 my-8 lg:my-12 italic text-gray-600 text-lg leading-relaxed">
            <q className="block leading-8 pl-4 lg:pl-8">
              Pharetra, erat sed fermentum feugiat, velit mauris egestas quam,
              ut aliquam massa nisl quis neque. Pharetra, erat sed fermentum
              feugiat, velit mauris egestas quam, ut aliquam massa nisl quis
              neque. Pharetra, erat sed fermentum feugiat, velit mauris egestas
              quam, ut aliquam massa nisl quis neque. Pharetra, erat sed
              fermentum feugiat, velit mauris egestas quam, ut aliquam massa
              nisl quis nequerat sed fermentum feugiat.
            </q>
          </blockquote>

          {/* Second Paragraph */}
          <div className="txt-wrap">
            <p className="text-gray-500 text-lg leading-9">
              Pharetra, erat sed fermentum feugiat, velit mauris egestas quam,
              ut aliquam massa nisl quis neque. Pharetra, erat sed fermentum
              feugiat, velit mauris egestas quam, ut aliquam massa nisl quis
              neque.Pharetra, erat sed fermentum feugiat, velit mauris egestas
              quam, ut aliquam massa nisl quis neque. Pharetra, erat sed
              fermentum feugiat, velit mauris egestas quam, ut aliquam massa
              nisl quis neque.Pharetra, erat sed fermentum feugiat, velit mauris
              egestas quam, ut aliquam massa nisl quis neque. Pharetra, erat sed
              fermentum feugiat, velit mauris egestas quam, ut aliquam massa
              nisl quis neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

