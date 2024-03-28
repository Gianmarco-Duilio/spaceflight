import Card from "react-bootstrap/Card";
import { ArticleInterface } from "../Interfaces/Article";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const ArticleDetails = () => {
  const { articleId } = useParams();
  const [articleDetails, setArticleDetails] = useState<ArticleInterface | null>(null);

  useEffect(() => {
    const fetchArticleDetails = () => {
      fetch(`https://api.spaceflightnewsapi.net/v4/articles/${articleId}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Errore durante il recupero dei dettagli dell'articolo");
          }
        })
        .then((data) => {
          setArticleDetails(data);
        })
        .catch((err) => {
          console.error("Errore durante il recupero dei dettagli dell'articolo", err);
        });
    };

    fetchArticleDetails();
  }, [articleId]);

  return (
    <div>
      {articleDetails && (
        <Container>
          <Row>
            <Col xs={12}>
              <Card className="my-5" id="bodyCard">
                <Card.Img id="CardImg" variant="top" src={articleDetails.image_url} />
                <Card.Body className="">
                  <Card.Title className="title">Titolo: {articleDetails.title}</Card.Title>
                  <Card.Text>{articleDetails.published_at}</Card.Text>
                  <Card.Text>{articleDetails.summary}</Card.Text>
                  <Card.Text>{articleDetails.featured}</Card.Text>
                </Card.Body>
              </Card>{" "}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ArticleDetails;
