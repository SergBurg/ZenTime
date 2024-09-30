import React, {useState, useEffect} from 'react';
const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        if (file && file.type.startsWith('image/')) { // Check if the file is an image
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result); // Set the image preview
                document.documentElement.style.setProperty('--image', `url(${reader.result})`); 
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        } else {
            alert('Please select an image file.'); // Error handling
        }
      
    };
   
        

    return (
        <div className="background" >    
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange} 
            />
            {selectedImage && (
                <div>
                    <h3>Image Preview:</h3>
                    <img
                        src={selectedImage}
                        alt="Preview"
                        style={{ width: '200px', height: 'auto' }} // Adjust size as needed
                    />
                </div>
            )}
        </div>
    );
    
};



export default ImageUpload;