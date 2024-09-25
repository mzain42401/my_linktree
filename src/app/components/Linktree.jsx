'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaGlobe,FaFacebook } from 'react-icons/fa'
import {FaSquareXTwitter } from 'react-icons/fa6'

import { MdEmail, MdLightMode, MdDarkMode } from 'react-icons/md'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import pic from '../../image/pic.jpeg'

export default function Linktree() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const links = [
    { name: 'LinkedIn', icon: <FaLinkedin className="mr-2 h-5 w-5" />, url: 'https://linkedin.com/in/mzainali/' },
    { name: 'Full-Stack Portfolio', icon: <FaGlobe className="mr-2 h-5 w-5" />, url: 'https://mzainali.vercel.app' },
    { name: 'GitHub', icon: <FaGithub className="mr-2 h-5 w-5" />, url: 'https://github.com/mzain42401' },
    { name: 'Facebook', icon: <FaFacebook className="mr-2 h-5 w-5" />, url: 'https://www.facebook.com/profile.php?id=100094551577002' },

    { name: 'AI Portfolio', icon: <FaGlobe className="mr-2 h-5 w-5" />, url: 'https://zainali.vercel.app' },
    { name: 'Email', icon: <MdEmail className="mr-2 h-5 w-5" />, url: 'mailto:mzain42401@gmail.com' },
  ]

  const skills = ['React.js', 'Node.js', 'Javascript', 'Dialogflow','Next.js', 'MongoDB', 'kommunicate',  'Manychat']

  return (
    <div className={`  flex  items-center justify-center p-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="absolute h-full w-full  inset-0 overflow-hidden">
        <div className="absolute  inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      </div>
      <Card className={`w-full max-w-md mx-auto overflow-hidden backdrop-blur-lg bg-opacity-80 shadow-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <MdLightMode className="h-5 w-5" /> : <MdDarkMode className="h-5 w-5" />}
          </Button>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-4"
          >
            <Image
              src={pic}
              alt="Profile Picture"
              width={128}
              height={128}
              className="rounded-full border-4 border-gray-300 shadow-xl"
            />
          </motion.div>
          <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            M Zain Ali
          </CardTitle>
          <CardDescription className="text-lg text-center mt-2 opacity-40">
            Full Stack & Gen AI Engineer
          </CardDescription>
        </CardHeader>
        
        <CardContent className="grid gap-4">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                className={`w-full text-left flex items-center justify-between group hover:bg-blue-600 hover:text-white rounded transition-all duration-300 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center">
                    {link.icon}
                    {link.name}
                  </span>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.div>
                </a>
              </Button>
            </motion.div>
          ))}
        </CardContent>

        <CardFooter className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Badge variant="secondary" className="text-sm rounded cursor-pointer text-gray-800 bg-blue-400 hover:bg-blue-200">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
