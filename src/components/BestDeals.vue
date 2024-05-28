<template>
    <div class="deals">
        <div class="container">
            <h3 class="head3">Todays Best Deals For You!</h3>
            <swiper data-aos="fade-up" class="swiper" :pagination="{
                type: 'progressbar'
            }" :modules="modules" :breakpoints="breakpoints.swiperOptions.breakpoints" :space-between="50"
                @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide class="item" v-for="item in listItems" :key="item.id">
                    <div class="heart" @click="item.like = !item.like">
                        <i v-if="!item.like" class="bi bi-heart"></i>
                        <i v-if="item.like" class="bi bi-heart-fill"></i>
                    </div>
                    <div class="carousel__item deals_items">
                        <div>
                            <RouterLink :to="{
                                path: '/ItemView',
                                name: 'ItemView',
                                component: ItemView,
                                params: { id: item.id }
                            }" :item="item">
                                <div class="item_img">
                                    <img :src="item.image" alt="">
                                </div>
                            </RouterLink>
                            <div class="item_text">
                                <div class="item_description">
                                    <h5 class="title"> {{ item.title }} </h5>
                                    <p class="description"> {{ item.description }}</p>
                                    <div class="starts">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        (120)
                                    </div>
                                    <button v-text="item.inCart ? 'Added to cart' : 'Add to cart'"
                                        @click="item.inCart = true; item.qty = 1" class="addToCart"
                                        :class="item.inCart ? 'Added' : ''"></button>
                                </div>
                                <div class="item_price">
                                    ${{ item.price }}
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { defineComponent } from 'vue'

// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';
const modules = [Pagination];
// end Import Swiper styles

// store
import { getDataProduct } from "../stores/counter";
import { storeToRefs } from "pinia";

const getItems = getDataProduct();
const { listItems } = storeToRefs(getItems);
// end store

// import AOS
import AOS from 'aos'
onMounted(() => {
    AOS.init()
})

// swiper configuration
defineComponent({
    name: 'BreakPoints',
    components: {
        SwiperSlide,
        Swiper,
    },
})

const breakpoints = ref({
    swiperOptions: {
        breakpoints: {
            // 700px and up
            700: {
                slidesPerView: 2,
            },
            // 1024 and up
            1024: {
                slidesPerView: 3,
            },
        }
    }
})
// end swiper configuration

</script>
<style lang="scss" scoped>
.deals {
    padding-top: 80px;

    .head3 {
        margin-bottom: 50px;
    }

    .item {
        .heart {
            position: absolute;
            top: 25px;
            right: 25px;
            font-size: 20px;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            background: #f5f6f6;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .bi-heart-fill {
                color: red;
            }

            .bi-heart {
                color: #4f4f4f;
            }
        }

        .deals_items {
            display: flex;
            list-style: none;
            justify-content: center;
            margin-top: 50px;

            .item_img {
                width: 250px;
                height: 250px;
                margin: auto;

                img {
                    width: 100%;
                    height: 100%;
                }

            }

            .item_text {
                display: flex;

                .item_description {

                    .title,
                    .description {
                        text-overflow: ellipsis;
                        /* will make [...] at the end */
                        white-space: nowrap;
                        /* paragraph to one line */
                        overflow: hidden;
                        /* older browsers */
                    }

                    .title {
                        width: 150px;
                    }

                    .description {
                        width: 200px;
                        font-size: 13px;
                    }

                    .starts {
                        font-size: 14px;
                        text-align: left;
                        color: silver;
                    }

                    .addToCart {
                        display: block;
                        font-weight: 600;
                        background-color: transparent;
                        border: 1px solid #000;
                        border-radius: 30px;
                        padding: 8px 16px;
                        margin-top: 20px;
                        transition: all 0.3s ease-in-out;

                        &:hover {
                            background-color: silver;
                            color: #000000;
                        }

                        &.Added {
                            background-color: #cecb1d;
                            color: #000000;
                        }
                    }
                }

                .item_price {
                    font-weight: 700;
                }
            }

        }
    }

}
</style>