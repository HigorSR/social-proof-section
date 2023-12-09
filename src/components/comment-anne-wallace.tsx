import Image from "next/image";
import imgAnne from '../../public/image-anne.jpg'

function CommentAnneWallace() {
    return (
        <div className='flex flex-col gap-6 bg-Very-Dark-Magenta rounded-lg text-white p-9 xl:self-end'>
            <div className='flex items-center gap-5'>
                <Image src={imgAnne} alt='' className='w-12 rounded-full' />
                <div>
                    <p className='font-medium'>Anne Wallace</p>
                    <p className='text-Soft-Pink'>Verified Buyer</p>
                </div>
            </div>
            <p>
                &quot;Put an order with this company and can only praise them for the very high
                standard. Will definitely use them again and recommend them to everyone!&quot;
            </p>
        </div>
    );
}

export default CommentAnneWallace;