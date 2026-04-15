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
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    const response = await fetch(
      "https://fakerapi.it/api/v2/persons?_quantity=10",
    );
    const result = await response.json();
    persons.value = result.data ?? [];
  } catch (err) {
    console.error(err);
    error.value = "Daten konnten nicht geladen werden.";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="wrapper">
    <h1>Persons</h1>

    <p v-if="loading">Lade Daten...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else-if="persons.length === 0">Keine Personen gefunden.</p>

    <div v-else class="grid">
      <Card v-for="person in persons" :key="person.id" :person="person" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 30px;
}

h1 {
  text-align: center;
  margin-bottom: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
</style>
