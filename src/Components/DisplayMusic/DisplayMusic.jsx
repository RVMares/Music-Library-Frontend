
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
                {props.parentSongs.map((song, index) =>{
                    return(
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                        </tr>
                        )
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayMusic;