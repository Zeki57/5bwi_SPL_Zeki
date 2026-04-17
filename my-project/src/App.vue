<script setup lang="ts">
import { ref, onMounted } from "vue";
import Card from "./components/Card.vue";

type Person = {
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

const persons = ref<Person[]>([]);

onMounted(async () => {
  const response = await fetch(
    "https://fakerapi.it/api/v2/persons?_quantity=10",
  );
  const result = await response.json();
  persons.value = result.data;
});
</script>

<template>
  <div>
    <h1>Persons</h1>
    <Card v-for="person in persons" :key="person.id" :person="person" />
  </div>
</template>
