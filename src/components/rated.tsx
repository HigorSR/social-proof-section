import IconStar from "@/imgs/icon-star";

function Rated() {
    return (
        <div className='flex flex-col gap-4 w-full xl:w-1/2'>
            <div className='flex flex-col items-center gap-3 bg-Light-Grayish-Magenta py-2 rounded-xl xl:flex-row xl:w-[75%] xl:justify-center xl:gap-6 xl:self-start'>
                <div className='flex gap-2'>
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                </div>
                <p className='text-Very-Dark-Magenta font-bold'>Rated 5 Stars in Reviews</p>
            </div>

            <div className='flex flex-col items-center gap-3 bg-Light-Grayish-Magenta py-2 rounded-xl xl:flex-row xl:w-[75%] xl:justify-center xl:gap-6 xl:self-center'>
                <div className='flex gap-2'>
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                </div>
                <p className='text-Very-Dark-Magenta font-bold'>Rated 5 Stars in Report Guru</p>
            </div>

            <div className='flex flex-col items-center gap-3 bg-Light-Grayish-Magenta py-2 rounded-xl xl:flex-row xl:w-[75%] xl:justify-center xl:gap-6 xl:self-end'>
                <div className='flex gap-2'>
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                </div>
                <p className='text-Very-Dark-Magenta font-bold'>Rated 5 Stars in BestTech</p>
            </div>
        </div>
    );
}

export default Rated;