import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "./assets/scss/kiko.scss";
import { applyPolyfills, defineCustomElements } from "@aws-amplify/ui-components/loader";
import { AuthErrorStrings } from "@aws-amplify/auth";
import { Amplify } from "aws-amplify";
import { I18n } from "aws-amplify";
import { Translations } from "@aws-amplify/ui-components";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import aws_exports from "./aws-exports";

Vue.config.productionTip = false;

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

I18n.setLanguage("de");
I18n.putVocabulariesForLanguage("de", {
  [Translations.SIGN_IN_ACTION]: "Anmelden",
  [Translations.EMAIL_LABEL]: "E-Mail Adresse: *",
  [Translations.EMAIL_PLACEHOLDER]: "ich@meine-kita.de",
  [Translations.PASSWORD_LABEL]: "Passwort: *",
  [Translations.PASSWORD_PLACEHOLDER]: "********",
  [Translations.FORGOT_PASSWORD_TEXT]: "Passwort vergessen?",
  [Translations.RESET_PASSWORD_TEXT]: "Passwort zurücksetzen",
  [Translations.RESET_YOUR_PASSWORD]: "Setze dein Passwort zurück",
  [Translations.BACK_TO_SIGN_IN]: "Zurück zur Anmeldung",
  [Translations.SEND_CODE]: "Sende Code",
  [Translations.CODE_LABEL]: "Verifizierungs Code",
  [Translations.CODE_PLACEHOLDER]: "123456",
  [Translations.NEW_PASSWORD_LABEL]: "Neues Passwort:",
  [Translations.NEW_PASSWORD_PLACEHOLDER]: "********",
  [AuthErrorStrings.DEFAULT_MSG]: "Fehler bei der Authentifizierung",
  [AuthErrorStrings.EMPTY_PASSWORD]: "Das Passwort darf nicht leer sein",
  [AuthErrorStrings.EMPTY_CODE]: "Der Verifizierungs Code dar nicht leer sein",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(Buefy);
