import React, { useState } from 'react';
import { Container, Modal, Stepper } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import AddLocation from "../AddLocation/AddLocation.jsx";
import ImageUpload from "../ImageUpload/ImageUpload.jsx";
import BasicDetails from "../BasicDetails/BasicDetails.jsx";
import Facilities from "../Facilities/Facilities.jsx";

const AddPropertyModal = ({opened, setOpened}) => {
	const [active, setActive] = useState(0);
	const { user } = useAuth0();

   const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: null,
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    userEmail: user?.email,
  });


  const nextStep = () => {
   setActive((current) => (current < 4 ? current + 1 : current))
  };
  
   const prevStep = () => {
   setActive((current) => (current > 0 ? current - 1 : current))
  };
  
	return (
		<Modal 
    opened={opened} 
    onClose={() => setOpened(false)} 
    closeOnClickOutside 
    size={"90rem"} >
			<Container h={"40rem"} w={"100%"}>
				<Stepper 
        active={active} 
        onStepClick={setActive}
        breakpoint="sm"
        allowNextStepSelect={false}>
        <Stepper.Step label="Location" description="Address">
          <AddLocation 
          nextStep={nextStep} 
          propertyDetails={propertyDetails} 
          setPropertyDetails={setPropertyDetails} />
        </Stepper.Step>
        <Stepper.Step label="Images" description="Upload">
          <ImageUpload 
          propertyDetails={propertyDetails} 
          setPropertyDetails={setPropertyDetails} 
          nextStep={nextStep} 
          prevStep={prevStep} />
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          <BasicDetails 
          propertyDetails={propertyDetails} 
          setPropertyDetails={setPropertyDetails} 
          nextStep={nextStep} 
          prevStep={prevStep} />
        </Stepper.Step>
        <Stepper.Step>
          <Facilities 
          prevStep={prevStep} 
          propertyDetails={propertyDetails} 
          setPropertyDetails={setPropertyDetails} 
          setOpened={setOpened} 
          setActive={setActive} />
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to go to previous step
        </Stepper.Completed>
      </Stepper>
			</Container>
		</Modal>
	)
}

export default AddPropertyModal