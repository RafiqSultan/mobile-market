<template>
  <!-- Start Navbar Section --------------------------------------------------------  -->
  <section class="sec-navbar" id="navbar">
    <div class="container">
      <div class="row">
        <div class="logo col-lg-2 col-md-12 col-sm-12 col-12">
          <a class="navbar-brand" href="#"
            ><span>RS</span>Movies <i class="bi bi-star-fill"></i
          ></a>
        </div>
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
                  <i class="bi bi-list"></i>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarNavDropdown-main"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="index.html"
                      >
                        Home</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Products</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">my order</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About US</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="user-setting">
                <div class="icons search-icon" id="search-btn">
                  <i
                    class="bi bi-search"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Search"
                  ></i>
                </div>
                <div class="icons notification-icon" id="notification-btn">
                  <i
                    class="bi bi-bell"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="notification"
                  ></i>
                </div>
                <div class="icons setting-icon">
                  <i
                    class="bi bi-gear"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Setting"
                  ></i>
                </div>
                <div class="icons" id="profile-form-btn">
                  <i
                    class="bi bi-person"
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
      <div class="row">
        <!-- Search-form  -->
        <div class="search col-lg-8 col-md-8 col-sm-8 col-10" id="search">
          <div class="input-group">
            <input
              type="text"
              class="form-control border-0 small"
              placeholder="Search for..."
            />
            <button class="btn btn-primary" type="button">
              <i class="bi bi-search fa-sm"></i>
            </button>
          </div>
        </div>
        <!-- notifaction-form  -->
        <div class="notification">
          <div class="notif-card">
            <div class="notif-img">
              <img src="img/notification/01.jpg" alt="not-01" />
            </div>
            <div class="notif-time">
              <h5>iron door</h5>
              <p><i class="bi bi-clock"></i> 1 min ago</p>
            </div>
          </div>
          <div class="notif-card">
            <div class="notif-img">
              <img src="img/notification/02.jpg" alt="not-02" />
            </div>
            <div class="notif-time">
              <h5>iron door</h5>
              <p><i class="bi bi-clock"></i> 3 min ago</p>
            </div>
          </div>
          <div class="notif-card">
            <div class="notif-img">
              <img src="img/notification/03.jpg" alt="not-03" />
            </div>
            <div class="notif-time">
              <h5>iron door</h5>
              <p><i class="bi bi-clock"></i> 10 min ago</p>
            </div>
          </div>
          <button>show all</button>
        </div>
        <!-- profile-form  -->
        <div class="profile-form">
          <ul class="p-2 m-0">
            <li>
              <a href="#"><i class="bi bi-person"></i> Profile</a>
            </li>
            <li>
              <a href="#"><i class="bi bi-credit-card"></i>pricing plane</a>
            </li>
            <li>
              <a href="#"><i class="bi bi-box-arrow-right"></i>logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Navbar Section Start *********************************************************** */

.sec-navbar {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #252f37;
}

/* .sec-navbar .nav-item a {
  color: var(--bg-color-text);
} */

.sec-navbar .nav-item a:hover {
  color: var(--bg-color-red) !important;
}

.sec-navbar .nav-item span {
  padding: 0 8px;
  opacity: 0.3;
}

.sec-navbar .user-setting {
  background-color: #000;
  display: inline-flex;
  color: var(--bg-color-text) !important;
  font-size: 18px;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
}

.sec-navbar .user-setting .icons {
  cursor: pointer;
  text-align: center;
  margin: 5px;
}

.sec-navbar .user-setting .icons i:hover:not(.bi-person) {
  color: var(--bg-color-red) !important;
}

.sec-navbar .user-setting .icons:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: var(--bg-color-red);
  color: var(--bg-color-text) !important;
  /* text-align: center; */
  border-radius: 50%;
}

/*  search -form */

.sec-navbar .search {
  position: absolute;
  top: 15vh;
  z-index: 100;
  margin-left: 70px;
  opacity: 1;
  transform: scaleY(0);
  transform-origin: top;
}

.sec-navbar .search.active {
  transform: scaleY(1);
  opacity: 1;
  z-index: 1000;
}

.sec-navbar .search input {
  color: #000 !important;
  padding: 10px 40px;
  box-shadow: rgba(231, 28, 28, 0.8) 0px 2px 8px 0px;
}

.sec-navbar .searchplaceholder-shown {
  color: #fff !important;
}

.sec-navbar .search button {
  background-color: var(--bg-color-red);
  border: 1px solid var(--bg-color-red);
  margin-right: 0;
}

.sec-navbar .search button i {
  color: var(--bg-color-red) !;
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

/*  notifcation -form */

.sec-navbar .notification-icon {
  position: relative;
  padding: 10px;
}

.sec-navbar .notification-icon::after {
  content: "3";
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  right: 0;
  background-color: var(--bg-color-red);
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
}

.sec-navbar .notification {
  position: absolute;
  width: 200px;
  z-index: 100;
  right: 13%;
  opacity: 1;
  background-color: var(--bg-color-text);
  padding: 5px;
  transform: scaleY(0);
}

.sec-navbar .notification.active {
  transform: scaleY(1);
}

.sec-navbar .notification .notif-card {
  border-bottom: 1px solid var(--bg-black);
  width: 100%;
  height: 5%;
  color: var(--bg-black) !important;
  display: flex;
  justify-content: space-around;
  padding: 5px;
}

.sec-navbar .notification .notif-card .notif-time h5 {
  color: var(--bg-black) !important;
  font-weight: 700;
}

.sec-navbar .notification .notif-card .notif-time p {
  color: var(--bg-black) !important;
  font-size: 16px;
  text-transform: none;
}

.sec-navbar .notification .notif-card .notif-time i {
  color: var(--bg-black) !important;
  font-size: 16px;
  margin-right: 4px;
}

.sec-navbar .notification button {
  width: 100%;
  height: 100%;
  background-color: var(--bg-black);
  text-transform: capitalize;
  color: #fff;
}

.sec-navbar .notification button:hover {
  background-color: var(--bg-color-red);
  color: #fff;
  border: 1px solid var(--bg-color-red) !important;
}

/* Profile form*/

.sec-navbar .profile-form {
  position: absolute;
  z-index: 100;
  right: 5%;
  opacity: 1;
  transform: scaleY(0);
  width: 170px;
  height: 125px;
  background-color: var(--bg-color-text);
  color: #000 !important;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.sec-navbar .profile-form.active {
  transform: scaleY(1);
}

.sec-navbar .profile-form ul {
  padding: 0 !important;
  margin: 0;
  width: 100%;
}

.sec-navbar .profile-form li {
  margin-bottom: 8px;
  width: 100%;
  padding: 3px;
  overflow: hidden;
}

.sec-navbar .profile-form a {
  color: #000 !important;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  margin-left: 10px;
}

.sec-navbar .profile-form i {
  color: #000 !important;
  font-size: 18px;
  margin-right: 10px;
}

.sec-navbar .profile-form li:hover a,
.sec-navbar .profile-form li:hover i,
.sec-navbar .profile-form li:hover {
  background-color: var(--bg-color-red);
  color: #fff !important;
}

/* ********Sitting -icon********** */

.sec-navbar .setting-icon:hover {
  font-size: 20px;
  transform: rotate(360deg);
  transition: 3s;
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
    background-color: var(--bg-color-text);
    z-index: 1000 !important;
    transition: none !important;
  }
  .sec-navbar .navbar-toggler {
    background-color: var(--bg-color-red);
    color: #fff !important;
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
    color: #fff !important;
    z-index: 100;
    background-color: var(--bg-color-red);
  }
  .sec-navbar .search {
    position: absolute;
    top: 20vh;
    margin-left: 20px;
  }
  /* .sec-navbar .search input {
                padding: 10px 20px;
            } */
}
</style>