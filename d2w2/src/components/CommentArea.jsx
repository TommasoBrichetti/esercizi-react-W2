import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = (props) => {
  // state = {
  //   comments: [], // comments will go here
  //   isLoading: false,
  //   isError: false,
  // }

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  

  const fetchComments = async () => {

    setIsLoading(true)
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' +
            props.asin,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NjIwMjMxMjcsImV4cCI6MTY2MzIzMjcyN30.I6b0OH9Z19fA56gR_JN7igfZg1dCjRkXr39-NUxd1iE',
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
          setIsError(false)
          setIsLoading(false)
        } else {
          console.log('error')
          setIsError(false)
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error)
        setIsError(true)
        setIsLoading(false)
      }
    }

    useEffect(() => {
      fetchComments()},
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [props.asin]
    ) 
  

    return (
      <div>
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  
}

export default CommentArea
