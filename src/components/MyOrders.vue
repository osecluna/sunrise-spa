<template>
  <div class="my-orders">
    <div class="container">
      <!--{{> common/messages}}-->
      <!--<div class="my-account-title">
        <span class="my-account-title-text icon-user">{{i18n "my-account:myAccount.title"}}</span>
      </div>-->
      <div class="row">
        <div class="col-sm-12">
          <div class="my-orders-wrapper">
            <div class="row">
              <div class="col-sm-3">
                <!--{{> myaccount/my-account-sidebar myOrdersTab=true}}-->
              </div>
              <div id="my-account-desktop-content" class="col-sm-9">
                <div class="my-orders-content">
                  <div class="row">
                    <div class="col-sm-12">
                      <div data-test="my-orders-title"
                           class="my-orders-title hidden-xs">
                        <h4>My Orders</h4>
                        <!--{{i18n "my-account:myOrders.title"}}-->
                      </div>
                    </div>
                  </div>
                  <div class="my-orders-table-wrapper">
                    <div class="row">
                      <div class="col-sm-2 col-xs-4">
                        <div data-test="my-orders-table-titles-order-number"
                             class="my-orders-table-titles">
                          <!--{{i18n "my-account:myOrders.orderNumber"}}-->
                          <h5>Order Number</h5>
                        </div>
                      </div>
                      <div class="col-sm-2 hidden-xs">
                        <div data-test="my-orders-table-titles-date"
                           class="my-orders-table-titles">
                          <!--{{i18n "my-account:myOrders.creationDate"}}-->
                          <h5>Date</h5>
                        </div>
                      </div>
                      <div class="col-sm-2 col-xs-4">
                        <div data-test="my-orders-table-titles-total"
                            class="my-orders-table-titles">
                          <!--{{i18n "my-account:myOrders.totalPrice"}}-->
                          <h5>Total</h5>
                        </div>
                      </div>
                      <div class="col-sm-2 hidden-xs">
                        <div data-test="my-orders-table-titles-payment"
                             class="my-orders-table-titles">
                          <!--{{i18n "my-account:myOrders.paymentStatus"}}-->
                          <h5>Payment Status</h5>
                        </div>
                      </div>
                      <div class="col-sm-2 hidden-xs">
                        <div data-test="my-orders-table-titles-shipping"
                             class="my-orders-table-titles">
                          <!--{{i18n "my-account:myOrders.shippingStatus"}}-->
                          <h5>Shipping Status</h5>
                        </div>
                      </div>
                      <div class="col-sm-2 col-xs-4">
                        <div class="my-orders-table-titles">
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                    <div v-for="cart in me.carts.results" :key="cart.id" class="my-orders-table-order">
                      <div class="row">
                        <div data-test="col-xs-4-order"
                             class="col-sm-2 col-xs-4">
                          <!--<span>{{orderNumber}}</span>-->
                          <span>{{ cart.id }}</span>
                        </div>
                        <div data-test="col-xs-4-date"
                             class="col-sm-2 hidden-xs">
                          <!--<span>{{orderDate}}</span>-->
                          <span>{{ cart.createdAt }}</span>
                        </div>
                        <div data-test="col-xs-4-total"
                             class="col-sm-2 col-xs-4">
                          <span><!--{{total}}--></span>
                          <span>{{ cart.totalPrice.centAmount }}</span>
                        </div>
                        <div data-test="col-xs-4-payment"
                             class="col-sm-2 hidden-xs">
                          <span><!--{{paymentStatus}}--></span>
                          <span>In Progress</span>
                        </div>
                        <div data-test="col-xs-4-shipping"
                             class="col-sm-2 hidden-xs">
                          <span><!--{{shipping}}--></span>
                          <span>In Shipping</span>
                        </div>
                        <div class="col-sm-2 col-xs-4 text-right">
                        <!--<form id="form-view-my-order{{@index}}" name="view-my-order"
                              method="GET" action="{{showOrderUrl}}">
                            <button type="submit"
                              class="my-orders-view-order-btn">{{i18n "my-account:myOrders.view"}}</button>
                        </form>-->
                        </div>
                      </div>
                    </div>
                  <!--{{/each}}-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  components: {
  },

  data: () => ({
    me: {},
  }),

  apollo: {
    me: {
      query: gql`
       query MyOrders {
          me {
            carts {
              results {
                id
                totalPrice {
                  centAmount
                }
                createdAt
                taxedPrice {
                  totalGross {
                    type
                  }
                }
              }
            }
          }
        }`,
    },
  },
};
</script>
