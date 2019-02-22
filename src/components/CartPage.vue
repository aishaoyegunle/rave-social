<template>
    <div class="cart">
        <main-header :header="header"></main-header>
        <div class="cart-container">
            <cart-item
                    v-for="(product, key) in products"
                    :key="key" :product="product" :quantity="2"
            >
            </cart-item>
            <div class="cart-total">
                <span>Total</span>
                <span>#480,000</span>
            </div>
            <div class="other-text">
                <router-link to="/">Continue Shopping</router-link>
            </div>
            <div class="cart__checkout">
                <button @click="checkout" type="button">CHECKOUT</button>
            </div>
        </div>

    </div>
</template>

<script>
  import MainHeader from './ui/Header';
  import CartItem from "./ui/CartItem";
  import axios from 'axios';

  const products = [
    {
      src: 'https://dummyimage.com/324x324/666666/ffffff.jpg',
      price: '240,000',
      name: 'Gucci Flops: Men shoe',
      info: 'Available in 44,45,46',
    },
    {
      src: 'https://dummyimage.com/324x324/666666/ffffff.jpg',
      price: '240,000',
      name: 'Gucci Flops: Men shoe',
      info: 'Available in 44,45,46',
    },
  ];

  const headerDetails = {
    header: 'Your Cart',
  };

  export default {
    name: 'Cart',
    components: {
      CartItem,
      MainHeader
    },
    data() {
      return {
        ...headerDetails,
        products
      }
    },
    methods: {
      checkout() {
        axios.get('http://www.mocky.io/v2/5be477442f00004900d9f521')
          .then((res) => {
            this.flashMessage.success({title: 'Success', message: res.data.message});
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .cart {
        padding: 0 $base-spacing * 20;
        position: relative;

        &-total {
            display: flex;
            justify-content: space-between;
            background: $grey;
            padding: $base-spacing * 2 $base-spacing * 3;
            font-weight: 500;
            font-size: $base-font + 2;
        }

        .other-text {
            margin-top: $base-spacing * 5;
            text-align: center;

             a {
                 color: $black;
                 text-decoration: none;

                 &:hover {
                     text-decoration: underline;
                 }
             }
        }

        &__checkout {
            margin-top: 10px;

            button {
                width: 100%;
                background: $black;
                color: $white;
                padding: $base-spacing * 2;
                cursor: pointer;
                font-size: $base-font + 2;

                &:hover {
                    background: darken($black, 50);
                }
            }
        }

        @media all and (max-width: $big-tablet) {
            padding: 0 $base-spacing * 10;
        }

        @media all and (max-width: $small-tablet) {
            padding: 0;

            .cart-container {
                padding: 0 $base-spacing;
                margin-top: -20px;
            }
        }

        @media all and (max-width: $mobile) {
            .cart-container {
                margin-top: $base-spacing * -4;
            }
        }

    }

</style>
