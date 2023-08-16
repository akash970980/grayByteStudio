import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./master.css"
import Texteditor from 'components/textEditor/textEditor';







function Master() {

    return (
        
        <div>
            <div className='menu'>
                <div className='left'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlSQKbmPBF-9Iq9kqMmY7EF8oca_HtVyKA49aysagzw&s" alt="menu" />
            <p className='options'>File</p>
            <p className='options'>Edit</p>
            <p className='options'>View</p>
            <p className='options'>Go</p>
                </div>
            
            </div>
        <div className='master'>
        <div className='explorer' >
            <p> Explorer</p> 
        </div>

        <div className='viewport'>
            <p>Viewport</p>
            <Texteditor/>
            <div className='terminal'>
            <p>terminal</p>
            </div>
        </div>

        <div className='statusbar'>
            <p>statusbar</p>
        </div>
        </div>
        </div>
        
    )
}

export default Master