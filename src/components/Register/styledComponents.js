import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  flex-direction: row;
  width: 100vw;
`

export const RegisterContainer = styled.div`
  display: flex;
  margin-left: 50px;
  height: 100%;
  background-color: #ffffff;
  background-size: cover;
  width: 100%;
  align-items: center;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
`

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-left: 0px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;
`
export const Input = styled.input`
  height: 40px;
  background-color: #ffffff;
  outline: none;
  border-width: 1px;
  border-radius: 5px;
  font-family: 'Roboto';
  border-style: solid;
  border-color: #cbd5e1;
  color: #334155;
  cursor: pointer;
  width: 50%;
  padding-left: 15px;
`

export const Select = styled.select`
  height: 40px;
  background-color: #ffffff;
  outline: none;
  border-width: 1px;
  border-radius: 5px;
  font-family: 'Roboto';
  border-style: solid;
  border-color: #cbcbcb;
  color: #334155;
  cursor: pointer;
  font-weight: bold;
  width: 50%;
  padding-left: 15px;
`
export const Option = styled.option`
  font-family: 'Roboto';
  color: #323f4b;
  font-weight: bold;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Heading = styled.h1`
  font-weight: bold;
  color: #334155;
  font-family: 'Roboto';
  font-size: 50px;
  margin-bottom: 10px;
  padding-bottom: 0px;
  padding-top: 30px;
`
export const RegisterNowButton = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 8px;
  border: 0px;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #2563eb;
  margin-top: 20px;
`
