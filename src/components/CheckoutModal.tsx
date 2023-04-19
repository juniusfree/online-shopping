import { useEffect } from "react";

type CheckoutModalProps = {
  showCheckout: boolean;
  setShowCheckout: Function;
};

const CheckoutModal = ({
  showCheckout,
  setShowCheckout,
}: CheckoutModalProps) => {
  const timeout = 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCheckout(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, showCheckout, setShowCheckout]);

  return (
    <div className="absolute top-10 left-0 w-full  flex justify-center">
      <div className="opacity-100 p-4 border shadow-lg rounded text-green-950 border-green-500 bg-green-100">
        Thank you for purchasing!
      </div>
    </div>
  );
};

export default CheckoutModal;
