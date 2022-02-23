import React from 'react'

function PromiseLearningMore() {
// Kiến thức mở rộng
    // 1. Promise.resolve
    // 2. Promise.reject
    // 3. Promise .alll -> chạy song song Promise, có 1 reject thì sẽ error toàn bộ Promise khác
    var promiseResolve = Promise.resolve('Success!');
    var promiseReject = Promise.reject('Error!');
        promiseResolve
            .then((result) => {
                console.log('result:', result);
            })
            promiseReject
                .then((result) => {
                    console.log('result:', result);
                })
                .catch ((err) => {
                    console.log('error:', err);
                })
    var promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1])
        }, 2000);
    });
    var promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([2, 3])
        }, 5000);
    });

    Promise.all([promise1, promise2])
        .then(([result1, result2]) => {
            console.log(result1.concat(result2))
        })
        .catch((error) => {
            console.log('Error', error)
        })
                
    return (
    <div>
      
    </div>
  )
}

export default PromiseLearningMore
