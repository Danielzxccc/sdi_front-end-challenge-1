import { useEffect, useState } from 'react'
import './index.css'

import Pagination from './components/Pagination'
import NewsCard from './components/News'

export type News = {
  id: number
  author_id: number
  title: string
  body: string
  image_url: string
  created_at: string
}

export type Authors = {
  id: number
  name: string
  role: string
  place: string
  avatar_url: string
}

export const baseUrl = 'https://tmsph-sdi-challenges.pages.dev/challenges'
function App() {
  const [news, setNews] = useState<News[]>([])
  const [authors, setAuthors] = useState<Authors[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(11)
  const totalPages = 57 // This should be dynamic based on your data

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const [data, authors] = await Promise.all([
          fetch(`${baseUrl}/news.json`),
          fetch(`${baseUrl}/authors.json`),
        ])

        if (!data.ok && !authors.ok) {
          throw new Error('Network response was not ok')
        }

        const fetchedArticles: News[] = await data.json()
        const fetchedAuthors: Authors[] = await authors.json()

        setNews(fetchedArticles)
        setAuthors(fetchedAuthors)
        setLoading(false)
        // console.log(data)
      } catch (error: any) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) return 'Loading...'

  if (error) return 'Something went wrong'

  return (
    <div className='max-w-screen-xl mx-auto'>
      {news.map((data, index) => (
        <NewsCard
          key={index}
          data={data}
          authors={authors}
        />
      ))}
      <div className='flex justify-center my-10'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default App
