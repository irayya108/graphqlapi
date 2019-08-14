# graphqltestapi
create new folder with any name ( Ex: graphqlapitest) go to the directory 
"cd  graphqlapitest"

## yarn Installation [yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

after installing the yarn you can test the yarn version  ```yarn --version```

To initialize the our projet we have to run ```yarn init``` command

- name ----
- description -----
- entry point: index.js
- repository ur: (your repository url)
- author: name of the author

finally it will creates the package.json

we will add index.js file as root of the application this will be the entry point for our project

Install the gaphql-yoga, This will helps to to build api very quickly ( almost like "create-react-app" this will provides easy setup)

```graphqlapitest> yarn add graphql-yoga```

Intall nodemon

```graphqlapitest>yarn add global nodemon```

setup the babel and nodemon with nodeJS and we have to create .babelrc file in the root directory( to use latest JavaScript)
we have to install some dependencies

```graphqlapitest>yarn add global babel-cli --ignore-engines```

(To avoid the incompatibility of engines we have to use  --ignore-engines)


```graphqlapitest>yarn add babel-cli babel-preset-env babel-preset-stage-3 --save-dev```

(@babel/preset-env is a smart preset that allows you to use the latest JavaScript 
without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s))


we have to configure in package.json in order to use "yarn start" command

```
"scripts": {
    "start": "nodemon --exec babel-node index.js"
  },
  ```

we have to create the .babelrc file in the root directory

