<template>
  <div id="list">
    <div class="compo-container">
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
      usersList: [],
    };
  },
  methods: {
    getUsers() {
      const getUsersOpt = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      fetch('http://127.0.0.1:9000/user/list', getUsersOpt)
        .then((response) => response.json())
        .then((data) => { (this.usersList = data); });
    },
  },
};
</script>