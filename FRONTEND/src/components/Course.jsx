import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const Course = () => {

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res =await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen pt-32'>
        <div className='mt-15 items-center justify-content text-center'>
          <h1 className='text-2xl md:text-4xl '>We're delighted to have you {" "}<span className='text-pink-500'>Here! :)</span></h1>

          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex impedit ullam
            aliquam sapiente alias voluptatibus eius dolorum iusto dolor minima quod, error ratione quisquam.
            Illum blanditiis tempora necessitatibus ut voluptatum voluptatibus non earum ad. Laborum velit maiores,
            animi illo eveniet suscipit ullam molestias voluptas neque totam, perferendis, vitae dicta!</p>

          <Link to="/">
            <button className='bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>

          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>



      </div>
    </>
  )
}

export default Course
