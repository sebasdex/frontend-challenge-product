import Cart from "./components/Cart";
import Deserts from "./components/Deserts";
import OrderConfirmed from "./components/OrderConfirmed";
import { useStore } from "./hooks/useStore";

function App() {
  const { orderCard } = useStore();
  return (
    <>
      {orderCard ? <OrderConfirmed /> : null}
      <main className="main">
        <Deserts />
        <Cart />
      </main>
    </>
  );
}

export default App;
