import React from 'react'
import { Button } from '@/components/ui/button'
import image1 from '../app/assets/image1.svg'
import image2 from '../app/assets/image2.svg'
import Image from 'next/image'
import grid1 from '../app/assets/grid1.svg'
import grid2 from '../app/assets/grid2.svg'
import icons from '../app/assets/icons.svg'



const page = () => {
  return (
    <div>
      <div className='flex flex-row w-[1440px] h-[164px] '>


        <div className='w-[95px] h-[30px] mt-[56px] ml-[80px] text-[19px] ' >Site Name </div>


        <div className='w-[49px] h-[30px] ml-[800px] mt-[56px] text-[19px] '>Page</div>
        <div className='w-[49px] h-[30px] ml-[48px] mt-[56px] text-[19px] '>Page</div>
        <div className='w-[49px] h-[30px] ml-[48px]  mt-[56px] text-[19px] '>Page</div>
        <Button className='w-[99px] h-[52px] ml-[48px]  mt-[45px]'>Button</Button>
      </div>

      <div className='w-[1275px] h-[597px] mt-[5px] ml-[80px]'>
        <Image src={image1} alt='HeaderImage'></Image>


      </div>
      <div className='w-[755px] h-[44px] ml-[81px] text-[40px] font-semibold mt-[80px]'>
        Heading
      </div>
      <div className='w-[1282px] h-[764px] ml-[80px] mt-10'>
        <div className=' flex flex-col w-[404px] h-[244px]'>
          <div className='flex flex-row gap-4'>
            <div>
              <Image src={grid1} alt='GridImage'></Image>
              <div className='w-[404px] h-[30px] text-[20px] mt-5'>Product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#828282] mt-1'>Description of first product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#000000] mt-1'>$10.99</div>
            </div>
            <div>
              <Image src={grid1} alt='GridImage'></Image>
              <div className='w-[404px] h-[30px] text-[20px] mt-5'>Product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#828282] mt-1'>Description of first product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#000000] mt-1'>$10.99</div>
            </div>
            <div>
              <Image src={grid1} alt='GridImage'></Image>
              <div className='w-[404px] h-[30px] text-[20px] mt-5'>Product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#828282] mt-1'>Description of first product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#000000] mt-1'>$10.99</div></div>
          </div>
          <div className='flex flex-row gap-4 '>
            <div>
              <Image src={grid1} alt='GridImage'></Image>
              <div className='w-[404px] h-[30px] text-[20px] mt-5'>Product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#828282] mt-1'>Description of first product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#000000] mt-1'>$10.99</div>
            </div>
            <div>
              <Image src={grid1} alt='GridImage'></Image>
              <div className='w-[404px] h-[30px] text-[20px] mt-5'>Product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#828282] mt-1'>Description of first product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#000000] mt-1'>$10.99</div>
            </div>
            <div>
              <Image src={grid1} alt='GridImage'></Image>
              <div className='w-[404px] h-[30px] text-[20px] mt-5'>Product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#828282] mt-1'>Description of first product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#000000] mt-1'>$10.99</div>
            </div>

            <div>
            </div>
          </div>
        </div>

      </div>
      <div className='w-[742px] h-[44px] ml-[80px] text-[40px] font-semibold mt-[70px]'>
        Heading
      </div>

      <div className='w-[1282px] h-[764px] ml-[80px] mt-10'>
        <div className=' flex flex-row '>
          <div className='flex flex-col gap-4 w-[735px] h-[642px]'>
            <div>
              <Image src={grid2} alt='GridImage'></Image>
              <div className='w-[404px] h-[30px] text-[20px] mt-5'>Featured Product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#828282] mt-1'>Description of first product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#000000] mt-1'>$10.99</div>
            </div>


          </div>
          <div className='flex flex-col gap-8 ml-10  w-[515px] h-[244px] '>
            <div>
              <Image src={grid1} alt='GridImage'></Image>
              <div className='w-[404px] h-[30px] text-[20px] mt-5'>Product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#828282] mt-1'>Description of first product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#000000] mt-1'>$10.99</div>
            </div>
            <div>
              <Image src={grid1} alt='GridImage'></Image>
              <div className='w-[404px] h-[30px] text-[20px] mt-5'>Product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#828282] mt-1'>Description of first product</div>
              <div className='w-[404px] h-[30px] text-[20px] text-[#000000] mt-1'>$10.99</div>
            </div>

            <div>

            </div>
          </div>
        </div>

      </div>
      



        <div className='flex flex-row w-[1440px] h-[264px]  border border-[#FFFFFF]'>
        <div className='flex flex-col gap-2'>
        <div className='w-[113px] h-[36px] mt-[52px] ml-[80px] text-[19px] ' >Site Name</div>
        <div className='w-[184px] h-[40px] ml-[80px] mt-[60px] '>
        <Image src={icons} alt='icons' ></Image>
        </div>
        </div>
        
<div className='flex flex-row ml-[700px] gap-x-20'>
          <div className='flex flex-col gap-2'>
            <div className=' mt-[45px] text-[19px] font-semibold '>Topic</div>
            <div className=' mt-[20px] text-[19px] '>Page</div>
            <div className='  mt-[20px] text-[19px] '>Page</div>
            <div className='  mt-[20px] text-[19px] '>Page</div>

          </div>
          <div className='flex flex-col gap-2'>
            <div className='  mt-[45px] text-[19px] font-semibold '>Topic</div>
            <div className='  mt-[20px] text-[19px] '>Page</div>
            <div className=' mt-[20px] text-[19px] '>Page</div>
            <div className='  mt-[20px] text-[19px] '>Page</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className=' mt-[45px] text-[19px] font-semibold '>Topic</div>
            <div className='  mt-[20px] text-[19px] '>Page</div>
            <div className='  mt-[20px] text-[19px] '>Page</div>
            <div className='  mt-[20px] text-[19px] '>Page</div>
          </div>
          </div>

        
        


      </div>
      
      </div>


  )
}


export default page