<!--Note: i used firebase here just for email and password,
     Name value won't be stored but you can edit it in accountManagement page-->
<template>
    <section>
        <div class="px-4 px-md-5 text-center text-lg-start wrapper" style="background-color: hsl(0, 0%, 96%)">
            <div class="container">
                <div class="row gx-lg-5 align-items-center">
                    <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-up">
                        <h1 class="my-5 display-3 fw-bold ls-tight">
                            Love Shopping??
                            <br />
                            <span class="title">Shop with Us Now!</span>
                        </h1>
                        <p style="color: hsl(217, 10%, 50.8%)">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores
                        </p>
                    </div>

                    <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-up">
                        <div class="card">
                            <div class="card-body py-5 px-md-5">
                                <div class="auth_toggle d-flex justify-content-around mb-3">
                                    <p @click="Authentication = 'signIn'"
                                        :class="Authentication == 'signIn' ? 'active' : ''">
                                        Sign In</p>
                                    <p @click="Authentication = 'logIn'" :class="Authentication == 'logIn' ? 'active' : ''">
                                        Log
                                        In</p>
                                </div>
                                <form v-if="Authentication == 'signIn'">
                                    <!-- 2 column grid layout with text inputs for the first and last names -->
                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <label>First name</label>
                                                <input v-model="firstName" type="text" id="form3Example1"
                                                    class="form-control" />

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <label for="">Last name</label>
                                                <input v-model="lastName" type="text" id="form3Example2"
                                                    class="form-control" placeholder="Last name" />
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Email input -->
                                    <div class="form-outline mb-4">
                                        <label>Email address</label>
                                        <input v-model="email" type="email" id="form3Example3" class="form-control" />
                                    </div>

                                    <!-- Password input -->
                                    <div class="form-outline mb-4">
                                        <label>Password</label>
                                        <input v-model="password" type="password" id="form3Example4" class="form-control" />

                                    </div>

                                    <!-- Checkbox -->
                                    <div class="form-check d-flex justify-content-center mb-4">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33"
                                            checked />
                                        <label class="form-check-label" for="form2Example33">
                                            Subscribe to our newsletter
                                        </label>
                                    </div>

                                    <!-- Submit button -->
                                    <button @click.prevent="register()" type="submit"
                                        class="btn btn-primary btn-block mb-4">
                                        Sign up
                                    </button>
                                    <p class="error_message">{{ errMessage }}</p>
                                </form>

                                <form v-if="Authentication == 'logIn'">
                                    <!-- Email input -->
                                    <div class="form-outline mb-4">
                                        <label>Email address</label>
                                        <input v-model="email" type="email" id="form3Example3" class="form-control" />
                                    </div>

                                    <!-- Password input -->
                                    <div class="form-outline mb-4">
                                        <label>Password</label>
                                        <input v-model="password" type="password" id="form3Example4" class="form-control" />

                                    </div>

                                    <!-- Checkbox -->
                                    <div class="form-check d-flex justify-content-center mb-4">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33"
                                            checked />
                                        <label class="form-check-label" for="form2Example33">
                                            Subscribe to our newsletter
                                        </label>
                                    </div>

                                    <!-- Submit button -->
                                    <button @click.prevent="LogIn()" type="submit" class="btn btn-primary btn-block mb-4">
                                        Log In
                                    </button>
                                    <p class="error_message">{{ errMessage }}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"
// store
import { account } from "../stores/counter";
import { storeToRefs } from "pinia";

const getAccountData = account();
const { firstName, lastName } = storeToRefs(getAccountData);
// end store

// import AOS
import AOS from 'aos'
onMounted(() => {
    AOS.init()
})


let Authentication = ref("signIn")

const email = ref("")
const password = ref("")
const router = useRouter()
const errMessage = ref("")

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log("succssfully registered")
            router.push("/AccountManagment")
        })
        .catch((error) => {
            console.log(error.code)
            switch (error.code) {
                case "auth/invaild-email":
                    errMessage.value = "invaild Email!"
                    break;
                case "auth/wrong-password":
                    errMessage.value = "Wrong Password!"
                    break;
                case "auth/user-not-found":
                    errMessage.value = "Can't Find The User!"
                    break;
                case "auth/network-request-failed":
                    errMessage.value = "Please use vpn if you are in Syria!"
                    break;
                default:
                    errMessage.value = "Email Or Password was incorrect!"
                    break;
            }
        })
        .catch((error) => {
            console.log(error.code)
            alert(error.message)
        })
}
const LogIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log("succssfully signed in")
            router.push("/AccountManagment")
        })
        .catch((error) => {
            console.log(error.code)
            switch (error.code) {
                case "auth/invaild-email":
                    errMessage.value = "invaild Email!"
                    break;
                case "auth/wrong-password":
                    errMessage.value = "Wrong Password!"
                    break;
                case "auth/user-not-found":
                    errMessage.value = "Can't Find The User!"
                    break;
                case "auth/network-request-failed":
                    errMessage.value = "Please use vpn if you are in Syria!"
                    break;
                default:
                    errMessage.value = "Email Or Password was incorrect!"
                    break;
            }
        })
}


</script>
<style lang="scss" scoped>
/* import mdb */
@import '../../node_modules/mdb-vue-ui-kit/css/mdb.min.css';
.title {
    color: #cecb1d;
}

input {
    border: 1px solid #bdbdbd !important;
}

button[type="submit"] {
    background-color: #cecb1d;
    padding: 10px 5px;
    color: #000;
    font-size: 20px;
    font-weight: 600;
}
button[type="submit"]:hover{
    background: black;
    color: #fff;
    transition: all ease-in;
}

i {
    font-size: 20px;
}
.auth_toggle {
    p {
        cursor: pointer;
        padding: 10px 15px;

        &.active {
            border-bottom: 3px solid #ffc700;
        }
    }
}

.error_message {
    color: red;
    font-size: 18px;
    font-weight: 700;
}
</style>