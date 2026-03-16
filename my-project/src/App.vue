<script setup lang="ts">
import { ref, onMounted } from "vue";
import Card from "./components/Card.vue";

type Person = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
};

const persons = ref<Person[]>([]);

onMounted(async () => {
  const response = await fetch("http://localhost:8055/items/people");
  const result = await response.json();
  persons.value = result.data;
});
</script>

<template>
  <div>
    <h1>Directus Persons</h1>

    <Card v-for="person in persons" :key="person.id" :person="person" />
  </div>
</template>
