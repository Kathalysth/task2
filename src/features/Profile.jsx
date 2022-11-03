import { UncontrolledTooltip, Row, Col } from "reactstrap";
import myPic from "../assets/my-portrait.jpg";
const Profile = () => {
  return (
    <section>
      <Row>
        <Col sm="9" className="d-flex">
          <UncontrolledTooltip placement={"left"} target={"share"}>
            Share Link
          </UncontrolledTooltip>
          <a href="#" id="share" className="ms-auto">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m10.604816 3.36827202c-5.18469775-.47094658-8.51890831 1.5289737-9.99999995 6 2.82481024-3.14044041 6.34158531-3.71816233 9.99999995-2v2.99999998l5-4.99999998-5-5z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(1.895 4.132)"
              />
            </svg>
          </a>
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="d-flex justify-content-center ">
          <div className="image-wrapper">
            <img id="profile_img" src={myPic} alt="profile_img" />
            <div className="overlay">
              <div className="icon">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-camera"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col sm="12" className="text-center d-flex flex-column">
          <span id="twitter">bishopsirhchris</span>
          <span id="slack">kathalysth</span>
        </Col>
      </Row>
    </section>
  );
};

export default Profile;