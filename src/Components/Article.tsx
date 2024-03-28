import Card from "react-bootstrap/Card";
import { ArticleInterface } from "../Interfaces/Article";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

interface ArticleProps {
  articleDetails: ArticleInterface;
}

const Article = function (props: ArticleProps) {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card className="my-5 bg-dark" id="bodyCard">
            {" "}
            <Row>
              <Col>
                <Card.Img id="CardImg" src={props.articleDetails.image_url} />{" "}
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>{props.articleDetails.title}</Card.Title>
                  <Card.Subtitle>{props.articleDetails.published_at}</Card.Subtitle>

                  <Link to={`/details/${props.articleDetails.id}`}>
                    {" "}
                    <Button className="btn bg-warning text-white m-2"> DETAILS ARTICLE </Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Article;
