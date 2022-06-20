import {Container, Nav, Navbar} from "react-bootstrap";
import React, {useState} from "react";
import '../i18n/config';
import {useTranslation} from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import "./MyNavbar.css";

function MyNavbar() {

    const [selected, setSelected] = useState("BR");

    const {t, i18n} = useTranslation();

    const changeLanguage = (code: string) => {
        setSelected(code)
        switch (code) {
            case "BR":
                i18n.changeLanguage("pt");
                break;
            case "US":
                i18n.changeLanguage("en");
                break;
        }

    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className={'my-name'}>Vinicius Santos </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">{t('home')}</Nav.Link>
                    </Nav>
                    <Nav>
                        <ReactFlagsSelect
                            countries={["BR", "US"]}
                            customLabels={{US: "English", BR: "Português"}}
                            placeholder={t("language")}
                            showSelectedLabel={true}
                            selected={selected} onSelect={(code) => changeLanguage(code)}
                            selectButtonClassName={"react-flag-button-select"}
                            className={"react-flag-select"}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default MyNavbar;
