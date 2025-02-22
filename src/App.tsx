import Cart from "./components/Cart";
import Deserts from "./components/Deserts";
import OrderConfirmed from "./components/OrderConfirmed";

function App() {
  return (
    <>
      <OrderConfirmed />
      <main className="main">
        <Deserts />
        <Cart />
      </main>
    </>
  );
}

export default App;
