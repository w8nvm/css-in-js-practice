import React from 'react';
import { pricingData } from '../../data/PricingData';
import { IconContext } from 'react-icons/lib';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { 
    PricingWrapper,
    PricingSection,
    PricingContainer,
    PricingCard,
    PricingCardInfo, 
    PricingCardPlan,
    PricingCardCost,
    PricingCardFeatures,
    PricingCardFeature 
} from './PricingStyles';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem'}}>
        <PricingSection id='pricing'>
            <PricingWrapper>
                <Heading>
                    Heading
                </Heading>

                <TextWrapper>

                </TextWrapper>

                <PricingContainer>
                    {pricingData.map((card, index) =>  (
                        <PricingCard key={index}>
                            <PricingCardInfo>
                                <PricingCardPlan>{card.title}</PricingCardPlan>
                                <PricingCardCost>{card.price}</PricingCardCost>
                                <PricingCardFeatures>
									{card.features.map((feature, index) => (
										<PricingCardFeature key={index}>
											{feature}
										</PricingCardFeature>
									))}
								</PricingCardFeatures>
                                <Button>Get Started</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    ))}
                </PricingContainer>
            </PricingWrapper>
        </PricingSection>
    </IconContext.Provider>
  )
}

export default Pricing