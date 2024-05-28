<template>
    <div class="app_footer">
        <div class="container">
            <hr>
            <div class="grid_container">
                <div class="part logo_Payments" data-aos="fade-up">
                    <div class="logo">
                        <img src="../assets/logo_market.png" alt="" style="width:60px;"  />
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis
                        enim velit mollit.
                    </p>
                    <div class="Payments">
                        <h5>Accepted Payments</h5>
                        <div class="cards">

                            <div class="Payments_img"> <img src="../assets/Payments/Payments1.png" alt=""></div>
                            <div class="Payments_img"> <img src="../assets/Payments/Payments2.png" alt=""></div>
                            <div class="Payments_img"> <img src="../assets/Payments/Payments3.png" alt=""></div>
                            <div class="Payments_img"> <img src="../assets/Payments/Payments4.png" alt=""></div>
                            <div class="Payments_img"> <img src="../assets/Payments/Payments5.png" alt=""></div>
                            <div class="Payments_img"> <img src="../assets/Payments/Payments6.png" alt=""></div>
                            <div class="Payments_img"> <img src="../assets/Payments/Payments7.png" alt=""></div>
                            <div class="Payments_img"> <img src="../assets/Payments/Payments8.png" alt=""></div>

                        </div>
                    </div>

                </div>
                <div class="part Department" data-aos="fade-up">
                    <h5>Department</h5>
                    <ul>
                        <li>Fashion</li>
                        <li>Education Product</li>
                        <li>Frozen Food</li>
                        <li>Beverages</li>
                        <li>Organic Grocery</li>
                        <li>Office Supplies</li>
                        <li>Beauty Products</li>
                        <li>Books</li>
                        <li>Electronics & Gadget</li>
                        <li>Travel Accessories</li>
                        <li>Fitness</li>
                        <li>Sneakers</li>
                        <li>Toys</li>
                        <li>Furniture</li>
                    </ul>
                </div>
                <div class="part About" data-aos="fade-up">
                    <h5>About Us</h5>
                    <ul>
                        <li>About Shopcart</li>
                        <li>Careers</li>
                        <li>News & Blog</li>
                        <li>Help</li>
                        <li>Press Center</li>
                        <li>Shop By Location</li>
                        <li>Shopcart Brands</li>
                        <li>Affiliate & Partners</li>
                        <li>Ideas & Guides</li>
                    </ul>
                </div>
                <div class="part Services" data-aos="fade-up">
                    <h5>Services</h5>
                    <ul>
                        <li>Gift Card</li>
                        <li>Mobile App</li>
                        <li>Shipping & Delivery</li>
                        <li>Order Pickup</li>
                        <li>Account Signup</li>
                    </ul>
                </div>
                <div class="part Help" data-aos="fade-up">
                    <h5>Help</h5>
                    <ul>
                        <li>Shopcart Help</li>
                        <li>Returns</li>
                        <li>Track Orders</li>
                        <li>Contact Us</li>
                        <li>Feedback</li>
                        <li>Security & Fraud</li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="copyright">
                <div class="copyright_section">
                    <i class="bi bi-envelope-heart-fill"></i>
                    <p>Thanks to fakestoreapi for providing free fake api</p>
                </div>
                <div class="copyright_section">
                    <i class="bi bi-bookmark-heart-fill"></i>
                    <p>The design is Inspired by Mohammed salem khred</p>
                </div>
                <div class="copyright_section">
                    <i class="bi bi-heart-pulse-fill"></i>
                    <p>All Rights are Reserved to <span style="color: rgb(26, 179, 26);">Ahqaff University</span> @ 2023</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from "vue"
// import AOS
import AOS from 'aos'
onMounted(() => {
    AOS.init()
})
</script>
<style lang="scss" scoped>
.app_footer {
    background: #000;
    .container {

        padding: 0 40px;
        margin: auto;
        width: 100%;
        max-width: 1360px;

        @media (max-width: 768px) {
            padding: 0 20px;
        }

        .grid_container {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            column-gap: 50px;

            @media (max-width: 991px) {
                grid-template-columns: 1fr 1fr 1fr;
                column-gap: 20px;
            }

            @media (max-width: 479px) {
                grid-template-columns: 1fr 1fr;
            }

            .part {
                &.logo_Payments {
                    .logo {
                        margin: 40px 0px;
                    }

                    p {
                        color: #e9e4e4;
                        font-size: 14px;
                        margin-bottom: 40px;
                    }
                }

                h5 {
                    color: #747070;
                    font-weight: 700;
                    margin: 40px 0px;
                }

                ul {
                    list-style: none;
                    padding: 0;

                    li {
                        color: #ffffff;
                        font-size: 14px;
                        font-weight: 500;
                        padding: 3px;
                        cursor: pointer;
                        transition: all 0.3s ease;

                        &:hover {
                            transform: translateX(10px);
                            color: #ffc700;
                        }
                    }
                }

                &.logo_Payments {
                    @media (max-width: 991px) {
                        grid-column-start: 1;
                        grid-column-end: 3;
                    }

                    .Payments {
                        .cards {
                            display: grid;
                            grid-template-columns: 58px 58px 58px 58px;
                            row-gap: 20px;
                            column-gap: 10px;


                            .Payments_img {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding: 7px;
                                border: 1px solid #d9d9d9;
                                border-radius: 4px;
                            }
                        }
                    }
                }
            }
        }
    }

    .copyright {
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        .copyright_section {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px 0 36px;

            @media (max-width: 768px) {
                margin: 10px 0px;
            }

            @media (max-width: 479px) {
                justify-content: flex-start;
            }

            i {
                color: #ffc700;
                font-size: 25px;
                margin: 0 10px;
            }

            p {
                font-size: 14px;
                font-weight: 500;
                margin: 0;
                color: #fff;
            }
        }
    }
}
</style>