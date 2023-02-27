import './mydiaryeach.css'

const MyDiaryEach = ({ list }) => {

    const image = `http://localhost:8080/api/getImage/` + list.diaryImg;

    return (
        <div className='eachdiary' >
            <div className='diaryimg'><img src={ image } /></div>
            <div className='diarydate'>{ list.createdDt }</div>
        </ div>
        
    );
}

export default MyDiaryEach;