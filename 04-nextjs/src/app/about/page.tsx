export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">About TechBlog</h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        Welcome to TechBlog! This is a simple project built with Next.js and 
        TypeScript to demonstrate modern web development practices.
      </p>
      <p className="mt-4 text-gray-600 leading-relaxed">
        We use Server Components for fast data fetching and Client Components 
        for interactivity. Stay tuned for more posts!
      </p>
    </div>
  );
}