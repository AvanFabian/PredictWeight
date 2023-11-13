// 'use client'
// // TODO
// // 1. Install Dependencies
// // 2. Import Dependencies
// // 3. Setup webcam and canvas
// // 4. Define references to those
// // 5. Load bodypix
// // 6. Detect function
// // 7. Draw using drawMask
// import { useEffect, useRef } from 'react'
// import Image from 'next/image'

// import * as tf from '@tensorflow/tfjs'
// import * as bodyPix from '@tensorflow-models/body-pix'
// import Webcam from 'react-webcam' 

// export default function Home() {
//   const webcamRef = useRef(null)
//   const canvasRef = useRef(null)

//   const runBodySegmentation = async () => {
//     const net = await bodyPix.load()
//     console.log('BodyPix model loaded.')
//     setInterval(() => {
//       detect(net)
//     }, 100)
//   }

//   const detect = async (net) => {
//     // Check data is available
//     if (
//       typeof webcamRef.current !== 'undefined' &&
//       webcamRef.current !== null &&
//       webcamRef.current.video.readyState === 4
//     ) {
//       // Get Video Properties
//       const video = webcamRef.current.video
//       const videoWidth = webcamRef.current.video.videoWidth
//       const videoHeight = webcamRef.current.video.videoHeight

//       // Set video width and height
//       webcamRef.current.video.width = videoWidth
//       webcamRef.current.video.height = videoHeight

//       // Set canvas width and height
//       canvasRef.current.width = videoWidth
//       canvasRef.current.height = videoHeight

//       // Make Detections
//       const person = await net.segmentPersonParts(video)
//       console.log(person)

//       // Draw Detections
//       const coloredPartImage = bodyPix.toColoredPartMask(person)
//       const opacity = 0.7
//       const flipHorizontal = false
//       const maskBlurAmount = 0
//       bodyPix.drawMask(
//         canvasRef.current,
//         video,
//         coloredPartImage,
//         opacity,
//         maskBlurAmount,
//         flipHorizontal
//       )
//     }
//   }

//   runBodySegmentation()

//   return (
//     <main>
//       <Webcam ref={webcamRef} 
//         style={
//           {
//             position: 'absolute',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//             left: 0,
//             right: 0,
//             textAlign: 'center',
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }
//         }
//       />
//       <canvas ref={canvasRef} 
//         style={
//           {
//             position: 'absolute',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//             left: 0,
//             right: 0,
//             textAlign: 'center',
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }
//         }
//       />
//     </main>
//   )
// }
