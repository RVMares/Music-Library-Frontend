import './Song.css'

const Song = (props) => {
    return (
        <div className='songRow'>
            <div className='col-sm-1'>{props.song.title}</div>
            <div className='col-sm-2'>{props.song.artist}</div>
            <div className='col-sm-3'>{props.song.album}</div>
            <div className='col-sm-4'>{props.song.release_date}</div>
            <div className='col-sm-5'>{props.song.genre}</div>
        </div>
    );
}
 
export default Song;