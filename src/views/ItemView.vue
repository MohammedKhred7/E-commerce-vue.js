<template>
    <div class="item">
        <div class="item_grid" v-for="item in singleItem" :key="item.id"  data-aos="fade-up">
            <div class="item_img">
                <img :src="item.image" alt="">
            </div>
            <div class="item_content">
                <div class="description">
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                    <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        (120)
                    </div>
                    <p class="price">${{ item.price }}</p>
                </div>
                <hr>
                <div class="item_colors">
                    <p>Choose a color</p>
                    <div class="circles">
                        <div @click="active = 'color1'" :class="active == 'color1' ? 'active' : ''" class="circle">
                            <span></span>
                        </div>
                        <div @click="active = 'color2'" :class="active == 'color2' ? 'active' : ''" class="circle">
                            <span></span>
                        </div>
                        <div @click="active = 'color3'" :class="active == 'color3' ? 'active' : ''" class="circle">
                            <span></span>
                        </div>
                        <div @click="active = 'color4'" :class="active == 'color4' ? 'active' : ''" class="circle">
                            <span></span>
                        </div>
                        <div @click="active = 'color5'" :class="active == 'color5' ? 'active' : ''" class="circle">
                            <span></span>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="qty_buy">
                    <div class="wrapper">
                        <div class="quantity">
                            <span @click="item.qty > 1 ? (item.qty = parseFloat(item.qty) - 1) : (item.qty = item.qty)"
                                class="quantity__minus"><span>-</span></span>
                            <input name="quantity" type="text" class="quantity__input" v-model="item.qty" min="1"
                                onkeypress="return event.charCode >= 49">
                            <span @click="item.qty = parseFloat(item.qty) + 1" class="quantity__plus"><span>+</span></span>
                        </div>
                        <p>Only 12 Item Left Dont Miss It!</p>
                    </div>

                    <div class="buy">
                        <button class="buy_now">Buy Now</button>
                        <button v-text="item.inCart ? 'Added to cart' : 'Add to cart'"
                            @click="item.inCart = true; item.qty == 0 ? item.qty = 1 : item.qty = item.qty"
                            class="addToCart" :class="item.inCart ? 'Added' : ''"></button>
                    </div>
                </div>
                <hr>
                <div class="delivery">
                    <div class="free_delivery">
                        <i class="bi bi-truck"></i>
                        <div>
                            <div class="free_delivery_title">Free Delivery</div>
                            <a href="">
                                <p>Enter Your Postal Code For Delivery Availabilty</p>
                            </a>
                        </div>
                    </div>
                    <div class="return_delivery">
                        <i class="bi bi-clipboard"></i>
                        <div>
                            <div class="return_delivery_title">Return Delivery</div>

                            <p>Free 30days Delivery Returns <a href=""> details</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
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

//variables
let active = ref('color1')

// ((( NOTE!!! : THIS IS NOT THE RIGHT WAY TO DO IT )))
// THE RIGHT WAY IS TO FETCH PRODUCT FROM API AND USE ROUTE.PARAMS.ID AS VARAIABLE IN API LINK.
// i used this way because im using fake api and i added 2 fields to it ,if i use the way above i need to define the 2 fields again
// and thats will be a problem cuz all thibgs u do in home page or else will not be added to this page.
let singleItem = computed(() => {
    return listItems.value.filter((item) => {
        if (item.id == route.params.id) {
            return item
        }
    })
})

</script>

<style lang="scss" scoped>
hr {
    margin: 1.5rem 0;
}

.item {
    padding: 100px;

    @media (max-width: 768px) {
        padding: 50px;
    }

    @media (max-width: 479px) {
        padding: 30px;
    }

    .item_grid {
        display: grid;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        column-gap: 50px;
        row-gap: 50px;

        @media (max-width: 1050px) {
            grid-template-columns: 1fr;
            grid-row-gap: 27px;
        }

        .item_img {
            width: 500px;
            height: 500px;

            @media (max-width: 768px) {
                width: 300px;
                height: 300px;
            }

            @media (max-width: 479px) {
                width: 200px;
                height: 200px;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }

        .item_content {
            .description {
                .stars {
                    font-size: 14px;
                    text-align: left;
                    color: silver;
                }

                .price {
                    color: #000000;
                    font-size: 18px;
                    font-weight: 700;
                    margin-top: 20px;
                }
            }

            .item_colors {
                p {
                    font-weight: 600;
                    font-size: 18px;
                }

                .circles {
                    display: flex;

                    .circle {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 33px;
                        height: 33px;
                        border: 2px solid transparent;
                        border-radius: 50%;
                        margin: 5px;
                        cursor: pointer;

                        &.active {
                            border: 2px solid #cecb1d;
                        }

                        span {
                            display: block;
                            width: 25px;
                            height: 25px;
                            border-radius: 50%;
                        }

                        &:nth-child(1) {
                            span {
                                background-color: black;
                            }
                        }

                        &:nth-child(2) {
                            span {
                                background-color: pink;
                            }
                        }

                        &:nth-child(3) {
                            span {
                                background-color: green;
                            }
                        }

                        &:nth-child(4) {
                            span {
                                background-color: blue;
                            }
                        }

                        &:nth-child(5) {
                            span {
                                background-color: gray;
                            }
                        }

                    }
                }
            }

            .qty_buy {
                .wrapper {
                    display: flex;
                    align-items: center;

                    .quantity {
                        margin-right: 20px;

                        .quantity__minus,
                        .quantity__plus {
                            width: 50px;
                            height: 31px;
                        }

                        .quantity__input {
                            height: 31px;
                        }
                    }

                    p {
                        margin: 0;

                        @media (max-width: 479px) {
                            font-size: 12px;
                        }
                    }
                }

                .buy {
                    margin-top: 20px;

                    .buy_now,
                    .addToCart {
                        font-size: 16px;
                        font-weight: 600;
                        padding: 10px 40px;
                        border-radius: 30px;

                        @media (max-width: 479px) {
                            font-size: 14px;
                            padding: 10px 20px;
                        }
                    }

                    .buy_now {
                        margin-right: 20px;
                        background-color: #cecb1d;
                        color: #000000;
                        border: none;
                    }

                    .addToCart {
                        background-color: transparent;
                        border: 1px solid silver;
                        transition: all 0.3s ease-in-out;

                        &.Added {
                            background-color: #cecb1d;
                            color: #000000;
                        }

                        &:hover {
                            background-color: #cecb1d;
                            color: #000000;
                        }
                    }
                }
            }

            .delivery {
                .free_delivery {
                    display: flex;

                    i {
                        color: #ff7006;
                        margin-right: 10px;
                    }

                    .free_delivery_title {
                        font-size: 14px;
                        font-weight: 700;
                    }

                    a,
                    p {
                        color: #333;
                        font-size: 12px;
                    }
                }

                .return_delivery {
                    display: flex;

                    i {
                        color: #ff7006;
                        margin-right: 10px;
                    }

                    .return_delivery_title {
                        font-size: 14px;
                        font-weight: 700;
                    }

                    a,
                    p {
                        color: #333;
                        font-size: 12px;
                    }
                }
            }


        }
    }
}
</style>