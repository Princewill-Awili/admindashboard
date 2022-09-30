import './widgetLg.css'

const WidgetLg = () => {

  const Button = ({type}) => {
    return (
      <button className={'widgetLgButton ' + type}>{type}</button>
    )
  }


  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">

        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI9MBWam1PjNpUkOE_GR3L8lxYyXJ-L4oZVK-kMvJc_a5fsczKaBO4AMMMyDWPGVORK8&usqp=CAU" alt="" className="widgetLgImage" />
            <span className='widgetLgName'>Mark Spencer</span>
          </td>
          <td className="widgetLgDate">3rd Sept 2022</td>
          <td className="widgetLgAmt">$500</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI9MBWam1PjNpUkOE_GR3L8lxYyXJ-L4oZVK-kMvJc_a5fsczKaBO4AMMMyDWPGVORK8&usqp=CAU" alt="" className="widgetLgImage" />
            <span className='widgetLgName'>Jamil Roberts</span>
          </td>
          <td className="widgetLgDate">5th Sept 2022</td>
          <td className="widgetLgAmt">$100</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI9MBWam1PjNpUkOE_GR3L8lxYyXJ-L4oZVK-kMvJc_a5fsczKaBO4AMMMyDWPGVORK8&usqp=CAU" alt="" className="widgetLgImage" />
            <span className='widgetLgName'>Olusey Ojo</span>
          </td>
          <td className="widgetLgDate">10th Sept 2022</td>
          <td className="widgetLgAmt">$400</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI9MBWam1PjNpUkOE_GR3L8lxYyXJ-L4oZVK-kMvJc_a5fsczKaBO4AMMMyDWPGVORK8&usqp=CAU" alt="" className="widgetLgImage" />
            <span className='widgetLgName'>Mary Williams</span>
          </td>
          <td className="widgetLgDate">14th Sept 2022</td>
          <td className="widgetLgAmt">$500</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI9MBWam1PjNpUkOE_GR3L8lxYyXJ-L4oZVK-kMvJc_a5fsczKaBO4AMMMyDWPGVORK8&usqp=CAU" alt="" className="widgetLgImage" />
            <span className='widgetLgName'>Mark Spencer</span>
          </td>
          <td className="widgetLgDate">3rd Sept 2022</td>
          <td className="widgetLgAmt">$500</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg