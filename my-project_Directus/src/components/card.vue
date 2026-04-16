<script setup lang="ts">
defineProps<{
  person: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    country: string;
  };
}>();
</script>

<template>
  <div class="card">
    <h2>{{ person.firstname }} {{ person.lastname }}</h2>
    <p><strong>Email:</strong> {{ person.email }}</p>
    <p><strong>Telefon:</strong> {{ person.phone }}</p>
    <p><strong>Land:</strong> {{ person.country }}</p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  background: white;
  color: black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
