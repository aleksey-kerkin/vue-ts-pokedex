<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchPokemonList } from "@/entities/pokemon/model/pokemon.model";
import { type Pokemon } from "@/entities/pokemon/model/types";

const pokemonList = ref<Pokemon[]>([]);
const isLoading = ref<boolean>(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    pokemonList.value = await fetchPokemonList();
  } catch (err) {
    error.value = "Failed to load Pokémon data";
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="container">
    <p v-if="isLoading" class="animate-pulse text-center">Loading Pokémon...</p>
    <p v-if="error" class="text-rose-500">{{ error }}</p>
    <div v-else class="gap4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="pokemon in pokemonList"
        :key="pokemon.id"
        class="rounded-lg bg-white p-4 shadow"
      >
        <h2>{{ pokemon.name }}</h2>
        <p>#{{ pokemon.id.toString().padStart(3, "0") }}</p>
      </div>
    </div>
  </div>
</template>
