import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

export default function Form({ currentId, setCurrentId }){
    const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null );
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    const dispatch = useDispatch();

    

    useEffect(() => {
        if (post) {
            console.log(`currently updating post ${post._id}`);
            setPostData(post);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
        // e.target.value = null;
    }

    const clear = () => {
        // console.log(postData);
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
        console.log('cleared the form');
    }

    // straight from stackoverflow lol
    const clearInputFile = (f) => {
        if(f.value){
            try{
                f.value = ''; //for IE11, latest Chrome/Firefox/Opera...
            }catch(err){ }
            if(f.value){ //for IE5 ~ IE10
                var form = document.createElement('form'),
                    parentNode = f.parentNode, ref = f.nextSibling;
                form.appendChild(f);
                form.reset();
                parentNode.insertBefore(f,ref);
            }
        }
    }

    // own base64 file upload
    const uploadImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
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
        <div className="form-container flex w-full flex-wrap sticky top-4 justify-center p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-ellipsis " >
            <form 
                autoComplete="off"
                onSubmit={handleSubmit} 
                className="w-full"
            >
                <h6 className="text-2xl text-slate-500 dark:text-slate-300 font-medium my-1 ">{ currentId ? 'Editing a memory' : 'Create a memory'}</h6>

                <input 
                    type="text" 
                    name="creator" 
                    placeholder="Creator" 
                    required
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    value={postData.creator}
                    className="w-full focus:outline-none h-10 px-2 my-1 border border-slate-200 focus:border-slate-400 dark:bg-gray-700 dark:border-slate-600 dark:focus:border-slate-500 dark:text-slate-200 dark:caret-slate-300 rounded"   
                />

                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    required
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    value={postData.title}
                    className="w-full focus:outline-none h-10 px-2 my-1 border border-slate-200 focus:border-slate-400 dark:bg-gray-700 dark:border-slate-600 dark:focus:border-slate-500 dark:text-slate-200 dark:caret-slate-300 rounded"   
                />

                <textarea 
                    type="text" 
                    name="message" 
                    placeholder="Message" 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    value={postData.message}
                    className="w-full focus:outline-none h-[120px] p-2 my-1 border border-slate-200 focus:border-slate-400 dark:bg-gray-700 dark:border-slate-600 dark:focus:border-slate-500 dark:text-slate-200 dark:caret-slate-300 rounded"   
                />

                <input 
                    type="text" 
                    name="tags" 
                    placeholder="Tags (put ',' between each tag)" 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',').trim() })}
                    value={postData.tags}
                    className="w-full focus:outline-none h-10 px-2 my-1 border border-slate-200 focus:border-slate-400 dark:bg-gray-700 dark:border-slate-600 dark:focus:border-slate-500 dark:text-slate-200 dark:caret-slate-300 rounded"   
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

                <div className="flex items-start text-ellipsis">
                    <label type="file" >
                        <span className="material-icons-outlined text-slate-500 hover:text-sky-600 hover:scale-105 transition-all hover:cursor-pointer hidden" >attach_file</span>
                        <input 
                            type="file" 
                            multiple = {false}
                            required={ currentId ? false : true }
                            onChange={(e) => {
                                uploadImage(e);
                            }} 
                            className="text-sm text-grey-500 my-1 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-slate-100 dark:file:bg-slate-700 file:text-slate-500 hover:file:cursor-pointer hover:file:bg-sky-100 dark:hover:file:bg-slate-600 dark:hover:file:text-sky-400 hover:file:text-sky-700 dark:text-slate-300 transition-all"
                        />
                    </label>
                </div>

                { postData.selectedFile ? <img src={postData.selectedFile} className="h-36 rounded my-1" /> : null }
                
                <button 
                    type="submit" 
                    className="w-full h-10 my-1 rounded border border-slate-400 text-white font-medium text-xl bg-gradient-to-r from-sky-400 to-purple-400 hover:from-sky-500 hover:to-purple-500 hover:border-slate-600 transition-all 
                    dark:from-slate-700 dark:to-slate-700 dark:text-slate-200 dark:border-slate-600 dark:hover:border-slate-400  dark:hover:from-sky-600 dark:hover:to-purple-600 " 
                >
                    { currentId ? 'Update' : 'Create'}
                </button>
                <button 
                    onClick={clear}
                    className="w-full h-10 my-1 rounded border bg-slate-100 border-slate-400 font-medium text-xl text-slate-500 hover:text-slate-600 hover:bg-slate-200 hover:border-slate-600 transition-all
                    dark:bg-slate-600 dark:border-slate-500 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-300 dark:hover:border-slate-300 " 
                >
                    Clear
                </button>

            </form>
        </div>
        
    )
}