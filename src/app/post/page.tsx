import fetchPost from "@/services/blog/fetchPost"
import { Post } from "@/services/models/models";

const Posts = async() => {
    const post: Post[] = await fetchPost();
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Post</h1>
            {post.map((post: Post) => (
                <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )
            )}
        </div>
    )
}
export default Posts



// const Posts = () => { 
//     return (
//         <div className="flex min-h-screen flex-col items-center justify-between p-24">
//         <h1>Post</h1>
//         </div>
//     )
// }
// export default Posts

// // {
// //     "userId": 1,
// //     "id": 2,
// //     "title": "qui est esse",
// //     "body": "est rerum tempore vtae"
// // }
