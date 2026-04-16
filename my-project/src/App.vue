<script setup lang="ts">
import { ref, onMounted } from "vue";
import Card from "./components/Card.vue";

type Person = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  image?: string | null;
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
  <div class="page">
    <header class="page-header">
      <h1>Persons</h1>
      <p>Automatisch geladene Bilder mit Picsum-Fallback.</p>
    </header>

    <div class="card-list">
      <Card
        v-for="(person, index) in persons"
        :key="person.id"
        :person="person"
        :fallbackImage="`https://picsum.photos/200/300?random=${index + 1}`"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 32px;
  max-width: 1100px;
  margin: 0 auto;
}
.page-header {
  margin-bottom: 24px;
}
.page-header h1 {
  margin: 0 0 8px;
  font-size: 2rem;
}
.page-header p {
  margin: 0;
  color: #555;
}
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
</style>
