import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import Loading from "../../shared/Loading/Loading";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const { percels, isLoading } = useCart();
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const axiosSecure = useAxiosSecure();

  // Calculate total payable amount
  const totalPyableAmount = percels?.reduce((prev, curr) => {
    return prev + curr.charge;
  }, 0);

  // Fetch the client secret for test payments
  useEffect(() => {
    if (!totalPyableAmount || totalPyableAmount <= 0) return;

    axiosSecure
      .post("/create-payment-intent", { price: totalPyableAmount })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        console.error("Error fetching client secret:", err);
      });
  }, [totalPyableAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    setIsProcessing(true);
    setError("");

    try {
      // Confirm the Payment Intent with test card details
      const { error: intentError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "testuser@example.com",
              name: user?.displayName || "Test User",
            },
          },
        });

      if (intentError) {
        console.error("Payment Intent Error:", intentError);
        setError(intentError.message);
      } else {
        console.log("PaymentIntent:", paymentIntent);
        setError("");
        Swal.fire({
          title: "Good job!",
          text: "Payment Successful",
          icon: "success",
        });

        if (paymentIntent.status === "succeeded") {
          const paymentId = paymentIntent.id;
          setTransactionId(paymentId);
          const payment = {
            email: user.email,
            userId: percels.userId,
            price: totalPyableAmount,
            transactionId: transactionId,
            date: new Date(),
            cartId: percels.map((item) => item._id),
            status: "pending",
          };
          const res = await axiosSecure.post("/payments", payment);
          console.log(res.data);
        }
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="text-red-700 py-4">{error}</p>
        <button
          className="btn btn-primary my-4"
          type="submit"
          disabled={!stripe || !clientSecret || isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay with Test Card"}
        </button>
      </form>
      {transactionId && <h1>Transaction Id : {transactionId}</h1>}
    </div>
  );
};

export default CheckoutForm;
