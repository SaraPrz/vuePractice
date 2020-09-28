<template>
  <div class="container">

    <router-view />
    <Header />
    <home />
    <Slider />
    <Footer />
  </div>
</template>
<script>
import Header from './components/header.vue';
import home from './components/home.vue';
import Slider from './components/slider.vue';
import Footer from './components/footer.vue';
export default {
  components: {
    Header,
    home,
    Slider,
    Footer,
  },
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
  // methods: {
  //   postUser() {
  //     const postUsersOpt = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         username: this.name,
  //         password: this.password,
  //         nationalID: this.nationalCode,
  //         mobilePhone: this.phoneNumber,
  //       }),
  //     };

  //     fetch('http://127.0.0.1:9000/user/sign-up', postUsersOpt)
  //       .then((response) => response.json());
  //     // .then((data) => (this.postId = data.id));
  //   },
  //   getUsers() {
  //     const getUsersOpt = {
  //       method: 'GET',
  //       headers: { 'Content-Type': 'application/json' },
  //     };

  //     fetch('http://127.0.0.1:9000/user/list', getUsersOpt)
  //       .then((response) => response.json())
  //       .then((data) => { (this.usersList = data); });
  //   },
  //   check() {
  //     this.errorsBag = [];
  //     if (this.checkUser()
  //     && this.checkNationalCode()
  //     && this.checkPhoneNumber()
  //     && this.checkPassword()
  //     && this.checkpasswordConfirmation()) {
  //       this.postUser();
  //       // eslint-disable-next-line no-alert
  //       alert('ثبت نام با موفقیت انجام شد');
  //     }
  //   },
  //   // CHECK USERNAME
  //   checkUser() {
  //     const pName = /^(?=.{3,20}$)(?![_.])(?![0-9])[a-zA-Z0-9._]+(?<![_.])$/;
  //     if (this.name.length === 0) {
  //       this.errorsBag.push('وارد کردن نام کربری الزامیست');
  //       // return false;
  //     }
  //     if (pName.test(this.name)) {
  //       // return true;
  //     }

  //     this.errorsBag.push('نام کاربری نامعتبر است');
  //     // return false;
  //   },
  //   // CHECK NATIONAL CODE
  //   checkNationalCode() {
  //     let validCode = false;
  //     let sum = 0;

  //     if (this.nationalCode.length === 0) {
  //       this.errorsBag.push('لطفا کد ملی را وارد کنید');
  //       return false;
  //     }

  //     for (let i = 0; i < 9; i += 1) {
  //       sum += (this.nationalCode[i] * (this.nationalCode.length - i));
  //     }
  //     if (((sum % 11) >= 2 && (11 - (sum % 11)) === parseInt(this.nationalCode[9], 10))
  //     || ((sum % 11) < 2
  //       && (sum % 11) === parseInt(this.nationalCode[9], 10))) {
  //       validCode = true;
  //       return true;
  //     }
  //     if (!validCode) {
  //       this.errorsBag.push('کد ملی اشتباه وارد شده است.');
  //       return false;
  //     }
  //     return false;
  //   },
  //   // CHECK PHONE NUMBER
  //   checkPhoneNumber() {
  //     const pPhoneNumber = /^\(?([0]{1})\)?([9]{1})?([0-9]{9})$/;
  //     if (this.phoneNumber.length === 0) {
  //       this.errorsBag.push('وارد کردن شماره همراه الزامیست');
  //       return false;
  //     }
  //     if (!(pPhoneNumber.test(this.phoneNumber))) {
  //       this.errorsBag.push('شماره همراه نامعتبر است');
  //       return false;
  //     }
  //     return true;
  //   },
  //   // CHECK PASSWORD
  //   checkPassword() {
  //     const pPassword = /^(?=.*\d)(?=.*[a-z]).{8,20}$/;

  //     if (this.password.length === 0) {
  //       this.errorsBag.push('وارد کردن رمز عبور الزامیست');
  //       return false;
  //     }
  //     if (!(pPassword.test(this.password))) {
  //       this.errorsBag.push('رمز عبور باید حداقل هشت کارکتر باشد و شامل حروف الفبا باشد');
  //       return false;
  //     }
  //     return true;
  //   },
  //   checkpasswordConfirmation() {
  //     if (this.passwordConfirmation.length === 0) {
  //       this.errorsBag.push('تکرار رمز عبور الزامی است');
  //       return false;
  //     }

  //     if (this.password !== this.passwordConfirmation) {
  //       this.errorsBag.push('پسورد همخوانی ندارد');
  //       return false;
  //     }
  //     return true;
  //   },
  // },
};
</script>

