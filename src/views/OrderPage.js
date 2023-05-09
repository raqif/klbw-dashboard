import React, { useState } from "react";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

// rest of the code...

function TableList() {
  const [orderValue, setOrderValue] = useState(0);
  const [price, setPrice] = useState(10);
  const [notes, setNotes] = useState("");

  const handleOrderClick = () => {
    console.log(`Order value: ${orderValue}`);
    // you can do something with the order value here, e.g. add it to a cart
    if (orderValue >4 && orderValue<10){
      console.log("doing it?")
      setNotes("more than 5, discount 10%")
    } else {
      setNotes("thank you")
    }
  };

  function finalPrice() {
    if (orderValue <5){
      return orderValue * price
    }
    if (orderValue >4 && orderValue<10){
      console.log(price - 1)
      return orderValue * (price-1)
    }
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Senarai Kek</Card.Title>
                <p className="card-category">Jenis Premium</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Gambar</th>
                      <th className="border-0">Nama</th>
                      <th className="border-0">Harga</th>
                      <th className="border-0">Quantity</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td style={{ maxWidth: "100px", maxHeight: "100px" }}>
                        <img
                          src={require("assets/img/premium-nutellaCheese.jpeg")}
                          style={{ width: "50px", height: "50px" }}
                          alt="..."
                        />
                      </td>
                      <td>Nutella Cheese</td>
                      <td>{price}</td>
                      <td>
                        <input
                          type="number"
                          value={orderValue}
                          onChange={(e) => setOrderValue(e.target.value)}
                        />
                      </td>
                      <td>
                        <div/>total price : {finalPrice()}
                        <div/><small/>{notes}
                        <div>
                          <button onClick={handleOrderClick}>Order</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
