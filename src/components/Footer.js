import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./FooterStyles.css"


const Footer = () => {
   
  return (
    <div className="root">
        <Grid container alignItems="center">
                <Grid item xs={12} sm={12}>
                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Box> <a href="https://github.com/yildirimesutx" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <GitHubIcon className="icon" /> </a> </Box>
                        <Box> <a href="https://www.linkedin.com/in/yildirimesut/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <LinkedInIcon className="icon" /> </a> </Box>
                        <Box> <a href="https://www.instagram.com//" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <InstagramIcon className="icon" /> </a></Box>
                        <Box> <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <TwitterIcon className="icon"/> </a> </Box>
                    </Box>
                </Grid>
                <Grid item sm={1}></Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <p className="footer__copyRight">yildirimesut <small>Copyright © {new Date().getFullYear()}</small> </p>
                </Grid>
            </Grid>
    </div>
  )
}

export default Footer