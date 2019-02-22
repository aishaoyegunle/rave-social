<template>
    <transition name="modal">
        <div class="modal__mask">
                <div class="modal__container">
                        <div class="modal--close" @click="close">
                            <a title="Close"><img src="../assets/images/close-circled@3x.png" alt=""></a>
                        </div>
                        <div class="modal__img">
                            <img src="../assets/images/23594856-129246067847338-9082105923924656128-n@2x.png" alt="product img" >
                            <div class="modal__img--price">{{product.price}}</div>
                        </div>
                        <div class="modal--text">
                            <h2>{{product.name}}</h2>
                            <p>2 Left</p>
                        </div>
                        <div class="modal--size">{{product.info}}</div>
                        <div class="modal--qty">
                            <span class="btn btn--minus" @click="decrement">
                                -
                            </span>
                            <span class="count">
                                QUANTITY {{quantity}}
                            </span>
                            <span class="btn btn--plus" @click="increment">+</span>
                        </div>
                        <div class="modal--add" id="btn--add" @click="addItem">
                            <a class="btn btn--black" > ADD TO CART</a>
                        </div>
                        <div class="modal--remove" id="btn--remove" @click="removeItem" >
                            <a class="btn btn--black" > REMOVE FROM CART</a>
                        </div>
                        <div class="modal--checkout">
                            <router-link to="/checkout" class="btn btn--white"> Checkout now</router-link>
                        </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ProductModal',
    props: ['product'],
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      increment() {
          this.quantity += 1;
      },
      decrement() {
          this.quantity = this.quantity < 1 ? 0 : this.quantity - 1;
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
        this.close();
        document.getElementById("btn--add").style.display = "none";
        document.getElementById("btn--remove").style.display = "block";
      }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.modal{

    &__mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
        overflow: auto;
        display: flex;
        justify-content: center;
    }

    &__container {
        width: 50rem;
        height: fit-content;
        margin: $base-spacing *2;
        padding: $base-spacing *2;
        background-color: $white;
        box-shadow: 0 .2rem .8rem rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
        position: relative;
        @media all and (max-width: $small-tablet) {
            margin-top: $base-spacing*8;
          }

        #btn--remove{
            display: none;
        }
    }

    &--close{
        position: absolute;
        top: 0;
        right: 0;
        padding: $base-spacing;
        cursor: pointer;
    }

    &__img{
        padding-top: $base-spacing*4;
        position: relative;
        >img{
            width: 100%;
            height: auto;
        }

        &--price{
            position: absolute;
            bottom: .5rem;
            right: 0;
            z-index: 2;
            background-color: rgba(0, 0, 0, 0.514);
            color: $white;
            padding: .6rem .8rem;
        }
    }
    &--text{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: $base-spacing 0;
        @media all and (max-width: $small-tablet) {
                h2{
                    font-size: 1.6rem;
                }
                }

        >p{
            color: $font-light;
        }
    }
    &--size{
        color: $font-light;
    }
    &--qty{
        width: 95%;
        background-color: $white;
        color: $black;
        text-align: center;
        padding: 0 0;
        margin: $base-spacing;
        border: 1px $black solid;
        display: flex;
        justify-content: space-between;
        align-items: center;

         .btn {
            padding: .5rem 2rem;
            cursor: pointer;
            font-size: 2rem;
            &--plus{
                border-left: 1px $black solid;
            }
            &--minus{
                border-right: 1px $black solid;
            }
        }
    }
    &--add{
        width: 95%;
        background-color: $black;
        color: $white;
        text-align: center;
        padding: $base-spacing 0;
        margin: $base-spacing;
        cursor: pointer;
    }
    &--remove{
        width: 95%;
        background-color: $gold;
        color: $white;
        text-align: center;
        padding: $base-spacing 0;
        margin: $base-spacing;
        cursor: pointer;
    }
    &--checkout{
        width: 95%;
        background-color: $white;
        text-align: center;
        padding: $base-spacing 0;
        margin: $base-spacing;
        a{
            text-decoration: none;
            color: $font-light;

        }
    }

    &-enter,
    &-leave-active {
        opacity: 0;
    }

    &-enter &-container,
    &-leave-active &-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
}
</style>
