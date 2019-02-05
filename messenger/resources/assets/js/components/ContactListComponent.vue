<template>
  <div>
    <b-form class="my-3">
      <b-form-input class="text-center" type="text" placeholder="Buscar contacto..."></b-form-input>
    </b-form>

    <b-list-group>
      <!-- Insercion de un componente -->
      <contact-component
        v-for="conversation in convarsations"
        :key="conversation.id"
        :conversation="conversation"
        @click="selectConversation"
      ></contact-component>

      <!-- <contact-component variant="dark"></contact-component>

      <contact-component variant></contact-component>

      <contact-component variant="secondary"></contact-component>-->
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      convarsations: []
    };
  },

  mounted() {
    this.getConversations();
  },
  methods: {
    getConversations() {
      axios.get("/api/conversations").then(response => {
        this.convarsations = response.data;
      });
    },
    selectConversation(){
      console.log('select');
    }
  }
};
</script>
