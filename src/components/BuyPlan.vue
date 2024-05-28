<template>
    <div class="BuyPlan">
        <div class="container">
            <h3 class="head3">Get Up To 70% Off</h3>
            <div class="plans">
                <div class="plan plan1" data-aos="fade-up">
                    <div class="plan_desc">
                        <p class="save">Save</p>
                        <h2 class="price">$100</h2>
                        <p class="desc">Explore Our Furniture & Home Furnishing Range</p>
                    </div>
                    <div class="plan_img">
                        <img src="../assets/plans/plan1.png" alt="">
                    </div>
                </div>
                <div class="plan plan2" data-aos="fade-up">
                    <div class="plan_desc">
                        <p class="save">Save</p>
                        <h2 class="price">$29</h2>
                        <p class="desc">Explore Our Furniture & Home Furnishing Range</p>
                    </div>
                    <div class="plan_img">
                        <img src="../assets/plans/plan2.png" alt="">
                    </div>
                </div>
                <div class="plan plan3" data-aos="fade-up">
                    <div class="plan_desc">
                        <p class="save">Save</p>
                        <h2 class="price">$67</h2>
                        <p class="desc">Explore Our Furniture & Home Furnishing Range</p>
                    </div>
                    <div class="plan_img">
                        <img src="../assets/plans/plan3.png" alt="">
                    </div>
                </div>
                <div class="plan plan4" data-aos="fade-up">
                    <div class="plan_desc">
                        <p class="save">Save</p>
                        <h2 class="price">$59</h2>
                        <p class="desc">Explore Our Furniture & Home Furnishing Range</p>
                    </div>
                    <div class="plan_img">
                        <img src="../assets/plans/plan4.png" alt="">
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
.BuyPlan {
    padding-top: 80px;
    padding-bottom: 80px;

    h3 {
        margin-bottom: 50px;
    }

    .plans {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;

        @media (max-width: 991px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 479px) {
            grid-template-columns: 1fr;
        }

        .plan {
            border-radius: 8px;
            overflow: hidden;

            &.plan1 {
                background-color: #f2e4d9;
            }

            &.plan2 {
                background-color: #f9dcdc;
            }

            &.plan3 {
                background-color: #f2e4d9;
            }

            &.plan4 {
                background-color: #d2f7ec;
            }

            &:hover {
                .plan_img {
                    img {
                        transform: scale(1.1);
                    }
                }
            }

            .plan_desc {
                padding: 30px;
                color: #333;

                .save {
                    font-size: 22px;
                    font-weight: 700;
                }

                .price {
                    font-size: 50px;
                    font-weight: 700;
                    color: #3d1201;
                }

                .desc {
                    color: #231f1e;
                    font-size: 16px;
                    font-weight: 500;
                    margin-top: 20px;
                    margin-bottom: 0;
                }
            }

            .plan_img {
                height: 100%;
                overflow: hidden;

                img {
                    transition: all 0.3s ease;
                    width: 100%;
                }
            }
        }
    }
}
</style>