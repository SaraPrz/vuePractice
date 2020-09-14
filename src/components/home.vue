<template>
  <div class="compo-container">
    <div class="input-wrapper">
      <button
        class="submit"
      >
       <router-link
          to="/register"
          exact
        >
        ثبت نام
       </router-link>
      </button>
            <button
      class="getUserList"
      >
      <router-link
          to="/list"
          exact
        >
      مشخصات افراد ثبت نام شده
      </router-link>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
body {
  background-color: rgb(51, 51, 110);
  direction: rtl;
  font-family: "samim";
}
.message {
  font-size: 18px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  background: #646464;
  padding: 12px;
  border: 1px solid #1a1919;
}
.input-label {
  display: block;
  color: #fff;
}
.input-wrapper {
  text-align: center;
  margin-bottom: 16px;
}
.errorBag {
  background-color: #cacaca;
border-radius: 4px;
  li {
    padding: 8px;
    color: red;
  }
}
.userList {
  border: 1px solid white;
  margin: 24px auto;
  padding: 12px;
  background-color: #fff;
  border-collapse: collapse;
  thead {
    background-color: #a4a4a4;
    border:1px solid #a4a4a4;
    th {
      padding: 9px;
text-align: center;
    }
  }
  td {
    padding: 9px;
    border:1px solid #a4a4a4;
  }
}
.submit {
  background-color: #2278e6;
  border: none;
  padding: 12px 29px;
  color: white;
  border-radius: 3px;
}
.getUserList {
  border: none;
  padding: 12px;
  background: #00ae00;
  color: white;
  border-radius: 3px;
  a {
    text-decoration: none;
    color: #fff;
  }
}
.compo-container {
  max-width: 1200px;
  margin: 0 auto;
  background: #646464;
  padding: 12px;
}
.submit a {
  text-decoration: none;
  color: #fff;
}
.modal-backdrop {
  position: fixed;
  top: 160px;
  bottom: 160px;
  left: 200px;
  right: 600px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.modal {
  background: #FFFFFF;
  box-shadow: 1px 1px 11px -3px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 30%;
  position: fixed;
  top: 160px !important;
  bottom: 160px !important;
  left: 200px !important;
  right: 600px !important;
  height: 400px;
}

.modal-backdrop > div {
  display: block;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

footer >button {
  cursor: pointer;
}
</style>