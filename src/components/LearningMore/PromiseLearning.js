import React from 'react'

/**
 *  sinh ra để xử lý bất đồng bộ, trước khi có promise thì dùng callback
 *  callback sẽ bị callback hell: code xấu, khó nhìn, khó hiều, nặng nề.
 * tạo từ khóa new -> trong constructor -> truyền 1 Executor function -> sẽ nhận được 2 tham số trả về
 */

// 1. New promise : sinh ra để xử lý bất đồng bộ, trước khi có promise thì dùng callback
// 2. Executor
    // Trạng thái chạy:
        /**
         * 1. Pendding: hành động đang chờ xử lý hoặc bị từ chối (nếu không trả về thì bị Memory leak)
         * 2. Fulfilled : hành động xử lý xong và thành công
         * 3. Rejected: hành động xử lý xong và thất bại
         */
    // Giải quyết bài toán callback bằng Promise chain:
        /**
         * Giá trị resolve trả về 1 data đó sau "then"
         * Nếu như "then" không return thì sẽ là undefined và tiếp tục chạy các "then sau" bình thường
         * Nếu "then (before)" return "promise" thì nó phải đợi chạy xong rồi mới chạy các "then after"
         */


function PromiseLearning() {
            
    // syntax:
    var promise = new Promise(
        // Executor
        function (resolve, reject) {
            // Logic
            // Thành công: resolve()
            // Thất bại: reject()
            //: phải có một trong 2 thằng
            
            // resolve([
            //     {
            //         id: 1,
            //         name: 'ReactJS'
            //     }
            // ]);

            resolve();

        }
    );
    
    promise
        .then (function (courses) {
            // Thành công: resolve()
            // console.log('successfully!')
            // console.log(courses)
            // Promise chain
            // return 1
            return new Promise(function(resolve){
                setTimeout( function() {
                    resolve([1,2,3])
                }, 3000);
            })
        })

        // Promise chain
        .then ((data) => {
            console.log(data)
            return 2
        })
        .then ((data) => {
            console.log(data)
            return 3
        })
        .then ((data) => {
            console.log(data)
            return data
        })

        .catch (function() {
            // Thất bại: reject()
            console.log('Failure!')
        })
        .finally(function () {
            // Dù thành công - thất bại vẫn trả về Done
            console.log('Done!')
        });



        
    return (
        <div>

        </div>
)
}

export default PromiseLearning
