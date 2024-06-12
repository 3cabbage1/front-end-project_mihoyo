// export const activeIntersectionObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add(entry.target.CDATA_SECTION_NODE.active || 'active')
//     } else {
//       entry.target.classList.remove(entry.target.CDATA_SECTION_NODE.active || 'active')
//     }
//   })
// })
export const activeIntersectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // if (entry.isIntersecting) {
      //   entry.target.classList.add(entry.target.dataset.active||"active")
      // } else {
      //   entry.target.classList.remove(entry.target.dataset.active||"active")
      // }
      const activeClassName = entry.target.dataset.active || "active"; //类名=指令绑定的值，默认active
      // console.log(entry.target.dataset.active)
      // console.log(activeClassName)
      if (entry.isIntersecting) {  
      entry.target.classList.add(activeClassName);   //添上类名
      } 
      // else {  
      // entry.target.classList.remove(activeClassName);  //加上画面下滑到一定状态会触发回调，抖动
      // }
    })
  },
  // { threshold: [0.1] } // 设定阈值，可以根据需要调整
)
export const activeIntersectionObserver1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // if (entry.isIntersecting) {
      //   entry.target.classList.add(entry.target.dataset.active||"active")
      // } else {
      //   entry.target.classList.remove(entry.target.dataset.active||"active")
      // }
      const activeClassName = entry.target.dataset.active || "active1"; //类名=指令绑定的值，默认active
      // console.log(entry.target.dataset.active)
      // console.log(activeClassName)
      if (entry.isIntersecting) {  
      entry.target.classList.add(activeClassName);   //添上类名
      } 
      // else {  
      // entry.target.classList.remove(activeClassName);  //加上画面下滑到一定状态会触发回调，抖动
      // }
    })
  },
  // { threshold: [0.1] } // 设定阈值，可以根据需要调整
)
