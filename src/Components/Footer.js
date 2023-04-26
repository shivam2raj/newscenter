import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='mt-4 p-16 bg-black text-white grid grid-cols-1 xl:grid-cols-5 gap-4 xl:gap-16'>

        {/* first column */}
        <div>
            <ul className='cursor-pointer space-y-6'>
                <li>
                    Services
                </li>
                    
                <li>
                    Design
                </li>
                    
                <li>
                    News
                </li>

                <li>
                    Website
                </li>
            </ul>
        </div>

        {/* second column */}

        <div>
            <ul className='hidden xl:block cursor-pointer space-y-6'>
                <li>
                    Services
                </li>
                    
                <li>
                    Design
                </li>
                    
                <li>
                    News
                </li>

                <li>
                    Website
                </li>
            </ul>
        </div>

        {/* third column */}

        <div>
            <ul className='hidden xl:block cursor-pointer space-y-6'>
                <li>
                    Services
                </li>
                    
                <li>
                    Design
                </li>
                    
                <li>
                    News
                </li>

                <li>
                    Website
                </li>
            </ul>
        </div>

        <div className='xl:col-span-2'>
<form className='flex flex-col xl:w-1/2 space-y-2'>
  <label>Name:</label>
  <input className='my-2 rounded-md text-black p-1 hover:outline-emerald-300 focus:outline-emerald-500' type='text' name='Name' />

  <label>Contact:</label>
  <input className='mb-3 rounded-md text-black p-1 hover:outline-emerald-300 focus:outline-emerald-500' type='text' name='Name' />

  <label>Comment:</label>
  <textarea className='h-16 rounded-md mb-3 text-black p-1 hover:outline-emerald-300 focus:outline-emerald-500' type='text' name='Name' />
    
    
    </form>
        </div>
        
      </div>
    )
  }
}

export default Footer