import React from 'react'

function Orders(props) {
    return (
        <div className="container">
        <h2>Past Orders</h2>
        <div className="table-responsive"> 
        {props.orders.length>0?         
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>City</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
              {props.orders.map((order)=>(
                  <tr>
                  <td>{order.title}</td>
                  <td>{order.count}</td>
                  <td>{order.price*order.count}</td>
                  <td>Chennai</td>
                  <td>Paypal</td>
                </tr>
              ))}
            
          </tbody>
        </table>:''}
        </div>
      </div>
      
    )
}

export default Orders
