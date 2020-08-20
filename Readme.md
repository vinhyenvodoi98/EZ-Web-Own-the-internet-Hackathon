<h1  align="center">EzBlog 👋</h

![alt](https://github.com/vinhyenvodoi98/EZ-Web-Own-the-internet-Hackathon/blob/master/images/home.png)

# NOTE

I've completed another project and want to submit it. So check it out :metal:

:point_right: Submission # 2 :

https://github.com/vinhyenvodoi98/siasky-hosting

# Video demo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/aGWhgPRu0Mw/0.jpg)](https://youtu.be/aGWhgPRu0Mw)

# Live on
Try my app in :

https://siasky.net/_BUIFL2I2kXa6pcQiwAU80a7zp_rbTzSNxplCJIK3qJKxA

Note because of route dom so please click to Post in navbar to try. Enjoy it !
# EzBlog
This demo includes 2 parts:

1. the browser UI (Reactjs)
2. the Namebase (Nodejs)

This app is a blog sharing platform based on skynet and namebase. With the main idea that users can create blogs on any topic using markdown. After completion user can generate a skylink for that post. Also there is a feature that is townsquare, where people can publish their blog for everyone to read.

# Workflow
- User write blog then generate skylink for this blog. The skylink creation completely runs in the browser side to ensure the privacy of that blog to the user.
- When skylink has been create, have an option for user that do user want to public blog of them on Townquare or not? The idea below is i'm using namebase to mapping skylink as json and use it as api.

Example :
```js
//I save the skylink as application / json
[
  {
  name : "Ethereum 101"
  skylink : "http://skylink/<SKYLINK_OLD>/
  }
]
```
After choosing public to townsquare I will update this json then create skylink
```js
[
  {
  name : "Ethereum 101"
  skylink : "http://skylink/<SKYLINK_OLD>/
  },
  {
  name : "Bitcoin consensus"
  skylink : "http://skylink/<SKYLINK_NEW>/
  }
]
```
Then send request to server nodejs to update my domain (namebase) with this new skylink. This process will have to wait a while for the handshake to verify transaction. After completing I just need to call `skynet.net/hns/<MY_DOMAIN>` link to update the articles on the townsquare .

# Run

## Namebase (nodejs server)
1, Install package
```
npm install

//OR

yarn install
```
2, Create .env file and enter nambase config
```js
ACCESS_KEY=
SECRET_KEY=
DOMAIN=
```
3, start server
```
npm run start:dev

//OR

yarn start:dev
```
## Frontend
1, Install package
```
npm install

//OR

yarn install
```
2, Create .env file and enter nambase config
```
REACT_APP_SERVER_BASEURL=
REACT_APP_DOMAIN=

// example in this repo

REACT_APP_SERVER_BASEURL=http://localhost:4000
REACT_APP_DOMAIN=dkoi
```
3, Run
```
yarn start
```
# Here's the interface:

## Home page
![alt](https://github.com/vinhyenvodoi98/EZ-Web-Own-the-internet-Hackathon/blob/master/images/home.png)

## After generate skylink
![alt](https://github.com/vinhyenvodoi98/EZ-Web-Own-the-internet-Hackathon/blob/master/images/afterGenerateSkylink.png)

## Townsquare
![alt](https://github.com/vinhyenvodoi98/EZ-Web-Own-the-internet-Hackathon/blob/master/images/townsquare.png)
