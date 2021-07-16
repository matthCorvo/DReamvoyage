import React from 'react'
import {FooterContainer, 
    FooterWrap, 
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
    } from './FooterElements'

import { FaGithubAlt,  FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FiCodesandbox } from 'react-icons/fi'
import { MdComputer } from 'react-icons/md'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                            DREAM<br></br>&emsp;VOYAGE
                            </SocialLogo>
                                <WebsiteRights> DREAM VOYAGE © {new Date().getFullYear()} Tous droit réservés.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="https://github.com/matthCorvo" target="_blank" aria-label="Github" >
                                    <FaGithubAlt />
                                </SocialIconLink>
                                <SocialIconLink href="https://twitter.com/CodeMatth" target="_blank" aria-label="Twitter" >
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="https://www.linkedin.com/in/corvomatthieu/" target="_blank" aria-label="LinkedIn" >
                                    <FaLinkedin />
                                </SocialIconLink>
                                <SocialIconLink href="https://codesandbox.io/u/matthCorvo" target="_blank" aria-label="CodeSandBox" >
                                    <FiCodesandbox />
                                </SocialIconLink>
                                <SocialIconLink href="https://matthcorvo.github.io/CORVOMatthieu-Portfolio-Professionnel-V.3/" target="_blank" aria-label="Portfolio" >
                                    <MdComputer />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
