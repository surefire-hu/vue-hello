
  const { createApp } = Vue

  createApp({
        data() {
            return{
            message: 'Hello World!',
            imageSrc: 'https://images.unsplash.com/photo-1703248187251-c897f32fe4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFuZGElMjBiZWFyfGVufDB8MXwwfHx8Mg%3D%3D'
        }
    }
  }).mount('#app')

  