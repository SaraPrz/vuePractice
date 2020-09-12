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
    </div>
    <div class="input-wrapper">
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
  padding: 9px 29px;
  color: white;
  border-radius: 3px;
}
.getUserList {
  border: none;
  padding: 12px;
  background: #00ae00;
  color: white;
  border-radius: 3px;
}
.compo-container {
  max-width: 1200px;
  margin: 0 auto;
  background: #646464;
  padding: 12px;
}
</style>