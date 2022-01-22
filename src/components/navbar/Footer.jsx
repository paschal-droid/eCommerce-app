import * as fiIcons from "react-icons/fi"
import { Typography } from "@material-ui/core"

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <Typography variant='body2' className='footer-text' gutterBottom>@2021- 2022 Quale Inc.</Typography>
            </div>
            <h5 style={{fontWeight: "700", color: "rgb(0, 161, 157)"}}>Developed and Created by PasQuale</h5>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/paschal-celestine-b58308200/'><fiIcons.FiLinkedin /></a>
                <fiIcons.FiFacebook />
                <fiIcons.FiTwitter />
                <fiIcons.FiYoutube />
                <fiIcons.FiInstagram />
            </div>
        </footer>
    )
}

export default Footer
