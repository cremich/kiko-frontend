# KIKO Frontend

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg?style=for-the-badge)](code_of_conduct.md)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/cremich?style=for-the-badge)](https://github.com/sponsors/cremich)
[![Paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/pools/c/8yGs7i3cOe)

Welcome to the KIKO Frontend 👋 This repository provides all frontend resources for the KIKO-App.

## 🔬 About KIKO

The name KIKO refers to the same named test project in the city of Cologne (Germany) based Kindergartens. Kiko (Kita Testung Köln) is a SARS-CoV-2 testing program for kindergartens and was developed by the Institute of Virology at the University Hospital of Cologne, Germany.

KiKo is based on the "lollipop method" and pool PCR testing.

The lollipop method is a non-invasive method of sample collection. In this method, participants have to suck on a swab - like a lollipop - for 30 seconds. These swabs can then be used to perform a PCR test. The swabs are tested in a pool, which means that one PCR is performed per testing group with the swabs of all participants. If the test result of the pool PCR is negative, it means that SARS-CoV-2 could not be detected in any of tested participants. If the result is positive, all participants must be retested individually to identify the infected person. To prevent infected persons from infecting others, they must remain at home until they are no longer infectious.

The KIKO-App is a serverless software solution running on AWS. It aims to support institutions like Kindergarten or schools to implement the pool testing in their environments. The KIKO-App supports to document test results and forward positive test results to the participants or their representatives.

TODO: sample screenshots

## 🚀 Getting Started

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Run tests

```
npm test
```

## 🎉 Usage

### Connect to your backend

To connect your frontend with your KIKO backend, please create an `aws-exports.js` file in the `src` folder and provide the following properties.
You find all values in the deployment output file or cloudformation outputs of your [KIKO backend deployment](https://github.com/cremich/kiko-backend#deploy-the-application) run.

```js
export default {
  aws_project_region: "dev-kiko-tenant-management.projectregion",
  aws_cognito_region: "dev-kiko-tenant-management.projectregion",
  aws_user_pools_id: "dev-kiko-tenant-management.cognitouserpoolid",
  aws_user_pools_web_client_id: "dev-kiko-tenant-management.webclientid",
  aws_appsync_graphqlEndpoint: "dev-kiko-api.awsappsyncgraphqlEndpoint",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
};
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/cremich/kiko-frontend/issues) for open issues or create one for feature
requests or if you have general questions.

Be also sure to review our [contributing guidelines](./CONTRIBUTING.md) and [code of conduct](./CODE_OF_CONDUCT.md).

## 🙏 Donation

We are very thankful if you decide to send us a donation. To ensure that we can cover the costs to provide the infrastructure for the KIKO app. To ensure that every Kindergarten in germany has access to the solution to implement the SARS-CoV-2 pool testings in their institutions. So that our kids and their families stay healthy! Please click on one of the

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/cremich)
[![Paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/pools/c/8yGs7i3cOe)
