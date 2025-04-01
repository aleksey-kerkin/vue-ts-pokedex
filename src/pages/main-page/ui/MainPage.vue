<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchPokemonList } from "@/entities/pokemon/model/pokemon.model";
import { type Pokemon } from "@/entities/pokemon/model/types";
import PokemonCard from "@/widgets/pokemon-card/ui/PokemonCard.vue";
import PokemonSkeleton from "@/shared/ui/skeleton/PokemonSkeleton.vue";

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
  <div class="container min-h-screen place-content-center">
    <div
      v-if="isLoading"
      class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
    >
      <PokemonSkeleton v-for="n in 12" :key="n" />
    </div>
    <!-- <p v-if="isLoading" class="animate-pulse text-center text-5xl">
      Loading Pokémon data...
    </p> -->
    <p v-if="error" class="text-rose-500">{{ error }}</p>
    <div v-else class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <!-- <div
        v-for="pokemon in pokemonList"
        :key="pokemon.id"
        class="rounded-lg bg-emerald-100 p-4 shadow"
      >
        <h2>{{ pokemon.name }}</h2>
        <p>#{{ pokemon.id.toString().padStart(3, "0") }}</p>
      </div> -->
      <PokemonCard
        v-for="pokemon in pokemonList"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>
