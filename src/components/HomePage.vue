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

  const products = {
    firstProducts: [
      {
        id: 'f003',
        src: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 120000,
        name: 'Gucci bag for men',
        info: 'Available in 44,45,46',
      },
      {
        id: 'f004',
        src: 'https://images.unsplash.com/photo-1475226314338-7282a213e393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 120000,
        name: 'Gucci bag for men',
        info: 'Available in 44,45,46',
      },
      {
        id: 'f005',
        src: 'https://images.unsplash.com/photo-1542841791-bf92ca449f11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 120000,
        name: 'Gucci bag for men',
        info: 'Available in 44,45,46',
      }
    ],
    secondProducts: [
      {
        id: 'f006',
        src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 120000,
        name: 'Shoe for women',
        info: 'Available in 44,45,46',
      },
      {
        id: 'f007',
        src: 'https://dummyimage.com/648x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Suede shoe',
        info: 'Available in 44,45,46',
      },
    ],
    thirdProducts: [
      {
        id: 'f008',
        src: 'https://dummyimage.com/648x324/666666/ffffff.jpg',
        price: 120000,
        name: 'Italian Handbag',
        info: 'Available in 44,45,46',
      },
      {
        id: 'f009',
        src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 120000,
        name: 'Shoe for women',
        info: 'Available in 44,45,46',
      },
    ],
    lastProducts: [
      {
        id: 'f010',
        src: 'https://images.unsplash.com/photo-1542841791-bf92ca449f11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 120000,
        name: 'Shoe for women',
        info: 'Available in 44,45,46',
      },
      {
        id: 'f011',
        src: 'https://images.unsplash.com/photo-1475226314338-7282a213e393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 120000,
        info: 'Available in 44,45,46',
      },
      {
        id: 'f012',
        src: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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
        .products {
          // &-list{
          //     position: absolute;
          //     margin-top: -5rem;
          //   }
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
            margin-top: $base-spacing;


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
