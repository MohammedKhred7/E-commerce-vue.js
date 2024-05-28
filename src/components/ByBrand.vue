<template>
    <div class="byBrand">
        <div class="container">
            <h3 class="head3">Choose By Brand</h3>
            <div class="brands">

                <div class="brand" data-aos="fade-up">
                    <div class="brand_img">
                        <img src="../assets/brand/brand1.png" alt="">
                    </div>
                    <div class="brand_desc">
                        <h5>Staples</h5>
                        <p>Delivery with in 24 hours</p>
                    </div>
                </div>
                <div class="brand" data-aos="fade-up">
                    <div class="brand_img">
                        <img src="../assets/brand/brand2.png" alt="">
                    </div>
                    <div class="brand_desc">
                        <h5>Sprouts</h5>
                        <p>Delivery with in 24 hours</p>
                    </div>
                </div>
                <div class="brand" data-aos="fade-up">
                    <div class="brand_img">
                        <img src="../assets/brand/brand3.png" alt="">
                    </div>
                    <div class="brand_desc">
                        <h5>Grocery outlet</h5>
                        <p>Delivery with in 24 hours</p>
                    </div>
                </div>
                <div class="brand" data-aos="fade-up">
                    <div class="brand_img">
                        <img src="../assets/brand/brand4.png" alt="">
                    </div>
                    <div class="brand_desc">
                        <h5>Mollie stones</h5>
                        <p>Delivery with in 24 hours</p>
                    </div>
                </div>
                <div class="brand" data-aos="fade-up">
                    <div class="brand_img">
                        <img src="../assets/brand/brand5.png" alt="">
                    </div>
                    <div class="brand_desc">
                        <h5>Sports Basement</h5>
                        <p>Delivery with in 24 hours</p>
                    </div>
                </div>
                <div class="brand" data-aos="fade-up">
                    <div class="brand_img">
                        <img src="../assets/brand/brand6.png" alt="">
                    </div>
                    <div class="brand_desc">
                        <h5>Container Store</h5>
                        <p>Delivery with in 24 hours</p>
                    </div>
                </div>
                <div class="brand" data-aos="fade-up">
                    <div class="brand_img">
                        <img src="../assets/brand/brand7.png" alt="">
                    </div>
                    <div class="brand_desc">
                        <h5>Target</h5>
                        <p>Delivery with in 24 hours</p>
                    </div>
                </div>
                <div class="brand" data-aos="fade-up">
                    <div class="brand_img">
                        <img src="../assets/brand/brand8.png" alt="">
                    </div>
                    <div class="brand_desc">
                        <h5>Bevmo!</h5>
                        <p>Delivery with in 24 hours</p>
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
.byBrand {
    padding-top: 80px;

    .brands {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
        margin-top: 50px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-row-gap: 10px;
        }

        @media (max-width: 991px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 479px) {
            grid-template-columns: 1fr;
        }

        .brand {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            padding: 20px;
            background-color: #f5f6f6;
            border-radius: 8px;
            border: 1px solid transparent;
            transition: all 0.2s ease;
            cursor: pointer;

            &:hover {
                border: 1px solid #808583;
            }

            .brand_img {
                margin-right: 18px;
                transition: all 0.2s ease;

                &:hover {
                    transform: scale(1.2);
                }
            }

            .brand_desc {
                font-size: 13px;
                font-weight: 600;
                color: #333;

                h5 {
                    color: #231f1e;
                }

                p {
                    margin: 0;
                }
            }
        }
    }
}
</style>