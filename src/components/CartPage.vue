<template>
    <div class="cart">
        <main-header :header="header" class="cart__header" :showCart="showCart"></main-header>
        <div class="cart-container">
            <cart-item
                    v-for="(product, key) in products" :index="key"
                    :key="key" :product="product.product" :quantity="product.quantity"
            >
            </cart-item>
            <div class="cart-total">
                <span>Total</span>
                <span>{{total | currency}}</span>
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

  const headerDetails = {
    header: 'Your Cart',
    showCart: true,
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
        products: []
      }
    },
    created() {
      this.products = this.$store.getters.getProductsInCart;
    },
    computed: {
      total(){
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
          const quantity = this.products[i].quantity;
          const price = this.products[i].product.price;
          total += (quantity * price);
        }
        return total;
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
        // &__header{
        //     @media all and (max-width: $small-tablet) {
        //       text-align: center;
        //     }
        // }
        &__checkout {
            margin-top: 2rem;

            button {
                width: 100%;
                background: $black;
                color: $white;
                padding: $base-spacing * 2;
                cursor: pointer;
                font-size: $base-font +1;

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
