<template>
    <div class="cart_page">

        <div class="Shopping_cart">
            <div class="items_inCart">
                <h3 class="head3">Shopping Cart</h3>
                <hr>
                <h2 class="empty_cart" v-if="filterd.length == 0">Your Cart Is Empty!! You Need To Add Items :3</h2>
                <div class="items" v-for="item in filterd" :key="item.id">
                    <div class="image">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="item_content">
                        <div class="title">
                            {{ item.title }}
                        </div>
                        <div class="desc">
                            {{ item.description }}
                        </div>
                        <div class="color">
                            <p>Color : Unknown</p>
                        </div>
                        <div class="size">
                            Size : Unknown
                        </div>
                        <div class="stars">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            (120)
                        </div>
                        <div class="wrapper">
                            <div class="quantity">
                                <span @click="item.qty > 1 ? (item.qty = parseFloat(item.qty) - 1) : (item.qty = item.qty)"
                                    class="quantity__minus"><span>-</span></span>
                                <input name="quantity" type="text" class="quantity__input" v-model="item.qty" min="1"
                                    onkeypress="return event.charCode >= 49">
                                <span @click="item.qty = parseFloat(item.qty) + 1"
                                    class="quantity__plus"><span>+</span></span>
                            </div>
                            <div class="delete">
                                <i @click="item.inCart = false; item.qty = 0;" class="bi bi-trash"></i>
                            </div>
                            <div class="heart" @click="item.like = !item.like">
                                <i v-if="!item.like" class="bi bi-heart"></i>
                                <i v-if="item.like" class="bi bi-heart-fill"></i>
                            </div>
                        </div>
                    </div>

                    <div class="price">
                        ${{ item.price }}
                    </div>
                    <hr style="width: 100%;">
                </div>
            </div>
        </div>

        <div class="Subtotal_ads">
            <div class="itemCount">
                <div class="Subtotal">
                    Subtotal( {{ itemCount }} items) : <p class="dollars"> ${{ Subtotal.toFixed(2) }} </p>
                </div>
                <div class="gift">
                    <input type="checkbox"> This order contains a gift
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>

    </div>
</template>
<script setup>
//store
import { getDataProduct } from "../stores/counter";
import { storeToRefs } from "pinia";

const getItems = getDataProduct();
const { filterd, Subtotal, itemCount } = storeToRefs(getItems);
//end store
</script>
<style lang="scss" scoped>
.cart_page {
    display: flex;
    background-color: #eee;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }

    .Shopping_cart {
        width: 80%;
        padding: 20px;
        background-color: #eee;

        @media (max-width: 768px) {
            width: 100%;
            padding: 10px;
        }

        .items_inCart {
            background: #fff;
            display: flow-root;

            .head3 {
                padding: 10px 40px;
                margin-top: 0.5rem;
            }

            .empty_cart {
                padding: 10px 40px;
            }

            .items {
                padding: 20px 40px;
                display: flex;
                align-items: flex-start;
                flex-wrap: wrap;

                @media (max-width: 768px) {
                    flex-direction: column;
                    font-size: 12px;
                    padding: 0;
                }

                .image {
                    width: 9rem;
                    height: 9rem;

                    @media (max-width: 768px) {
                        padding: 20px;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .item_content {
                    width: calc(100% - (9rem + 100px));
                    padding: 20px;

                    @media (max-width: 768px) {
                        width: 100%;
                    }

                    .title {
                        font-size: 18px;
                        font-weight: 700;
                    }

                    .desc {
                        font-size: 14px;
                    }

                    .title,
                    .desc {
                        text-overflow: ellipsis;
                        /* will make [...] at the end */
                        white-space: nowrap;
                        /* paragraph to one line */
                        overflow: hidden;
                        /* older browsers */
                    }

                    .stars {
                        font-size: 13px;
                    }

                    .color {
                        font-size: 13px;

                        p {
                            margin: 0;
                        }
                    }

                    .size {
                        font-size: 13px;

                        p {
                            margin: 0;
                        }
                    }

                    .wrapper {
                        margin-top: 10px;
                        display: flex;

                        .quantity {
                            justify-content: flex-start;
                            margin-right: 10px;
                        }

                        .delete {
                            font-size: 1.2rem;
                            margin-right: 10px;
                            cursor: pointer;
                        }

                        .heart {
                            font-size: 1.2rem;
                            cursor: pointer;

                            .bi-heart-fill {
                                color: red;
                            }

                            .bi-heart {
                                color: #4f4f4f;
                            }
                        }
                    }

                }

                .price {
                    color: #000000;
                    width: 100px;
                    text-align: center;
                    font-weight: 700;
                    font-size: 20px;
                }
            }
        }
    }

    .Subtotal_ads {
        width: 20%;
        padding: 20px;
        background-color: #eee;

        @media (max-width: 768px) {
            width: 100%;
            padding: 10px;
        }

        .itemCount {
            background-color: #fff;
            padding: 20px;

            .Subtotal {
                font-size: 18px;
                font-weight: 700;

                .dollars {
                    margin: 0;
                    color: #1b1b1b;
                }
            }

            .gift {
                display: flex;
                font-size: 14px;

                input {
                    margin-right: 5px;
                }
            }

            button {
                font-size: 16px;
                font-weight: 500;
                padding: 10px 20px;
                border-radius: 30px;
                border: none;
                background-color: #cecb1d;
                color: #000000;
                margin-top: 20px;

            }
        }
    }
}
</style>