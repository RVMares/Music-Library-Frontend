import './Song.css'

const Song = (props) => {
    return (
        <div className='row justify-content-md-center'>
            <div className='col'>{props.song.title}</div>
            <div className='col'>{props.song.artist}</div>
            <div className='col'>{props.song.album}</div>
            <div className='col'>{props.song.release_date}</div>
            <div className='col'>{props.song.genre}</div>
        </div>
    );
}
 
export default Song;