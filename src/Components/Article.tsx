import Card from "react-bootstrap/Card";
import { ArticleInterface } from "../Interfaces/Article";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

interface ArticleProps {
  articleDetails: ArticleInterface;
}

const Article = function (props: ArticleProps) {
  return (
    <Card className="my-2">
      <Card.Img src={props.articleDetails.image_url} />
      <Card.Body>
        <Card.Title>{props.articleDetails.title}</Card.Title>
        <Card.Subtitle>{props.articleDetails.published_at}</Card.Subtitle>

        <Link to={`/details/${props.articleDetails.id}`}>
          {" "}
          <Button className="btn bg-warning text-white"> DETAILS ARTICLE </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default Article;
