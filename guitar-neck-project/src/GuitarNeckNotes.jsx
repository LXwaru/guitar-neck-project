import { useState } from 'react';
import GuitarNeck from './GuitarNeck';


const GuitarNeckNotes = () => {
    const [selectedNote, setSelectedNote] = useState();
    
    const handleNoteChange = (e) => {
        setSelectedNote(e.target.value);
        console.log(e.target.value)
    }
    console.log(selectedNote)
    const handleNoteLighterChange = (newSelectedNote) => {
        console.log('called?', newSelectedNote, newSelectedNote === 0)
        if (newSelectedNote === '0') {
            console.log('C')
            return (
                <>    
                    <div className="note-C-6"></div>
                    <div className="note-C-5"></div>
                    <div className="note-C-4"></div>
                    <div className="note-C-3"></div>
                    <div className="note-C-2"></div>
                    <div className="note-C-1"></div>
                </>
            )
        } else if (newSelectedNote === '1') {
            console.log('C# / Db') 
            return (
                <>    
                    <div className="note-Cs-Db-6"></div>
                    <div className="note-Cs-Db-5"></div>
                    <div className="note-Cs-Db-4"></div>
                    <div className="note-Cs-Db-3"></div>
                    <div className="note-Cs-Db-2"></div>
                    <div className="note-Cs-Db-1"></div>
                </>
                );
            } else if (selectedNote === '2') {
                return (
                    <>    
                    <div className="note-D-6"></div>
                    <div className="note-D-5"></div>
                    <div className="note-D-4"></div>
                    <div className="note-highD-4"></div>
                    <div className="note-D-3"></div>
                    <div className="note-D-2"></div>
                    <div className="note-D-1"></div>
                </>
                );;
            } else if (selectedNote === '3') {
                return (
                    <>    
                    <div className="note-Ds-Eb-6"></div>
                    <div className="note-Ds-Eb-5"></div>
                    <div className="note-Ds-Eb-4"></div>
                    <div className="note-Ds-Eb-3"></div>
                    <div className="note-Ds-Eb-2"></div>
                    <div className="note-Ds-Eb-1"></div>
                </>
                );
            } else if (selectedNote === '4') {
                return (
                    <>    
                    <div className="note-E-6"></div>
                    <div className="note-highE-6"></div>
                    <div className="note-E-5"></div>
                    <div className="note-E-4"></div>
                    <div className="note-E-3"></div>
                    <div className="note-E-2"></div>
                    <div className="note-E-1"></div>
                    <div className="note-highE-1"></div>
                </>
                );
            } else if (selectedNote === '5') {
                return (
                    <>    
                    <div className="note-F-6"></div>
                    <div className="note-F-5"></div>
                    <div className="note-F-4"></div>
                    <div className="note-F-3"></div>
                    <div className="note-F-2"></div>
                    <div className="note-F-1"></div>
                </>
                );
            } else if (selectedNote === '6') {
                return (
                    <>    
                    <div className="note-Fs-Gb-6"></div>
                    <div className="note-Fs-Gb-5"></div>
                    <div className="note-Fs-Gb-4"></div>
                    <div className="note-Fs-Gb-3"></div>
                    <div className="note-Fs-Gb-2"></div>
                    <div className="note-Fs-Gb-1"></div>
                </>
                );
            } else if (selectedNote === '7') {
                return (
                    <>    
                    <div className="note-G-6"></div>
                    <div className="note-G-5"></div>
                    <div className="note-G-4"></div>
                    <div className="note-G-3"></div>
                    <div className="note-highG-3"></div>
                    <div className="note-G-2"></div>
                    <div className="note-G-1"></div>
                </>
                );
            } else if (selectedNote === '8') {
                return (
                    <>    
                    <div className="note-Gs-Ab-6"></div>
                    <div className="note-Gs-Ab-5"></div>
                    <div className="note-Gs-Ab-4"></div>
                    <div className="note-Gs-Ab-3"></div>
                    <div className="note-Gs-Ab-2"></div>
                    <div className="note-Gs-Ab-1"></div>
                </>
                );
            } else if (selectedNote === '9') {
                return (
                    <>    
                    <div className="note-A-6"></div>
                    <div className="note-A-5"></div>
                    <div className="note-highA-5"></div>
                    <div className="note-A-4"></div>
                    <div className="note-A-3"></div>
                    <div className="note-A-2"></div>
                    <div className="note-A-1"></div>
                </>
                );
            } else if (selectedNote === '10') {
                return (
                    <>    
                    <div className="note-As-Bb-6"></div>
                    <div className="note-As-Bb-5"></div>
                    <div className="note-As-Bb-4"></div>
                    <div className="note-As-Bb-3"></div>
                    <div className="note-As-Bb-2"></div>
                    <div className="note-As-Bb-1"></div>
                </>
                );
            } else if (selectedNote === '11') {
                return (
                    <>    
                    <div className="note-B-6"></div>
                    <div className="note-B-5"></div>
                    <div className="note-B-4"></div>
                    <div className="note-B-3"></div>
                    <div className="note-B-2"></div>
                    <div className="note-highB-2"></div>
                    <div className="note-B-1"></div>
                </>
                );
            } else {
                return null;
            }
    }

    return (
        <>
            <h1>Guitar Neck - Notes</h1>
            <select onChange={handleNoteChange}>
                <option value="default">Select a note</option>
                <option value="0">C</option>
                <option value="1">C# / Db</option>
                <option value="2">D</option>
                <option value="3">D# / Eb</option>
                <option value="4">E</option>
                <option value="5">F</option>
                <option value="6">F# / Gb</option>
                <option value="7">G</option>
                <option value="8">G# / Ab</option>
                <option value="9">A</option>
                <option value="10">A# / Bb</option>
                <option value="11">B</option>
            </select>
            <div className="neck-grid">
                <div className="fret-1"></div>
                <div className="fret-2"></div>
                <div className="fret-3"><strong>O</strong></div>
                <div className="fret-4"></div>
                <div className="fret-5"><strong>O</strong></div>
                <div className="fret-6"></div>
                <div className="fret-7"><strong>O</strong></div>
                <div className="fret-8"></div>
                <div className="fret-9"><strong>O</strong></div>
                <div className="fret-10"></div>
                <div className="fret-11"></div>
                <div className="fret-12"><strong>O\\O</strong></div>
                <div className="fret-13"></div>
                <div className="fret-14"></div>
                <div className="nut"></div>
                <div className="string-6"></div>
                <div className="string-5"></div>
                <div className="string-4"></div>
                <div className="string-3"></div>
                <div className="string-2"></div>
                <div className="string-1"></div>
                {handleNoteLighterChange(selectedNote)}
            </div>
        </>
    );
}
export default GuitarNeckNotes;