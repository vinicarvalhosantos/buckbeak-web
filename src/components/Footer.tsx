import React from 'react';
import {Box} from "@mui/material";
import './Footer.css';

function Footer() {

    return (
        <Box className={'footer'}>
            <p className={'my-name'}>Vinicius Santos</p>
            <p className={'copyright'}>Copyright © 2022 Vinicius Santos</p>
        </Box>
    )
}

export default Footer;