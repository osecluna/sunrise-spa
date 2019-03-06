<template>
  <div v-if="product"
       class="row select-row">
    <ul class="list-inline">
      <li v-for="attribute in productAttributes"
          :key="attribute.name">
        <p class="text-uppercase">
        </p>

        <div>
          <select class="select-product-detail">
            <option v-for="color in colors"
                    :key="color.name"
                    class="selectboxit select-product-detail selectboxit-enabled selectboxit-btn">
              {{ color }}
            </option>
          </select>
          <select class="select-product-detail">
            <option v-for="size in sizes"
                     :key="size.name">
              {{ size }}
              </option>
          </select>
        </div>
        <!-- {{> common/required-error-message}} -->
      </li>

      <li class="size-guide-li">
        <!-- {{> catalog/size-guide}} -->
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  props: {
    sku: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    product: null,
  }),

  methods: {
    assemble(acc, item) {
      (acc.attribute[item.name] || (acc.attribute[item.name] = []))
        .push(item.value || item.label);
      return acc;
    },
  },

  computed: {
    productAttributes() {
      return this.product.masterData.current.allVariants
        .flatMap(variant => Object.values(variant.attributes))
        .filter(attr => typeof attr === 'object')
        .reduce(this.assemble, { attribute: { } });
    },

    sizes() {
      return this.productAttributes.attribute.size;
    },

    colors() {
      return this.productAttributes.attribute.color
        .filter((elem, index, self) => index === self.indexOf(elem));
    },
  },

  apollo: {
    product: {
      query: gql`
        query VariantSelector($locale: Locale!, $sku: String!) {
          product(sku: $sku) {
            id
            masterData {
              current {
                allVariants {
                  sku
                  attributes {
                    ...on mainProductType {
                      size {
                        value
                        name
                      }
                       color {
                        key
                        label(locale: $locale)
                        name
                      }
                    }
                  }
                }
                variant(sku: $sku) {
                  attributes {
                    ...on mainProductType {
                      color {
                        key
                        label(locale: $locale)
                        name
                      }
                      size {
                        value
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }`,
      variables() {
        return {
          locale: this.$i18n.locale,
          sku: this.sku,
        };
      },
    },
  },
};
</script>
