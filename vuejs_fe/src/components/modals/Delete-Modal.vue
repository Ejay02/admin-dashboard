<template>
  <div>
    <!-- Add a backdrop for the blur effect -->
    <div class="backdrop" v-if="showModal"></div>
    <div class="modal-container" v-if="showModal">
      <div
        class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
        tabindex="-1"
        role="dialog"
        id="modalChoice"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-3 shadow">
            <div class="modal-body p-4 text-center">
              <h5 class="mb-0">
                Are you sure you want to delete this product?
              </h5>
              <p class="mb-0">You can't undo this action.</p>
            </div>
            <div class="modal-footer flex-nowrap p-0">
              <button
                type="button"
                class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0"
                data-bs-dismiss="modal"
                @click="cancelDelete"
              >
                No thanks
              </button>
              <button
                type="button"
                class="btn btn-danger btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end text-danger"
                @click="confirmDelete"
              >
                <strong>Yes, delete</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",

  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },

  emits: ["confirmDelete", "cancelDelete"],

  methods: {
    confirmDelete() {
      this.$emit("confirmDelete");
    },
    cancelDelete() {
      this.$emit("cancelDelete");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
</style>
