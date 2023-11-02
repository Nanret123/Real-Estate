import React, { useEffect, useState, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button, Group } from "@mantine/core";

const ImageUpload = ({
  propertyDetail,
  setPropertyDetail,
  nextStep,
  prevStep,
}) => {
  const [imageUrl, setImageUrl] = useState(propertyDetail.image);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const handleNext = () => {
    setPropertyDetail((prev) => ({ ...prev, image: imageUrl }));
    nextStep();
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dbvv8bryb",
        uploadPreset: "bcuffepy",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setImageUrl(result.info.secure_url);
        }
      }
    );
  }, []);

  return (
    <div>
      {!imageUrl ? (
        <div onClick={() => widgetRef.current?.open()}>
          <AiOutlineCloudUpload size={50} color="grey" />
          <span>Upload Image</span>
        </div>
      ) : (
        <div onClick={() => widgetRef.current?.open()}>
          <img src={imageUrl} alt="" />
        </div>
      )}
      <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!imageUrl}>
          Next
        </Button>
      </Group>
    </div>
  );
};

export default ImageUpload;
