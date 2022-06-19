import React from 'react';
import {Badge, Card, Container} from 'react-bootstrap';
import './Projects.css';
import '../../../../i18n/config';
import {useTranslation} from "react-i18next";
import projects from "../../../../assets/projects/projects.json"
import {Grid} from "@mui/material";

function Projects() {

    const {t} = useTranslation()

    return (
        <Container>
            <h1 style={{textAlign: "center"}}>{t('projects.title')}</h1>
            <Grid sx={{flexGrow: 1}} container spacing={4}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={4}>
                        {projects.map((project) => (
                            <Grid key={project.name} item>
                                <Card id={"project-card"}>
                                    <Card.Img variant="top" className={"project-image"} src={project.image}/>
                                    <Card.Body>
                                        <Card.Title>
                                        <span
                                            className={'shadows-into-light-font'}>{t(`projects.${project.name}.title`)} </span>
                                            <Badge bg="secondary">{t(`projects.${project.name}.tech`)}</Badge>
                                        </Card.Title>

                                        <Card.Text>
                                            {t(`projects.${project.name}.content`)}
                                        </Card.Text>

                                        <Card.Text>
                                            {t(`projects.${project.name}.moreinfo`)}
                                        </Card.Text>

                                        <Card.Link href={project.github}
                                                   target={'_blank'}>{t(`projects.${project.name}.github`)}</Card.Link>

                                        <Card.Link href={project.documentation}
                                                   target={'_blank'}>{t(`projects.${project.name}.documentation`)}</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )

}

export default Projects;
