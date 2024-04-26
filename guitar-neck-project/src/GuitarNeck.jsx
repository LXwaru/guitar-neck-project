const GuitarNeck = () => {
    return (
        <>
            <input></input>
            <select>
                <option value="MAJOR">Major</option>
                <option value="MINOR">Minor</option>
                <option value="DIMINISHED">Diminished</option>
                <option value="AUGMENTED">Augmented</option>
            </select>
            <div className="neck-grid">
                <div className="fret-1"></div>
                <div className="fret-2"></div>
                <div className="fret-3"></div>
                <div className="fret-4"></div>
                <div className="fret-5"></div>
                <div className="fret-6"></div>
                <div className="fret-7"></div>
                <div className="fret-8"></div>
                <div className="fret-9"></div>
                <div className="fret-10"></div>
                <div className="fret-11"></div>
                <div className="fret-12"></div>
                <div className="fret-13"></div>
                <div className="fret-14"></div>
                <div className="nut"></div>
                <div className="E-6"></div>
                <div className="A-5"></div>
                <div className="D-4"></div>
                <div className="G-3"></div>
                <div className="B-2"></div>
                <div className="E-1"></div>
            </div>
        </>
    );
}
export default GuitarNeck