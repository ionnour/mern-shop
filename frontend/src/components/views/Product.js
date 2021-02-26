import './Product.css';

const Product = () => {
  return (
    <div className="product-view">
     
        
          <div className="product-left">
            <div className="left-image">
              <img src='https://images.hindustantimes.com/tech/img/2020/06/12/960x540/sony_ps5_digital_edition_1591929311470_1591929330517.jpg' alt='titlr' />

            </div>
            <div className="left-info">
              <p className="left-name">PlayStation 5</p>
              <p>Price: $400</p>
              <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore aliquid inventore officia a distinctio delectus sint adipisci reiciendis qui maiores, minus beatae voluptatem molestias dolorem eius. Dignissimos, suscipit modi.</p>
            </div>
          </div>
          <div className="product-right">
            <div className="right-info">
              <p>
                Price:
                <span>$400</span>
              </p>
              <p>
                Status:
                <span>
                  in stock
                </span>
              </p>
              <p>
                Qty
                <select >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                </select>
              </p>
              <p>
                <button type="button" >
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
     
      
    </div>
  )
}

export default Product
