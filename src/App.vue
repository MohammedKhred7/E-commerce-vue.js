<template>
  <div class="app">
    <div class="background_container">
      <div class="banner container">
        <div class="phone">
          <i class="bi bi-telephone"></i>
          +963911111111
        </div>
        <div class="offer">Get 50% off on selected items | shop now</div>
        <div class="lang_location">
          <!--languages picker-->
          <div>
            <div class="language-picker">
              <form action="" class="language-picker__form">
                <select name="language-picker-select">
                  <option lang="ar" value="deutsch">Arabic</option>
                  <option lang="en" value="english" selected>English</option>
                  <option lang="fr" value="francais">Français</option>
                  <option lang="it" value="italiano">Italiano</option>
                </select>
              </form>
            </div>
          </div>

          <!--location picker-->
          <div>
            <div class="location-picker">
              <form action="" class="location-picker__form">
                <select name="location-picker-select">
                  <option value="Syria">Syria</option>
                  <option value="US" selected>US</option>
                  <option value="France">France</option>
                  <option value="UK">UK</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppNavbar></AppNavbar>
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import AppNavbar from './components/AppNavbar.vue';

</script>
<style lang="scss" scoped>
.background_container {
  background-color: #cecb1d;
  font-weight: 600;
  padding: 5px 0px;
  

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    color: #494444;

    @media (max-width: 768px) {
      flex-direction: column;

      .phone {
        margin-top: 10px;
      }

      .offer {
        display: none;
      }

      .lang_location {
        padding: 5px;
      }
    }


    .lang_location {
      display: flex;
      font-size: 14px;

      .language-picker,
      .location-picker {
        select {
          background-color: #c2bf1c;
          border: transparent;
          border-radius: 5px;
          color: #3f3a3a;
          display: block;
          min-width: 80px;
          padding: 5px;
          font-weight: 500;
          outline: none;

          option {
            background: #fff;
            color: #000;
          }
        }
      }

      .language-picker {
        margin-right: 30px;
      }
    }
  }
}
</style>
