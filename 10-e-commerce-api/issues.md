ussues found while dev/testing process:

when user registers, if token lifetime is defined incorrectly,  still  the user is registered  in db, which gives no chance to the user to try to register with the same email again
 - solution -- prevent user from being registered(middleware like) if any issue occurs with JWT_LIFETIME


6/15 
note - understand how to connect "properly" both frontend and backend
 find the problem of why i dont get routes being displayed when hitting btns on frontend, i want this app to be running 

 it is clearly that app does not have any other UI functionality apart from sign in/out  compared to what app has on the backend so, according to what i have in my roadmap i need to build e-commerce app. Obviously for that i need a bit more adnvanced skills in UI building with React, and as a plus, have more profound knowledge and skills to make the app enough secure on the server side. On the whole, I am talking about a well thought-out app to withstand the presure of users, bots, ddos attacks etc 

Note:

 if this part of roadmap i wrote in external files elsewhere comes to the end, 
 I can confidently take a couple of days, building the thought-out design for porfolio, include all the built projects within, route them smoothly to my origin domain 'illustrates.info'
    (deployment)
    use clouflare for easy dns set up and additional security
    use providers like  vercel or render - for better security and handling the app itself   

before deployment - built the app properly = eslint, webpack ...(add here)

Would be great to great to use existing skills and containarize my app






This md can be modified anytime, look up to the previous versions of it.


