import './App.css';
import Home from "./Assets/Home.svg"
import Search from "./Assets/Search.svg"
import Library from "./Assets/Library.svg"
import Create from "./Assets/Create.svg"
import Liked from "./Assets/Liked.svg"
import AddFriend from "./Assets/AddFriend.svg"
import Navigate from './Assets/Navigate.svg'
import Play from './Assets/Play.svg'
import Header from './Assets/Header.jpeg'

import Wake from "./Assets/Wake.jpg"
import NewAgeFilth from "./Assets/NewAgeFilth.jpg"
import MindRider from "./Assets/MindRider.jpg"
import MentalKnife from "./Assets/MentalKnife.jpg"
import CultureScars from "./Assets/CultureScars.jpg"
import Elephantitis from "./Assets/Elephantitis.jpg"
import ThisIs from "./Assets/ThisIs.jpg"
import Radio from "./Assets/Radio.jpg"
import Prog from "./Assets/Prog.jpg"
import Tides from "./Assets/Tides.jpg"
import Dwellings from "./Assets/Dwellings.jpg"
import Royal from "./Assets/Royal.jpg"
import ALLB from "./Assets/ALLB.jpg"
import Sianvar from "./Assets/Sianvar.jpg"
import Wolf from "./Assets/Wolf.jpg"

import { useState,useEffect, useRef } from 'react';
import { GetRandomUsers } from './API/RandomUser';
import { GetMusic } from './API/GetMusic';
import { AudioPlayer } from './components/AudioPlayer';

function App() {
  const [Users,setUsers] = useState()
  const [Music,setMusic] = useState()
  const displayed = useRef(true)

  useEffect(()=>{
    if(displayed.current){
      displayed.current = false
      displayUsers()
      getTimes()
      displayMusic()

    }

    // scrolling interaction
    const image = document.body.getElementsByClassName("BackgroundImage")[0]
    const center = document.body.getElementsByClassName("CenterBody")[0]
    const header = document.body.getElementsByClassName("HeaderContainer")[0]
    const background = document.body.getElementsByClassName("HeaderBackground")[0]
    center.addEventListener("scroll", (event) => {
      // fades the header image as the page scrolls down
      image.style.opacity = 1 - center.scrollTop *.006;
      // keeps the header bar fixed to the top of the screen
      header.style.top =  `${center.scrollTop}px`;
      // fades the header bar background color in as you scroll down 
      background.style.opacity = 0 + center.scrollTop *.006;
    });
       
  },[])


  // create and order an array of times 
  function getTimes(){
  let array=[]
  for(let i = 0 ; i < 5 ; i++){
    let number =(Math.floor(Math.random() * (24 - 1) + 1) * i + 1) 
     array.push(number)
  }
  array =  array.sort((a,b)=>{return a-b})
  const mappedArray = array.map((number)=>{
      if(number < 24){
          return `${number} hr`
      }else{
          number = Math.floor(number / 24)
          return `${number} d`
      }
  })
  return mappedArray
}  

const times = getTimes()

function ranNums(){
  let array=[]
  for(let i = 0;i < 5; i++){
    array.push(Math.floor(Math.random() * 50))
  }
  return array
}
const nums = ranNums()
      

async function displayUsers(){
  const results = await (await GetRandomUsers()).data.results
    setUsers(results)
}

async function displayMusic(){
  const results = await (await GetMusic()).data.tracks
  setMusic(results)
}

  return (
    <div className="App">
      <div id='SidePanel'>
        <div className='NavBar'>
          <div className='SideTop'>
            <div className='NavElement'>
              <div className='DropdownMenu'>
                <span>. . .</span>
              </div>  
            </div>     
            <div className='NavElement'>
              <img src={Home} alt="Home"></img>
              <span>Home</span>
            </div>
            <div className='NavElement'>
              <img src={Search} alt="Search"></img>
              <span>Search</span>
            </div>
            <div className='NavElement'>
              <img src={Library} alt="Your Library"></img>
              <span>Your Library</span>
            </div>
          </div>
          <div className='SideTop'>
            <div className='NavElement'>
              <img src={Create} alt="Home"></img>
              <span>Create Playlist</span>
            </div>
            <div className='NavElement'>
              <img src={Liked} alt="Home"></img>
              <span>Liked Songs</span>
            </div>
          </div>
        </div>
        <div className='Border'></div>
        <div className='UserPlaylist'>
          <span>Discover Weekly</span>
          <span>Gym Playlist </span>
          <span>Driving Playlist</span>
          <span>90's Playlist</span>
        </div>
      </div>
      <div className='CenterBody'> 
      <div className='ImageContainer'>
        <img className="BackgroundImage"src={Header} alt=""></img>
      </div>
        <div className='ArtistName'>
          <span style={{"fontSize": "12px"}}>Verified Artist</span>
          <span style={{"fontSize": "84px", "letterSpacing": "-4px"}}>Hail The Sun</span>
          <span style={{"fontSize":"14px", "fontWeight": "600"}}>275,202 monthly listeners</span>
        </div>
        <div className='PopularContainer'>
          <div style={{"display":"flex", "alignItems":"center", "margin":"24px 0px"}}>
                <img src={Play} alt='Play'></img>
                <button className='FollowButton'>FOLLOW</button>
                <span style={{"color":"white", "fontSize": "18px", "fontWeight":"bold", "margin": "0px 0px 10px 32px"}}>. . .</span>
          </div>
          <div className='SongList'>
              <span style={{"color": "white", "fontSize":"20px", "fontWeight":"800", "display":"block", "marginBottom":"15px"}}>Popular</span>
              <div className='Song'>
                <span style={{"marginLeft" : "16px"}}>1</span>
                <img src={Wake} alt="" style={{"height": "40px", "width": "40px", "margin": "0px 16px"}}></img>
                <span style={{"width": "32%"}}>Rolling Out The Red Carpet</span>
                <span style={{"fontWeight":"500", "fontSize":"14px", "width":"20%"}}>4,298,586</span>
                <span style={{"fontWeight":"500", "fontSize":"14px"}}>2:05</span>
              </div>
              <div className='Song'>
                <span style={{"marginLeft" : "16px"}}>2</span>
                <img src={Wake} alt="" style={{"height": "40px", "width": "40px", "margin": "0px 16px"}}></img>
                <span style={{"width": "32%"}}>Human Target Practice</span>
                <span style={{"fontWeight":"500", "fontSize":"14px", "width":"20%"}}>5,328,743</span>
                <span style={{"fontWeight":"500", "fontSize":"14px"}}>3:54</span>
              </div>
              <div className='Song'>
                <span style={{"marginLeft" : "16px"}}>3</span>
                <img src={Wake} alt="" style={{"height": "40px", "width": "40px", "margin": "0px 16px"}}></img>
                <span style={{"width": "32%"}}>Relax / Divide</span>
                <span style={{"fontWeight":"500", "fontSize":"14px", "width":"20%"}}>6,228,125</span>
                <span style={{"fontWeight":"500", "fontSize":"14px"}}>3:18</span>
              </div>
              <div className='Song'>
                <span style={{"marginLeft" : "16px"}}>4</span>
                <img src={NewAgeFilth} alt="" style={{ "height": "40px", "width": "40px", "margin": "0px 16px"}}></img>
                <span style={{"width": "32%"}}>Made Your Mark</span>
                <span style={{"fontWeight":"500", "fontSize":"14px", "width":"20%"}}>1,885,355</span>
                <span style={{"fontWeight":"500", "fontSize":"14px"}}>2:45</span>
              </div>
              <div className='Song'>
                <span style={{"marginLeft" : "16px"}}>5</span>
                <img src={MindRider} alt="" style={{"height": "40px", "width": "40px", "margin": "0px 16px"}}></img>
                <span style={{"width": "32%"}}>Mind Rider</span>
                <span style={{"fontWeight":"500", "fontSize":"14px", "width":"20%"}}>101,697</span>
                <span style={{"fontWeight":"500", "fontSize":"14px"}}>3:21</span>
              </div>
              <span style={{"color": "#b2b2b2", "fontSize":"12px", "fontWeight":"700", "letterSpacing":"1px", "display":"block", "marginTop":"12px"}}>SEE MORE</span>
          </div>
        </div>
        {/* Discography */}
        <div className='CardContainer'>
          <div className='ContainerHeader'>
            <span style={{"color": "white", "fontSize":"20px", "fontWeight": "800"}}>Discography </span>
            <span  style={{"color": "#b2b2b2", "fontSize":"12px", "fontWeight":"700", "letterSpacing":"1px"}}>SHOW ALL</span>
          </div>
          <div className='AlbumButtons'>
            <button>Popular Releases</button>
            <button style={{"backgroundColor":"#232323", "fontWeight": "600", "color": "white"}}>Albums</button>
            <button style={{"backgroundColor":"#232323", "fontWeight": "600", "color": "white"}}>Albums and EPs</button>
          </div>
          <div className='CardList'>
            <div className='Card'>
              <div style={{"margin":"0px 16px"}}>
                <img src={MindRider} alt="" style={{"boxShadow":"2px 3px 20px black", "height":"168px", "width":"168px", "borderRadius": "5px", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Mind Rider</span>
                <div style={{"color":"#b2b2b2","fontSize": "14px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>Latest Release</span>
                  <span style={{"fontWeight": "900","margin": "0px 5px 5px"}}>.</span>
                  <span>Single</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={Wake} alt="" style={{"boxShadow":"2px 3px 20px black", "height":"168px", "width":"168px", "borderRadius": "5px", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Wake</span>
                <div style={{"color":"#b2b2b2","fontSize": "14px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>2014</span>
                  <span style={{"fontWeight": "900","margin": "0px 5px 5px"}}>.</span>
                  <span>Album</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={NewAgeFilth} alt="" style={{"boxShadow":"2px 3px 20px black", "height":"168px", "width":"168px", "borderRadius": "5px", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>New Age Filth</span>
                <div style={{"color":"#b2b2b2","fontSize": "12px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>2021</span>
                  <span style={{"fontWeight": "900","margin": "0px 5px 5px"}}>.</span>
                  <span>Album</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={MentalKnife} alt="" style={{"boxShadow":"2px 3px 20px black", "height":"168px", "width":"168px", "borderRadius": "5px", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Mental Knife</span>
                <div style={{"color":"#b2b2b2","fontSize": "12px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>2018</span>
                  <span style={{"fontWeight": "900","margin": "0px 5px 5px"}}>.</span>
                  <span>Album</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={CultureScars} alt="" style={{"boxShadow":"2px 3px 20px black", "height":"168px", "width":"168px", "borderRadius": "5px", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Culture Scars</span>
                <div style={{"color":"#b2b2b2","fontSize": "12px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>2016</span>
                  <span style={{"fontWeight": "900","margin": "0px 5px 5px"}}>.</span>
                  <span>Album</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={Elephantitis} alt="" style={{"boxShadow":"2px 3px 20px black", "height":"168px", "width":"168px", "borderRadius": "5px", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Elephantitis</span>
                <div style={{"color":"#b2b2b2","fontSize": "12px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>2012</span>
                  <span style={{"fontWeight": "900","margin": "0px 5px 5px"}}>.</span>
                  <span>EP</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Features */}
        <div className='CardContainer'>
        <span style={{"display":"block","color": "white", "fontSize":"20px", "fontWeight": "800","marginBottom":"20px"}}>Featuring Hail The Sun</span>
        <div style={{"display":"flex"}}>
        <div className='Card'>
        <div style={{"margin":"0px 16px"}}>
                <img src={ThisIs} alt="" style={{"boxShadow":"2px 3px 20px black", "height":"168px", "width":"168px", "borderRadius": "5px", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>This Is Hail The Sun</span>
                <div style={{"color":"#b2b2b2","fontSize": "14px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span style={{"display": "-webkit-box","-webkit-line-clamp": "2","-webkit-box-orient": "vertical","overflow": "hidden"}}>This is Hail The Sun. The essential tracks, all in one playlist.</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={Radio} alt="" style={{"boxShadow":"2px 3px 20px black", "height":"168px", "width":"168px", "borderRadius": "5px", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Hail The Sun Radio</span>
                <div style={{"color":"#b2b2b2","fontSize": "14px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span style={{"display": "-webkit-box","-webkit-line-clamp": "2","-webkit-box-orient": "vertical","overflow": "hidden"}}>By Spotify</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={Prog} alt="" style={{"boxShadow":"2px 3px 20px black", "height":"168px", "width":"168px", "borderRadius": "5px", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Progressive Metal</span>
                <div style={{"color":"#b2b2b2","fontSize": "14px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                <span style={{"display": "-webkit-box","-webkit-line-clamp": "2","-webkit-box-orient": "vertical","overflow": "hidden"}}>Fresh and recent tracks from the world of Prog Metal.</span>
                </div>
              </div>
            </div>
        </div>
        </div>
        {/* Fans also like */}
        <div className='CardContainer'>
        <div className='ContainerHeader' style={{"marginBottom":"20px"}}>
            <span style={{"color": "white", "fontSize":"20px", "fontWeight": "800"}}>Fans also like </span>
            <span  style={{"color": "#b2b2b2", "fontSize":"12px", "fontWeight":"700", "letterSpacing":"1px"}}>SHOW ALL</span>
          </div>
          <div style={{"display":"flex"}}>
          <div className='Card'>
              <div style={{"margin":"0px 16px"}}>
                <img src={Tides} alt="" style={{"boxShadow":"2px 3px 20px black","height":"168px", "width":"168px", "borderRadius": "50%", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Tides Of Man</span>
                <div style={{"color":"#b2b2b2","fontSize": "12px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>Artist</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={Dwellings} alt="" style={{"boxShadow":"2px 3px 20px black","height":"168px", "width":"168px", "borderRadius": "50%", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Dwellings</span>
                <div style={{"color":"#b2b2b2","fontSize": "12px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>Artist</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={Royal} alt="" style={{"boxShadow":"2px 3px 20px black","height":"168px", "width":"168px", "borderRadius": "50%", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Royal Coda</span>
                <div style={{"color":"#b2b2b2","fontSize": "12px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>Artist</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={ALLB} alt="" style={{"boxShadow":"2px 3px 20px black","height":"168px", "width":"168px", "borderRadius": "50%", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>A Lot Like Birds</span>
                <div style={{"color":"#b2b2b2","fontSize": "12px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>Artist</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={Sianvar} alt="" style={{"boxShadow":"2px 3px 20px black","height":"168px", "width":"168px", "borderRadius": "50%", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Sianvar</span>
                <div style={{"color":"#b2b2b2","fontSize": "12px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>Artist</span>
                </div>
              </div>
            </div>
            <div className='Card'>
            <div style={{"margin":"0px 16px"}}>
                <img src={Wolf} alt="" style={{"boxShadow":"2px 3px 20px black","height":"168px", "width":"168px", "borderRadius": "50%", "margin": "16px 0px"}}></img>
                <span style={{"color": "white", "fontSize":"15px","fontWeight":"700"}}>Wolf & Bear</span>
                <div style={{"color":"#b2b2b2","fontSize": "12px", "marginTop": "8px", "display":"flex", "alignItems":"center","fontWeight": "500"}}>
                  <span>Artist</span>
                </div>
              </div>
            </div>
        </div>
        </div>
        {/* About / Tour */}
        <div style={{"display":"flex", "margin":"40px 0px 200px 0px", "paddingLeft":"32px"}}>
          <div style={{"display":"flex", "flexDirection":"column"}}>
          <span style={{"color": "white", "fontSize":"20px", "fontWeight": "800", "display":"block", "marginBottom":"5px"}}>About</span>
          <div className='About'>
            <div className='AboutText'>
              <span style={{"fontWeight":"600", "fontSize":"15px", "display":"block", "marginBottom":"10px"}}>349,911 monthly listeners</span>
              <span className='AboutClamp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
          </div>
          </div>
          <div style={{"display":"flex", "flexDirection":"column", "marginLeft":"30px"}}>
            <span style={{"color": "white", "fontSize":"24px", "fontWeight": "800", "display":"block", "marginBottom":"5px"}}>On tour</span>
              <div className='TourDate'>
                <div className='Date'>
                  <span>JAN</span>
                  <span style={{"fontSize":"24px"}}>20</span>
                </div>
                <div style={{"display":"flex","flexDirection":"column", "color":"white"}}>
                  <span className='TourClamp'>The Sound Of Animals Fighting with Hail The Sun and Concrete Castles</span>
                  <div style={{"fontSize":"14px", "fontWeight": "500"}}>
                  <span>Fri 6:00 PM</span>
                  <span style={{"fontWeight": "900","margin":"0px 5px 5px"}}>.</span>
                  <span>The Palladium, Worcester</span>
                </div>
                </div>
              </div>
              <div className='TourDate'>
                <div className='Date'>
                  <span>JAN</span>
                  <span style={{"fontSize":"24px"}}>21</span>
                </div>
                <div style={{"display":"flex","flexDirection":"column", "color":"white"}}>
                  <span className='TourClamp'>The Sound Of Animals Fighting</span>
                  <div style={{"fontSize":"14px", "fontWeight": "500"}}>
                  <span>Sat 6:30 PM</span>
                  <span style={{"fontWeight": "900","margin":"0px 5px 5px"}}>.</span>
                  <span>Webster Hall, New York</span>
                </div>
                </div>
              </div>
              <div className='TourDate'>
                <div className='Date'>
                  <span>JAN</span>
                  <span style={{"fontSize":"24px"}}>22</span>
                </div>
                <div style={{"display":"flex","flexDirection":"column", "color":"white"}}>
                  <span className='TourClamp'>The Sound Of Animals Fighting</span>
                  <div style={{"fontSize":"14px", "fontWeight": "500"}}>
                  <span>Sun 8:00 PM</span>
                  <span style={{"fontWeight": "900","margin":"0px 5px 5px"}}>.</span>
                  <span>Franklin Music Hall, Philadelphia</span>
                </div>
                </div>
              </div>
              <div className='TourDate'>
                <div className='Date'>
                  <span>JAN</span>
                  <span style={{"fontSize":"24px"}}>24</span>
                </div>
                <div style={{"display":"flex","flexDirection":"column", "color":"white"}}>
                  <span className='TourClamp'>Hail The Sun at The Canal Club</span>
                  <div style={{"fontSize":"14px", "fontWeight": "500"}}>
                  <span>Tue 6:30 PM</span>
                  <span style={{"fontWeight": "900","margin":"0px 5px 5px"}}>.</span>
                  <span>The Canal Club, Richmond</span>
                </div>
                </div>
              </div>
              <span style={{"color":"white", "fontWeight":"700","letterSpacing":"1px", "fontSize":"14px","marginTop":"10px"}}>SEE ALL</span>
          </div>
        </div>
        <div className='HeaderContainer'>
        <div className='HeaderBackground'></div> 
        <div className='CenterHeader'>
            <div className='NavButtons'>
              <img src={Navigate} alt="Back"></img>
              <img style={{"transform": "scaleX(-1)"}} src={Navigate} alt="Forward"></img>
            </div>
            <div className='HeaderRight'>
              <button>Upgrade</button>
                {  
                  Users ?(
                  <div className="User">
                    <img src={Users[0].picture.thumbnail} alt="User"></img>
                    <div className='Username'>
                    <span>{Users[0].name.first} {Users[0].name.last}</span>
                    </div>
                  </div> 
                  ): null
                }   
            </div>
        </div>   
        </div>
      </div>

      
      <div id='FriendActivity'>
        <div className='FriendHeader'>
            <span>Friend Activity</span>
            <img src={AddFriend} alt="Add"></img>
        </div>
        {
          Users && Music ? (
          <div className='FriendList'>
            <div className='FriendContainer'>
                  <img src={Users[1].picture.thumbnail} alt='Friend'/>
                  <div className='FriendInfo'>
                      <div className='Friend'>
                        <span className="FriendName">{Users[1].name.first} {Users[1].name.last}</span>
                        <span>{times[0]}</span>    
                      </div>
                      <div className='SongContainer'>
                        <span className='MusicEllipsis'>{Music[nums[0]].name}</span>
                        <span style={{fontWeight:"900", margin:"0px 5px 5px"}}>.</span>
                        <span className='MusicEllipsis'>{Music[nums[0]].artistName}</span>
                      </div>
                      <span>{Music[nums[0]].albumName}</span>
                  </div>
              </div>
              <div className='FriendContainer'>
                  <img src={Users[2].picture.thumbnail} alt='Friend'/>
                  <div className='FriendInfo'>
                      <div className='Friend'>
                        <span className="FriendName">{Users[2].name.first} {Users[2].name.last}</span>
                        <span>{times[1]}</span>    
                      </div>
                      <div className='SongContainer'>
                        <span className='MusicEllipsis'>{Music[nums[1]].name}</span>
                        <span style={{fontWeight:"900", margin:"0px 5px 5px"}}>.</span>
                        <span className='MusicEllipsis'>{Music[nums[1]].artistName}</span>
                      </div>
                      <span>{Music[nums[1]].albumName}</span>
                  </div>
              </div>
              <div className='FriendContainer'>
                  <img src={Users[3].picture.thumbnail} alt='Friend'/>
                  <div className='FriendInfo'>
                      <div className='Friend'>
                        <span className="FriendName">{Users[3].name.first} {Users[3].name.last}</span>
                        <span>{times[2]}</span>    
                      </div>
                      <div className='SongContainer'>
                        <span className='MusicEllipsis'>{Music[nums[2]].name}</span>
                        <span style={{fontWeight:"900", margin:"0px 5px 5px"}}>.</span>
                        <span className='MusicEllipsis'>{Music[nums[2]].artistName}</span>
                      </div>
                      <span>{Music[nums[2]].albumName}</span>
                  </div>
              </div>
              <div className='FriendContainer'>
                  <img src={Users[4].picture.thumbnail} alt='Friend'/>
                  <div className='FriendInfo'>
                      <div className='Friend'>
                        <span className="FriendName">{Users[4].name.first} {Users[4].name.last}</span>
                        <span>{times[3]}</span>    
                      </div>
                      <div className='SongContainer'>
                        <span className='MusicEllipsis'>{Music[nums[3]].name}</span>
                        <span style={{fontWeight:"900", margin:"0px 5px 5px"}}>.</span>
                        <span className='MusicEllipsis'>{Music[nums[3]].artistName}</span>
                      </div>
                      <span>{Music[nums[3]].albumName}</span>
                  </div>
              </div>
              <div className='FriendContainer'>
                  <img src={Users[5].picture.thumbnail} alt='Friend'/>
                  <div className='FriendInfo'>
                      <div className='Friend'>
                        <span className="FriendName">{Users[5].name.first} {Users[5].name.last}</span>
                        <span>{times[4]}</span>    
                      </div>
                      <div className='SongContainer'>
                        <span className='MusicEllipsis'>{Music[nums[4]].name}</span>
                        <span style={{fontWeight:"900", margin:"0px 5px 5px"}}>.</span>
                        <span className='MusicEllipsis'>{Music[nums[4]].artistName}</span>
                      </div>
                      <span>{Music[nums[4]].albumName}</span>
                  </div>
              </div>

          </div>  
          ) : null
        }
        <AudioPlayer/>
      </div>   
    </div>
  );
}

export default App;
