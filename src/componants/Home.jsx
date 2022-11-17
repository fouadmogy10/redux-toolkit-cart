import React, { useEffect } from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { product } from "../redux/productSlice";
import Spinner from 'react-bootstrap/Spinner';
import { addToCart } from "../redux/cartSlice";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(product());
  }, []);

  return (
    <section>
      <div className="py-5 text-center">
        <h2>Cart</h2>
      </div>
      <Container>
        <Row>
          {
          products.loading == false ? 
           ( products.products.map((item) => {
                return (
                  <Col md={4} sm={6} key={item.id}>
                    <div className="card mb-3">
                      <img
                        className="card-img-top"
                        src={item.image}
                        alt={item.category}
                        height="300"
                        width={"100%"}
                      />
                      <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text">{item.price}</p>
                        <Button variant="outline-info" onClick={()=>dispatch(addToCart(item))}>
                            Add To Cart
                        </Button>
                      </div>
                    </div>
                  </Col>
                )
              })) : <Spinner animation="grow" variant="info" />
          
          
          }
        </Row>
      </Container>
    </section>
  );
}

export default Home;
