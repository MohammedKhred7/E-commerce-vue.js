<template>
    <div class="best_stores container">
        <h3 class="head3">Best Selling Store</h3>
        <div class="grid_store">
            <div class="store Staples" data-aos="fade-up">
                <div class="store_img">
                    <img class="items" src="../assets/store1.png" alt="">
                </div>
                <div class="store_content">
                    <img class="brand_img" src="../assets/brand/brand1.png" alt="">
                    <div class="content">
                        <p class="brand">Staples</p>
                        <ul>
                            <li>Bag</li>
                            <li>Perfume</li>
                        </ul>
                        <div class="time"><i class="bi bi-calendar-check-fill"></i>Delivery with in 24 hours</div>
                    </div>
                </div>
            </div>
            <div class="store Delivery" data-aos="fade-up">
                <div class="store_img">
                    <img class="items" src="../assets/store2.png" alt="">
                </div>
                <div class="store_content">
                    <img class="brand_img" src="../assets/brand/brand2.png" alt="">
                    <div class="content">
                        <p class="brand">Now Delivery</p>
                        <ul>
                            <li>Bag</li>
                            <li>Perfume</li>
                        </ul>
                        <div class="time"><i class="bi bi-calendar-check-fill"></i>Delivery with in 24 hours</div>
                    </div>
                </div>
            </div>
            <div class="store Bevmo" data-aos="fade-up">
                <div class="store_img">
                    <img class="items" src="../assets/store3.png" alt="">
                </div>
                <div class="store_content">
                    <img class="brand_img" src="../assets/brand/brand3.png" alt="">
                    <div class="content">
                        <p class="brand">Bevmo</p>
                        <ul>
                            <li>Bag</li>
                            <li>Perfume</li>
                        </ul>
                        <div class="time"><i class="bi bi-calendar-check-fill"></i>Delivery with in 24 hours</div>
                    </div>
                </div>
            </div>
            <div class="store Quicklly" data-aos="fade-up">
                <div class="store_img">
                    <img class="items" src="../assets/store4.png" alt="">
                </div>
                <div class="store_content">
                    <img class="brand_img" src="../assets/brand/brand4.png" alt="">
                    <div class="content">
                        <p class="brand">Quicklly</p>
                        <ul>
                            <li>Bag</li>
                            <li>Perfume</li>
                        </ul>
                        <div class="time"><i class="bi bi-calendar-check-fill"></i>Delivery with in 24 hours</div>
                    </div>
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
.best_stores {
    margin-top: 80px;
    margin-bottom: 80px;

    h3 {
        margin-bottom: 50px;
    }

    .grid_store {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-row-gap: 10px;
        }

        @media (max-width: 991px) {
            grid-template-columns: 1fr 1fr;
        }

        .store {
            @media (max-width: 1200px) {
                margin-bottom: 20px;
            }

            .store_img {
                position: relative;
                overflow: hidden;
                border-radius: 15px;

                .items {
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
                    transition: all 0.3s ease;

                    &:hover {
                        transform: scale(1.2);
                    }

                }
            }

            .store_content {
                position: relative;
                margin-top: 40px;

                .brand_img {
                    position: absolute;
                    top: -65px;
                    left: 15px;
                    width: 60px;
                    border-radius: 50%;
                    border: 2px solid #eee;
                }

                .content {
                    margin-left: 15px;

                    .brand {
                        font-size: 18px;
                        font-weight: 700;
                        color: #333;
                        margin: 0;

                        @media (max-width: 991px) {
                            font-size: 16px;
                        }
                    }

                    ul {
                        display: flex;
                        list-style: none;
                        padding: 0;
                        margin: 0;

                        li {
                            font-size: 12px;
                            font-weight: 700;
                            color: #848181;
                            margin-right: 10px;
                        }
                    }

                    .time {
                        font-size: 12px;
                        color: #777673;
                        margin-top: 10px;

                        @media (max-width: 991px) {
                            font-size: 10px;
                        }

                        i {
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>