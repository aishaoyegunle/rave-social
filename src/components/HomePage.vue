<template>
    <div class="home">
        <main-header :header="header" :subheader="subheader"></main-header>
        <div class="products-container">
            <div class="products-list">
                <div class="products products--row">
                    <product v-for="(product, key) in firstProducts" :key="key" :product="product"></product>
                </div>
                <div class="products products--row">
                    <product v-for="(product, key) in secondProducts" :key="key" :product="product"></product>
                </div>
                <div class="products products--row">
                    <product v-for="(product, key) in thirdProducts" :key="key" :product="product"></product>
                </div>
                <div class="products products--row">
                    <product v-for="(product, key) in lastProducts" :key="key" :product="product"></product>
                </div>
            </div>
        </div>
        <div class="other-info">
            <a class="btn--white">See more</a>
        </div>

        <div class="social">
          <span class="social--line"></span>
          <a class="btn--black">Follow us on instagram</a>
          <span class="social--line"></span>

        </div>
    </div>
</template>

<script>
  import MainHeader from './ui/Header.vue'
  import Product from './ui/Product.vue'
  import ProductModal from './ProductModal.vue'

  const products = {
    firstProducts: [
      {
        src: 'https://dummyimage.com/324x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Gucci bag for men',
        info: 'Available in 44,45,46',
      },
      {
        src: 'https://dummyimage.com/324x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Gucci bag for men',
        info: 'Available in 44,45,46',
      },
      {
        src: 'https://dummyimage.com/324x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Gucci bag for men',
        info: 'Available in 44,45,46',
      }
    ],
    secondProducts: [
      {
        src: 'https://dummyimage.com/350x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Shoe for women',
        info: 'Available in 44,45,46',
      },
      {
        src: 'https://dummyimage.com/648x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Suede shoe',
        info: 'Available in 44,45,46',
      },
    ],
    thirdProducts: [
      {
        src: 'https://dummyimage.com/648x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Italian Handbag',
        info: 'Available in 44,45,46',
      },
      {
        src: 'https://dummyimage.com/350x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Shoe for women',
        info: 'Available in 44,45,46',
      },
    ],
    lastProducts: [
      {
        src: 'https://dummyimage.com/324x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Shoe for women',
        info: 'Available in 44,45,46',
      },
      {
        src: 'https://dummyimage.com/324x324/666666/ffffff.jpg',
        price: 120000,
        info: 'Available in 44,45,46',
      },
      {
        src: 'https://dummyimage.com/324x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Shoe for women',
        info: 'Available in 44,45,46',
      }
    ],
  };

  const headerDetails = {
    header: 'ASHLUXURY',
    subheader: `Fashion & Lifestyle 📧 admin@ashluxury.com 📲 whatsapp: +234 8169761216 🌍 worldwide shipping
                📍22B Admiralty Way 🕙HQ opens 10am - 8pm (mon-sat)`
  };

  export default {
    name: 'HomePage',
    components: {
      MainHeader,
      Product,
      ProductModal,
    },
    data() {
      return {
        ...headerDetails,
        ...products,
        showModal: false,
      }
    },
    methods: {
      hideModal() {
        this.$store.commit('HIDE_MODAL');
      }
    },
    created(){
      this.showModal = this.$store.getters.getModalStatus;
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

    @import "../assets/scss/variables";

    .home {

        .products-container {
            padding: 0 $base-spacing * 10.5;
            background: $background-color;

            @media all and (max-width: $big-tablet) {
                padding: 0 $base-spacing * 10.5;
                justify-content: center;
            }

            @media all and (max-width: $small-tablet) {
                padding: 0;
                display: flex;
                justify-content: center;
                background: $dark-background;

            }
        }

        .products-list {
            /*margin-top: -$base-spacing * 4;
            margin-bottom: -$base-spacing * 8;*/
        }

        .products {

            &--row {
                display: flex;
                justify-content: space-between;

                @media all and (max-width: $small-tablet) {
                    flex-direction: column;
                }
            }

        }

        .other-info {
            display: flex;
            justify-content: center;
            cursor: pointer;


            a {
                padding-top: $base-spacing * 4.5;
                z-index: 2;
                margin-top: -$base-spacing * 4;
                text-align: center;
                width: 95px;
                border: 2px solid $black;
            }
        }
         .social {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: $base-spacing*5 $base-spacing*10.5;

            .btn--black {
              padding: $base-spacing*2 $base-spacing*4;
              text-align: center;
              background-color: $black;
              color: $white;
              cursor: pointer;

            }

            &--line{
              width: 32rem;
              height: .1rem;
              background-color: rgba(128, 128, 128, 0.74);
            }
        }

    }
</style>
