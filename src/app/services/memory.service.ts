import { Injectable } from "@angular/core";
import { firestore } from "nativescript-plugin-firebase";
import firebase = require("nativescript-plugin-firebase/app");

import { Memory } from "../models/memory";
import { _createNgProbe } from "@angular/platform-browser/src/dom/debug/ng_probe";

export class MemoryService {

    private memories: Array<Memory>;
    private activeMemory: Memory;

    getMemories(): Array<Memory> {
        return this.memories;
    }

    setMemories(_memories: Array<Memory>): void {
        this.memories = _memories;
    }

    getActiveMemory(): Memory {
        return this.activeMemory;
    }

    setActiveMemory(_memory: Memory): void {
        console.log(_memory);
        this.activeMemory = _memory;
    }

    async getMemoryById(id: string) {
        return await firebase.firestore().collection("memories").doc(id).get()
            .then((doc: firestore.DocumentSnapshot) => {
                if (doc.exists) {
                    this.setActiveMemory(<Memory> doc.data());
                } else {
                    console.log("MEMORY NOT FOUND");
                }
            })
            .catch(error => console.log("Error getting document:", error));
    }

    getMemoriesByUser(userId: string): void {
        const query: firestore.Query = firebase.firestore().collection("memories")
            .where("user", "==", userId)
            .orderBy("time", "desc");
        query
            .get()
            .then((querySnapshot: firestore.QuerySnapshot) => {
                let res = [];
                querySnapshot.forEach(doc => {
                    const mem = <Memory>{
                        id: doc.id,
                        ...doc.data()
                    };
                    res.push(mem);
                });
                this.setMemories(res);
            })
            .catch(err => console.log("Error getting memories:" + err));
    }

    deleteMemory(id: string): void {
        firebase.firestore().collection("memories").doc(id)
            .delete()
            .then(() => {
              console.log("MEMORY deleted");
            })
            .catch(err => console.log("Delete failed, error: " + err));
    }

    scrapMemory(memory: Memory): void {
        firebase.firestore().collection("saves").doc()
            .set({memory})
            .then(() => console.log("MEMORY Scraped"))
            .catch(err => console.log("Failed scraping, error: " + err));
    }

    getNextMemory(): Memory {
        return this.memories[0];
    }
}
