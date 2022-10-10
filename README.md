# Template for GoogleAppsScript development with TypeScript

This is a MINIMUM template for GoogleAppsScript development with TypeScript.

## 📚 Features
- Develop with TypeScript  
- Bundle files with Webpack5 (You can use npm modules)
- Develop locally and deploy with Clasp 

## 🏃‍♂️ Get Started
#### 1. Click [Use this template] button
<img width="473" alt="matcher-inc_gas-template-sample__TypeScript___Webpack___Clasp_で_GAS_の開発を始められるテンプレート作ってみる試み" src="https://user-images.githubusercontent.com/78125846/192661673-6bc8dbc4-fd4c-4d02-ab74-c6808dbb31de.png">

#### 2. Clone the repository
```
git clone <url> my-gas-project
```

#### 3. Move directory
```
cd my-gas-project
```

#### 4. Install npm dependencies
```
npm install
```

#### 5. Past your Script ID in the `.clasp.json`

```json
{
  "scriptId": "<Your Script ID>",
  "rootDir": "./dist/"
}
```

#### 6. If you are new to clasp, run the following command and authorize clasp
 
```
npx clasp login --no-localhost
```

## 🚀 Commands
```bash
# webpack build
npm run build

# webpack build in watch mode
npm run build:watch

# push dist files to script.google.com
npm run push

# push dist files to script.google.com in watch mode
npm run push:watch

# webpack build & push dist files to script.google.com
npm run deploy
```
