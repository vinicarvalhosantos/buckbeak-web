import React, {useState} from 'react';
import {Button, Container, Form, Offcanvas} from 'react-bootstrap';
import '../Projects.css';
import '../../../../../i18n/config';
import {useTranslation} from "react-i18next";

function TokenCanvas() {

    const [show, setShow] = useState(false)

    const {t} = useTranslation()

    const handleShow = () => {
        setShow(!show)
    }


    return (
        <Container>
            <Button variant="secondary" onClick={handleShow} className="me-2 token-button">
                {t("projects.tokenbutton")}
            </Button>
            <Offcanvas show={show} onHide={handleShow} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{t('projects.canvas.title')}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className={'project-description'}>{t('projects.canvas.description')}</p>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>{t('projects.canvas.form.name')}</Form.Label>
                            <Form.Control type="textInput" placeholder={t("projects.canvas.form.nameplaceholder")}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{t('projects.canvas.form.email')}</Form.Label>
                            <Form.Control type="email" placeholder={t('projects.canvas.form.emailplaceholder')}/>
                            <Form.Text className="text-muted">
                                {t('projects.canvas.form.notemailsharing')}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="outline-secondary" type="submit">
                            {t('projects.canvas.form.submit')}
                        </Button>
                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </Container>
    )

}

export default TokenCanvas;
