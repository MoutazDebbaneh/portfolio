import { useRef } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.webp";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const formInititalDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInititalDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const handleFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_xzavit7",
        "template_pvyibzt",
        form.current,
        "IiL67p7MXmkiuZSm2"
      )
      .then((result) => {
        console.log(result.text);
        setStatus({ success: true, message: "Message sent successfully" });
        setButtonText("Sent");
        setFormDetails(formInititalDetails);
      })
      .catch((error) => {
        console.log(error.text);
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
        setButtonText("Send");
      });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center ">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit} ref={form}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) =>
                      handleFormUpdate("firstName", e.target.value)
                    }
                    name="from_name"
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) =>
                      handleFormUpdate("lastName", e.target.value)
                    }
                    name="from_last_name"
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => handleFormUpdate("email", e.target.value)}
                    name="from_email"
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => handleFormUpdate("phone", e.target.value)}
                    name="from_phone"
                    required
                  />
                </Col>
                <Col className="px-1">
                  <textarea
                    value={formDetails.message}
                    placeholder="Message"
                    rows="6"
                    onChange={(e) =>
                      handleFormUpdate("message", e.target.value)
                    }
                    name="message"
                    required
                  />

                  <button type="submit" disabled={buttonText === "Sent"}>
                    <span>{buttonText}</span>
                  </button>
                  {status.success === false && (
                    <Col>
                      <p className="status mt-4 danger">{status.message}</p>
                    </Col>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
