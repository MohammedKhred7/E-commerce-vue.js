<template>
    <div class="Services">
        <div class="container">
            <h3 class="head3">Services To Help You Shop</h3>
            <div class="services_boxes">
                <div class="box" data-aos="fade-up">
                    <div class="box_content">
                        <h4>Frequently Asked Questions</h4>
                        <p>Updates on safe Shopping in our Stores</p>
                    </div>
                    <div class="box_img">
                        <img src="../assets/services.png" alt="">
                    </div>

                </div>
                <div class="box" data-aos="fade-up">
                    <div class="box_content">
                        <h4>Online Payment Process</h4>
                        <p>Updates on safe Shopping in our Stores</p>
                    </div>
                    <div class="box_img">
                        <img src="../assets/services2.png" alt="">
                    </div>

                </div>
                <div class="box" data-aos="fade-up">
                    <div class="box_content">
                        <h4>Home Delivery Options</h4>
                        <p>Updates on safe Shopping in our Stores</p>
                    </div>
                    <div class="box_img">
                        <img src="../assets/services3.png" alt="">
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
.Services {
    padding-top: 80px;
    padding-bottom: 80px;

    h3 {
        margin-bottom: 50px;
    }

    .services_boxes {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;

        @media (max-width: 991px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 479px) {
            grid-template-columns: 1fr;
        }

        .box {
            background-color: #f5f6f6;
            border-radius: 10px;
            overflow: hidden;

            &:hover {
                .box_img {
                    img {
                        transform: scale(1.2);
                    }
                }
            }

            .box_content {
                padding: 40px;
                margin-right: 110px;

                h4 {
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 20px;
                }

                p {
                    color: #333;
                    font-weight: 500;
                }
            }

            .box_img {
                overflow: hidden;

                img {
                    width: 100%;
                    transition: all 0.4s ease;
                }
            }
        }
    }
}
</style>