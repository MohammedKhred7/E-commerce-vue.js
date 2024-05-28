<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="background_img">
        <div class="full container">
            <div class="left_content">
                <h1>Shopping And
                    Department Store.
                </h1>
                <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                <button class="learn_more">Learn more</button>
            </div>

            <div class="right_content container">
                <div class="stage">
                    <img src="../assets/stage.webp" alt="">
                </div>
                <div class="img_wrap">

                    <div class="other" data-aos="fade-left" data-aos-duration="1000">
                        <img src="../assets/other.webp" alt="">
                    </div>
                    <div class="tour" data-aos="fade-left" data-aos-duration="1000">
                        <img src="../assets/tour.webp" alt="">
                    </div>
                    <div class="electronic" data-aos="fade-left" data-aos-duration="1000">
                        <img src="../assets/electronic.webp" alt="">
                    </div>
                    <div class="snaks" data-aos="fade-left" data-aos-duration="1000">
                        <img src="../assets/snaks.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TopCategories></TopCategories>
    <BestDeals></BestDeals>
    <ByBrand></ByBrand>
    <BuyPlan></BuyPlan>

    <div class="discount_container">
        <div class="discount_banner">
            <div class="discount_banner_content">
                <h2>Get 5% Cash Back On $200</h2>
                <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                <button class="learn_more">Learn more</button>
            </div>
        </div>
    </div>

    <BestStores></BestStores>



    <ServicesQA></ServicesQA>
    <AppFooter></AppFooter>
</template>
<script setup>
//import components
import TopCategories from '../components/TopCategories.vue';
import BestDeals from '../components/BestDeals.vue';
import ByBrand from '../components/ByBrand.vue';
import BuyPlan from '../components/BuyPlan.vue';
import BestStores from '../components/BestStores.vue';
import ServicesQA from '../components/ServicesQA.vue';
import AppFooter from '../components/AppFooter.vue';

import { onMounted } from "vue"
// import AOS
import AOS from 'aos'
onMounted(() => {
    AOS.init()
})
</script>
<style lang="scss" scoped>
.learn_more {
    font-size: 18px;
    font-weight: 500;
    padding: 15px 30px;
    border-radius: 30px;
    background: #18578f;
    color: #fff;
    margin-top: 40px;
}

.background_img {
    position: relative;
    background-image: url("../assets/background.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    padding-top: 150px;
    padding-bottom: 150px;

    @media (max-width: 768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .full {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .left_content {
            z-index: 2;

            h1 {
                color: #164e7e;
                font-weight: bold;
                font-size: 60px;
                margin-bottom: 40px;

                @media (max-width: 768px) {
                    font-size: 30px;
                }
            }

            p {
                font-size: 20px;
                font-weight: 500;
            }

            button {
                border: none;
                background: #18578f;
                color: #fff;
                font-weight: 600;

                @media (max-width: 768px) {
                    margin-top: 0;
                }
            }
        }

        .right_content {
            z-index: 1;

            @media (max-width: 991px) {
                display: none;
            }

            .stage {

                img {
                    position: absolute;
                    top: 0;
                    right: 0;
                }
            }

            .img_wrap {

                .other {
                    position: absolute;
                    top: 80px;
                    right: 120px;
                }

                .snaks {
                    position: absolute;
                    top: 245px;
                    right: 375px;
                }

                .tour {
                    position: absolute;
                    top: 275px;
                    right: 590px;
                }

                .electronic {
                    position: absolute;
                    top: 310px;
                    right: 175px;
                }
            }
        }
    }

}

.discount_container {
    position: relative;

    .discount_banner {
        width: 100%;
        height: 100%;
        padding: 60px 0;
        background-image: url("../assets/discount\ banner.png");
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: -1;

        @media (max-width: 768px) {
            justify-content: center;
        }


        .discount_banner_content {
            width: 500px;
            height: 500px;
            padding: 60px;
            background-image: linear-gradient(#92cc99, #59936f , #f1efec);
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin: 40px;

            @media (max-width: 768px) {
                width: auto;
                height: auto;
                padding: 20px;
                margin: 20px;

            }

            h2 {
                font-size: 3rem;
                font-weight: 700;
                color: #f8ad2e;

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                }
            }

            p {
                font-size: 1.3rem;

                @media (max-width: 768px) {
                    font-size: 1rem;
                }
            }

            button {
                border: 1px solid #9dc5bb;
                background: #e98127;
            }
        }
    }
}

.visa_card {
    display: flex;
    justify-content: space-around;
    background-color: #ffe6cc;
    padding: 70px;

    @media (max-width: 768px) {
        padding: 35px 40px;
        justify-content: flex-start;
    }

    .content {

        h2 {
            font-size: 50px;
            font-weight: 700;
            color: #333;
            margin-bottom: 20px;

            @media (max-width: 768px) {
                font-size: 25px;
            }
        }

        p {
            font-size: 20px;
            font-weight: 500;
            color: #333;

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }

        button {
            margin-top: 10px;
            border: none;

            @media (max-width: 768px) {
                font-size: 14px;
                padding: 10px 20px;
            }
        }
    }

    .card_imgs {
        position: relative;
        width: 300px;
        height: 166px;

        @media (max-width: 768px) {
            display: none;
        }

        &:hover {
            img {
                &:nth-child(1) {
                    transform: rotate(-40deg);
                }

                &:nth-child(2) {
                    transform: rotate(-25deg);
                }

                &:nth-child(3) {
                    transform: rotate(-10deg);
                }
            }
        }

        img {
            position: absolute;
            transition: all 0.3s ease;

            &:nth-child(1) {
                position: absolute;
                transform: rotate(-30deg);
                z-index: 3;

            }

            &:nth-child(2) {
                transform: rotate(-22deg);
                z-index: 2;
                bottom: -16px;
                left: 11px;

            }

            &:nth-child(3) {
                z-index: 1;
                transform: rotate(-15deg);
                bottom: -36px;
                left: 17px;

            }

        }
    }
}
</style>