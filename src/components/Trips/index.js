import React from 'react'
import {ProductsContainer, 
    ProductsHeading, 
    ProductWrapper,
    ProductCard,
    ProductInfo,
    TextWrap,
    Button,
    ProductTitle,
    ProductImg, TripButton, 
    TripBtn
    } from './TripsElements'
    import Bali from "../../images/Bali.jpg";
    import Taïwan from "../../images/Taïwan.jpg";
    import Dubaï from "../../images/Dubaï.jpg";
    import Californie from "../../images/Californie.jpg";
    
import { ImLocation } from "react-icons/im"

const Trips = () => {
    return (
        <>
           <ProductsContainer>
            <ProductsHeading>Derniers lieux visité</ProductsHeading>    
            <ProductWrapper>
                <ProductCard>
                    <ProductImg src={Bali} alt="Bali" />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>Bali </ProductTitle>
                        </TextWrap>
                        <Button to='/Maps'>Voir sur la Map</Button>
                    </ProductInfo>
                </ProductCard>

                <ProductCard>
                    <ProductImg src={Taïwan} alt="Taïwan" />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>Taïwan </ProductTitle>
                        </TextWrap>
                        <Button to='/Maps'>Voir sur la Map</Button>
                    </ProductInfo>
                </ProductCard>

                <ProductCard>
                    <ProductImg src={Dubaï} alt="Dubaï" />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>Dubaï </ProductTitle>
                        </TextWrap>
                        <Button to='/Maps'>Voir sur la Map</Button>
                    </ProductInfo>
                </ProductCard>

                <ProductCard>
                    <ProductImg src={Californie} alt="Californie" />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>Californie </ProductTitle>
                        </TextWrap>
                        <Button to='/Maps'>Voir sur la Map</Button>
                    </ProductInfo>
                </ProductCard>
            </ProductWrapper>
            <TripBtn>
            <TripButton  to='/Trips'>Toutes nos destinations </TripButton>
            </TripBtn>
           </ProductsContainer> 
        </>
    )
}

export default Trips
