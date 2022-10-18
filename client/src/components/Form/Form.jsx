import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

export default function Form(){
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    // const [baseImage, setBaseImage] = useState("bruh");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))

    }

    const clear = () => {
        // console.log(postData);
    }

    // own base64 file upload
    const uploadImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        console.log(`logged base64 ${base64}`);
        setPostData({ ...postData, selectedFile: base64 });
    }

    

    // base64 converter
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        });
    }


    return(
        <div className="form-container flex w-full flex-wrap sticky top-4 justify-center mt-12 p-4 border-2 border-slate-200 rounded-xl " >
            <form 
                autoComplete="off" 
                noValidate 
                onSubmit={handleSubmit} 
                className="w-full"
            >
                <h6 className="text-2xl text-slate-500 font-medium my-1 ">Create a new memory</h6>

                <input 
                    type="text" 
                    name="creator" 
                    placeholder="Creator" 
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    value={postData.creator}
                    className="w-full focus:outline-none h-10 px-2 my-1 border border-slate-200 focus:border-slate-400 rounded"   
                />

                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    value={postData.title}
                    className="w-full focus:outline-none h-10 px-2 my-1 border border-slate-200 focus:border-slate-400 rounded"   
                />

                <textarea 
                    type="text" 
                    name="message" 
                    placeholder="Message" 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    value={postData.message}
                    className="w-full focus:outline-none h-[120px] p-2 my-1 border border-slate-200 focus:border-slate-400 rounded"   
                />

                <input 
                    type="text" 
                    name="tags" 
                    placeholder="Tags" 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                    value={postData.tags}
                    className="w-full focus:outline-none h-10 px-2 my-1 border border-slate-200 focus:border-slate-400 rounded"   
                />

                {/* test logger field */}
                {/* <input 
                    type="text" 
                    name="test" 
                    placeholder="type something here to log shits" 
                    onChange={() => {
                        console.log(postData);
                        console.log(baseSL);
                    }}
                    className="w-full focus:outline-none h-10 px-2 my-1 mt-8 border placeholder-yellow-400 bg-gray-800 caret-yellow-500 animate-bounce text-yellow-500 border-yellow-400 focus:border-yellow-500 rounded"   
                /> */}
                

                <div className="flex items-start">
                    <label type="file" >
                        <span className="material-icons-outlined text-slate-500 hover:text-sky-600 hover:scale-105 transition-all hover:cursor-pointer hidden" >attach_file</span>
                        <input 
                            type="file" 
                            multiple = {false}
                            onChange={(e) => {
                                uploadImage(e);
                            }} 
                            className="text-sm text-grey-500 my-1
                            file:mr-5 file:py-2 file:px-6
                            file:rounded-full file:border-0
                            file:text-sm file:font-medium
                            file:bg-slate-100 file:text-slate-500
                            hover:file:cursor-pointer hover:file:bg-sky-100
                            hover:file:text-sky-600 transition-all"
                        />
                    </label>
                    
                </div>
                

                {/* <div className="flex items-start text-sm file:mr-5 file:py-2 file:px-6
                        file:rounded-full file:border-0
                        file:text-sm file:font-medium
                        file:bg-slate-100 file:text-slate-500
                        hover:file:cursor-pointer hover:file:bg-sky-100
                        hover:file:text-sky-600 transition-all" id="file-input">
                    <FileBase 
                        type="file" 
                        multiple={false} 
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                        className="hidden"
                    />
                </div> */}


                <button 
                    type="submit" 
                    className="w-full h-10 my-1 rounded border border-slate-400 text-white font-medium text-xl bg-gradient-to-r from-sky-400 to-purple-400 hover:from-sky-500 hover:to-purple-500 hover:border-slate-600 transition-all " 
                >
                    Submit
                </button>
                <button 
                     onClick={clear}
                    className="w-full h-10 my-1 rounded border bg-slate-100 border-slate-400 font-medium text-xl text-slate-500 hover:text-slate-600 hover:bg-slate-200 hover:border-slate-600 transition-all" 
                >
                    Clear
                </button>

            </form>
        </div>
        
    )
}