<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="appNavbar">
    <div class="padding_container" id="navbar">
      <nav class="navbar navbar-expand-md">
        <div class="container">
          <RouterLink to="/" class="logo navbar-brand">
            <img src="../assets/logo_market.png" alt="" style="width:60px;"  />
          </RouterLink>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navigation">
              <li class="nav-item">
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop By Category
                  </button>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <h5>Popular Category</h5>
                    <div class="grid_container">
                      <ul>
                        <li class="itemes">
                          <RouterLink to="/ShopByCategory/electronics" class="dropdown-item">
                            <div
                              v-if="mobile"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent"
                            >
                              <img src="../assets/furniture.webp" alt="" />
                              <div class="wrapper">
                                <p>Electronics</p>
                                <p>240 Item Available</p>
                              </div>
                            </div>
                            <div v-else>
                              <img src="../assets/furniture.webp" alt="" />
                              <div class="wrapper">
                                <p>Electronics</p>
                                <p>240 Item Available</p>
                              </div>
                            </div>
                          </RouterLink>
                        </li>

                        <li class="itemes">
                          <RouterLink to="/ShopByCategory/jewelery" class="dropdown-item">
                            <div
                              v-if="mobile"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent"
                            >
                              <img src="../assets/handBag.webp" alt="" />
                              <div class="wrapper">
                                <p>Jewelery</p>
                                <p>240 Item Available</p>
                              </div>
                            </div>
                            <div v-else>
                              <img src="../assets/handBag.webp" alt="" />
                              <div class="wrapper">
                                <p>Jewelery</p>
                                <p>240 Item Available</p>
                              </div>
                            </div>
                          </RouterLink>
                        </li>
                      </ul>
                      <ul>
                        <li class="itemes">
                          <RouterLink to="/ShopByCategory/men's clothing" class="dropdown-item">
                            <div
                              v-if="mobile"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent"
                            >
                              <img src="../assets/shoe.webp" alt="" />
                              <div class="wrapper">
                                <p>Men's Clothing</p>
                                <p>240 Item Available</p>
                              </div>
                            </div>
                            <div v-else>
                              <img src="../assets/shoe.webp" alt="" />
                              <div class="wrapper">
                                <p>Men's Clothing</p>
                                <p>240 Item Available</p>
                              </div>
                            </div>
                          </RouterLink>
                        </li>

                        <li class="itemes">
                          <RouterLink to="/ShopByCategory/women's clothing" class="dropdown-item">
                            <div
                              v-if="mobile"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent"
                            >
                              <img src="../assets/headphone.webp" alt="" />
                              <div class="wrapper">
                                <p>Women's Clothing</p>
                                <p>240 Item Available</p>
                              </div>
                            </div>
                            <div v-else>
                              <img src="../assets/headphone.webp" alt="" />
                              <div class="wrapper">
                                <p>Women's Clothing</p>
                                <p>240 Item Available</p>
                              </div>
                            </div>
                          </RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <RouterLink to="/" class="nav-item">
                <div
                  v-if="mobile"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  Home
                </div>
                <div v-else>Home</div>
              </RouterLink>

              

              <li class="nav-item">
                <form class="d-flex">
                  <div class="search_field">
                    <input style="background: #f5f5f5;"
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <i class="bi bi-search"></i>
                  </div>
                </form>
              </li>

              <ul class="user_op navigation">
                <li @click="router.push(toAccount)" class="Account_icon nav-item">
                  <div
                    v-if="mobile"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                  >
                    <i class="bi bi-person"></i>
                    Account
                  </div>
                  <div v-else>
                    <i class="bi bi-person"></i>
                    Account
                  </div>
                </li>
                <li class="Cart_icon_to_miniCart nav-item" @click="openCart = true">
                  <span v-if="itemCount !== 0" class="itemS_inCart">{{ itemCount }}</span>
                  <i class="bi bi-cart-plus"></i>
                  Cart
                </li>
                <RouterLink to="/CartView" class="Cart_icon_to_cart nav-item">
                  <div
                    v-if="mobile"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                  >
                    <i class="bi bi-cart-plus"></i>
                    Cart
                  </div>
                  <div v-else>
                    <i class="bi bi-cart-plus"></i>
                    Cart
                  </div>
                </RouterLink>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <!--cart managment -->
    <div class="cart_content" :class="openCart == true ? 'open' : ''">
      <div class="close_cart">
        <i @click="openCart = false" class="bi bi-x"></i>
      </div>
      <div class="cart">
        <p>Subtotal</p>
        <p class="sum">${{ Subtotal.toFixed(2) }}</p>
        <RouterLink to="/CartView"> <button>Go to cart</button> </RouterLink>
        <hr />
        <div class="cart_wrapper">
          <div class="cart_items" id="cart">
            <div class="items" v-for="item in filterd" :key="item">
              <div v-if="item">
                <div class="item_image">
                  <img :src="item.image" alt="" />
                </div>
                <div class="price">${{ item.price }}</div>
                <div class="delete_qty">
                  <div class="quantity">
                    <span
                      @click="
                        item.qty > 1 ? (item.qty = parseFloat(item.qty) - 1) : (item.qty = item.qty)
                      "
                      class="quantity__minus"
                      ><span>-</span></span
                    >
                    <input
                      name="quantity"
                      type="text"
                      class="quantity__input"
                      v-model="item.qty"
                      min="1"
                    />
                    <span @click="item.qty = parseFloat(item.qty) + 1" class="quantity__plus"
                      ><span>+</span></span
                    >
                  </div>
                  <div class="delete">
                    <i
                      @click="
                        item.inCart = false;
                        item.qty = 0;
                      "
                      class="bi bi-trash"
                    ></i>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
//store
import { getDataProduct } from '../stores/counter'
import { storeToRefs } from 'pinia'
const getItems = getDataProduct()
const { filterd, Subtotal, itemCount } = storeToRefs(getItems)
//end store

// go to accountManagement.vue when user logged in and to LogInSignIn.vue if user not logged in
const router = useRouter()
const auth = getAuth()
let toAccount = ref('/LogInSignIn')
onAuthStateChanged(auth, (user) => {
  if (user) {
    toAccount.value = '/AccountManagment'
  } else {
    toAccount.value = '/LogInSignIn'
  }
})

const openCart = ref(false)

onMounted(() => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction()
  }
  // Get the navbar
  let navbar = document.getElementById('navbar')
  // Get the offset position of the navbar
  let sticky = navbar.offsetTop
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
  }
})

//solving navbar collapse problem
let mobile = ref(false)
onMounted(() => {
  window.addEventListener('resize', function () {
    window.matchMedia('(max-width: 991px)').matches ? (mobile.value = true) : (mobile.value = false)
  })
})
</script>
<style lang="scss" scoped>
.appNavbar {
  height: 70px;
  background-color: #383835;
  color: #fff;

  .padding_container {
    position: fixed;
    width: 100%;
    background-color: rgb(0, 0, 0);
    border-bottom: 1px solid #bbb;
    z-index: 100;

    &.sticky {
      top: 0;
      max-height: 100%;
      background-color: #000000 !important;
      border-bottom: 1px solid #eee;
      box-shadow: 0px -8px 11px 0px;
      padding: 0;
      overflow-y: auto;
      overflow-x: hidden;
      z-index: 10000;
    }

    nav {
      box-shadow: none;
      .navbar-toggler {
        border: none;
        &:focus {
          box-shadow: none;
        }
      }

      .navbar-collapse {
        justify-content: flex-end;
        background: #000000;
        border-radius: 20px;

        .navigation {
          display: flex;
          list-style: none;
          align-items: center;
          margin-bottom: 0;
          

          .user_op {
            display: flex;
            padding: 0;
          }

          .nav-item {
            padding: 10px;
            margin-right: 15px;
            text-decoration: none;
            color: #000;
            cursor: pointer;
            color: rgb(255, 255, 255);

            &:last-child {
              margin-right: 0;
            }

            .dropdown {
              button {
                border: none !important;
                box-shadow: none;
                text-transform: capitalize;
                font-size: 16px;
                color: #fff;

                &.btn.show,
                &:active {
                  border: none !important;
                }
              }

              .dropdown-menu {
                padding: 20px;

                @media (max-width: 1200px) {
                  padding: 0;
                  border: 0;
                }

                h5 {
                  position: relative;
                  font-size: 18px;
                  font-weight: bold;
                  padding: 15px 10px;
                  margin: 0;

                  &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-color: #000;
                  }
                }

                .grid_container {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  padding: 10px;

                  @media (max-width: 1200px) {
                    display: block;
                  }

                  ul {
                    list-style: none;
                    padding: 0;

                    &:first-of-type {
                      margin-right: 20px;
                    }

                    .itemes {
                      padding: 0px;
                      margin: 0;

                      a {
                        padding: 10px 20px;
                        display: flex;
                        align-items: flex-end;

                        .wrapper {
                          display: inline-flex;
                          flex-direction: column;
                          margin-left: 10px;

                          p {
                            margin: 0;

                            &:first-child {
                              font-weight: 600;
                              font-size: 16px;
                            }

                            &:last-child {
                              color: #666690;
                              font-size: 14px;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }

            .search_field {
              position: relative;
              

              .form-control {
                border-radius: 30px;
                min-width: 200px;

                @media (max-width: 768px) {
                  min-width: auto;
                }

                padding: 10px 20px;
              }

              i {
                position: absolute;
                padding: 10px;
                min-width: 40px;
                top: 0;
                right: 0;
              }
            }
          }

          .Account_icon {
            display: flex;
            align-items: center;

            i {
              font-size: 25px;
              padding: 5px 10px;
            }
          }

          .Cart_icon_to_cart {
            display: none;

            @media (max-width: 1200px) {
              display: flex;
              align-items: center;

              i {
                font-size: 25px;
                padding: 5px 10px;
              }
            }
          }

          .Cart_icon_to_miniCart {
            position: relative;
            display: none;

            @media (min-width: 1200px) {
              display: flex;
              align-items: center;

              i {
                font-size: 25px;
                padding: 5px 10px;
              }
            }

            .itemS_inCart {
              position: absolute;
              font-size: 14px;
              font-weight: 800;
              top: 12px;
              color: #000000;
              background: #cecb1d;
              width: 20px;
              display: flex;
              border-radius: 50%;
              left: 33px;
              height: 20px;
              justify-content: center;
            }
          }
        }
      }
    }
  }

  .cart_content {
    border-left: 1px solid #bbb;
    transform: translateX(100%);
    width: 150px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: #fff;
    transition: 0.8s ease-in-out;
    // z-index: 3;
  }

  @media (min-width: 1200px) {
    .cart_content {
      z-index: 100000;

      &.open {
        transform: translateX(0%);
      }

      .close_cart {
        i {
          padding: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      }

      .cart {
        text-align: center;
        font-size: 13px;

        p {
          margin-bottom: 0;
        }

        .sum {
          color: #b12704;
          font-size: 16px;
          font-weight: 700;
        }

        button {
          background: #fff;
          padding: 0px 20px;
          border-radius: 30px;
          border-color: #d5d9d9;
          border-style: solid;
          border-width: 1px;
          box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 0.5);
          cursor: pointer;
        }

        .cart_wrapper {
          .cart_items {
            width: 100%;
            height: calc(100vh - 127.7px);
            overflow: auto;
            overflow-x: hidden;

            .item_image {
              width: 100px;
              height: 100px;
              margin: auto;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .delete_qty {
              display: flex;
              justify-content: center;

              .quantity {
                justify-content: center;
              }

              .delete {
                i {
                  font-size: 16px;
                  padding: 0px 8px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
