import { Injectable } from "@angular/core";
import { firestore } from "nativescript-plugin-firebase";
import firebase = require("nativescript-plugin-firebase/app");

import { User } from "../models/user";

export class UserService {
    private userId: string = null;
    private user: User;

    getCurrentUser(): User {
        return this.user;
    }

    setCurrentUser(_user: User) {
        this.user = _user;
    }

    resetUser() {
        this.userId = null;
        this.user = null;
    }

    getCurrentUserId(): string {
        return this.userId;
    }

    setCurrentUserId(newId: string) {
        this.userId = newId;
    }

    getUserById(id: string): void {
        firebase.firestore().collection("users").doc(id).get()
            .then((doc: firestore.DocumentSnapshot) => {
                if (doc.exists) {
                    this.setCurrentUser(<User>doc.data());
                } else {
                    console.log("USER NOT FOUND");
                }
            })
            .catch(error => console.log("Error getting document:", error));
        return;
    }
}
