# OpenFaaS Functions

[![OpenFaaS](https://img.shields.io/badge/openfaas-cloud-blue.svg)](https://www.openfaas.com)

Some of the ready to use samples of OpenFaaS Functions. Feel free to give it a try at [OpenFaaS Community Dashboard](https://system.o6s.io/dashboard/tarunmangukiya)

### 1. Image Resizer
- **Language:** Node.js
- **OpenFaaS Features:** `node8-express` template
- **Parameters:**  
`url`: Public url of image  
`width`: Number  
`height`: Number  
`download`: Download image rather than showing in browser  
`fit`: Image Fill type in given width & height ([View available types](http://sharp.dimens.io/en/stable/api-resize/))
- **Give it a try:**  
[Resize image to dimension 200x200](https://tarunmangukiya.o6s.io/image-resize?height=200&width=200&name=Silver%20Iphone%20Beside%20Book%20Under%20Cup%20Beside%20Silver%20Macbook&url=https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg)  
[Resize and download image](https://tarunmangukiya.o6s.io/image-resize?download=1&height=200&width=200&name=Silver%20Iphone%20Beside%20Book%20Under%20Cup%20Beside%20Silver%20Macbook&url=https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg)
