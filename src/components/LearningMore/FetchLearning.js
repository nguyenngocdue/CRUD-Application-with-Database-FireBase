import React from 'react';
import {useState} from 'react';

// Call API "100 posts"
function FetchLearning() {
    var postAPI = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState('posts')

    const handleFetch = () => {
        fetch(postAPI)
            .then((response) => {
                return response.json();
                //JSON.parse: JSON => JavaScript types
            })
            .then(posts => { //post: là giá trị json trả về ở bước Then trên
                setPosts(posts);

            }) 
            .catch ((err) => {
                console.log("Wrong call API") // print error.
            })
    }


  return (
    <div>
      <button className="btn-LFetch" onClick={handleFetch}>Learning Fetch</button>
      <ul> 
          {posts[0].title} 
      </ul>
    </div>
  )
}


export default FetchLearning;
