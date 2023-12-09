import Description from '@/components/description'
import Rated from '@/components/rated'
import Comments from '@/components/comments'

export default function Home() {
  return (
    <main className='flex items-center justify-center'>
      <div className='h-screen'></div>

      <div className='flex flex-col items-center gap-9 w-[330px] my-16 xl:w-[1100px] xl:gap-16'>
        {/* Description / Rated */}
        <div className='flex flex-col gap-9 xl:flex-row'>
          <Description />
          <Rated />
        </div>

        {/* Coments */}
        <Comments />

      </div>
    </main>
  )
}
