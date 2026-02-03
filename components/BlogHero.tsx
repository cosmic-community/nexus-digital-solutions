export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Digital Insights &amp;{' '}
            <span className="gradient-text">Strategic Tips</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover expert advice on web development, digital marketing, and cloud solutions. 
            Stay ahead of the curve with our latest articles.
          </p>
        </div>
      </div>
    </section>
  )
}