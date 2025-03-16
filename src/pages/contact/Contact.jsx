import React from 'react'
import MainLayout from '../../components/MainLayout'

function Contact() {
  return (
    <MainLayout>
        
        <div className='flex flex-col mx-10 my-5 rounded-3xl p-3 md:p-20 md:mx-15  lg:w-[calc(75%)] lg:mx-auto'>

            <div className='text-4xl flex flex-col'>
                <h3 className='text-xl'>SEND ME A MESSAGE</h3>
                <h1>Send me a message and I will get back to you in 48 hours</h1>
            </div>


            <div>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='John Doe'/>

                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='john@gmail.com' />

                    <label htmlFor="message">Message</label>
                    <input type="text" name='messge' placeholder='We would like to schedule an full stack developer interviw'/>
                </form>
            </div>
        </div>

    </MainLayout>
  )
}

export default Contact
