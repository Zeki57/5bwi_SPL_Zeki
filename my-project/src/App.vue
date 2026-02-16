<template>
  <div class="container">
    <Card v-for="person in persons" :key="person.id" :person="person" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Card from "./components/Card.vue";

const persons = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://fakerapi.it/api/v2/persons?_quantity=10",
    );
    const data = await response.json();
    persons.value = data.data;
  } catch (error) {
    console.error("Fehler beim Laden:", error);
  }
});
</script>

<style>
.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
