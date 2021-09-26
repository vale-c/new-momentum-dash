import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = () => {
      try {
        const res = fetch(url)
        const data = res.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
