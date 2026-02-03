import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { metadata } = testimonial
  const clientName = metadata?.client_name || 'Anonymous'
  const company = metadata?.company || ''
  const quote = metadata?.quote || ''
  const photo = metadata?.photo
  const rating = metadata?.rating || 5

  const stars = Array.from({ length: 5 }, (_, i) => i < rating)

  return (
    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500/50 transition-colors">
      <div className="flex items-center gap-1 mb-6">
        {stars.map((filled, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <blockquote className="text-gray-300 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center gap-4">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={clientName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
            <span className="text-white font-bold">{clientName.charAt(0)}</span>
          </div>
        )}
        <div>
          <div className="font-semibold text-white">{clientName}</div>
          {company && (
            <div className="text-gray-400 text-sm">{company}</div>
          )}
        </div>
      </div>
    </div>
  )
}