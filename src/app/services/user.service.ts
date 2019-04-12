import { Injectable } from "@angular/core";

import { User } from "../models/user";

export class UserService {
    private userId: Number;

    private users = new Array<User>(
        { id: 0, firstName: "Hubert", lastName: "Bonnisseur de la Bath", picture: "https://source.unsplash.com/featured/100x100?portrait,man" },
        { id: 1, firstName: "Noël", lastName: "Flantier", picture: "https://source.unsplash.com/featured/100x100?portrait,man" },
        { id: 2, firstName: "Brice", lastName: "de Nice", picture: "https://source.unsplash.com/featured/100x100?portrait,man" },
        { id: 3, firstName: "Lucien", lastName: "Bramart", picture: "https://source.unsplash.com/featured/100x100?portrait,man" },
        { id: 4, firstName: "Jean", lastName: "Dujardin", picture: "https://source.unsplash.com/featured/100x100?portrait,man" },
    );

    getUserById(id: Number): User {
        return this.users.filter((user) => user.id === id)[0];
    }

    getCurrentUser(): User {
        return this.users.filter((user) => user.id === this.userId)[0];
    }

    getCurrentUserId(): Number {
        return this.users.filter((user) => user.id === this.userId)[0].id;
    }

    setCurrentUserId(newId: Number) {
        this.userId = newId;
    }
}
