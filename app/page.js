'use client'
import Image from "next/image";
import {useState, useEffect} from 'react'
import {firestore} from '@/firebase'
import {Box, Typography} from '@mui/material'

export default function Home() {
  return <Box><Typography>Inventory Management</Typography></Box>
}
