import Heading from "../../../components/Heading";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckutForm from "./CheckutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_key);
const Payment = () => {
  return (
    <div>
      <Heading title="Payment" />
      <Elements stripe={stripePromise}>
        <CheckutForm />
      </Elements>
    </div>
  );
};

export default Payment;
