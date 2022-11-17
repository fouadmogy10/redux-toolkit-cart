import {Table,Container,Button} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { ClearCart, deleteFromCart } from '../redux/cartSlice';


function Cart() {
const dispatch =useDispatch()
  const cart = useSelector((state) => state.cart);
  const total =cart.reduce((total, item) => total + item.QTY * item.price, 0);
  
  return (
    <section>
   <Container>
      <div >
        <h2 className='text-success py-5'>Your Cart</h2>
      </div></Container>
   <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>image </th>
          <th>price</th>
          <th>quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
          cart?(
            cart.map((item ,index)=>{
              return(
                <>
                <tr key={index}>
          <td>{index+1}</td>
          <td>{item.title}</td>
          <td><img src={item.image} height="70" alt={item.category} /></td>
          <td>{item.price}</td>
          <td>{item.QTY}</td>
          <td><Button variant="danger text-white" onClick={()=>dispatch(deleteFromCart(item))}>
            Delete
          </Button></td>
        </tr>
                </>
              )
            })
          ):null
        }
        <tr>
        <td colSpan={3}>total price</td>
        <td colSpan={3}>{total}</td></tr>
      </tbody>
    </Table>
       {
        cart.length >0 ?(
          <Button variant="danger" onClick={() => dispatch(ClearCart())}>
            Delete All
          </Button>
         ):null
       }
   

    </section>
  );
}

export default Cart;