import React from 'react'
import PricingHero from '../components/pricing/PricingHero'
import HowPaymentWorks from '../components/pricing/HowPaymentWorks' 
import SoftwareMobilePricing from '../components/pricing/Softwaremobilepricing'
import PricingPlans from '../components/pricing/PricingPlans'

const Pricing = () => {
  return (
    <div>
      <PricingHero />
      <HowPaymentWorks />
      <PricingPlans />
      <SoftwareMobilePricing />
    </div>
  )
}

export default Pricing