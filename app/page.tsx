"use client";

import React from 'react'
import Bolt from '../public/bolt.svg'
import Vector from '../public/Vector.svg'
import Folder from '../public/folder.svg'
import Graph from '../public/graph.svg'
import Brain from '../public/neural-brain-icon.svg'
import People from '../public/people.svg'
import User from '../public/user.svg'
import Search from '../public/search.svg'

import { useState } from 'react';

const page = () => {

  const [stateOne, setStateOne] = useState(true);
  const [stateTwo, setStateTwo] = useState(true);
  const [stateThree, setStateThree] = useState(true);
  const [stateFour, setStateFour] = useState(true);

  const [makeTagOne, setTagOne] = useState(true);
  const [makeTagTwo, setTagTwo] = useState(true);
  const [makeTagThree, setTagThree] = useState(true);
  const [makeTagFour, setTagFour] = useState(true);

  const setStateOneFunc = () => {
    setStateOne(!stateOne)
  }

  const setStateTwoFunc = () => {
    setStateOne(!stateOne)
  }

  const setStateThreeFunc = () => {
    setStateOne(!stateOne)
  }

  const setStateFourFunc = () => {
    setStateOne(!stateOne)
  }

  const setMakeTagOne = () => {
    setTagOne(!makeTagOne);
  }

  const setMakeTagTwo = () => {
    setTagTwo(!makeTagTwo);
  }

  const setMakeTagThree = () => {
    setTagThree(!makeTagThree);
  }

  const setMakeTagFour = () => {
    setTagFour(!makeTagFour);
  }
  

  return (
    <div className='flex'>
      <nav className='navbar flex flex-col items-center justify-start w-20 min-h-[100vh] bg-[#4C1364]'>
        <div className='py-4'>
          <Brain /> 
        </div>
        <div className='h-[1px] bg-black px-7'></div>
        <div className='py-4'>
          <Vector />
        </div>
        <div className='py-4'>
          <Search />
        </div>
        <div className='py-4'>
          <Bolt />
        </div>
        <div className='py-4'>
          <Graph />
        </div>
        <div className='py-4'>
          <People />
        </div>
        <div className='py-4'>
          <Folder />
        </div>
        <div className='py-4'>
          <User />
        </div>
      </nav>
      <main className='flex-col w-full px-10 py-10'>
        <div className='text-blue-500 py-10 text-xl'>Add a Filament</div>
        <form className='flex flex-col justify-center h-32 rounded-2xl w-[75vw] max-w-72 bg-[#4C1364]'>
          <input type='text' placeholder='Drop into your Second Brain' className='bg-[#5B1478] w-[40%] ms-10 h-12 my-auto ps-4 rounded-2xl'></input>
        </form>
        <div className='flex w-[50vw] justify-evenly py-12'>
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-[16px] h-[16px] cursor-pointer bg-purple-500 rounded-full' onClick={setStateOneFunc}>
              <div className={`w-[10px] h-[10px] rounded-full ${stateOne? 'bg-yellow-400': 'bg-transparent'} `}></div> 
            </div>
            <label htmlFor='spark' className='text-slate-200 ms-3'> Spark </label>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-[16px] h-[16px] cursor-pointer bg-purple-500 rounded-full' onClick={setStateTwoFunc}>
              <div className={`w-[10px] h-[10px] rounded-full ${stateOne? 'bg-green-400': 'bg-transparent'} `}></div> 
            </div>
            <label htmlFor='people' className='text-slate-200 ms-3'> People </label>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-[16px] h-[16px] cursor-pointer bg-purple-500 rounded-full' onClick={setStateThreeFunc}>
              <div className={`w-[10px] h-[10px] rounded-full ${stateOne? 'bg-blue-400': 'bg-transparent'} `}></div> 
            </div>
            <label htmlFor='space' className='text-slate-200 ms-3'> Space </label>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center justify-center w-[16px] h-[16px] cursor-pointer bg-purple-500 rounded-full' onClick={setStateFourFunc}>
              <div className={`w-[10px] h-[10px] rounded-full ${stateOne? 'bg-red-400': 'bg-transparent'} `}></div> 
            </div>
            <label htmlFor='resource' className='text-slate-200 ms-3'> Resource </label>
          </div>
        </div>
        <div className='flex justify-center w-[50vw] max-vw-[72] pt-16 px-36'>
          <select name='chamber' className='bg-[#4C1364] w-48 text-slate-200 rounded-2xl py-4 ps-4 pe-10 me-10'>
            <option value="op1">Chamber</option>
            <option value="op2">Option 2</option>
            <option value="op3">Option 3</option>
            <option value="op4">Option 4</option>
          </select>
          <select name='vault' className='bg-[#4C1364] w-48 text-slate-200 rounded-2xl py-4 ps-4 pe-10'>
            <option value="op1">Vault</option>
            <option value="op2">Option 2</option>
            <option value="op3">Option 3</option>
            <option value="op4">Option 4</option>
          </select>
        </div>
        <div className='flex items-center bg-[#4C1364] w-[45vw] rounded-full h-12 mt-16'>
          <div className='px-7 flex text-slate-200 '>Tags</div>
          <div className={`tag ${makeTagOne? 'flex': 'hidden'}  text-xs bg-yellow-300`}> Spark 
            <div className={`flex justify-center items-center ms-1 w-[20px] h-[20px]  text-gray-500 rounded-full cursor-pointer hover:bg-slate-300`} onClick={setMakeTagOne}>x</div>
          </div>
          <div className={`tag ${makeTagTwo? 'flex': 'hidden'} text-xs bg-green-500`}> People
            <div className='flex justify-center items-center ms-1 w-[20px] h-[20px]  text-gray-500 rounded-full cursor-pointer hover:bg-slate-300' onClick={setMakeTagTwo}>x</div>
          </div>
          <div className={`tag ${makeTagThree? 'flex': 'hidden'} text-xs bg-blue-500`}> Space
            <div className='flex justify-center items-center ms-1 w-[20px] h-[20px]  text-gray-500 rounded-full cursor-pointer hover:bg-slate-300' onClick={setMakeTagThree}>x</div>
          </div>
          <div className={`tag ${makeTagFour? 'flex': 'hidden'} text-xs bg-red-500`}> Resource 
            <div className='flex justify-center items-center ms-1 w-[20px] h-[20px]  text-gray-500 rounded-full cursor-pointer hover:bg-slate-300' onClick={setMakeTagFour}>x</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page