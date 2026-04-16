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
  margin: 10px;
  border-radius: 8px;
  background: white;
  color: black;
}
</style>
