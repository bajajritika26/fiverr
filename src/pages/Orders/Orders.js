import React from "react";
import "./Orders.css";
import Delete from "../../img/delete.png";
const Orders = () => {
  return (
    <div className="orders">
      <div className="ordersContainer">
        <div className="myGigsTitle">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="tImg"
              />
            </td>
            <td>Order 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Delete} alt="" className="delete" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="tImg"
              />
            </td>
            <td>Order 2</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Delete} alt="" className="delete" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="tImg"
              />
            </td>
            <td>Order 3</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Delete} alt="" className="delete" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="tImg"
              />
            </td>
            <td>Order 4</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Delete} alt="" className="delete" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="tImg"
              />
            </td>
            <td>Order 5</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={Delete} alt="" className="delete" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
