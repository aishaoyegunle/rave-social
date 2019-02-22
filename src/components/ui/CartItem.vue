<template>
    <div class="item">
        <div class="item__content">
            <div class="item__image">
                <img :src="product.src" />
            </div>
            <div class="item__description">
                <div class="item__name">
                    <h3>{{product.name}}</h3>
                </div>
                <div class="item__info">
                    {{product.info}}
                </div>
                <div class="item__price">
                   {{product.price | currency}}
                </div>
            </div>
        </div>
        <div class="item-actions">
            <div class="item__quantity">
                <span class="item-btn" @click="decrement">-</span>
                <span class="item-count">{{quantity}}</span>
                <span class="item-btn" @click="increment">+</span>
            </div>
            <div class="item__remove">
                <a @click="removeItem">Remove Item</a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CartItem",
    props: {
      product: { type: Object, required: true},
      quantity: { type: Number, required: true},
      index: { type: Number, required: true},
    },
    methods: {
      increment() {
        this.$store.commit('INCREMENT_QUANTITY', this.index);
      },
      decrement() {
        if (this.quantity > 0) {
         this.$store.commit('DECREMENT_QUANTITY', this.index);
        }
      },
      removeItem() {
          this.$store.commit('REMOVE_FROM_CART', this.index);
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";
    .item {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid $grey;
        padding: $base-spacing;
        margin-bottom: $base-spacing + 2;

        &-btn {
            background: $black;
            color: $white;
            padding: 3px 8px;
            cursor: pointer;
        }

        &-count {
            background: $white;
            color: $black;
            padding: 3px 10px;
        }

        &__quantity {
            margin-top: $base-spacing;
            margin-bottom: $base-spacing + 1;
        }

        &__remove {
            cursor: pointer;

            a {
                text-decoration: none;
                color: $red;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &__content {
            display: flex;
        }

        &__image {
            height: auto;
            width: $base-spacing * 10;

            img {
                max-width: 100%;
            }

            @media all and (max-width: $mobile) {
                width: $base-spacing * 8;
            }
        }

        &__description {
            margin-left: $base-spacing;
        }

        &__info {
            color: $dark-grey;
            margin-top: 5px;
        }

        &__price {
            color: $gold;
            margin-top: 5px;
        }
    }
</style>
