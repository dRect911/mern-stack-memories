import moment from 'moment';

export default function Post({post}){
    console.log(post);
    return(
        <div className="border border-slate-200 flex flex-col w-[400px]  bg-white h-[450px] rounded-xl relative drop-shadow-md">
            <img className="h-[240px] rounded-t-xl" src={post.selectedFile}></img>
            {/* darker overlay */}
            <div className="absolute top-0 left-0 w-full px-4 pt-4 h-[240px] rounded-t-xl bg-black/25 flex justify-between">
                <div className="text-left " >
                    <h2 className="text-white text-2xl font-medium" >{post.creator}</h2>
                    <h5 className="text-white" >{moment(post.createdAt).fromNow()}</h5>
                </div>
                <span class="material-icons-outlined text-3xl text-white hover:cursor-pointer">more_horiz</span>
            </div>
            <div className="bg-white min-h-24 pb-4 ">
                {/* tags */}
                <div className="tags flex flex-wrap p-2" >
                    {post.tags.map((tag) => {
                        return(
                            <h6 className="rounded-full text-[10px] bg-lime-200 text-lime-700 m-1 px-1 font-bold " >#{tag}</h6>
                        );
                    })}
                </div>
                {/* title and message */}
                <h2 className="text-2xl font-medium text-start py-1 pl-4" >{post.title}</h2>
                <p className="text-sm text-justify px-4 line-clamp-3 " >{post.message}</p>
            </div>
            {/* like button */}
            <div className="flex absolute bottom-2 left-2 px-2 items-center rounded-full text-slate-600 hover:bg-slate-200 hover:cursor-pointer transition-all" >
                <span class="material-icons-round text-[16px] hover:cursor-pointer">thumb_up</span>
                <h6 className="mr-1 ml-2 font-bold" >{post.likeCount}</h6>
                <h6 className="font-bold" >LIKES</h6>
            </div>
            {/* delete button */}
            <div className="flex absolute bottom-2 right-2 px-2 items-center rounded-full text-slate-600 hover:bg-slate-200 hover:cursor-pointer transition-all" >
                <span class="material-icons-round text-[16px] hover:cursor-pointer">delete</span>
                <h6 className="font-bold" >DELETE</h6>
            </div>
            
        </div>
    )
}

