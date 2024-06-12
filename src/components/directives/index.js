import { activeIntersectionObserver } from '@/components/observes'
import { activeIntersectionObserver1} from '@/components/observes'
// import { onBeforeUnmount } from 'vue';
export const observe = {
  mounted: (el, binding) => {
    el.dataset.active = binding.value||"active";//el.dataset.active=指令绑定的值，默认active
    activeIntersectionObserver.observe(el);
    console.log("绑定0");
  },
  unmounted(el) {
    activeIntersectionObserver.unobserve(el);
  }
}
export const observe1 = {
  beforeunmounted (el, binding)  {
    el.dataset.active = binding.value||"active1";//el.dataset.active=指令绑定的值，默认active
    activeIntersectionObserver1.observe(el);
    console.log("绑定1");
  },
  // unmounted(el) {
  //   activeIntersectionObserver1.unobserve(el);
  //   console.log("绑定2");
  // },
}