<template>
    <section class="gradient-custom-2">
        <div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col col-lg-9 col-xl-7">
                    <div class="card">
                        <div id="profileColor" class="profile rounded-top text-white d-flex flex-row">
                            <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
                                <img v-if="preview" :src="preview" class="img-fluid img-thumbnail mt-4 mb-2"
                                    style="width: 100%;height: 150px; z-index: 1" />
                                <img v-if="!preview"
                                    src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                                    alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                                    style="width: 150px; z-index: 1">
                                <button v-text="editProfile ? 'Save' : 'Edit profile'" @click="editProfile = !editProfile"
                                    type="button" class="edit_button btn btn-outline-dark" data-mdb-ripple-color="dark"
                                    style="z-index: 1;">

                                </button>
                            </div>
                            <div class="name ms-3">
                                <h4>{{ firstName }}</h4>
                                <h5>{{ lastName }}</h5>
                            </div>
                        </div>
                        <div class="p-4 text-black" style="background-color: #f8f9fa;">
                            <div class="stats d-flex justify-content-end text-center py-1">
                                <div>
                                    <p class="mb-1 h5">0</p>
                                    <p class="small text-muted mb-0">Item Bought</p>
                                </div>
                                <div class="px-3">
                                    <p class="mb-1 h5">{{ itemCount }}</p>
                                    <p class="small text-muted mb-0">Item In Cart</p>
                                </div>
                                <div>
                                    <p class="mb-1 h5">0</p>
                                    <p class="small text-muted mb-0">Level</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="editProfile" class="card-body p-4 text-black">
                            <div class="edit_name mb-5">
                                <label for="FirstName">First Name</label>
                                <input type="text" v-model="firstName">
                                <label for="LastName">Last Name</label>
                                <input type="text" v-model="lastName">
                            </div>
                            <div class="item_colors">
                                <p>Choose a color</p>
                                <div class="circles">
                                    <div @click="active = 'black'" :class="active == 'black' ? 'active' : ''"
                                        class="circle">
                                        <span></span>
                                    </div>
                                    <div @click="active = 'pink'" :class="active == 'pink' ? 'active' : ''" class="circle">
                                        <span></span>
                                    </div>
                                    <div @click="active = 'green'" :class="active == 'green' ? 'active' : ''"
                                        class="circle">
                                        <span></span>
                                    </div>
                                    <div @click="active = 'blue'" :class="active == 'blue' ? 'active' : ''" class="circle">
                                        <span></span>
                                    </div>
                                    <div @click="active = 'gray'" :class="active == 'gray' ? 'active' : ''" class="circle">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="change_photo">
                                <p>Change Profile Photo</p>
                                <label class="label">
                                    <input type="file" accept="image/*" @change="previewImage" class="form-control-file"
                                        id="my-file">
                                    <span>Select a file</span>
                                </label>
                            </div>
                            <div class="log_out">
                                <p>Account Managment</p>
                                <button @click="handleSignOut()">Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, watchEffect, onMounted } from "vue";
import { signOut, getAuth } from "firebase/auth";
import { useRouter } from "vue-router";
// store
import { account } from "../stores/counter";
import { storeToRefs } from "pinia";
import { getDataProduct } from "../stores/counter";
const getAccountData = account();
let { firstName, lastName, active, image, preview } = storeToRefs(getAccountData);
const getItems = getDataProduct();
const { itemCount } = storeToRefs(getItems);
//end store

//edit profile
let editProfile = ref(false)

onMounted(() => {
    //changing profile color 
    watchEffect(() => {
        document.getElementById("profileColor").style.backgroundColor = `${active.value}`
    })
})


//sign out 
const router = useRouter()
let auth = getAuth()
const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push("/")
    })
}


//changing profile image
const previewImage = (event) => {
    let input = event.target;
    if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
            preview.value = e.target.result;
        }
        image.value = input.files[0];
        reader.readAsDataURL(input.files[0]);
    }
}
</script>
<style lang="scss" scoped>
.gradient-custom-2 {
    overflow-x: hidden;
    background: linear-gradient(to right, rgb(73, 73, 71), rgb(255 255 255));

    .profile {
        height: 200px;

        @media (max-width: 768px) {
            height: auto;
            padding: 20px;
        }

        .edit_button {
            background-color: #fff;
            font-weight: 600;
            color: #000000;
        }

        .name {
            margin-top: 130px;
            width: 120px;

            h4,
            h5 {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }

        }
    }

    .edit_name {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;

        input {
            margin: 10px;
            padding: 5px 10px;
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
                    border: 2px solid #000000;
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

    .change_photo {
        margin-top: 40px;

        p {
            font-weight: 600;
            font-size: 18px;
        }

        label.label input[type="file"] {
            position: absolute;
            top: -1000px;
        }

        .label {
            cursor: pointer;
            border: 1px solid #cccccc;
            border-radius: 5px;
            padding: 5px 15px;
            margin: 5px;
            background: #dddddd;
            display: inline-block;
        }

        .label:hover {
            background: #5cbd95;
        }

        .label:active {
            background: #9fa1a0;
        }

        .label:invalid+span {
            color: #000000;
        }

        .label:valid+span {
            color: #ffffff;
        }

    }

    .log_out {
        margin-top: 40px;

        p {
            font-weight: 600;
            font-size: 18px;
        }

        button {
            cursor: pointer;
            border: 1px solid #cccccc;
            border-radius: 5px;
            padding: 5px 15px;
            margin: 5px;
            background: #dddddd;
            display: inline-block;

            &:hover {
                background: #5cbd95;
            }
        }
    }

    .stats {
        justify-content: center !important;
    }
}
</style>