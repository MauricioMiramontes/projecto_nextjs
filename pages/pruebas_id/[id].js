import { useRouter } from "next/router"

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Entraste en el id: {id}</p>;
}

export default Post;