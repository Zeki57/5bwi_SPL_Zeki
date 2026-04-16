<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  person: {
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
  fallbackImage: string;
}>();

function getInitialImage() {
  const image = props.person.image;
  if (typeof image === "string" && image.trim()) {
    return image.trim();
  }
  return props.fallbackImage;
}

const imageSrc = ref(getInitialImage());

function handleImageError() {
  imageSrc.value = `https://picsum.photos/200/300?random=${Math.random()}`;
}
</script>

<template>
  <div class="card">
    <img
      :src="imageSrc"
      alt="Person"
      class="card-image"
      @error="handleImageError"
    />
    <div class="card-body">
      <h2>{{ props.person.firstname }} {{ props.person.lastname }}</h2>
      <p><strong>Email:</strong> {{ props.person.email }}</p>
      <p><strong>Telefon:</strong> {{ props.person.phone }}</p>
      <p><strong>Land:</strong> {{ props.person.address.country }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.12);
}
.card-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  background: #f3f4ff;
}
.card-body {
  padding: 22px;
}
.card-body h2 {
  margin: 0 0 12px;
  font-size: 1.25rem;
  color: #111827;
}
.card-body p {
  margin: 10px 0 0;
  color: #4b5563;
  line-height: 1.6;
}
.card-body strong {
  color: #111827;
}
</style>
