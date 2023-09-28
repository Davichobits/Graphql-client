import { gql } from "apollo-boost";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";

// Querys
const GET_ALL_POSTS = gql`
  {
    allPosts{
      id
      title
      description
    }
  }
`;

export const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS);
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POSTS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error :(</p>

  return (
    <div className="card__container">
      {
        data.allPosts.map((post: any) => (
          <div className="card" key={post.id}>
            <h1 className="card__title">{post.title}</h1>
            <p className="card__description">{post.description}</p>
          </div>
        ))
      }
    </div>
  )
}
