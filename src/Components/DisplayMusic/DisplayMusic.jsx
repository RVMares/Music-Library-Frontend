import Song from "../Song/Song";

const DisplayMusic = (props) => {

    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Artist</th>
                    <th scope='col'>Album</th>
                    <th scope='col'>Release Date</th>
                    <th scope='col'>Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.parentSongs
                .filter(song => (
                    song.title.toLowerCase().includes(props.searchInput.toLowerCase()) ||
                    song.artist.toLowerCase().includes(props.searchInput.toLowerCase()) ||
                    song.album.toLowerCase().includes(props.searchInput.toLowerCase()) ||
                    song.release_date.includes(props.searchInput) ||
                    song.genre.toLowerCase().includes(props.searchInput.toLowerCase())
                    ))
                .map((song) =>{
                    return(
                        <Song song={song} />
                        )
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayMusic;