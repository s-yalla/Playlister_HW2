import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * DeleteSong_Transaction
 * 
 * 
 * @author McKilla Gorilla
 * @author Sadashiva Yalla
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initSongIndex, initSongObject) {
        super();
        this.app = initApp;
        this.initSongIndex = initSongIndex;
        this.initSongObject = initSongObject;
    }

    doTransaction() {
        this.app.removeSong(this.initSongIndex);
    }
    
    undoTransaction() {
        this.app.undoRemoveSong(this.initSongIndex, this.initSongObject);
    }
}