<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label>Title</label>
      <input v-model="title" type="text" class="form-control" name="title" />
    </div>

    <div class="form-group">
      <label>Image</label>
      <input v-model="image" class="form-control" name="image" />
    </div>

    <button :disabled="isFormInvalid" class="btn btn-outline-secondary mt-3">
      Save
    </button>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Product-create",

  setup() {
    const title = ref("");
    const image = ref("");
    const router = useRouter();

    const isFormInvalid = computed(
      () => !title.value.trim() || !image.value.trim()
    );

    const submit = async () => {
      if (isFormInvalid.value) {
        // Do not submit if the form is invalid
        return;
      }

      await fetch("http://localhost:8000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.value,
          image: image.value,
        }),
      });

      await router.push("/admin/products");
    };

    return { title, image, submit, isFormInvalid };
  },
};
</script>
