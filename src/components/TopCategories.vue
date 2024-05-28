<template>
    <div class="category">
        <div class="container">
            <h3 class="head3">Shop Our Top Categories</h3>
            <div class="images">
                <RouterLink to="/ShopByCategory/men's clothing" class="img_wrap" data-aos="fade-up" data-aos-duration="1000">
                    <span>
                        <p>Men's Clothing</p>
                    </span>
                    <img src="../assets/catgory/furniture.png" alt="">
                </RouterLink>
                <RouterLink to="/ShopByCategory/jewelery" class="img_wrap" data-aos="fade-up" data-aos-duration="1000">
                    <span>
                        <p>Jewelery</p>
                    </span>
                    <img src="../assets/catgory/handBag.png" alt="">
                </RouterLink>
                <RouterLink to="/ShopByCategory/electronics" class="img_wrap" data-aos="fade-up" data-aos-duration="1000">
                    <span>
                        <p>Electronics</p>
                    </span>
                    <img src="../assets/catgory/tech.png" alt="">
                </RouterLink>
                <RouterLink to="/ShopByCategory/women's clothing" class="img_wrap" data-aos="fade-up" data-aos-duration="1000">
                    <span>
                        <p>Women's Clothing</p>
                    </span>
                    <img src="../assets/catgory/sneakers.png" alt="">
                </RouterLink>
                <div class="img_wrap" data-aos="fade-up" data-aos-duration="1000">
                    <span>
                        <p>Travel(None)</p>
                    </span>
                    <img src="../assets/catgory/travel.png" alt="">
                </div>
                <div class="img_wrap" data-aos="fade-up" data-aos-duration="1000">
                    <span>
                        <p>Books(None)</p>
                    </span>
                    <img src="../assets/catgory/book.png" alt="">
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
.category {
    padding-top: 80px;
    margin-bottom: 100px;

    .images {
        display: grid;
        grid-column-gap: 27px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        margin-top: 50px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-row-gap: 27px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 27px;
        }

        .img_wrap {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            cursor: pointer;

            &:hover {
                img {
                    transform: scale3d(1.2, 1.2, 1);
                }
            }

            span {
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 5;

                p {
                    text-align: center;
                    margin: 0;
                    padding: 20px;
                    color: #fff;
                    font-weight: 600;
                    font-size: 20px;

                }
            }

            img {
                width: 100%;
                height: 100%;
                transition: all 0.3s ease-in-out;
            }
        }
    }
}
</style>