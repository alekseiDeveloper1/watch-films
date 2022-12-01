import Header from "../components/Header";
import {Button, Container, Form, Row} from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddPage = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()


    const addFilm = (e) => {
        e.preventDefault()
        const data = {
            id: Date.now(),
            title: title,
            desc: desc,
            img: file,
        }
        dispatch({type: "CREATE_FILM", data})
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Form className='mt-5'>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={desc} onChange={e => setDesc(e.target.value)} type="text" placeholder="Description" />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload image</Form.Label>
                            <Form.Control onChange={selectFile} type="file" />
                        </Form.Group>
                        <Button onClick={addFilm} variant="primary" type="submit">Submit</Button>
                    </Form>
                </Row>
            </Container>
        </>
    );
};

export default AddPage;