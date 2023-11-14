# Products App

A React Native app that fetches products from dummy JSON API and displays them.

## Features

- Built using React Native and Expo
- Built using Typescript
- Data fetching using TanStack React Query
- Testing with Jest and React Native testing library
- Husky and lint-staged to maintain code quality, running ESLint and Prettier before every commit.
- GitHub Actions to run tests on every commit
- Moti to animate the image in the Details screen

## Possible Improvements
In the case of a larger application, the selected item would be stored in redux instead of being passed as params in navigation.

## Getting Started

### Prerequisites

- Used node version 18.18. You can use nvm to switch to this version.

### Installation & Starting the app

- Clone the project

- Run

```
yarn install
```
- Run the app using
```
npx expo start
```
Then press i to run on ios

### Running tests
```
yarn run test
```

## Usage

The video below is an overview of what the app is about.

https://github.com/chefk5/products-app/assets/18053083/ba2c4b34-1b67-4096-869e-a84b7f176361

In case of errors in the API or no products are found while searching, the following screens are shown:

![Screenshot 2023-11-13 at 20 11 00](https://github.com/chefk5/products-app/assets/18053083/ebf07ac7-c714-49ac-babd-064cd6c777ed)
![Screenshot 2023-11-13 at 20 11 43](https://github.com/chefk5/products-app/assets/18053083/c63194d7-d1c7-490f-9dbe-1626e8ac5164)

