import { Injectable } from "@angular/core";

import { Memory } from "../models/memory";

export class MemoryService {

    private memories = new Array<Memory>(
        { id: 1, user: 1, time: '8:30', duration: "1'30", location: 'Chinatown', size: '168.0', picture: 'https://source.unsplash.com/random/100x100?place', preview: 'https://source.unsplash.com/random/400x250', video: ""},
        { id: 2, user: 1, time: '9:30', duration: "2'07", location: 'Chinatown', size: '92.2', picture: 'https://source.unsplash.com/random/110x110?place', preview: 'https://source.unsplash.com/random/400x250', video: ""},
        { id: 3, user: 1, time: '10:30', duration: "0'30", location: 'Manhattan', size: '234.0', picture: 'https://source.unsplash.com/random/90x90?place', preview: 'https://source.unsplash.com/random/400x250', video: ""},
        { id: 4, user: 1, time: '11:30', duration: "1'12", location: 'Liberty Island', size: '127.5', picture: 'https://source.unsplash.com/random/100x100?place', preview: 'https://source.unsplash.com/random/400x250', video: ""},
    );

    getMemories(): Array<Memory> {
        return this.memories;
    }

    getMemoryById(_id: Number): Memory {
        return this.memories.filter((item) => item.id == _id)[0];
    }

    getMemoriesByUser(userId: Number): Array<Memory> {
        return this.memories.filter((item) => item.user === userId);
    }
}
