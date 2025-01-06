import "./style.scss";
import { removeAllItems } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Clear the cart
    dispatch(removeAllItems());

    // Redirect back to home after 3 seconds
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to home page
    }, 3000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [dispatch, navigate]);

  return (
    <div className="success">
      <h1>Success</h1>
      <p>Your order has been placed successfully. Redirecting to home...</p>
    </div>
  );
};

export default Success;
