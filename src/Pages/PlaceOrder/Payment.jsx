import { Link } from "react-router-dom"
const Payment = () => {
    return <div>
    <img src="https://media4.giphy.com/media/ehz3LfVj7NvpY8jYUY/giphy.gif" alt="doneImage"/>
        <h1>Order Placed</h1>
        <Link to="/store" className="headerLink">
            Shop More <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </Link>
    </div>
}
export default Payment