<template>
  <section class="section">
    <div class="container">
      <router-link to="dashboard">&larr; zur Übersicht</router-link>
      <h2 class="subtitle is-2 has-text-weight-light">Datenschutzvereinbarungen</h2>
      <p>
        Im Zuge der Einführung der Lollipop-Tests in unserer Einrichtung, werden wir Ihre Handynummer die Sie zwecks
        Kontaktaufnahme bei uns hinterlegt haben, in unser System zur automatischen Weiterleitung der
        Pool-Test-Ergebnisse einspeisen. Dies ist wichtig, um die Informationswege kurz zu halten und die Weiterleitung
        der Testergebnisse zuverlässig und schnell an Sie weitergeben zu können. So ist es uns möglich, einen effektiven
        Infektionsschutz zu ermöglichen und Infektionsketten frühzeitig zu unterbinden.
      </p>
      <p>
        Die Handynummer wird ausschließlich dazu verwendet, Sie im Falle eines positiven Pool-Tests über das
        Testergebnis dieses Pool-Tests zu informieren. Die Handynummer wird nicht Dritte weitergegeben. Einzig die
        KiTa-Leitung hat einen Zugriff auf die hinterlegten Daten.
      </p>
      <p>
        Das System wird nur für die Dauer der Durchführung der Lollipop-Tests verwende. Nach Abschaltung des Systems
        werden Ihre Daten automatisch gelöscht. Sie haben jederzeit die Möglichkeit der Verwendung zu widersprechen.
        Bitte wenden Sie sich hierzu oder bei weiteren Fragen an die KiTa Leitung."
      </p>
    </div>
  </section>
</template>

<style lang="scss">
section {
  p:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
