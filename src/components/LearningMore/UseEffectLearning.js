import React from 'react';
import {useEffect, useState} from 'react';

// Site Effect


// Events: Add/ remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearnInterval, clearTimeout
// useState
// Mounted/ unmounted
// ===
// Call API

/**
1. Update DOM
    - F8 blog titile
2. Call API
3. Listen DOM Events
    - Scroll
    - Resize
4. Clearnup
    -Remove listener / UnSubscribe
    - Clear timer
**/
//--- Explain type of useEffect:
    //1. useEffect (callback)
    // - Gọi callback mỗi khi component re-render
    // - Gọi callback sau khi component thêm element vào DOM
    //2. useEffect (callback, [])
    // - Chỉ gọi callback một lần sau khi component được mmount
    //3. useEffect (callback, [deps])
    // - Callback sẽ được gọi lại mỗi khi deps thay đổi
// ---------
// 1. Callback luôn được gọi sau khi component mounted

const tabs = ['posts','comments', 'albums']

function UseEffectLearning() {
    const [title, setTitle] = useState('');
    const [posts, setPorts] = useState([]);
    const [type, setType] = useState('posts')

    useEffect( ()=> {
        // console.log('Mounted', title)
        document.title = title;
    })

    // Call API - Render 100 posts on your screen
    //1. useEffect (callback)
    // useEffect (() => {        
    //         fetch('https://jsonplaceholder.typicode.com/posts')
    //             .then(res => res.json())
    //             .then(posts => {
    //                 setPorts(posts);
    //             })
    // })

    //2. useEffect (callback, [])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPorts(posts);
            } )
    }, []);

    //3. useEffect (callback, [deps])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPorts(posts);
        })
    }, [type]);

  return (
    <div>
        <h2>Learning About useEffect</h2>
        <button onClick={useEffect}>Toggle</button>
        <br/>

        {tabs.map(tab => (
            <button
                key={tab}
                style={type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333',
                }: {}}
                onClick={() => setType(tab)}
            >
                {tab}
            </button>
        ))}

        <div>
            <input
                value = {title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseEffectLearning;
