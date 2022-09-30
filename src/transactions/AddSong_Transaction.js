import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * DeleteSong_Transaction
 * 
 * 
 * @author McKilla Gorilla
 * @author Sadashiva Yalla
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, currIndex) {
        super();
        this.app = initModel;
        this.index = currIndex;
    }

    doTransaction() {
        this.app.addSong();
    }
    
    undoTransaction() {
        this.app.undoADD(this.index);
    }
}