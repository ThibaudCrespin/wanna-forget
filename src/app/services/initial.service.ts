import { Injectable } from "@angular/core";

import { Initial } from "../models/initial";

@Injectable({
    providedIn: "root"
})
export class InitialService {
    private initial: Initial = {
        id: 1,
        title: "Wanna Forget",
        text: "INITIALISATION... /n/n"+
        "Woke small batch chia pork belly. Craft beer leggings copper mug, flexitarian pickled ennui hashtag"+
        "ethical cardigan narwhal yuccie microdosing snackwave paleo heirloom. Chicharrones chia irony, subway"+
        "tile bespoke shaman meggings kale chips microdosing gentrify drinking vinegar you probably haven't"+
        "heard of them jean shorts. Tumeric pork belly kogi copper mug chambray echo park synth, kinfolk man bun."+
        "Flannel put a bird on it tacos health goth. Fashion axe hashtag artisan small batch...."+
        "/n/n BUILD SUCCEED. /n/n"+
        "STARTING APPLICATION..."
    };

    getInitial(): Initial {
        return this.initial;
    }
}
