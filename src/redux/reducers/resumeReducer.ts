import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

// Define a type for the slice state
interface ResumeState {
  skills: Array<{ name: string; progress: string | number }>
  info: { name: string; email: string; num: string; address: string }
  charRef: Array<{ name: string; pos: string; num: string }>
  main: Array<{
    title: string
    info: Array<{ desc?: string; location?: string; date?: string }>
  }>
}

// Define the initial state using that type
const initialState: ResumeState = {
  skills: [
    { name: "prototyping", progress: 70 },
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 90 },
    { name: "javascript", progress: 60 },
    { name: "photoshop", progress: 60 },
    { name: "illutrator", progress: 50 },
  ],
  info: {
    name: "Gian Carlo Adarayan Carranza",
    email: "carranzagcarlo@gmail.com",
    num: "9311281670",
    address: "1694 Gen. Alejo St. Parulan Plaridel Bulacan",
  },
  charRef: [
    {
      name: "Maria Cristina S. Boton",
      pos: "SIP Coordinator, Bulacan State University",
      num: "9327331653",
    },
    {
      name: "Enrique De Jesus",
      pos: "Instructor, Bulacan State University",
      num: "9420018579",
    },
  ],
  main: [
    {
      title: "Experiences",
      info: [
        {
          desc: "Music Notation, Transcriptions and Arrangements",
          location: "Freelance - Fiver",
          date: "2020 - Present",
        },
        {
          desc: "Piano fundamentals",
          location: "Piano Instructor",
          date: "2022 - Present",
        },
        {
          desc: "Organizing of Products",
          location: "Shopkeeper - Charlgem's Food Product",
          date: "2022 - Present",
        },
      ],
    },
    {
      title: "Education",
      info: [
        {
          desc: "Bachelor of Science in Information Technology Major in Web and Mobile Development",
          location: "Bulacan State University - Bustos Campus",
          date: "2018-Present",
        },
        {
          desc: "STEM - Science, Technology, Engineering & Mathematics",
          location: "St. James Academy Plaridel Bulacan Inc.",
          date: "2016-2018",
        },
      ],
    },
    {
      title: "Achievements",
      info: [
        {
          desc: "1st Runner Up Piano Solo Culture and the Arts Association of State Universities and Colleges",
          date: "Gold Gear 2018",
        },
      ],
    },
  ],
}

export const resumeSlice = createSlice({
  name: "resume",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showState: (state) => {
      state
    },
  },
})

export const { showState } = resumeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.resume

export default resumeSlice.reducer
