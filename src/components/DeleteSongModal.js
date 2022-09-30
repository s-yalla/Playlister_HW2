import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { song, deleteSongCallback, hideDeleteSongModalCallback } = this.props;
        let tempVal = "";
        if (song) {
            tempVal = song.title;
        }
        return (
            <div 
            className="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-delete-song-root'>
                        <div className="modal-north">
                            Remove Song?
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                                Do you want to permanently remove <b>{tempVal}</b> from the playlist?
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="delete-song-confirm" 
                                className="modal-button" 
                                onClick={deleteSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-song-cancel" 
                                className="modal-button" 
                                onClick={hideDeleteSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}