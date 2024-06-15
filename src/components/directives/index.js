import { activeIntersectionObserver } from '@/components/observes'
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
