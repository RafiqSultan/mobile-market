<template>
  <!-- Start Navbar Section --------------------------------------------------------  -->
  <section class="sec-navbar d-flex align-items-center" id="navbar">
    <div class="container">
      <div class="row">
        <!-- Logo  -->
        <div class="logo col-lg-2 col-md-12 col-sm-12 col-12">
          <a class="navbar-brand">
            <img
              src="../../assets/mobile-logo1-removebg-preview.png"
              alt="logo"
              width="70"
              height="50"
          /></a>
        </div>
        <!-- Links of page -->
        <div class="col-lg-10 col-md-12 col-sm-12 col-12">
          <div class="row">
            <div class="col-xl-9 col-lg-9 col-md-8 col-sm-6 col-6">
              <nav class="navbar navbar-expand-lg">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown-main"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fas fa-list"></i>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarNavDropdown-main"
                >
                  <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/products"
                        >Product</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" tag="a" to="/order"
                        >my order</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link tag="a" class="nav-link" to="/contact"
                        >Contact US</router-link
                      >
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="user-setting">
                <!-- Search  -->
                <div
                  class="icons search-icon"
                  id="search-btn"
                  @click="search('search')"
                >
                  <i
                    class="fas fa-search"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Search"
                  ></i>
                </div>
                <!-- favorite -->
                <div class="icons search-icon" id="search-btn" title="Favorite">
                  <i
                    class="fa-solid fa-heart"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                  ></i>
                </div>
                <!-- Cart  -->
                <div
                  class="icons search-icon"
                  id="search-btn"
                  @click="showCartItem"
                >
                  <i
                    class="fa fa-cart-shopping"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Cart"
                  ></i>
                  <div
                    class="
                      cart
                      d-flex
                      align-items-lg-center
                      justify-content-center
                    "
                    v-if="cartNumber > 0"
                  >
                    <span>{{ cartNumber }}</span>
                  </div>
                </div>
                <!-- Profile Icon -->
                <div
                  class="icons"
                  id="profile_form-btn"
                  @click="profile('profile')"
                >
                  <i
                    class="fa-solid fa-user"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Profile"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Search-form  -->
      <div class="row">
        <div
          class="search col-lg-8 col-md-8 col-sm-8 col-10"
          id="search"
          v-if="searchActive === 'search'"
        >
          <div class="input-group">
            <input
              type="text"
              class="form-control border-0 small"
              placeholder="Search for..."
            />
            <button class="btn btn-primary" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

        <!-- profile-form  -->
        <div class="profile_form" v-if="profileAcive === 'profile'">
          <ul class="p-2 m-0">
            <li>
              <router-link tag="a" to="/profile"
                ><i class="fa-solid fa-user"></i> Profile</router-link
              >
            </li>
            <li>
              <router-link tag="a" to="/login"
                ><i class="fa fa-box-arrow-right"></i>logout</router-link
              >
            </li>
          </ul>
        </div>
        <!-- Show Cart Item -->
        <div v-if="showCart == 'show'">
          <CartItem :cartItem="itemCart" />
        </div>
      </div>
    </div>
  </section>
</template>
<!-- Script  -->
<script>
import CartItem from "../CartItem.vue";
export default {
  components: {
    CartItem,
  },
  data() {
    return {
      profileAcive: null,
      searchActive: null,
      cartActive: null,
      favoriteActive: null,
      itemCart: [],
      showCart: null,
      cartNumber: 0,
    };
  },
  methods: {
    profile(option) {
      if (this.profileAcive === "profile") {
        this.profileAcive = null;
      } else {
        this.profileAcive = option;
      }
    },
    search(option) {
      if (this.searchActive === "search") {
        this.searchActive = null;
      } else {
        this.searchActive = option;
      }
    },
    showCartItem() {
      this.showCart = "show";

      fetch(
        "https://mobile-market-bf248-default-rtdb.firebaseio.com/itemCart.json"
      )
        .then((Response) => {
          if (Response.ok) {
            return Response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              phoneImg: data[id].img,
              phoneModel: data[id].model,
              phonePrice: data[id].price,
            });
          }
          this.itemCart = results;
          this.cartNumber = results.length;
        });
    },
  },
};
</script>
<style scoped>
/* Navbar Section Style Start *********************************************************** */

.sec-navbar {
  color: #000;
  font-size: 20px;
  font-weight: 500;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 0 3px #111;
}

.sec-navbar .nav-item a {
  color: inherit;
}

.sec-navbar .nav-item a:hover {
  color: #f00 !important;
}

.sec-navbar .user-setting {
  display: inline-flex;
  color: #000 !important;
  font-size: 22px;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
}

.sec-navbar .user-setting .icons {
  cursor: pointer;
  text-align: center;
  padding: 10px;
  margin: 5px;
  background-color: #00293c;
  color: #fff;
  width: 50xp;
  height: 40px;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 0.9;
}
.sec-navbar .user-setting .icons .cart {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  top: -10px;
  left: -10px;
  background-color: #f00 !important;
  z-index: 1000;
  border-radius: 50%;
  font-size: 13px;
  padding: 5px;
  line-height: 10px;
}

/*  search -form */
.sec-navbar .search {
  position: absolute;
  top: 23vh !important;
  z-index: 1000;
  margin-left: 70px;
  opacity: 1;
  transform: scaleY(1);
  transform-origin: top;
}

.sec-navbar .search input {
  color: #000 !important;
  padding: 10px 40px;
  box-shadow: rgba(61, 58, 58, 0.8) 0px 2px 8px 0px;
}

.sec-navbar .searchplaceholder-shown {
  color: #fff !important;
}

.sec-navbar .search button {
  background-color: #5e3eeb;
  border: 1px solid #5e3eeb;
  margin-right: 0;
}

.sec-navbar .search button .fa-search {
  font-size: 22px !important;
}

.sec-navbar .dropdown-menu a {
  color: #000;
  font-weight: 300;
  text-transform: capitalize;
}

.sec-navbar .dropdown-menu a:hover {
  background-color: var(--bg-color-red);
  color: #fff !important;
}

/* ------------------- Profile form--------------------*/

.sec-navbar .profile_form {
  position: absolute;
  z-index: 1000;
  right: 1%;
  transform: scaleY(1);
  width: 150px;
  height: 80px;
  background-color: #fff;
  color: #000 !important;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.sec-navbar .profile_form ul {
  padding: 0 !important;
  margin: 0;
  width: 100%;
}

.sec-navbar .profile_form li {
  margin-bottom: 8px;
  width: 100%;
  padding: 3px;
  overflow: hidden;
}

.sec-navbar .profile_form a {
  color: #000 !important;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  margin-left: 10px;
}

.sec-navbar .profile_form i {
  color: #000 !important;
  font-size: 18px;
  margin-right: 15px;
}

.sec-navbar .profile_form li:hover a,
.sec-navbar .profile_form li:hover i,
.sec-navbar .profile_form li:hover {
  background-color: #f00;
  color: #fff !important;
}

@media (max-width: 991px) {
  .sec-navbar .logo {
    text-align: center;
  }
  .sec-navbar .user-setting {
    margin-top: 0;
    height: fit-content;
  }
  .sec-navbar .collapse {
    background-color: #fff !important;
    z-index: 1000 !important;
    transition: none !important;
  }
  .sec-navbar .navbar-toggler {
    background-color: #000;
    color: #fff !important;
    font-size: 25px !important;
    border: none !important;
  }
  .sec-navbar .collapse .navbar-expand-lg {
    z-index: 1000 !important;
    transition: none !important;
  }
  .sec-navbar .collapse a {
    color: var(--bg-black) !important;
    z-index: 100;
  }
  .sec-navbar .collapse a:hover {
    color: #f00 !important;
    z-index: 100;
    background-color: var(--bg-color-red);
  }
  .sec-navbar .search {
    position: absolute;
    top: 20vh;
    margin-left: 20px;
  }
}
</style>