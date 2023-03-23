import Song from "../Song/Song";
import './DisplayMusic.css'

const DisplayMusic = (props) => {

    return ( 
        <div className="container-fluid">
            <div className="rowTitle">
                    <div className='col'>Title</div>
                    <div className='col'>Artist</div>
                    <div className='col'>Album</div>
                    <div className='col'>Release Date</div>
                    <div className='col'>Genre</div>
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