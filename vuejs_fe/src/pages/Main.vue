<template>
  <main class="dark-background">
    <Nav />
    <div class="album py-5 text-bg-secondary p-3">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="product in products" :key="product.id">
            <div class="card shadow-sm mb-3">
              <img :src="product.image" height="180" />
              <div class="card-body">
                <p class="card-text">
                  {{ product.title }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      @click="like(product.id)"
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Like
                    </button>
                  </div>
                  <small class="text-body-secondary">{{ product.likes }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import Nav from "@/components/Nav.vue";
import { Product } from "@/interfaces/product";

export default {
  components: { Nav },
  name: "Main-page",

  setup() {
    const products = ref([] as Product[]);

    onMounted(async () => {
      const res = await fetch(`http://localhost:8001/api/products`);

      products.value = await res.json();
    });

    const like = async (id: number) => {
      await fetch(`http://localhost:8001/api/products/${id}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      products.value = products.value.map((p: Product) => {
        if (p.id === id) {
          p.likes++;
        }
        return p;
      });
    };

    return {
      like,
      products,
    };
  },
};
</script>

<style></style>
