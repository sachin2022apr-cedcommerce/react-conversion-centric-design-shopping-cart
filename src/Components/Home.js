import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {

  // variables for navigation
  var goToCategory = useNavigate();
  var goToAllShop = useNavigate();

  // random color array for user testimoniols
  var ColorArray = ['#999933', '#FF3380', '#CCCC00', '#66E64D',
    '#4D80CC', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  // open category page
  var openCategory = (Category) => {
    goToCategory('/category', { state: { Category: Category } })
  }
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <div className='promo'>
        <div className='content'>
          <p>Explore Amazing Fashionable Outfits This Summer</p>
          <div style={{ width: "100%", flexWrap: "wrap", gap: "20px", display: "flex" }}>
            <button onClick={() => goToAllShop('/shop')} className='Shop'>Shop Now</button>
            <button onClick={() => {
              window.scrollBy({
                top: 450,
                left: 0,
                behavior: 'smooth'
              });
            }} className='Learn'>Learn More</button>
          </div>

        </div>
        <img src='./images/promo3.png' alt='promo' />
      </div>
      <div className='category' id='category'>

        <div style={{ background: "#FDBF6C" }} className='category-product'>
          <div style={{ marginLeft: "20px" }}>
            <h3>T-Shirts</h3>
            <p onClick={() => openCategory("T-Shirts")}>View all</p>
          </div>
          <img src='./images/promo2.png' alt='category' />
        </div>

        <div style={{ background: "#EEEAE1" }} className='category-product'>
          <div style={{ marginLeft: "20px" }}>
            <h3>Shirts</h3>
            <p onClick={() => openCategory("Shirts")}>View all</p>
          </div>
          <img src='./images/promo3.png' alt='category' />
        </div>

        <div style={{ background: "#D8EAF5" }} className='category-product'>
          <div style={{ marginLeft: "20px" }}>
            <h3>Shoes</h3>
            <p onClick={() => openCategory("Shoes")}>View all</p>
          </div>
          <img src='./images/promo4.png' alt='category' />
        </div>

        <div style={{ background: "#F0F0F0" }} className='category-product'>
          <div style={{ marginLeft: "20px" }}>
            <h3>Trousers</h3>
            <p onClick={() => openCategory("Trousers")}>View all</p>
          </div>
          <img src='./images/promo1.png' alt='category' />
        </div>

        <div style={{ background: "#FD725B" }} className='category-product'>
          <div style={{ marginLeft: "20px" }}>
            <h3>Jackets</h3>
            <p>Comming Soon</p>
          </div>
          <img src='./images/promo5.png' alt='category' />
        </div>

        <div style={{ background: "#ffdfe8" }} className='category-product'>
          <div style={{ marginLeft: "20px" }}>
            <h3>Sweatshirt</h3>
            <p>Comming Soon</p>
          </div>
          <img src='./images/promo6.png' alt='category' />
        </div>

      </div>
      <div className='reviews'>
        <h2>What Our Customer Say</h2>
        <div className='UserDetils'>

          <div className='userCard'>
            <div className='cardTop' style={{ backgroundColor: ColorArray[Math.floor(Math.random() * ColorArray.length)] }}></div>
            <div className='cardImage'>
              <img src='1.png' alt='user' />
            </div>
            <div className='rv'>
              <p>I was so excited to order this shirt,I'm so glad that I ordered it.
                It fits perfectly, it looks great, and it is so
                comfortable. The fabric is also very easy to sew.
              </p>
            </div>

          </div>
          <div className='userCard'>
            <div className='cardTop' style={{ backgroundColor: ColorArray[Math.floor(Math.random() * ColorArray.length)] }}></div>
            <div className='cardImage'>
              <img src='2.png' alt='user' />
            </div>
            <div className='rv'>
              <p>I was so excited to order this shirt,I'm so glad that I ordered it.
                It fits perfectly, it looks great, and it is so
                comfortable. The fabric is also very easy to sew.
              </p>
            </div>

          </div>
          <div className='userCard'>
            <div className='cardTop' style={{ backgroundColor: ColorArray[Math.floor(Math.random() * ColorArray.length)] }}></div>
            <div className='cardImage'>
              <img src='5.png' alt='user' />
            </div>
            <div className='rv'>
              <p>I was so excited to order this shirt,I'm so glad that I ordered it.
                It fits perfectly, it looks great, and it is so
                comfortable. The fabric is also very easy to sew.
              </p>
            </div>

          </div>

          <div className='userCard'>
            <div className='cardTop' style={{ backgroundColor: ColorArray[Math.floor(Math.random() * ColorArray.length)] }}></div>
            <div className='cardImage'>
              <img src='6.png' alt='user' />
            </div>
            <div className='rv'>
              <p>I was so excited to order this shirt,I'm so glad that I ordered it.
                It fits perfectly, it looks great, and it is so
                comfortable. The fabric is also very easy to sew.
              </p>
            </div>

          </div>

        </div>

      </div>
      <footer>
        <div><h3>Follow us on</h3>
          <h1> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-facebook-f"> </i> <i class="fa-brands fa-youtube"> </i> </h1>
        </div>
      </footer>
    </div>
  )
}
