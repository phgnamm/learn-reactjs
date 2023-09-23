import React from 'react';

function VideoInfor() {
    return (
        <div className="flex flex-row mt-10">
            <img className="w-[50px] h-[50px] rounded-full mr-3 " src="https://i.pinimg.com/736x/4a/4c/29/4a4c29807499a1a8085e9bde536a570a.jpg" alt="Your Image" />
            <div className="ml-3 mr-6 min-ư-[80%]">
                <div>
                    <a href='#' className="text-x1 font-bold hover:underline">Anh đang code</a>
                    <a href='#' className=""></a>
                </div>
                <div>Hãy ghé thăm kênh Anh đang code</div>
                <div className="flex flex-row items-center"><span className="ml-3">bai hat dang phat</span></div>
            </div>
            <div >
                <button className="p-2 pl-6 pr-6 border-2 border-red-400 text-red-600 rounded-md">Follow</button>
            </div>
        </div>
    );
}

function VideoContent() {
    return (
        <div className='mt-5'>
            <img className="rounded-md" src="https://i.pinimg.com/564x/8d/c8/a4/8dc8a477d84c93b0e9819b57814b0056.jpg" alt="Your Image" width="370px" height="494px" />
        </div>
    );

}

export default function Video() {
    return (
        <div className="max-w-[600px]">
            <VideoInfor />
            <VideoContent />

        </div>
    )
}

