import Song from "../Song/Song";
import './DisplayMusic.css'

const DisplayMusic = (props) => {

    return ( 
        <div className="container-fluid">
            <div className="rowTitle">
                    <div className='col1'>Title</div>
                    <div className='col2'>Artist</div>
                    <div className='col3'>Album</div>
                    <div className='col4'>Release Date</div>
                    <div className='col5'>Genre</div>
            </div>
            <div className="row">
                {props.parentSongs
                .filter((song) => (
                    song.title.toLowerCase().includes(props.searchInput.toLowerCase()) ||
                    song.artist.toLowerCase().includes(props.searchInput.toLowerCase()) ||
                    song.album.toLowerCase().includes(props.searchInput.toLowerCase()) ||
                    song.release_date.includes(props.searchInput) ||
                    song.genre.toLowerCase().includes(props.searchInput.toLowerCase())
                    ))
                .map((song, index) =>{
                    return(
                        <div key={index}>
                            <Song song={song} />
                        </div>
                        )
                })}
            </div>
        </div>
     );
}
 
export default DisplayMusic;