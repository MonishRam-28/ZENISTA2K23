import React from 'react'
import Profilebox from './Profilebox'

import principal from '../images/persons/principal.png'
import hod from '../images/persons/hod.png'
import Naresh from '../images/persons/Naresh 2.jpg'
import arunn from '../images/persons/Arunn.jpg'
import dharun from '../images/persons/Dharun.jpg'
import mathumitha from '../images/persons/Mathumitha .png'
import madhan from '../images/persons/Madhan N.png'
import rithick from '../images/persons/Rithick 2 .jpg'
import jai from '../images/persons/jai.jpg'
import priyadharsini from '../images/persons/Priyadharshini J-ECE.jpg'
import Tamil_Amudhan from  '../images/persons/Tamil Amudhan.png'
import nitin from  '../images/persons/nitin.png'
import alwin from '../images/persons/scan photo 400 x 400.png'
import prakash from '../images/persons/prakash 400x 400.jpg.png'
import koushika from '../images/persons/koushika B V.jpg'
import sairam_ceo from '../images/persons/sairam_ceo.png'
import sriram from '../images/persons/sriram.png'
import pranyka from '../images/persons/Pranyka .jpg'




function Ourteam() {

  return (
    <div id="ourteam" className='profilels'>
        <h1>KEY PERSONS</h1>
        <div className='pro-container'>
            <div className='pro-img-3'> 
                {/* text = "contact details " */}
                <Profilebox image = {sairam_ceo} title = "SHRI. SAI PRAKASH LEO MUTHU" text="CEO" />
                <Profilebox image = {principal} title = "Dr. K PORKUMARAN" text="PRINCIPAL" />
                <Profilebox image = {hod} title = "Dr. J RAJA" text="HOD/DEAN ACADEMICS" />
            </div>
        <h1>CONVENERS</h1>
            <div className='pro-img'>
                <Profilebox image = {prakash} title = "Dr. P PRAKASH" text="AP/ECE" />
                <Profilebox image = {alwin} title = "ALWIN VINIFRED C" text="AP/ECE" />
            </div>
        <h1>CHAIR-PERSON</h1>
            <div className='chair-img'>
                <Profilebox image = {Naresh} title = "NARESH M" linkedin="naresh-m-542291206" textLinkedin="linkedin"/>
            </div>
        </div>
        <br />
        <br />
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>ORGANIZERS</h2>
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {dharun} title = "DHARUNRAJ S S" linkedin="dharun-raj-2b1b961b9" textLinkedin="linkedin" />
                <Profilebox image = {arunn} title = "ARUNN T" linkedin="arunn-t-310963208" textLinkedin='linkedin' />
                <Profilebox image = {mathumitha} title = "MATHUMITHA S" linkedin="mathumitha-srinivasan-8aab75205" textLinkedin='linkedin' />
                <Profilebox image = {madhan} title = "MADHAN N" linkedin="madhan-n-976102205" textLinkedin="linkedin" />
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {priyadharsini} title = "PRIYADHARSHINI J" linkedin="priya-dharshini-33a84717a" textLinkedin='linkedin' />
                <Profilebox image = {jai} title = "JAI VIGNESH K" linkedin="jaivignesh-k-288bba205" textLinkedin='linkedin' />
                <Profilebox image = {rithick} title = "RITHICH ROSHAN B" linkedin="rithick1004" textLinkedin="linkedin" />
                <Profilebox id='pranyka' image = {pranyka} title = "PRANYKA R A" linkedin="pranyka-ravichandran-a02597205" textLinkedin="linkedin" />
                
            </div>
            <div className='pro-img'>
                
                <Profilebox id='koushika' image = {koushika} title = "KOUSHIKA B V" linkedin="koushika-b-v-4aa289211" textLinkedin="linkedin" />


                
            </div>
        </div>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>VIDEO & POSTER TEAM</h2>
                <h4>TEAM LEAD</h4>
            </div>
            <div className='pro-img-3'>
                
                <Profilebox image = {nitin} title = "SRINITHIN S B" linkedin="srinithin-s-b-5345a8205" textLinkedin='linkedin' />
                
            </div>
        </div>

        <div className='pro-container'>
            <div className='pro-head'>
                <h2>WEB DEVELOPERS</h2>
                <h4>TEAM LEAD</h4>
            </div>
            <div className='pro-img'>
                <Profilebox image = {sriram} title = "SRIRAM A" linkedin="sriramanandan003" textLinkedin='linkedin' />
                
            </div>
            <div className='pro-head'>
                <h4>MEMBERS</h4>
            </div>
            <div className='pro-img'>
                <a href="https://www.linkedin.com/in/monish-ram-v-s" target='_blank'>MONISH RAM V S</a>
                <a href="linkedin.com/in/karthikeyan-j-33151b206" target='_blank'>KARTHIKEYAN J</a>
                <a href="https://www.linkedin.com/in/bhuvanesh-k-954863205" target='_blank'>BHUVANESH K</a>
                <a href="https://www.linkedin.com/in/arun-kumar-balasubramaniyan-422136206" target='_blank'>ARUN KUMAR B</a>
                    
                
            </div>
        </div>

       
    </div>
  )
}

export default Ourteam