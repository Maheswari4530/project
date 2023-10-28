import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
`;
const Textarea = styled.textarea`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
`;
const Select = styled.select`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
`;

const ResponsiveStyles = styled.div`
  @media (max-width: 600px) {
    ${FormContainer} {
      width: 90%;
      padding: 30px 40px 40px 35px;
    }
  }
`;

function Registration() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    gender: "",
    mobileNumber: "",
    email: "",
    category: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/Registration',formData)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
    
    console.log(formData);
    alert("successfull Submitted");
    setFormData({
      studentName: "",
      parentName: "",
      gender: "",
      mobileNumber: "",
      email: "",
      category: "",
      address: ""
    });

  };

  return (
    
    <FormContainer>
      
      <h2>Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Student Name:</Label>
          <Input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Parent Name:</Label>
          <Input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Gender:</Label>
          <Select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </div>
        <div>
          <Label>Mobile Number:</Label>
          <Input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Category (Standard):</Label>
          <Input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Address:</Label>
          <Textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <SubmitButton type="submit">Register</SubmitButton>
        </div>
      </Form>
      <ResponsiveStyles />
    </FormContainer>
  );
}

export default Registration;
