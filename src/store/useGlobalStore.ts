import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useGlobalStore = defineStore('useGlobalStore', () => {
    const state = reactive({
        count: 0,
    })

    return { state }
})
