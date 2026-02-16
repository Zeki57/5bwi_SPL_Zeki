<template>
  <div class="card">
    <img :src="person.image" alt="person" />
    <h3>{{ person.firstname }} {{ person.lastname }}</h3>
    <p>{{ person.email }}</p>
    <p>{{ person.phone }}</p>
    <p>{{ person.address.country }}</p>
  </div>
</template>

<script setup>
defineProps({
  person: Object,
});
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  width: 220px;
  text-align: center;
  padding-top: 30px;
}

img {
  width: 100px;
  border-radius: 50%;
}
</style>
