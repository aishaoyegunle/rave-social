<template>
    <div class="product">
      <div class="product--lg">
        <div class="product__overlay"></div>
        <div class="product__image">
            <img :src="product.src" alt="product image"/>
        </div>
        <div class="product__content">
            <div class="product--price"><h2>&#8358;{{product.price}}</h2></div>
            <div class="product--info">{{product.info}}</div>
        </div>

        <a class="product__btn" @click="showModal">
            Buy now
        </a>
      </div>        

        <div class="product--sm">
          <div class="product__image" @click="showModal">
            <img :src="product.src" alt="product image"/>
            <div class="product__image--price">&#8358;{{product.price}}</div>
          </div>
          <div class="product__sub">
            <div class="product__info">{{product.info}}</div>
            <div class="product__add" id="btn--add"><a @click="addItem">Add to cart</a></div>
            <div class="product__remove" id="btn--remove"><a @click="addItem">Remove from cart</a></div>
          </div>
        </div>


        <product-modal v-show="isModalVisible" @close="closeModal" :product="product" />
    </div>
</template>

<script>
import ProductModal from '../ProductModal.vue'

  export default {
    name: 'Product',
    components: {
        ProductModal,
    },
    props: ['product'],
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
       removeItem() {
          this.$store.commit('REMOVE_FROM_CART', this.index);
          document.getElementById("btn--remove").style.display = "none";
          document.getElementById("btn--add").style.display = "block";
      },
      addItem(){
          const data = {
              product: this.product,
              quantity: this.quantity,
          }
        this.$store.commit('ADD_TO_CART', data);
        document.getElementById("btn--add").style.display = "none";
        document.getElementById("btn--remove").style.display = "block";
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .product {
        margin: $base-spacing;
        position: relative;
        &--lg{
          display: block;
          @media all and (max-width: $small-tablet) {
            display: none;
          }
        }
        &:hover {
            .product__overlay, .product__content, .product__btn {
                display: block;

                @media all and (max-width: $small-tablet) {
                display: none;

            }
            }
        }

        &__overlay {
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(200, 100, 180, 0.2);
        }

        &__content {
            position: absolute;
            left: 7%;
            color: $white;
            top: 10%;
            display: none;
        }
        &--price{
          padding-bottom: $base-spacing;
        }

        &__btn {
            position: absolute;
            left: 7%;
            bottom: 15%;
            padding: $base-spacing;
            display: none;
            cursor: pointer;
            background-color: $white;
            border-radius: .5rem;
            padding: $base-spacing;
        }

        &__image {
          display: flex;
          justify-content: center;
            img {
                max-width: 100%;
            }
        }

        &--sm{
          display: none;
          @media all and (max-width: $small-tablet) {
            display: block;
          }
          .product{
            &__image{
                position: relative;
                cursor: pointer;
                  >img{
                      width: 100%;
                      height: auto;
                  }
                  &--price{
                      position: absolute;
                      bottom: 0;
                      right: 0;
                      z-index: 2;
                      background-color: rgba(0, 0, 0, 0.514);
                      color: $white;
                      padding: .6rem .8rem;
                  }
              }
              &__sub{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: $base-spacing;
                #btn--remove{
                  display: none;
                }
              }
              &__info{
                color: $font-light;
              }
              &__add{
                background-color: $gold;
                padding: $base-spacing;
              }
              &__remove{
                background-color: $dark-grey;
                padding: $base-spacing;
                color: $white;
              }
          }
          
          
        }
    }
</style>

