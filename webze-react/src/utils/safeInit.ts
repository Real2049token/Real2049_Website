// Utility functions to safely initialize external libraries
export const safeInitAOS = () => {
  if (typeof window !== 'undefined' && window.AOS) {
    try {
      window.AOS.init({
        duration: 600,
        easing: 'ease-out',
        once: true,
        mirror: false,
        offset: 50,
        delay: 0,
        disable: false
      });
    } catch (error) {
      console.warn('AOS initialization failed:', error);
    }
  }
};

export const safeInitWOW = () => {
  if (typeof window !== 'undefined' && window.WOW) {
    try {
      new window.WOW().init();
    } catch (error) {
      console.warn('WOW initialization failed:', error);
    }
  }
};

export const safeInitSwiper = (element: HTMLElement, config: any) => {
  if (typeof window !== 'undefined' && window.Swiper && element) {
    try {
      return new window.Swiper(element, config);
    } catch (error) {
      console.warn('Swiper initialization failed:', error);
      return null;
    }
  }
  return null;
};

export const safeJQuery = (callback: (jquery: any) => void) => {
  if (typeof window !== 'undefined' && window.$) {
    try {
      callback(window.$);
    } catch (error) {
      console.warn('jQuery operation failed:', error);
    }
  }
};
