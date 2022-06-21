import '../../../../i18n/config';
import './AboutMe.css';
import {useTranslation} from "react-i18next";
import {Card, Col, Container, Image, Row} from "react-bootstrap";

function AboutMe() {

    const {t} = useTranslation();

    return (
        <Container>
            <Row>
                <Col style={{textAlign: "center"}}>
                    <h1>{t('aboutme.title')}</h1>
                    <Image id={"profile-image"} src={"/imgs/foto-vinicius.jpg"}/>
                    <Card id={"aboutme-card"}>
                        <Card.Body>
                            <p className={'content-paragraph'}>{t('aboutme.content')}</p>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>

    );
}

export default AboutMe;