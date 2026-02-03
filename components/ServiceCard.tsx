import ReactMarkdown from 'react-markdown'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { metadata } = service
  const icon = metadata?.icon
  const title = metadata?.title || service.title
  const description = metadata?.description || ''
  const features = metadata?.features || ''

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group">
      {icon && (
        <div className="w-16 h-16 rounded-xl overflow-hidden mb-6 group-hover:scale-105 transition-transform">
          <img
            src={`${icon.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
            alt={title}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}
      
      {features && (
        <div className="prose prose-sm prose-gray max-w-none">
          <ReactMarkdown
            components={{
              ul: ({ children }) => (
                <ul className="space-y-2 text-gray-600">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900">{children}</strong>
              ),
            }}
          >
            {features}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )
}