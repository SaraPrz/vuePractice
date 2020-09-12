<template>
  <div id="register">
    <div class="compo-container">
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

