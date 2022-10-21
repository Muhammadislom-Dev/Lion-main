import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./SlideBtn.css";

export default function SlideBtn({ rightIcon, onClick, style, className }) {
  return (
    <button style={style} onClick={onClick} className={`slide-btn ${rightIcon ? "slide__next" : "slide__prev"} ${className}`}>
      {rightIcon ? <FaChevronRight /> : <FaChevronLeft />}
    </button>
  )
}