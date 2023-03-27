import './Song.css'

const Song = (props) => {
    return (
        <tr id='songTr'>
            <td>{props.song.title}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.album}</td>
            <td>{props.song.release_date}</td>
            <td>{props.song.genre}</td>
        </tr>
    );
}
 
export default Song;