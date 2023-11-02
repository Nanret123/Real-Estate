import React from 'react';
import { useForm } from "@mantine/form";
import { Button, Group, Select, TextInput } from "@mantine/core";
import { validateString } from "../../utils/common.jsx";
import useCountries from "../../hooks/useCountries.jsx";


const AddLocation = ({propertyDetail, setPropertyDetail, nextStep}) => {
  const { getAll} = useCountries();

  const form = useForm({
   initialValues: {
   	country: propertyDetail?.country,
   	city: propertyDetail?.city,
   	address: propertyDetail?.address
   },
   validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
   }
  });

  const { country, city, address } = form.values;

  const handleSubmit = () => {
    const { hasErrors} = form.validate();
    if(!hasErrors){
    	setPropertyDetail((prev) => ({...prev, city, address, country}));
    	nextStep();
    }
  };

	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			handleSubmit();
		}}>
			<div>
				<Select w={"100%"} withAsterisk label="Country" clearable searchable data={getAll()}
					{...form.getInputProps("country", {type: "input"})}
				 />
				
				<TextInput w={"100%"} withAsterisk label="City" {...form.getInputProps("city", {type: "input"})} />
				<TextInput w={"100%"} withAsterisk label="Address" {...form.getInputProps("address", {type: "input"})} />
				
			</div>
			<Group position="center" mt={"xl"}>
				<Button type="submit">Next Step</Button>
			</Group>
		</form>
	)
}

export default AddLocation