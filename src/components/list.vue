<template>
  <div id="list">
    <div class="compo-container">
      <modal
        v-if="show"
        :name= "modalUserShow"
        @close="show=false"
      />
      <div class="input-wrapper">
        <button
          class="getUserList"
          @click="getUsers()"
        >
          لیست کاربران
        </button>
        <div v-if="!isloading">
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
              کد ملی
            </th>
            <th>
              شماره همراه
            </th>
            <th>
            <button @click="filterData(false)">غیر فعال</button>
            <button @click="filterData(true)">فعال</button>
          </th>
          </thead>
          <tbody>
            <tr
              v-for="member in usersList"
              :key="member.nationalId"
            >
              <td>
            <button
              type="button"
              class="btn color-user"
              @click="showdata(member)"
            >
              {{ member.username }}
            </button>
              <td>
                {{ member.password }}
              </td>
              <td>
                {{ member.nationalID }}
              </td>
              <td>
                {{ member.mobilePhone }}
              </td>
              <td>
                {{ member.active }}
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div v-if="show">
      <transition name="modal-fade">
        <div class="modal-backdrop">
          <div class="modal"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription"
          >
            <header
              class="modal-header"
              id="modalTitle"
            >
              <slot name="header">
                نمایش اطلاعات کاربر ثبت نام شده

              </slot>
            </header>
            <section
              class="modal-body"
              id="modalDescription"
            >
               <!--CONTENT MODAL-->
              <slot name="body">
                <div v-if="modalUserShow.active===true">
                  {{ modalUserShow.username | upperUser }}  /
                  {{ modalUserShow.nationalID }}   /
                  {{ modalUserShow.mobilePhone | changePhone }}
                </div>
                <div v-else>
                کاربر فعال نمی باشد
                </div>
              </slot>
            </section>
            <footer class="modal-footer">
              <slot name="footer">
                <button
                  type="button"
                  @click="closeModal"
                  aria-label="Close modal"
                >
                  بستن
                </button>
              </slot>
            </footer>
          </div>
        </div>
      </transition>
    </div>
    </div>
  </div>
</template>
<script>
import Modal from './modal.vue';

export default {
  name: Modal,
  data() {
    return {
      usersList: [],
      modalUserShow: '',
      show: false,
      // users: null,
      isloading: true,
      filter: '',
    };
  },
    components: {
    Modal,
  },
  methods: {
    getUsers() {
      const getUsersOpt = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      fetch('http://127.0.0.1:9000/user/list', getUsersOpt)
        .then((response) => response.json())
        .then((data) => { 
          (this.usersList = data); 
          this.infoData = data;
          this.isloading = false;
          });
        
    },
    showdata(userData) {
      this.show = true;
      this.modalUserShow = userData;
    },
    closeModal() {
      this.show = false;
    },
    filterData(showfilter) {
      if (showfilter) {
        this.usersList = this.infoData.filter((member) => member.active === true);
      } else {
        this.usersList = this.infoData.filter((member) => member.active === false);
      }
    },
  },
  filters: {
    upperUser(value) {
      // eslint-disable-next-line no-param-reassign
      value = value.toString();
      return value.toUpperCase().trim();
    },
    changePhone(phone) {
      // eslint-disable-next-line no-param-reassign
      phone = phone.toString();
      return `+98${phone.slice(1)}`;
    },
  },
};
</script>