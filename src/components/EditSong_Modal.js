import React, { Component } from 'react';

export default class EditSongModal extends Component 
{

    handleClick = (event) => {
        let a = document.getElementById('title').value;
        let b = document.getElementById('artist').value;
        let c = document.getElementById('yID').value;
        this.props.editSongCallback(a,b,c)
    }
    
    render() {
        
        const { editSongCallback, hideEditSongModalCallback } = this.props;

        return (
            <div
                class="modal"
                id="edit-song"
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='edit-list-root'>
                        <div class="modal-north">
                            Edit song
                        </div>                
                        <div class="modal-center">
                                <span class="edit-list-text">Title: </span><input type="text" id="title" name="title"/>
                                <span class="edit-list-text">Artist: </span><input type="text" id="artist" name="artist"/>
                                <span class="edit-list-text">YouTube Id: </span><input type="text" id="yID" name="youtubeid"/>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm" 
                                class="modal-button"
                                onClick={this.handleClick} 
                                value='Confirm' />
                            <input type="button"
                                id="edit-song-cancel" 
                                class="modal-button"
                                onClick={hideEditSongModalCallback} 
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}