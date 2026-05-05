import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Course Engagement Optimizer',
  description: 'Optimize online course content for engagement. Track drop-offs, get AI suggestions, and A/B test lesson formats.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bbffacc2-b28e-4420-b8c4-b788abbd6f18"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
