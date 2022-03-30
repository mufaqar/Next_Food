import React from 'react'
import Image from 'next/image'
import applebtn from '../../../public/images/b1.png'
import andriodbtn from '../../../public/images/b2.png'
import mobileone from '../../../public/images/1.png'
import mobiletwo from '../../../public/images/2.png'
import mobilethree from '../../../public/images/3.png'
import Link from 'next/link'

export default function DownloadApp() {
  return (
    <>
        <section className='download-app'>
            <div className='container-fluid flex v_align space_between'>
                <div className='content'>
                    <h1>Download Our App</h1>
                    <p>Our app gives you access to your favourite Food and restaurants. Get your food delivered right to you.</p>
                    <div className='app_btn flex'>
                        <Link href="/"><figure style={{width:134}}><Image src={applebtn} alt='apple' /></figure></Link>
                        <Link href="/"><figure><Image src={andriodbtn} alt='andriod' /></figure></Link>
                    </div>
                </div>
                <div className='pics flex'>
                    <figure><Image src={mobileone} alt='mobile1' /></figure>
                    <figure><Image src={mobiletwo} alt='mobile2' /></figure>
                    <figure><Image src={mobilethree} alt='mobile3' /></figure>
                </div>
            </div>
        </section>
    </>
  )
}
