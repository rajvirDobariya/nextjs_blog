import React from 'react';
import profile from '../../../public/vercel.svg'
import Image from 'next/image';

export default function Page() {
    const image1='https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU'
    return (
        <div>
            {/* Image1 */}
            {/* <Image src={profile}/> */}
            <br/><br/>
            {/* Image2 */}
            {/* <img src={profile.src} alt="" height={'100px'} /> */}
            {/* Image3 */}
            <Image src={image1} width={200} height={200} alt='image1' priority={true} />
        </div>
    )
}
