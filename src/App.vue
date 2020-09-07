<template>
  <div id="app">
    <div class="container">
      <div class="input-wrapper">
        <label class="input-label">نام کاربری</label>
        <input
          v-model="name"
          type="text"
          placeholder="نام کاربری"
        >
      </div>
      <div class="input-wrapper">
        <label class="input-label">کد ملی</label>
        <input
          v-model="nationalCode"
          type="text"
          placeholder="کد ملی"
        >
      </div>
      <div class="input-wrapper">
        <label class="input-label">شماره همراه</label>
        <input
          v-model="phoneNumber"
          type="text"
          placeholder="تلفن همراه"
        >
      </div>
      <div class="input-wrapper">
        <label class="input-label">رمز عبور</label>
        <input
          v-model="password"
          type="password"
          placeholder="رمز عبور"
        >
      </div>
      <div class="input-wrapper">
        <label class="input-label">تکرار رمز عبور</label>
        <input
          v-model="passwordConfirmation"
          type="password"
          placeholder="رمز عبور"
        >
      </div>
      <div class="input-wrapper">
        <button
          class="submit"
          @click="check()"
        >
          ثبت نام
        </button>
      </div>
      <div v-if="errorsBag.length">
        <ul class="errorBag">
          <li
            v-for="error in errorsBag"
            :key="error.index"
          >
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input-wrapper">
        <button
          class="getUserList"
          @click="getUsers()"
        >
          مشخصات افراد ثبت نام شده
        </button>
        <table
          v-if="usersList.length>0"
          class="userList"
        >
          <thead>
            <th>
              نام کاربر
            </th>
            <th>
              پسورد
            </th>
            <th>
              nationalId
            </th>
            <th>
              mobile
            </th>
          </thead>
          <tbody>
            <tr
              v-for="member in usersList"
              :key="member.nationalId"
            >
              <td>
                {{ member.username }}
              </td>
              <td>
                {{ member.password }}
              </td>
              <td>
                {{ member.nationalID }}
              </td>
              <td>
                {{ member.mobilePhone }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nationalCode: '',
      phoneNumber: '',
      password: '',
      passwordConfirmation: '',
      errorsBag: [],
      usersList: [],
    };
  },
  methods: {
    postUser() {
      const postUsersOpt = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.name,
          password: this.password,
          nationalID: this.nationalCode,
          mobilePhone: this.phoneNumber,
        }),
      };

      fetch('http://127.0.0.1:9000/user/sign-up', postUsersOpt)
        .then((response) => response.json());
      // .then((data) => (this.postId = data.id));
    },
    getUsers() {
      const getUsersOpt = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      fetch('http://127.0.0.1:9000/user/list', getUsersOpt)
        .then((response) => response.json())
        .then((data) => { (this.usersList = data); });
    },
    check() {
      this.errorsBag = [];
      if (this.checkUser()
      && this.checkNationalCode()
      && this.checkPhoneNumber()
      && this.checkPassword()
      && this.checkpasswordConfirmation()) {
        this.postUser();
        // eslint-disable-next-line no-alert
        alert('ثبت نام با موفقیت انجام شد');
      }
    },
    // CHECK USERNAME
    checkUser() {
      const pName = /^(?=.{3,20}$)(?![_.])(?![0-9])[a-zA-Z0-9._]+(?<![_.])$/;
      if (this.name.length === 0) {
        this.errorsBag.push('وارد کردن نام کربری الزامیست');
        return false;
      }
      if (pName.test(this.name)) {
        return true;
      }

      this.errorsBag.push('نام کاربری نامعتبر است');
      return false;
    },
    // CHECK NATIONAL CODE
    checkNationalCode() {
      let validCode = false;
      let sum = 0;

      if (this.nationalCode.length === 0) {
        this.errorsBag.push('لطفا کد ملی را وارد کنید');
        return false;
      }

      for (let i = 0; i < 9; i += 1) {
        sum += (this.nationalCode[i] * (this.nationalCode.length - i));
      }
      if (((sum % 11) >= 2 && (11 - (sum % 11)) === parseInt(this.nationalCode[9], 10))
      || ((sum % 11) < 2
        && (sum % 11) === parseInt(this.nationalCode[9], 10))) {
        validCode = true;
        return true;
      }
      if (!validCode) {
        this.errorsBag.push('کد ملی اشتباه وارد شده است.');
        return false;
      }
      return false;
    },
    // CHECK PHONE NUMBER
    checkPhoneNumber() {
      const pPhoneNumber = /^\(?([0]{1})\)?([9]{1})?([0-9]{9})$/;
      if (this.phoneNumber.length === 0) {
        this.errorsBag.push('وارد کردن شماره همراه الزامیست');
        return false;
      }
      if (!(pPhoneNumber.test(this.phoneNumber))) {
        this.errorsBag.push('شماره همراه نامعتبر است');
        return false;
      }
      return true;
    },
    // CHECK PASSWORD
    checkPassword() {
      const pPassword = /^(?=.*\d)(?=.*[a-z]).{8,20}$/;

      if (this.password.length === 0) {
        this.errorsBag.push('وارد کردن رمز عبور الزامیست');
        return false;
      }
      if (!(pPassword.test(this.password))) {
        this.errorsBag.push('رمز عبور باید حداقل هشت کارکتر باشد و شامل حروف الفبا باشد');
        return false;
      }
      return true;
    },
    checkpasswordConfirmation() {
      if (this.passwordConfirmation.length === 0) {
        this.errorsBag.push('تکرار رمز عبور الزامی است');
        return false;
      }

      if (this.password !== this.passwordConfirmation) {
        this.errorsBag.push('پسورد همخوانی ندارد');
        return false;
      }
      return true;
    },
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
  width: 30%;
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
</style>
