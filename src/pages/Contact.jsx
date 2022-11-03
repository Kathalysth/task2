import React from "react";
import { Input, Label, Row, Col, Form, Button, FormGroup } from "reactstrap";
import { Helmet } from "react-helmet-async";
import Footer from "../features/Footer";
const Contact = () => {
  return (
    <main className="container app">
      <Helmet>
        <title>Linktree App - Contact</title>
      </Helmet>
      <div className="col-12 col-md-9 mx-auto">
        <h2 className="fw-bolder">Contact Me</h2>
        <span>
          Hi there, contact me to ask me about anything you have in mind
        </span>
        <Form className=" my-4" onSubmit={(e) => e.preventDefault()}>
          <Row className="mb-2">
            <Col sm="12" md="6">
              <Label htmlFor="first_name">First Name</Label>
              <Input
                name="first_name"
                id="first_name"
                placeholder="First Name"
                required
              />
            </Col>
            <Col sm="12" md="6">
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                required
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col sm="12">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="yourname@email.com"
                required
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col sm="12">
              <Label htmlFor="message">Messsage</Label>
              <Input
                name="message"
                id="message"
                type="textarea"
                rows="5"
                required
                placeholder="Send a message and i'll reply you as soon as possible..."
              />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col sm="12">
              <FormGroup check inline>
                <Input
                  name="agreement"
                  id="agreement"
                  type="checkbox"
                  required
                />
                <Label htmlFor="agreement" className="ms-1">
                  You agree to providing your data
                  <strong> Bishopsirchris</strong>, who may contact you?
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col sm="12">
              <Button block color="primary" id="btn__submit">
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
        <br />
        <br />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
