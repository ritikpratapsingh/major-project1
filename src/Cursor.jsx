import React from 'react'
import "./Cursor.css"

function Cursor() {
    var crsr = document.querySelector(".cursor")
    var main = document.querySelector(".main")
    document.addEventListener("mousemove",function(dets){
        crsr.style.left = dets.x + 20+"px"
        crsr.style.top = dets.y + 20+"px"
    })
  
  return (
    <div class="cursor"></div>
  )
}

export default Cursor