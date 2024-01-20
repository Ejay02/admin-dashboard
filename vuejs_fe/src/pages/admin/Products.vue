<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <div class="btn-toolbar mb-2 mb-md-0">
      <router-link
        to="/admin/products/create"
        class="btn btn-sm btn-outline-secondary"
      >
        Add
      </router-link>
    </div>
  </div>
  <div class="table-responsive small">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Likes</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="align-middle">
          <td>{{ product.id }}</td>
          <td><img :src="product.image" height="50" /></td>
          <td>{{ product.title }}</td>
          <td>{{ product.likes }}</td>
          <td>
            <div class="btn-group mr-2">
              <router-link
                :to="`/admin/products/${product.id}/edit`"
                class="btn btn-sm btn-outline-secondary"
                @click="deleteProduct(product.id)"
                >Edit</router-link
              >
              <a
                href="#"
                class="btn btn-sm btn-outline-secondary"
                @click="deleteProduct(product.id)"
                >Delete</a
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--  DeleteModal component -->
  <delete-modal
    v-if="showDeleteModal"
    :showModal="showDeleteModal"
    @confirmDelete="deleteProductConfirmation"
    @cancelDelete="cancelDelete"
  />
</template>

<script lang="ts">
import { onMounted, Ref, ref } from "vue";
import { Product } from "../../interfaces/product";
import DeleteModal from "@/components/modals/Delete-Modal.vue";

export default {
  components: { DeleteModal },
  name: "Products-list",

  setup() {
    const products = ref([]);
    const showDeleteModal = ref(false);
    const productIdToDelete: Ref<number | null> = ref(null);

    onMounted(async () => {
      const res = await fetch("http://localhost:8000/api/products");

      products.value = await res.json();
    });


    const deleteProduct = (id: number) => {
      // Set the productIdToDelete and show the modal
      productIdToDelete.value = id;
      showDeleteModal.value = true;
    };

    const deleteProductConfirmation = async () => {
      if (productIdToDelete.value) {
        await fetch(
          `http://localhost:8000/api/products/${productIdToDelete.value}`,
          {
            method: "DELETE",
          }
        );

        // Update the products list after deletion
        products.value = products.value.filter(
          (p: Product) => p.id !== productIdToDelete.value
        );
      }

      // Reset values
      productIdToDelete.value = null;
      showDeleteModal.value = false;
    };

    const cancelDelete = () => {
      // Reset values
      productIdToDelete.value = null;
      showDeleteModal.value = false;
    };

    return {
      products,
      deleteProduct,
      showDeleteModal,
      deleteProductConfirmation,
      cancelDelete,
    };
  },
};
</script>

<style></style>
