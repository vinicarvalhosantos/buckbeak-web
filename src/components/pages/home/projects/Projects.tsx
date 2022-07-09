import React from 'react';
import {Badge, Button, Card, Container} from 'react-bootstrap';
import './Projects.css';
import '../../../../i18n/config';
import {useTranslation} from "react-i18next";
import projects from "../../../../assets/projects/projects.json"
import {Chip, Divider, Grid} from "@mui/material";
import TokenCanvas from "./canvas/TokenCanvas";

function Projects() {

    const {t} = useTranslation()


    return (
        <Container>
            <h1 style={{textAlign: "center"}}>{t('projects.title')}</h1>

            <p className={'project-description'}>{t("projects.description")}</p>

            <TokenCanvas/>
            {projects.map((project) => (

                <Grid sx={{flexGrow: 1}} container spacing={4}>
                    <Grid item xs={12}>
                        <Divider orientation="horizontal" flexItem>
                            <Chip label={project.title} />
                        </Divider>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={4}>
                            {project.projects.map((project) => (
                                <Grid key={project.name} item>
                                    <Card id={"project-card"}>
                                        <Card.Img variant="top" className={"project-image"} src={project.image}/>
                                        <Card.Body id={'card-body'}>
                                            <div>
                                                <Card.Title>
                                        <span
                                            className={'shadows-into-light-font'}>{t(`projects.${project.name}.title`)} </span>
                                                    <Badge bg="secondary">{t(`projects.${project.name}.tech`)}</Badge>
                                                </Card.Title>

                                                <Card.Text id={'card-content'}>
                                                    {t(`projects.${project.name}.content`)}
                                                </Card.Text>
                                            </div>

                                            <div>
                                                <Card.Text>
                                                    {t(`projects.${project.name}.moreinfo`)}
                                                </Card.Text>

                                                <Card.Link href={project.github} target={'_blank'}>
                                                    <Button
                                                        variant="outline-info">{t(`projects.${project.name}.github`)}
                                                    </Button></Card.Link>

                                                <Card.Link href={project.documentation} target={'_blank'}>
                                                    <Button
                                                        variant="outline-info">{t(`projects.${project.name}.documentation`)}
                                                    </Button></Card.Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Grid>
                            ))}

                        </Grid>
                    </Grid>
                </Grid>
            ))}

        </Container>
    )

}

export default Projects;
