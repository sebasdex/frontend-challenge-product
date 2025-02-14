import data from "../data/data.json";

function Deserts() {
  return (
    <section className="desserts-container">
      <h1 className="title">Desserts</h1>
      <section className="items-container">
        {data.map((item, index) => (
          <article className="item" key={index}>
            <img
              src={item.image.mobile}
              alt={item.name.split(" ").join("-").toLowerCase()}
            />
            <span>{item.category}</span>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Deserts;
