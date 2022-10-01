import './product.css'
import {Link} from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import PublishIcon from '@mui/icons-material/Publish';

const Product = () => {
  return (
    <div className='product'>

      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData}  dataKey="Sales(units)" title="Sales Performance" grid/>
        </div>
        <div className="productTopRight">

          <div className="productInfoTopTop">
            <img src="https://assets-prd.ignimgs.com/2022/09/12/apple-airpods-pro-2nd-gen-hero-220907-1662579992347-1662989441835.jpg" alt="productInfoImg" className="productInfoImg" />
            <span className="productName">Apple Airpods</span>
          </div>

          <div className="productInfoTopBottom">

              <div className="productInfoItem">
                <span className="productInfoKey">Product ID:</span>
                <span className="productInfoValue">123</span>
              </div>

              <div className="productInfoItem">
                <span className="productInfoKey">Sales:</span>
                <span className="productInfoValue">9023</span>
              </div>

              <div className="productInfoItem">
                <span className="productInfoKey">Active:</span>
                <span className="productInfoValue">Yes</span>
              </div>

              <div className="productInfoItem">
                <span className="productInfoKey">In Stock:</span>
                <span className="productInfoValue">No</span>
              </div>
          </div>
        </div>

    </div>
    <div className="productBottom">
      <form className="productForm">
        <div className="productFormLeft">

          <label>Product Name</label>
          <input type="text" placeholder='Enter product name' />

          <label>In Stock</label>
          <select name="instock" id="instock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

        </div>
        <div className="productFormRight">
          <div className="productUpload">
            <img src="https://assets-prd.ignimgs.com/2022/09/12/apple-airpods-pro-2nd-gen-hero-220907-1662579992347-1662989441835.jpg" alt="" className="productUploadImg" />
            <label for="file">
              <PublishIcon className="productUploadIcon"/>
            </label>
            <input type="file" id='file' style={{display:"none"}} />
          </div>
          <button className="productButton">Update</button>
        </div>
      </form>
    </div>

    


    </div>
  )
}

export default Product