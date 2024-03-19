


export default Homepage;

type Post = {
  title: string;
  description: string;
  num: string;
}

type CardProps = {
  title: string;
  description: string;
  posts: Post[];
}

const Card = (props: CardProps) => {
  const { title, imgUrl, posts } = props;

  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post, index) => )
      <p key={index}>{title}</p>
      ))}
    </div>
  );
};



