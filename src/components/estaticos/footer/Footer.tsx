import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='textos'>Me siga nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/Kevin.Leal13/" target="_blank">
                            <FacebookIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-leal-663aa9177/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                        <a href="https://github.com/Tihuanna" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' > Kevin Leal  © 2021 Copyright</Typography>
                    </Box>
                    <Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;