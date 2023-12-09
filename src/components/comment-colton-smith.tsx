import Image from "next/image";
import imgColton from '../../public/image-colton.jpg'

function CommentColtonSmith() {
    return (
        <div className='flex flex-col gap-6 bg-Very-Dark-Magenta rounded-lg text-white p-9 xl:self-start'>
            <div className='flex items-center gap-5'>
                <Image src={imgColton} alt='' className='w-12 rounded-full' />
                <div>
                    <p className='font-medium'>Colton Smith</p>
                    <p className='text-Soft-Pink'>Verified Buyer</p>
                </div>
            </div>
            <p>
                &quot;We needed the same printed design as the one we had ordered a week prior.
                Not only did they find the original order, but we also received it in time.
                Excellent!&quot;
            </p>
        </div>
    );
}

export default CommentColtonSmith;