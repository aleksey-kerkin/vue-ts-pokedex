<script setup lang="ts">
import { type Pokemon } from "@/entities/pokemon/model/types";
import { ref } from "vue";

const props = defineProps<{
  pokemon: Pokemon;
}>();

const imageError = ref<boolean>(false);

const handleImageError = () => {
  imageError.value = true;
  imageURL.value = "https://placehold.jp/150x150.png"; // [TODO] /public asset
};

const imageURL = ref(
  props.pokemon.sprites.other["official-artwork"].front_default,
);
</script>

<template>
  <article
    class="rounded-lg bg-zinc-50 p-4 shadow transition-shadow duration-75 hover:shadow-lg"
  >
    <img
      :src="imageURL"
      :alt="pokemon.name"
      @error="handleImageError"
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
