function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" width={40} height={40} />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">E-shop with best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" width={18} height={18} />
            <span>1200 EUR</span>
          </li>
          <li>
            <img src="/img/user.svg" width={18} height={18} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All products</h1>

        <div className="d-flex">
          <div className="card">
            <img src="/img/products/1.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Sneakers for men Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span> Price:</span>
                <b>1200 EUR</b>
              </div>
              <button className="button">
                <img src="img/plus.svg" alt="Plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/products/2.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Sneakers for men Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span> Price:</span>
                <b>1200 EUR</b>
              </div>
              <button className="button">
                <img src="img/plus.svg" alt="Plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/products/3.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Sneakers for men Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span> Price:</span>
                <b>1200 EUR</b>
              </div>
              <button className="button">
                <img src="img/plus.svg" alt="Plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/products/4.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Sneakers for men Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span> Price:</span>
                <b>1200 EUR</b>
              </div>
              <button className="button">
                <img src="img/plus.svg" alt="Plus" width={11} height={11} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
