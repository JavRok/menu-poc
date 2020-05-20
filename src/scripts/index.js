import '../styles/index.scss';

if (window.cloudinary) {
    const myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'javrok',
            uploadPreset: 'jbkelbcg',
            folder: 'menu-poc'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result);
            }
        }
    );

    document.getElementById("upload_widget").addEventListener("click", function(){
        myWidget.open();
    }, false);
}




