import Song from "../Song/Song";
import './DisplayMusic.css'

const DisplayMusic = (props) => {

    return ( 
        <div className="table-responsive">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
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
                            <Song song={song} key={index}/>
                            )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayMusic;