import Header from "../components/Header";
import {Button, Container, Form, Row} from "react-bootstrap";

const AddPage = () => {

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Form className='mt-5'>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Video</Form.Label>
                            <Form.Control type="text" placeholder="Video" />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Row>
            </Container>
        </>
    );
};

export default AddPage;