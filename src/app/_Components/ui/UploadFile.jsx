import { useState } from "react";
function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can perform file upload logic here, such as using FormData to upload the file to a server
      console.log("Uploading file:", selectedFile.name);
    }
  };
  return (
    <form className="max-w-lg mx-auto flex items-center">
     
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
        onChange={handleFileChange}
      />
     
    </form>
  );
}

export default UploadFile;
