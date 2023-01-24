import React, { useState, useEffect } from 'react';
import { getRandomPrank } from '../../utils/prank-service';
import '../../styles/task.scss'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const PranksNorris = () => {

    let deft = '';

    const [prank, setPrank] = useState(deft);
    const [count, setCount] = useState(0);
    const [disgusCount, setDisgusCount] = useState(0);

    useEffect(() => {
        getRandomPrank()
        .then((response) => {
            if (response.status === 200) {
                setPrank(response.data.value)
            }
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
        })
    }, []);

    function obtainPrank() {
        getRandomPrank()
        .then((response) => {
            if (response.status === 200) {
                setPrank(response.data.value)
            }
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
        })
    }

    function updateCount() {
        setCount(count + 1)
        obtainPrank()
    }

    function updateCountDisgust() {
        setDisgusCount(disgusCount + 1)
        obtainPrank()
    }

    return (
        <div>
            <h1>Prank Norris</h1>
            <p>{prank}</p>

            <button onClick={obtainPrank} className='pranks'>New Prank</button>
            <div className='buttoons'>
                <img src='https://cdn-icons-png.flaticon.com/512/4926/4926585.png' alt='like' onClick={updateCount} className='count'/>
    
                <img src='https://cdn-icons-png.flaticon.com/512/4926/4926589.png' onClick={updateCountDisgust} className='count'/>
            </div>
            <div className='likes'>
                <h3 className='textl'>Te han gustado: {count}</h3>
                <h3 className='textl'>Te han disgustado: {disgusCount}</h3>
            </div>
        </div>
    );
}

export default PranksNorris;

