import React from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "@material-ui/core/Button";
import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

const AdminHome = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <Loading />;
    }

    return (
        <Container className='mb-5'>
            <Row className='align-items-center profile-header mb-5 text-center text-md-left'>
                <Col md={2}>
                    <img
                        src={user.picture}
                        alt='Profile'
                        className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'
                    />
                </Col>
                <Col md>
                    <h2>{user.name}</h2>
                    <p className='lead text-muted'>{user.email}</p>
                    {/* <p className='lead text-muted'>{user.app_meta.p8role}</p> */}
                </Col>
            </Row>
            <div>
                <h2>Welcome to your admin page...</h2>
            </div>
            <Row>
                <Col md={2}>
                    <a
                        href='https://evgvlc22t1.execute-api.us-east-1.amazonaws.com/UAT/event/registrations?eventId=2'
                        target='_new'
                    >
                        See Event 2 registrations
                    </a>
                </Col>
                <Col md>
                    <Button
                        variant='outlined'
                        color='primary'
                        label='show all events'
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default AdminHome;
