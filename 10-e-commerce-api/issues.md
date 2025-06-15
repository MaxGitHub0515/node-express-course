ussues found while dev/testing process:

when user registers, if token lifetime is defined incorrectly,  still  the user is registered  in db, which gives no chance to the user to try to register with the same email again
 - solution -- prevent user from being registered(middleware like) if any issue occurs with JWT_LIFETIME
