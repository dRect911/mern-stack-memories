import placeholderImage from '../images/dummy-post.jpg';

export default function SkeletonPost(){
    return(
    <div className="col-span-12 row-span-2 sm:col-span-6 sm:row-span-1 mx-2 my-4 " >
        <div className="border border-slate-200 flex flex-col w-[400px]  bg-white h-[450px] rounded-xl relative drop-shadow-md ">
            <img className="h-[240px] rounded-t-xl" src={placeholderImage}></img>
            {/* darker overlay */}
            <div className="absolute top-0 left-0 w-full px-4 pt-4 h-[240px] rounded-t-xl bg-black/25 flex justify-between">
                <div className=" flex flex-col" >
                    <h2 className="text-gray-300 bg-gray-300 rounded animate-pulse text-2xl font-medium px-24 py-4 " > </h2>
                    <h5 className="text-gray-300 bg-gray-300 rounded animate-pulse mt-1 px-20 py-[12px]" > </h5>
                </div>
                <span className="material-icons-outlined text-3xl text-gray-200 hover:cursor-pointer">more_horiz</span>
            </div>
            <div className="bg-white min-h-24 pb-4 px-4 ">
                {/* tags */}
                <div className="tags flex flex-wrap p-2" >
                    <h6 className="rounded-full text-[10px] bg-slate-300 text-slate-300 m-1 px-1 font-bold " >#tag</h6>
                    <h6 className="rounded-full text-[10px] bg-slate-300 text-slate-300 m-1 px-1 font-bold " >#tag</h6>
                    <h6 className="rounded-full text-[10px] bg-slate-300 text-slate-300 m-1 px-1 font-bold " >#tag</h6>
                    <h6 className="rounded-full text-[10px] bg-slate-300 text-slate-300 m-1 px-1 font-bold " >#tag</h6>
                </div>
                {/* title and message */}
                <h2 className="text-2xl font-medium text-start my-1 px-1 rounded animate-pulse bg-gray-300 text-gray-300" > XXX </h2>
                <p className="text-sm text-start mb-1 px-4 line-clamp-3 rounded bg-gray-200 text-gray-200" >XXXXX</p>
                <p className="text-sm text-start mb-1 px-4 line-clamp-3 rounded bg-gray-200 text-gray-200" >XXXXX</p>
            </div>
            {/* like button */}
            <div className="flex absolute bottom-2 left-2 px-2 items-center rounded-full text-slate-200 bg-slate-200" >
                <h6 className="font-bold" >XXXXX</h6>
            </div>
            {/* delete button */}
            <div className="flex absolute bottom-2 right-2 px-2 items-center rounded-full text-slate-200 bg-slate-200" >
                <h6 className="font-bold" >XXXXX</h6>
            </div>
            
        </div>

    </div>
    )
}