<template>
  <!-- MODAL -->
  <transition
    name="modal"
  >
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>
              مشخصات افراد ثبت نام شده
            </h3>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div v-if="name.active === true">
                <div class="mrgbt">
                  نام کاربری:
                  {{ name.username | userFormat }}
                </div>
                <div class="mrgbt">
                  کد ملی:
                  {{ name.nationalID }}
                </div>
                <div class="mrgbt">
                  موبایل:
                  {{ name.mobilePhone | phoneFormat }}
                </div>
                <div class="mrgbt">
                  رمز عبور:
                  {{ name.password }}
                </div>
              </div>
              <div v-else>
                کاربر فعال نمی باشد
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button
                class="modal-default-button"
                @click="$emit('close')"
              >
                بستن
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- END OF MODAL -->
</template>

<script>
export default {
  name: 'Modal',
  filters: {
    userFormat(value) {
      // eslint-disable-next-line no-param-reassign
      value = value.toString();
      return value.toUpperCase().trim();
    },
    phoneFormat(phone) {
      // eslint-disable-next-line no-param-reassign
      phone = phone.toString();
      return `98${phone.slice(1)}+`;
    },
  },
  props: {
    name: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showUser: '',
      showModal: false,
      users: [],
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>