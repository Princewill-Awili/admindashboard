import React from 'react'
import "./home.css"
import {userData} from "../../dummyData"

import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'

const Home = () => {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" dataKey="ActiveUsers" grid/>
        <div className="homeWidgets">
          
        </div>
    </div>
  )
}

export default Home