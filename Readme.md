Photo Album Mobile Application
------------------------------
**Environment**
node version: 8.9.4
npm version: 5.6.0

**Installation**
Run the following commands: 

 - git clone https://github.com/HernanAA/PhotoAlbum.git
 - cd PhotoAlbum
 - npm install
 - react-native run-android
or
 - react-native run-ios

**If you get the following message:** 
*Error: While resolving module `react-native-vector-icons/MaterialIcons`, the Haste package `react-native-vector-icons` was found*
**run into the PhotoAlbum folder:**
**Windows**: del node_modules\react-native\local-cli\core\__fixtures__\files\package.json
**Mac**: rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json
For more information, you can visit https://github.com/oblador/react-native-vector-icons/issues/626#issuecomment-357405396

