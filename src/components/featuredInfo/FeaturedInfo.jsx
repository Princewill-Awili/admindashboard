import './featuredInfo.css'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className='featured'>

        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3500</span>
                <span className="featuredMoneyRate"> -11.5% <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1200</span>
                <span className="featuredMoneyRate"> -1.5% <ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4600</span>
                <span className="featuredMoneyRate"> +7.5% <ArrowUpwardIcon className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>




    </div>
  )
}

export default FeaturedInfo