import React from 'react'
import {SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
    } from './SidebarElements'
    const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}> 
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                    <SidebarLink to='/'onClick={toggle}>
                            Accueil
                        </SidebarLink>
                        <SidebarLink to='/Trips'onClick={toggle}>
                            Destinations
                        </SidebarLink>
                       
                      
                    </SidebarMenu>
                        <SideBtnWrap>
                    <SidebarRoute to='/Register' onClick={toggle}>Mon Compte</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
