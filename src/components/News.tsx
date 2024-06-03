import { Authors, News, baseUrl } from '../App'
import { RiShareForwardLine } from 'react-icons/ri'
import { getDate, getMonth } from '../utils'

type NewsCardProps = {
  data: News
  authors: Authors[]
}

function NewsCard({ data, authors }: NewsCardProps) {
  const author = authors.find((item) => item.id === data.author_id)

  return (
    <div className='mb-5 shadow-xl pb-10 py-2 rounded-lg border'>
      <div className='relative p-4 h-full'>
        {/* image */}
        <img
          src={`${baseUrl}/${data.image_url}`}
          alt='l'
          className='md:h-[500px] h-72 w-full md:object-cover'
        />
        <div className='md:ms-10 ms-5 bg-[#EB0A1E] md:w-20 md:h-20 h-16 w-16 skew-x-[-10deg] absolute md:bottom-0 -bottom-5 text-white text-center md:p-4 p-1'>
          {/* date */}
          <div className='skew-x-[10deg]'>
            <h2 className='text-3xl font-semibold mb-[-10px]'>
              {getDate(data.created_at)}
            </h2>
            <h4 className='text-sm'>
              {getMonth(data.created_at).toUpperCase()}
            </h4>
          </div>
          {/* half triangle */}
          <div
            className='align-baseline relative left-[45px] top-1 w-0 h-0 
            border-l-[15px] border-l-transparent
            border-b-[10px] border-b-white'
          ></div>
        </div>
      </div>

      <div className='px-4'>
        <div className='flex justify-end items-center my-3'>
          <span>
            <RiShareForwardLine className='relative top-[2px]' />
          </span>
          SHARE
        </div>
        <hr className='border border-gray-200' />
        <h4 className='text-base text-[#EB0A1E]'>{author?.name}</h4>
        <h2 className='font-bold md:text-4xl text-3xl mb-5'>{data.title}</h2>
        <p className='mb-4'>{data.body}</p>

        <a
          href='#'
          className='underline font-bold text-sm'
        >
          READ ARTICLE
        </a>
      </div>
    </div>
  )
}

export default NewsCard
