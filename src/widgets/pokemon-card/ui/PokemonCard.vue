<script setup lang="ts">
import { type Pokemon } from "@/entities/pokemon/model/types";

defineProps<{
  pokemon: Pokemon;
}>();
</script>

<template>
  <article
    class="rounded-lg bg-emerald-100 p-4 shadow transition-shadow duration-75 hover:shadow-lg"
  >
    <img
      :src="pokemon.sprites.other['official-artwork'].front_default"
      :alt="pokemon.name"
      class="h-32 w-full object-contain"
    />
    <h3 class="mt-2 text-xl font-bold capitalize">
      {{ pokemon.name }}
      <span class="text-sm text-zinc-500">
        #{{ pokemon.id.toString().padStart(3, "0") }}
      </span>
    </h3>

    <div class="mt-2 flex gap-2">
      <span
        v-for="type in pokemon.types"
        :key="type.type.name"
        class="rounded-full px-2 py-1 text-xs capitalize"
        :class="`bg-${type.type.name}-200`"
        >{{ type.type.name }}</span
      >
    </div>
  </article>
</template>
