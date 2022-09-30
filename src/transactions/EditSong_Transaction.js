import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * DeleteSong_Transaction
 * 
 * 
 * @author McKilla Gorilla
 * @author Sadashiva Yalla
 */
 export default class EditSongTrans extends jsTPS_Transaction {
    constructor(initApp, initIndex, newSongObj, OldSOngOBj) {
        super();
        this.app = initApp;
        this.songIndex = initIndex;
        this.newSong = newSongObj;
        this.prevSong = OldSOngOBj;
    }

    doTransaction() {
        this.app.editSong(this.newSong, this.songIndex);
    }
    
    undoTransaction() {
        this.app.editSong(this.prevSong, this.songIndex);
    }
}