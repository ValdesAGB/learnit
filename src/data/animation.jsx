import { keyframes } from 'styled-components'

export const sunMove = keyframes`
0% {
    transform: rotate(0deg);
}
25% {
    transform: rotate(45deg);
}
50% {
    transform: rotate(90deg);
}
75% {
    transform: rotate(45deg);
}
100% {
    transform: rotate(0deg);
}
`

export const arryLeftRight = keyframes`
0% {
    transform: translateX(-10px);
}
100% {
    transform: translateX(10px);
}
`

export const arryUpDown = keyframes`
0% {
    transform: translateY(-10px);
}

100% {
    transform: translateY(10px);
}
`

export const pxl_effect1 = keyframes`
0% {
    transform: translate(0, 0);
}
20% {
    transform: translate(40px, -5px);
}
40% {
    transform: translate(60px, 40px);
}
60% {
    transform: translate(40px, 60px);
}
80% {
    transform: translate(-40px, 60px);
}
100% {
    transform: translate(0, 0);
}
`

export const pxl_effect2 = keyframes`
0% {
    transform: translate(0, 0);
}
20% {
    transform: translate(-30px, 40px);
}
40% {
    transform: translate(60px, 60px);
}
60% {
    transform: translate(70px, 40px);
}
80% {
    transform: translate(40px, -70px);
}
100% {
    transform: translate(0, 0);
}
`

export const pxl_zoom_reverse = keyframes`
0% {
    transform: scale(0.8);
}
50% {
    transform: scale(1);
}
100% {
    transform: scale(0.8);
}
`
export const pxl_float_two = keyframes`
0% {
    transform: translateY(0);
}
100% {
    transform: translateY(-20px);
}
`

export const video_animation = keyframes`
0% {
    transform: scale(1);
}
50% {
    transform: scale(1.5);
}
100% {
    opacity: 0;
    transform: scale(2);
}
`

export const sway_Y = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
`

export const sway_YY = keyframes`
 0% {
    transform: translateY(0px);
}
100% {
    transform: translateY(-20px);
}
`

export const btnAnimation = keyframes`
 0% {
    box-shadow: 0 0 0 0 #2eb97e;
}
`
export const swayX = keyframes`
0% {
    transform: translateX(20px);
}
100% {
    transform: translateX(0px);
}
`
export const slideDownAnimation = keyframes`
from {
  transform: translateY(-100%);
}
to {
  transform: translateY(0);
}
`

export const moveHorizontally = keyframes`
0% {
  transform: translateX(-20px);
}
100% {
  transform: translateX(0px);
}
`
