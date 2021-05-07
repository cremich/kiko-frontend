<template>
  <section class="section">
    <h2 class="subtitle is-2 has-text-weight-light">&#x1F9EA; Aktive Test-Pools</h2>
    <div class="columns is-multiline">
      <div class="column" v-for="pool in pools" :key="pool.poolName">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <span class="subtitle is-3">{{ pool.poolName }}</span>
            </div>
            <div class="buttons">
              <b-button type="is-success" outlined expanded @click="openModal(pool, 'N')"
                >Testergebnis negativ</b-button
              >
              <b-button type="is-danger" expanded @click="openModal(pool, 'P')">Testergebnis positiv</b-button>
            </div>
          </div>
          <footer class="card-footer"></footer>
        </div>
      </div>
    </div>

    <b-modal :active="confirmModal" @cancel="closeModal" custom-class="p-4">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Ein kurzer Hinweis!</p>
        </header>

        <div class="card-content has-text-white" v-bind:class="testResultBackground">
          <div class="content has-text-centered">
            <p class="is-size-1 is-uppercase">&#x261D;️ Achtung!</p>
            <p>
              Die Übermittlung des <span class="has-text-weight-bold">Testergebnisses</span> löst eine automatische
              Benachrichtigung an die Empfänger des Test-Pools aus. Bist du sicher?
            </p>
            <div class="buttons is-centered">
              <b-button @click="forwardTestResult">Ja, Testergebnis weiterleiten</b-button>
              <b-button type="is-light" outlined @click="closeModal">Nein, Dialog schließen</b-button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>
<script>
import { GraphQLAPI as API } from "@aws-amplify/api-graphql";
import { ListPools, ProcessTestResult } from "@/graphql";

export default {
  components: {},
  data() {
    return {
      pools: [],
      activePool: {},
      activeTestResult: "",
      confirmModal: false,
    };
  },
  computed: {
    testResultBackground: function () {
      return {
        "has-background-danger": this.activeTestResult === "P",
        "has-background-success": this.activeTestResult === "N",
      };
    },
  },
  methods: {
    async fetchGroups() {
      const response = await API.graphql({ query: ListPools });
      this.pools = response.data.listPools;
    },
    async forwardTestResult() {
      await API.graphql({
        query: ProcessTestResult,
        variables: { input: { poolName: this.activePool.poolName, testResult: this.activeTestResult } },
      });
      this.confirmModal = false;
      this.$buefy.snackbar.open(`Super! Das Testergebnis wurde erfolgreich weitergeleitet`);
    },
    closeModal() {
      this.activePool = {};
      this.activeTestResult = "";
      this.confirmModal = false;
    },
    openModal(pool, testResult) {
      this.activePool = pool;
      this.activeTestResult = testResult;
      this.confirmModal = true;
    },
  },
  created() {
    this.fetchGroups();
  },
};
</script>
<style></style>
