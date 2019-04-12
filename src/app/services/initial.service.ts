import { Injectable } from "@angular/core";

import { Initial } from "../models/initial";

@Injectable({
    providedIn: "root"
})
export class InitialService {
    private initial: Initial = {id: 1, title: "Wanna Forget", text: "Lorem Ipsum" };

    getInitial(): Initial {
        return this.initial;
    }
}
