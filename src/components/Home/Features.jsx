import Feature from './Feature'
import * as RiIcons from 'react-icons/ri'

const Features = () => {
    return (
      <div className="features section-padding">
        <Feature icon={<RiIcons.RiBus2Fill />} title='Free Shipping' caption='Free Delivery to all places.' />
        <Feature icon={<RiIcons.RiMoneyDollarBoxLine />} title='Money Guarantee' caption='15 days money return policy.' />
        <Feature icon={<RiIcons.RiHeadphoneFill />} title='24/7 support' caption='Friendly 24/7 support service.'  />
        <Feature icon={<RiIcons.RiBankCard2Fill />} title='Secure Payment Method' caption='All cards Accepted.' />
      </div>
    )
}

export default Features
