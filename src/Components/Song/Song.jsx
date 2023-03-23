const Song = (props) => {
    return ( 
        <table>
            <tbody>
                <tr>
                    <td>{props.song.title}</td>
                    <td>{props.song.artist}</td>
                    <td>{props.song.album}</td>
                    <td>{props.song.release_date}</td>
                    <td>{props.song.genre}</td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default Song;