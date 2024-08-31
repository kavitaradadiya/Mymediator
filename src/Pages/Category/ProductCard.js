import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    const {title,price,image01,location,detail} = props.items
  return (
    <div>
          <div className="card mt-1 border_rounded">
          <Link to=""><img src={image01} alt='Product Img' className='img-fluid mx-auto d-block' width="100%"></img></Link>
          <div className="card-body">
          <h5 className=''><Link to="" className='product_item'>{title}</Link></h5>
          <p className='product_p'><i class="ri-map-pin-2-fill product_icon pe-1"></i>{location}</p>
            <div className='justify-content-between d-flex'>
              <span className='p-0 m-0 product_detail pt-1'>{detail}</span>
              <p className='product_price p-0 m-0'><span className='fs-4 pe-1'>₹</span>{price}</p>
            </div>
          </div>
        </div>
      </div>

  )
}
