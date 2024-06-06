import { activeIntersectionObserver } from '@/components/observes'

export const observe = {
  mounted: (el, binding) => {
    el.dataset.active = binding.value||"active";
    activeIntersectionObserver.observe(el);
  },
  unmounted(el) {
    activeIntersectionObserver.unobserve(el);
  }
}
