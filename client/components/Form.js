import React, { useState } from 'react'
import { useApiContext } from '../context/ApiContext'

function Form() {
  const { createPost } = useApiContext()
  // console.log(createPost)
  const [postData, setPostData] = useState({
    customerName: '',
    day: '',
    time: '',
    phoneNumber: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createPost(postData)
  }
  return (
    <div>
      <h1>FORM</h1>
      <div className=''>
        <form className='w-full max-w-lg' action='' onSubmit={handleSubmit}>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-white-600 text-xs font-bold mb-2'
                htmlFor='date'
              >
                Date
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                required
                type='date'
                id='date'
                name='date'
                placeholder='date'
                value={postData.day}
                onChange={(e) =>
                  setPostData({ ...postData, day: e.target.value })
                }
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label
                htmlFor='time'
                className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2'
              >
                Time
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='number'
                min='9'
                max='20'
                required
                id='time'
                name='time'
                placeholder='12:00'
                value={postData.time}
                onChange={(e) =>
                  setPostData({ ...postData, time: e.target.value })
                }
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label
                htmlFor='customerName'
                className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2'
              >
                Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                id='customerName'
                name='customerName'
                placeholder='John Doe'
                value={postData.customerName}
                onChange={(e) =>
                  setPostData({ ...postData, customerName: e.target.value })
                }
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label
                htmlFor='phoneNumber'
                className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2'
              >
                Phone number
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='tel'
                required
                id='phoneNumber'
                name='phoneNumber'
                placeholder='49 1234567890'
                value={postData.phoneNumber}
                onChange={(e) =>
                  setPostData({ ...postData, phoneNumber: e.target.value })
                }
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                htmlFor='message'
                className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2'
              >
                Optional message
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-7 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-20'
                type='text'
                required
                id='message'
                name='message'
                placeholder='optional message'
                value={postData.message}
                onChange={(e) =>
                  setPostData({ ...postData, message: e.target.value })
                }
              />
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button
              className='bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
              onClick={handleSubmit}
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
