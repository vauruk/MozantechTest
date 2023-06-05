## Introduction

I used the follow frameworks:

React Native CLI to start the project
React Navigation to manager a navigation between screens
Redux tool kit to manager state
React Native Webview
Apply some concepts SOLID and Atomic Design
Project Structure is :

```
src/
    assets/ -> where is the images of the project
    components/ -> where is all the generic components
    hooks/ -> Where is the generics hooks about project ex: exceptionRequest hook
    service/ -> Where is the necessary classes to connected the externals services such as REST Api/ GraphQL
    store/ -> where is the basic config of the redux (reducers/store)
    util/ -> where is generic classes to help ex: consoleDebug or formatDate
    view/ - where is all the main screams ex: Home / PostView (Webview page)
        blocks/ -> look like main parts of the project view - what is the mains difference between /components and /blocks(common) - components are generics components such as calendar component, button, label etc, and /blocks are the business reusable components, such as PostItem, PostList

```



--------------------------------------


✔ Downloading template
✔ Copying template
✔ Processing template
✔ Installing Bundler
✔ Installing CocoaPods dependencies (this may take a few minutes)

Run instructions for Android:
• Have an Android emulator running (quickest way to get started), or a device connected.
• cd "/Users/vauruk/Documents/workspace/mozantech/MozantechTest" && npx react-native run-android

Run instructions for iOS:
• cd "/Users/vauruk/Documents/workspace/mozantech/MozantechTest" && npx react-native run-ios - or -
• Open MozantechTest/ios/MozantechTest.xcworkspace in Xcode or run "xed -b ios"
• Hit the Run button

Run instructions for macOS:
• See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.
