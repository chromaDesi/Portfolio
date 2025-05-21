import "./NotFound.css"

const NotFound = () => {
    return <div className="w-screen h-screen overflow-hidden">
            <iframe 
            src='https://my.spline.design/photorealearth-vSbGN9iuJ3LmJPVnYkdEfbA6/' 
            frameborder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full"
            allowFullScreen>
            </iframe>

            {/* Overlay Box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white px-8 py-6 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold mb-2">Error 404</h1>
            <p className="text-lg">Page Not Found - VP</p>
            </div>
        </div>
            
        
        };


export default NotFound;