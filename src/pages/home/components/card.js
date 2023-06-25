import { useDispatch } from "react-redux"
import { likeArticle } from "../../../store/slices/blogs/slices"
import dateFormat from 'dateformat'

import { Card } from 'flowbite-react';

export default function BlogCard({
    title = "",
    content = "",
    thumbnail = "",
    BlogId = "",
    author ="", 
    createdAt ="",
    cat_name = ""
}) {
  const dispatch = useDispatch()
    const likeButton = ()=>{
        dispatch(likeArticle({BlogId}))
    }
    const id = localStorage.getItem("token")

  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={process.env.REACT_APP_IMAGE_URL + thumbnail}
    >
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          { title }
        </p>
      </h2>
      <h5>by {author} | { dateFormat(createdAt, "dd mmmm yyyy")}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          { content }
        </p>
      </p>
      {cat_name}
      <div className="card-actions justify-end">
                    <div 
                        className="tooltip" 
                        data-tip={!id ? "Please, Login first" : "Like me please"}
                    >
                        <button 
                            className="btn"
                            disabled={!id}
                            onClick={likeButton}
                        >
                            Like
                        </button>
                    </div>
                </div>
    </Card>
  )
}

export default function RenderBlogCards ({
  articles = [],
}) {
  return articles.map((article, index) => {
      return (
          <BlogCard key={article.id}
              title={article.title}
              content={article.content}
              thumbnail={article.imageURL}
              BlogId = {article.id}
              author = {article.User.username}
              createdAt = {article.createdAt}
              cat_name = {article?.Category?.name}
          />
      )
  })
}
