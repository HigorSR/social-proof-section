import Image from "next/image";
import imgIrene from '../../public/image-irene.jpg'

function CommentIreneRoberts() {
    return (
        <div className='flex flex-col gap-6 bg-Very-Dark-Magenta rounded-lg text-white p-9 xl:self-center'>
            <div className='flex items-center gap-5'>
                <Image src={imgIrene} alt='' className='w-12 rounded-full' />
                <div>
                    <p className='font-medium'>Irene Roberts</p>
                    <p className='text-Soft-Pink'>Verified Buyer</p>
                </div>
            </div>
            <p>
                &quot;Customer service is always excellent and very quick turn around. Completely
                delighted with the simplicity of the purchase and the speed of delivery.&quot;
            </p>
        </div>
    );
}

export default CommentIreneRoberts;