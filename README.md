# React Native Coding Challenge

In this challenge you're going to create a basic Reddit app with React Native.
Reddit is a news website where registered users can submit posts or links to content that other users can vote and comment. Each of these posts is grouped into categories known as "subreddits".
Your app should list the last posts of the r/pics subreddit.
To obtain the list of posts of a subreddit use the following URL:
https://api.reddit.com/r/pics/hot.json
For more information about the JSON structure see:
JSON
Keep in mind functionality and code quality is more important than asthetic design.
Requirements:
Show a list of the posts in the r/pics subreddit
Each post must show the following data: thumbnail image (if present), title, author, total number of votes (score), number of comments and date of creation
Example layout (basic example):
Once the user taps on a post navigate to the post’s URL in a WebView
A brief explanation of your design and assumptions along with your code.

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

## Sort decision

In sort decision used in:

```
New -> sort by createdDate
Top -> sort by score number
Popular -> sort by num_comments
Hot/Controversial -> sort by num_comments
```

And all this sorting is doing in memory

---

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
