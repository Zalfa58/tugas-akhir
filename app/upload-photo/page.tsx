"use client";
import { useState } from "react";
import { PaddingContainer } from "@/components/common";
import Image from "next/image";
import { app } from "@/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const storage = getStorage(app);
const db = getFirestore(app);

export default function UploadPhoto() {
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("general");
  const [toast, setToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let user: any;
  if (typeof window !== "undefined") user = localStorage.getItem("user");

  const userData = user ? JSON.parse(user) : null;

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    setIsLoading(true);
    if (!previewImage || !title) return;

    // Convert base64 data URL to Uint8Array
    const base64String = previewImage.split(",")[1]; // Remove data URL scheme
    const byteCharacters = atob(base64String);
    const byteArray = new Uint8Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteArray[i] = byteCharacters.charCodeAt(i);
    }
    const fileBlob = new Blob([byteArray]);

    // Upload image to Firebase Storage
    const storageRef = ref(storage, `images/${Date.now()}`);
    await uploadBytes(storageRef, fileBlob);

    // Get download URL of uploaded image
    const imageUrl = await getDownloadURL(storageRef);

    // Add title and image URL to Firestore
    try {
      await addDoc(collection(db, "images"), {
        title,
        photoUser: userData.photoURL,
        user: userData.displayName,
        category,
        imageUrl,
      });
      // Clear input fields
      setPreviewImage(null);
      setToast(true);
      setTimeout(() => {
        setToast(false);
        router.push(`/?category=${category}`);
      }, 2000);
      setTitle("");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <PaddingContainer>
      <div className="w-full mt-[80px] relative">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Title of your photo
          </label>

          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Input your title here"
            required
          />
        </div>

        <div className="w-full mx-auto mb-[25px]">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Choose your photo category
          </label>

          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all" selected>
              All
            </option>
            <option value="random">Random</option>
            <option value="onepiece">One Piece</option>
            <option value="naruto">Naruto</option>
            <option value="animal">Animal</option>
            <option value="art">Art</option>
          </select>
        </div>

        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {previewImage ? (
              <Image
                src={previewImage}
                alt="Preview"
                width={1000}
                height={800}
                className="w-auto h-auto mb-4 max-h-40"
              />
            ) : (
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
            )}
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <button
          type="button"
          onClick={handleUpload}
          className={`text-white w-full  ${
            isLoading
              ? "bg-[#bbb] cursor-not-allowed"
              : "bg-[#329bd0] hover:bg-[#327ed0]"
          } mt-[20px] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2`}
          disabled={isLoading ? true : false}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>

        <div
          className={`max-w-xs absolute top-[-60px] right-0 bg-white border border-gray-200 rounded-xl shadow-lg ${
            toast ? "opacity-100 translate-x-0" : "opacity-0 translate-y-40"
          } transition-opacity`}
          role="alert"
        >
          <div className="flex p-4">
            <div className="flex-shrink-0">
              <svg
                className="flex-shrink-0 size-4 text-teal-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-gray-700 dark:text-neutral-400">
                Photo successfully uploaded!
              </p>
            </div>
          </div>
        </div>
      </div>
    </PaddingContainer>
  );
}
