const PagesContent = {
  mainPage: 
`
<header class="header">
      <div class="header-content">
        <div class="logo">
          <a class="logo" href="#main-page">Online Store</a>
        </div>
        <div class="cart-total">
          <h2 class="cart-total-amount">
            Cart-total: <span class="cart-total-amount__sum">$0.00</span>
          </h2>
        </div>
        <div class="cart">
          <img src="../../assets/cart.png" alt="cart"/>
          <span class="product-count">0</span>
        </div>
      </div>
    </header>
    <main class="main_main">
      <div class="main-content_main">
        <aside class="filters">
          <div class="reset-copy">
            <button class="button-filters">Reset Filters</button>
            <button class="button-filters">Copy Link</button>
          </div>
          <div class="filter-by-category">
            <h2 class="category">Category</h2>
            <div class="filter-list">
              <div class="checkbox">
                <input type="checkbox" id="smartphones" />
                <label class="label" for="smartphones">smartphones</label>
                <span class="checkbox-span" >(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="laptops" />
                <label class="label" for="laptops">laptops</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="fragrances" />
                <label class="label" for="fragrances">fragrances</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="skincare" />
                <label class="label" for="skincare">skincare</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="groceries" />
                <label class="label" for="groceries">groceries</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="home-decoration" />
                <label class="label" for="home-decoration">home-decoration</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="furniture" />
                <label class="label" for="furniture">furniture</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="tops" />
                <label class="label" for="tops">tops</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="womens-dresses" />
                <label class="label" for="womens-dresses">womens-dresses</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="womens-shoes" />
                <label class="label" for="womens-shoes">womens-shoes</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="mens-shirts" />
                <label class="label" for="mens-shirts">mens-shirts</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="mens-shoes" />
                <label class="label" for="mens-shoes">mens-shoes</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="mens-watches" />
                <label class="label" for="mens-watches">mens-watches</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="womens-watches" />
                <label class="label" for="womens-watches">womens-watches</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="smartphones" />
                <label class="label" for="smartphones">smartphones</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="womens-bags" />
                <label class="label" for="womens-bags">womens-bags</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="womens-jevellery" />
                <label class="label" for="womens-jevellery">womens-jevellery</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="sunglasses" />
                <label class="label" for="sunglasses">sunglasses</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="automotive" />
                <label class="label" for="automotive">automotive</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="motorcycle" />
                <label class="label" for="motorcycle">motorcycle</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="lighting" />
                <label class="label" for="lighting">lighting</label>
                <span class="checkbox-span">(5/5)</span>
              </div>
            </div>
          </div>
          <div class="filter-by-brand">
            <h2 class="category">Brand</h2>
            <div class="filter-list">
              <div class="checkbox">
                <input type="checkbox" id="Apple" />
                <label class="label" for="Apple">Apple</label>
                <span class="checkbox-span">(0/3)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Samsung" />
                <label class="label" for="Samsung">Samsung</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="OPPO" />
                <label class="label" for="OPPO">OPPO</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Huawei" />
                <label class="label" for="Huawei">Huawei</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Microsoft Surface" />
                <label class="label" for="Microsoft Surface">Microsoft Surface</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Infinix" />
                <label class="label" for="Infinix">Infinix</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="HP Pavilion" />
                <label class="label" for="HP Pavilion">HP Pavilion</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Impression of Acqua Di Gio" />
                <label class="label" for="Impression of Acqua Di Gio">Impression of Acqua Di Gio</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Royal_Mirage" />
                <label class="label" for="Royal_Mirage">Royal_Mirage</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Fog Scent Xpressio" />
                <label class="label" for="Fog Scent Xpressio">Fog Scent Xpressio</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Al Munakh" />
                <label class="label" for="Al Munakh">Al Munakh</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Lord - Al-Rehab" />
                <label class="label" for="Lord - Al-Rehab">Lord - Al-Rehab</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="L'Oreal Paris" />
                <label class="label" for="L'Oreal Paris">L'Oreal Paris</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Hemani Tea" />
                <label class="label" for="Hemani Tea">Hemani Tea</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Dermive" />
                <label class="label" for="Dermive">Dermive</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="ROREC White Rice" />
                <label class="label" for="ROREC White Rice">ROREC White Rice</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Fair & Clear" />
                <label class="label" for="Fair & Clear">Fair & Clear</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Saaf & Khaas" />
                <label class="label" for="Saaf & Khaas">Saaf & Khaas</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Bake Parlor Big" />
                <label class="label" for="Bake Parlor Big">Bake Parlor Big</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Baking Food Items" />
                <label class="label" for="Baking Food Items">Baking Food Items</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="fauji" />
                <label class="label" for="fauji">fauji</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Dry Rose" />
                <label class="label" for="Dry Rose">Dry Rose</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Boho Decor" />
                <label class="label" for="Boho Decor">Boho Decor</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Flying Wooden" />
                <label class="label" for="Flying Wooden">Flying Wooden</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="LED Lights" />
                <label class="label" for="LED Lights">LED Lights</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="luxury palace" />
                <label class="label" for="luxury palace">luxury palace</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Golden" />
                <label class="label" for="Golden">Golden</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Furniture Bed Set" />
                <label class="label" for="Furniture Bed Set">Furniture Bed Set</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Ratttan Outdoor" />
                <label class="label" for="Ratttan Outdoor">Ratttan Outdoor</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Kitchen Shelf" />
                <label class="label" for="Kitchen Shelf">Kitchen Shelf</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Multi Purpose" />
                <label class="label" for="Multi Purpose">Multi Purpose</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="AmnaMart" />
                <label class="label" for="AmnaMart">AmnaMart</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Professional Wear" />
                <label class="label" for="Professional Wear">Professional Wear</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Soft Cotton" />
                <label class="label" for="Soft Cotton">Soft Cotton</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Top Sweater" />
                <label class="label" for="Top Sweater">Top Sweater</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="RED MICKY MOUSE.." />
                <label class="label" for="RED MICKY MOUSE..">RED MICKY MOUSE..</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Digital Printed" />
                <label class="label" for="Digital Printed">Digital Printed</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Ghazi Fabric" />
                <label class="label" for="Ghazi Fabric">Ghazi Fabric</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="IELGY" />
                <label class="label" for="IELGY">IELGY</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="IELGY fashion" />
                <label class="label" for="IELGY fashion">IELGY fashion</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Synthetic Leather" />
                <label class="label" for="Synthetic Leather">Synthetic Leather</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Sandals Flip Flops" />
                <label class="label" for="Sandals Flip Flops">Sandals Flip Flops</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Maasai Sandals" />
                <label class="label" for="Maasai Sandals">Maasai Sandals</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Arrivals Genuine" />
                <label class="label" for="Arrivals Genuine">Arrivals Genuine</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Vintage Apparel" />
                <label class="label" for="Vintage Apparel">Vintage Apparel</label>
                <span class="checkbox-span">(2/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="FREE FIRE" />
                <label class="label" for="FREE FIRE">FREE FIRE</label>
                <span class="checkbox-span">(1/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="The Warehouse" />
                <label class="label" for="The Warehouse">The Warehouse</label>
                <span class="checkbox-span">(2/3)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Sneakers" />
                <label class="label" for="Sneakers">Sneakers</label>
                <span class="checkbox-span">(0/3)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Rubber" />
                <label class="label" for="Rubber">Rubber</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Naviforce" />
                <label class="label" for="Naviforce">Naviforce</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="SKMEI 9117" />
                <label class="label" for="SKMEI 9117">SKMEI 9117</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Strap Skeleton" />
                <label class="label" for="Strap Skeleton">Strap Skeleton</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Stainless" />
                <label class="label" for="Stainless">Stainless</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Eastern Watches" />
                <label class="label" for="Eastern Watches">Eastern Watches</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Luxury Digital" />
                <label class="label" for="Luxury Digital">Luxury Digital</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Watch Pearls" />
                <label class="label" for="Watch Pearls">Watch Pearls</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Bracelet" />
                <label class="label" for="Bracelet">Bracelet</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="LouisWill" />
                <label class="label" for="LouisWill">LouisWill</label>
                <span class="checkbox-span">(0/3)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Copenhagen Luxe" />
                <label class="label" for="Copenhagen Luxe">Copenhagen Luxe</label>
                <span class="checkbox-span">(1/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Steal Frame" />
                <label class="label" for="Steal Frame">Steal Frame</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Darojay" />
                <label class="label" for="Darojay">Darojay</label>
                <span class="checkbox-span">(1/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Fashion Jewellery" />
                <label class="label" for="Fashion Jewellery">Fashion Jewellery</label>
                <span class="checkbox-span">(2/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Cuff Butterfly" />
                <label class="label" for="Cuff Butterfly">Cuff Butterfly</label>
                <span class="checkbox-span">(1/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Designer Sun Glasses" />
                <label class="label" for="Designer Sun Glasses">Designer Sun Glasses</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="mastar watch" />
                <label class="label" for="mastar watch">mastar watch</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Car Aux" />
                <label class="label" for="Car Aux">Car Aux</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="W1209 DC12V" />
                <label class="label" for="W1209 DC12V">W1209 DC12V</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="TC Reusable" />
                <label class="label" for="TC Reusable">TC Reusable</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Neon LED Light" />
                <label class="label" for="Neon LED Light">Neon LED Light</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="METRO 70cc Motorcycle - MR70" />
                <label class="label" for="METRO 70cc Motorcycle - MR70">METRO 70cc Motorcycle - MR70</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="BRAVE BULL" />
                <label class="label" for="BRAVE BULL">BRAVE BULL</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="shock absorber" />
                <label class="label" for="shock absorber">shock absorber</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="JIEPOLLY" />
                <label class="label" for="JIEPOLLY">JIEPOLLY</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Xiangle" />
                <label class="label" for="Xiangle">Xiangle</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="lightingbrilliance" />
                <label class="label" for="lightingbrilliance">lightingbrilliance</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="Ifei Home" />
                <label class="label" for="Ifei Home">Ifei Home</label>
                <span class="checkbox-span">(0/2)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="DADAWU" />
                <label class="label" for="DADAWU">DADAWU</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
              <div class="checkbox">
                <input type="checkbox" id="YIOSI" />
                <label class="label" for="YIOSI">YIOSI</label>
                <span class="checkbox-span">(0/1)</span>
              </div>
           </div>
        </div>
          <div class="filter-by-price">
            <h2 class="price-text">Price</h2>
            <div class="out-data">
              <div class="from-data">$10.00</div>
              ⟷
              <div class="to-data">$1749</div>
            </div>
            <div class="multi-range">
              <input type="range" min="10" max="1749" value="10" class="amount-range" id="from-slider">
              <input type="range" min="10" max="1749" value="900" class="amount-range" id="to-slider">
            </div>
          </div>
          <div class="filter-by-stock">
            <h2 class="price-text">Stock</h2>
            <div class="out-data">
              <div class="from-data">2</div>
              ⟷
              <div class="to-data">150</div>
            </div>
            <div class="multi-range">
              <input type="range" min="2" max="150" value="2" class="amount-range" id="from-slider">
              <input type="range" min="2" max="150" value="75" class="amount-range" id="to-slider">
            </div>
          </div>
        </aside>
        <div class="products">
          <div class="sort-products">
            <div class="sort-bar">
              <select name="select" id="select-button" class="select-button">
                <option value="sort-title" disabled selected class="sort-name">Sort options:</option>
                <option value="price-ASC">Sort by price ASC</option>
                <option value="price-DESC">Sort by price DESC</option>
                <option value="rating-ASC">Sort by rating ASC</option>
                <option value="rating-DESC">Sort by rating DESC</option>
                <option value="discount-ASC">Sort by discount ASC</option>
                <option value="discount-DESC">Sort by discount DESC</option>
              </select>
            </div>
            <div class="stat">Found: 20</div>
            <div class="search-bar">
              <input type="search" placeholder="Search product" class="search-input">
            </div>
            <div class="view-mode">
              <div class="small-v">
                <img src="../../assets/small.jpg" alt="small-view">
              </div>
              <div class="big-v">
                <img src="../../assets/big.jpg" alt="big-view">
              </div>
            </div>
          </div>
          <div class="product-items">
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <a href="https://github.com/Kotkiller/" target="_blank"
          ><img class="github" src="../../assets/github.svg" alt="github"
        /></a>
        <h2 class="copyright">Online Store 2022</h2>
        <a href="https://rs.school/js/" target="_blank"
          ><img class="rss" src="../../assets/rss.svg" alt="rss"
        /></a>
      </div>
    </footer>
`,
  cartPage:
`
<header class="header">
<div class="header-content">
  <div class="logo">
    <a class="logo" href="#main-page">Online Store</a>
  </div>
  <div class="cart-total">
    <h2 class="cart-total-amount">
      Cart-total: <span class="cart-total-amount__sum">$0.00</span>
    </h2>
  </div>
  <div class="cart">
    <a href="#cart-page"><img src="../../assets/cart.png" alt="cart" /></a>
    <span class="product-count">0</span>
  </div>
</div>
</header>
<main class="main-cart">
<div class="main-content-cart_cart">
  <div class="products-in-cart_cart">
      <div class="title-and-page-control">
        <h2>Products In Cart</h2> 
        <div class="page-control">
          <div class="limit">
              LIMIT: 
              <input type="number" min="1" max="12">
          </div>
          <div class="page-numbers">
            PAGE: 
            <button> < </button>
            <span> 1 </span>
            <button> > </button>
          </div>
        </div>
      </div> 
      <div class="prod-items">
      </div>  
  </div>
  <div class="total-cart">
      <h2>Summary</h2>
      <div class="total-amount total-price">
          <span>Products:</span>
          12                
      </div>
      <div class="total-amount-price total-price">
          <span>Total: </span>
          $1000.00
      </div>
      <div class="promo-code">
          <input type="search" placeholder="Enter promo code" class="promo-code-input">
      </div>
      <span class="promo-ex">Promo for test: 'RS', 'EPM'</span>
      <button id="buy">BUY NOW</button>
  </div>
</div>
</main>
<footer class="footer">
<div class="footer-content">
  <a href="https://github.com/Kotkiller/" target="_blank"
    ><img class="github" src="../../assets/github.svg" alt="github"
  /></a>
  <h2 class="copyright">Online Store 2022</h2>
  <a href="https://rs.school/js/" target="_blank"
    ><img class="rss" src="../../assets/rss.svg" alt="rss"
  /></a>
</div>
</footer>
`,
productDescriptionPage:
`
<header class="header">
<div class="header-content">
<div class="logo">
    <a class="logo" href="#main-page">Online Store</a>
</div>
<div class="cart-total">
    <h2 class="cart-total-amount">Cart-total: <span class="cart-total-amount__sum">$0.00</span> </h2>
</div>
<div class="cart">
  <a href="#cart-page"><img src="../../assets/cart.png" alt="cart" /></a>
    <span class="product-count">0</span>
</div>
</div>
</header>
<main class="main-description">
<div class="main-content-description">
    <div class="link-navigation">
        <span></span>
        <span>>></span>
        <span></span>
        <span>>></span>
        <span></span>
        <span>>></span>
        <span></span>
    </div>
    <div class="product-detail-cart">
        <h1 class="product-detail__title"></h1>
        <div class="product-detail__content">
            <div class="product-detail__small-images"></div>
            <div class="product-detail__big-image">   
            </div>
            <div class="product-detail__info">
              <div class="product-detail-item">
                <h2>Description:</h2>
                <p></p>
              </div>
              <div class="product-detail-item">
                <h2>Discount Percentage:</h2>
                <p></p>
              </div>
              <div class="product-detail-item">
                <h2>Rating:</h2>
                <p></p>
              </div>
              <div class="product-detail-item">
                <h2>Stock:</h2>
                <p></p>
              </div>
              <div class="product-detail-item">
                <h2>Brand:</h2>
                <p></p>
              </div>
              <div class="product-detail-item">
                <h2>Category:</h2>
                <p></p>
              </div>
            </div>
            <div class="product-detail__order">
              <span class="product-detail-order__price"> $ </span>
              <button class="product-detail-order__cart-operation button">ADD TO CART</button>
              <button class="product-detail-order__buy button">BUY NOW</button>
            </div>
        </div>  
    </div>
</div>

</main>
<footer class="footer">
<div class="footer-content">
   <a href="https://github.com/Kotkiller/" target="_blank"><img class="github" src="../../assets/github.svg" alt="github"></a> 
    <h2 class="copyright">Online Store 2022</h2>
    <a href="https://rs.school/js/" target="_blank"><img class="rss" src="../../assets/rss.svg" alt="rss"></a> 
</div>
</footer>
`,
ErrorPage:
`
<header class="header">
      <div class="header-content">
        <div class="logo">
          <a class="logo" href="#main-page">Online Store</a>
        </div>
        <div class="cart-total">
          <h2 class="cart-total-amount">
            Cart-total: <span class="cart-total-amount__sum">$0.00</span>
          </h2>
        </div>
        <div class="cart">
          <a href="#cart-page"><img src="../../assets/cart.png" alt="cart"/></a>
          <span class="product-count">0</span>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="main-content">
       <h2> PAGE NOT FOUND (404)</h2>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <a href="https://github.com/Kotkiller/" target="_blank"
          ><img class="github" src="../../assets/github.svg" alt="github"
        /></a>
        <h2 class="copyright">Online Store 2022</h2>
        <a href="https://rs.school/js/" target="_blank"
          ><img class="rss" src="../../assets/rss.svg" alt="rss"
        /></a>
      </div>
    </footer>
`,
orderPage:
`
<div class="modal"></div>
<div class="modal-content">
  <form id="form" class="form">
    <h2 class="title">Personal details</h2>
    <div class="input-details">
      <input
        type="text"
        class="personal-details"
        placeholder="Name"
        name="customer-name"
      />
      <div class="error-message">error</div>
    </div>
    <div class="input-details">
      <input
        type="tel"
        class="personal-details"
        placeholder="Phone number"
      />
      <div class="error-message">error</div>
    </div>
    <div class="input-details">
      <input
        type="text"
        class="personal-details"
        placeholder="Delivery address"
      />
      <div class="error-message">error</div>
    </div>
    <div class="input-details">
      <input type="email" class="personal-details" placeholder="E-mail" />
      <div class="error-message">error</div>
    </div>
    <h2 class="title">Credit card details</h2>
    <div class="card-data">
      <div class="number">
        <img
          class="bank-logo"
          src="../../assets/visa_logo.png"
          alt="visa"
        />
        <input
          class="card-details"
          type="text"
          placeholder="Card number"
          name="card-number"
        />
      </div>
      <div class="other-data">
        <div class="valid-data">
          VALID:
          <input
            class="card-details"
            type="text"
            placeholder="Valid Thru"
            name="card-validity"
          />
        </div>
        <div class="cvv-data">
          CVV:
          <input
            class="card-details"
            type="text"
            placeholder="Code"
            name="card-cvv"
          />
        </div>
      </div>
    </div>
    <div class="card-err">Card number - error</div>
    <div class="card-err">Card valid thru - error</div>
    <div class="card-err">Card CVV - error</div>
    <button class="confirm-button">CONFIRM</button>
  </form>
</div>
`
};

export default PagesContent;