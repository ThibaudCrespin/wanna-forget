import { Injectable } from "@angular/core";

import { Start } from "../models/start";

export class StartService {
    private start: Start = {id: 1, title: "Wanna Forget", version: "2.0.1", archives: "Archives" };

    getInitial(): Start {
        return this.start;
    }
}
