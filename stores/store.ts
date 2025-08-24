export const useStore = defineStore('store', {
  state: () => ({ 
    images: []
  }),
  getters: {
    getImageById: (state) => (id) => {
      return state.images.find(img => img.id === id)
    }
  },
  actions: {
    async fetchImages() {
      const data = await import('../data.json')
      this.images = data.default
    }
  },
})