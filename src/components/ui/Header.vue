<template>
    <div class="heading">
        <div class="heading__top">
            <div class="heading__top--lg">
                <div class="heading__top--lg-cart" v-if="showCart==false">
                    <router-link to="/checkout">
                        <img src="../../assets/images/cart@2x.png" alt="Cart">
                        <!-- <span class="label">{{cartCount}}</span> -->
                        <span>Cart</span>
                    </router-link>
                </div>
            </div>
            <div class="heading__top--sm" >
                <div class="heading__top--sm-title">
                    <h1>{{header}}</h1>
                </div>
                <div class="heading__top--sm-cart" v-if="showCart== false">
                    <router-link to="/checkout">
                        <span class="label">{{cartCount}}</span>
                        <img src="../../assets/images/bag@2x.png" alt="Cart">
                    </router-link>
                </div>
            </div>
        </div>
        <div class="heading__bottom">
            <div class="heading__bottom-title">
                <h1>{{header}}</h1>
            </div>
            <div class="heading__bottom-sub">
                <p v-show="subheader">{{subheader}}</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      header: { type: String, required: true},
      subheader: {type: String, required: false},
      showCart: {type: Boolean, required: false}
    },
     computed: {
         cartCount(){
            let num = this.count;
            num = this.$store.getters.getCartCount;
            return num
         }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .heading {
        padding: 0 $base-spacing * 10.5;
        margin-bottom: $base-spacing * 4.5;
        background-color: $white;

        &__top {
            margin-bottom: $base-spacing * 3;

            a {
                text-decoration: none;
                color: $black;
            }

            &--sm {
                display: none;

                &-cart{
                    position: relative;
                    padding: $base-spacing;

                    .label{
                        position: absolute;
                        padding: $base-spacing*.3 $base-spacing * .6;
                        border-radius: 50%;
                        background-color: $gold;
                        top: 0;
                        right: 0;
                        font-size: 1rem;
                    }
                }
            }

            &--lg {
                display: flex;
                justify-content: flex-end;
                padding-top: $base-spacing * 2;

                &-cart{
                    position: relative;
                    padding: $base-spacing;
                    .label{
                        position: absolute;
                        padding: $base-spacing*.3 $base-spacing * .6;
                        border-radius: 50%;
                        background-color: $gold;
                        top: 0;
                        right: 0;
                        font-size: 1rem;
                    }
                }
            }

            @media all and (max-width: $small-tablet) {

                &--sm {
                    display: flex;
                    justify-content: space-around;
                    background-color: $grey-background;
                    padding: $base-spacing;
                }

                &--lg {
                    display: none;
                }
            }
        }

        &__bottom {
            margin-bottom: $base-spacing * 8;

            &-sub {
                max-width: $base-width * 3.5;

                @media all and (max-width: $small-tablet) {
                    max-width: 100%;
                    margin-bottom: $base-spacing * 2;
                    padding: $base-spacing;
                }
            }

            &-title {

                @media all and (max-width: $small-tablet) {
                    display: none;
                }
            }
        }

        @media all and (max-width: $small-tablet) {
            padding: 0;
            width: 100%;
            margin-bottom: $base-spacing * 4;
        }
    }

</style>

