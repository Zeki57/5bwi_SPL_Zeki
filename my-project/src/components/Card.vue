<script setup lang="ts">
defineProps<{
  person: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    image: string;
    birthday: string;
    gender: string;
    address: {
      country: string;
    };
  };
}>();
</script>

<template>
  <div class="card">
    <img :src="person.image" :alt="person.firstname" class="avatar" />

    <h2>{{ person.firstname }} {{ person.lastname }}</h2>
    <p><strong>Email:</strong> {{ person.email }}</p>
    <p><strong>Telefon:</strong> {{ person.phone }}</p>
    <p><strong>Geschlecht:</strong> {{ person.gender }}</p>
    <p><strong>Geburtstag:</strong> {{ person.birthday }}</p>
    <p><strong>Land:</strong> {{ person.address.country }}</p>
  </div>
</template>

<style scoped>
.card {
  background: white;
  color: black;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.avatar {
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 12px;
}

h2 {
  margin-bottom: 12px;
}
</style>
