'use client'
import Image from "next/image";
import {useState, useEffect} from 'react'
import {firestore} from '@/firebase'
import {Box, Typography} from '@mui/material'
import { collection, doc, getDocs, query, setDoc, deleteDoc, getDoc } from "firebase/firestore";

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')

  const updateInvetory = async () =>{
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({
        name:doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
    //console.log(inventoryList)
  }

  //remove items
  const removeItem = async(item)=>{
    const docRef = doc(collection(firestore,'inventory'), item)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
      const {quantity} = docSnap.data()
      if (quantity === 1){
        await deleteDoc(docRef)
      } else{
        await setDoc(docRef, {quantity: quantity - 1})
      }
    }

    await updateInvetory()
  }


  //add items
  const addItem = async(item)=>{
    const docRef = doc(collection(firestore,'inventory'), item)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
      const {quantity} = docSnap.data()
        await setDoc(docRef, {quantity: quantity + 1})
    }
    else{
      await setDoc(docRef, {quantity:1})
    }

    await updateInvetory()
    }

    
  


  useEffect(()=>{
    updateInvetory()
  }, [])

  //models
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Typography variant="h1" >Inventory Management</Typography>
      {inventory.forEach((item)=>{
        console.log(item)
        return (
        <Box>
          {item.name}
          {item.count}
          </Box>)
        })
      }
    </Box>
  )

}
