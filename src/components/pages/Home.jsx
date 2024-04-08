import React, {useCallback} from "react";

import useRazorpay from "react-razorpay";

const Home = () => {
    const [response, setResponse] = React.useState();
    const [Razorpay] = useRazorpay();

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products/').then((response) => {
            return response.json()
        }).then((results) => {
            setResponse(results);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    
    const handlePayment = useCallback(async () => {
        // const order = await createOrder(params);
    
        const options = {
          key: "rzp_test_ztLZMynxNBISbD",
          amount: "3000",
          currency: "INR",
          name: "Acme Corp",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: 'order_9A33XWu170gUtm',
          handler: (res) => {
            console.log(res);
          },
          prefill: {
            name: "Piyush Garg",
            email: "youremail@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [Razorpay]);
    
    return (
        <div>
            {
                response && response.map((result) => (
                    <div>
                    <img src={result.image} width={100} height={100} />
                        <p>{result.description}</p>
                        <button onClick={handlePayment}>Buy now</button>
                        </div>
                ))
            }
        </div>
    )
};


export default Home;